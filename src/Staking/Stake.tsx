import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Image,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";

import { ethers } from "ethers";
import { useState, useEffect } from "react";

import creds from "../abi/creds";
import moment from "moment";
import Wallet from "./Wallet";
import Web3Modal from "web3modal";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnectProvider from "@walletconnect/web3-provider";

import { LinkIcon } from "@chakra-ui/icons";
import { brandingColors, brandingFonts } from "../config/brandingColors";

import AxleDialog from "./dialog/AxleDialog";
import TransactionSuccessDialog from "./dialog/TransactionSuccessDialog";

import Logo from "../assets/logo.png";

import "../components/navbar/Navbar.css";

const TOKEN_CONTRACT_ADDRESS = creds.AXLE_CONTRACT;
const axleTokenABI = creds.tokenAbi;
const axleStakingABI = creds.stakingAbi;
const AXLE_STAKING = creds.AXLE_STAKING;

declare global {
  interface Window {
    ethereum: any;
  }
}

interface Transactions {
  amount: number;
  lockedUntil: number;
  percent: number;
  stakingOver: boolean;
  time: number;
}

const chainIds = [
  {
    chainId: 1,
    network: "Ethereum Mainnet",
  },
  {
    chainId: 56,
    network: "Binance Smart Chain Mainnet",
  },
  {
    chainId: 137,
    network: "Polygon Mainnet",
  },
  {
    chainId: 42161,
    network: "Arbitrum One",
  },
  {
    chainId: 43114,
    network: "Avalanche C-Chain",
  },
  {
    chainId: 97,
    network: "Binance Smart Chain Testnet",
  },
  {
    chainId: 4,
    network: "Rinkeby",
  },
  {
    chainId: 5,
    network: "Goerli",
  },
];

const web3Modal = new Web3Modal({
  network: "mainnet",
  theme: "dark",
  cacheProvider: false,
  disableInjectedProvider: false,
  providerOptions: {
    binancechainwallet: {
      package: true,
    },
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: process.env.INFURA_ID, // required
        rpc: {
          56: "https://bsc-dataseed1.binance.org",
        },
        chainId: 56,
      },
    },
    coinbasewallet: {
      package: CoinbaseWalletSDK, // Required
      options: {
        appName: "COINBASE", // Required
        infuraId: process.env.INFURA_ID, // Required
        rpc: {
          56: "https://bsc-dataseed1.binance.org",
        },
        chainId: 56,
      },
    },
  },
});

const stakeRewards = [
  {
    days: 30,
    roi: 60,
  },
  {
    days: 90,
    roi: 80,
  },
  {
    days: 180,
    roi: 100,
  },
];

const headingFont = "Russo One";
const subFont = "Inter";

const Stake = () => {
  const [hash, setHash] = useState<string>("");
  const [success, setSuccess] = useState(false);
  const [lockIn, setLockIn] = useState(0);
  const [balance, setBalance] = useState(0);
  const [pool, setPool] = useState("323,123,103");
  const [axleBalance, setAxleBalance] = useState<any>("0");
  const [openWallet, setOpenWallet] = useState(false);
  const [togglePage, setTogglePage] = useState(false);
  // const [unstake, setUnstake] = useState(false);
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  const [address, setAddress] = useState<string>("");
  const [onChain, setOnChain] = useState("");

  const [axle, setAxle] = useState<any>(100000);
  const [tokenContract, setTokenContract] = useState<any>();
  const [stakingContract, setStakingContract] = useState<any>();
  const [totalStaked, setTotalStaked] = useState(0);

  const onAxleChange = (e: any) => {
    const axle = Number(e.target.value);
    console.log(e.target.value);
    setAxle(axle);
  };

  const setNetworkName = (chainId: number) => {
    for (let i = 0; i < chainIds.length; i++) {
      if (chainIds[i].chainId === chainId) {
        setOnChain(chainIds[i].network);
      }
    }
  };

  const switchNetwork = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: ethers.utils.hexlify(creds.chain.chainId) }],
      });
    } catch (err: any) {
      // This error code indicates that the chain has not been added to MetaMask
      if (err.code === 4902) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainName: "Smart Chain",
              chainId: 56,
              nativeCurrency: {
                name: "Smart Chain",
                decimals: 18,
                symbol: "BNB",
              },
              rpcUrls: ["https://bsc-dataseed.binance.org/"],
            },
          ],
        });
      }
    }
  };

  const preClaim = async (txn: number) => {
    try {
      const hash = await stakingContract.preClaim(txn);
      console.log(hash);
      return toast({
        title: "Success",
        description: `Axle preclaimed`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.log(error);
      return toast({
        title: "Oops!",
        description: `Something went wrong`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const approveStake = async () => {
    try {
      const hash = await tokenContract.approve(
        "0xD996A74A3376D75812f07781EF22666323288B86",
        axle * e9
      );
      console.log(hash);
      setSuccess(true);
      setHash(hash.hash);
      return toast({
        title: "Success",
        description: `${axle} AXLE approved for staking`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      console.log(error);
      return toast({
        title: "Oops!",
        description: `Something went wrong`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const stake = async () => {
    try {
      console.log(axle);
      if (axle <= 100000) {
        return toast({
          title: "Warning!",
          description: `Min Stake is 100K AXLE`,
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }

      if (axle >= 20000000) {
        return toast({
          title: "Warning!",
          description: `Max Stake is 20M AXLE`,
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
      console.log(stakeRewards[lockIn].days);
      const day = 60 * 60 * 24 * stakeRewards[lockIn].days;
      console.log(day);
      const hash = await stakingContract.stake(day, axle * 10 ** 9);
      setSuccess(true);
      setHash(hash.hash);
      setAxle(axle);
    } catch (error) {
      console.log(error);
      return toast({
        title: "Oops!",
        description: `Something went wrong, try again`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const connectWeb3Wallet = async () => {
    try {
      const e9 = 10 ** 9;
      const web3Provider = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(web3Provider);
      console.log(provider);
      console.log(creds);
      const web3Accounts = await provider.listAccounts();
      const network = await provider.getNetwork();
      console.log(network);
      console.log(creds);
      console.log(network.chainId !== creds.chain.chainId);
      if (network.chainId !== creds.chain.chainId) switchNetwork();
      let bnbBal: any = await provider.getBalance(web3Accounts[0]);
      bnbBal = Number(ethers.utils.formatEther(bnbBal));
      const signer = provider.getSigner();
      const token = new ethers.Contract(
        TOKEN_CONTRACT_ADDRESS,
        axleTokenABI,
        signer
      );
      const stake = new ethers.Contract(AXLE_STAKING, axleStakingABI, signer);
      console.log(token);
      console.log(web3Accounts[0]);
      let bal = await token.balanceOf(web3Accounts[0]);
      console.log(bal);
      bal = ethers.utils.formatEther(bal);
      const totalStakeAmout: any = ethers.utils.formatEther(
        await stake.totalstakedamount()
      );
      setAddress(web3Accounts[0]);
      setNetworkName(network.chainId);
      setTokenContract(token);
      setStakingContract(stake);
      setAxleBalance(bal * e9);
      setPool((totalStakeAmout * e9).toString());
      setBalance(bnbBal);
      localStorage.setItem("isWalletConnected", "true");
      const t = await stake.stakingTx(web3Accounts[0]);
      const totalTxns: any = ethers.utils.formatEther(t.txNo);
      const txns = [];
      let tStaked: any = 0;
      for (let i = 1; i <= totalTxns * 10 ** 18; i++) {
        const txn = await stake.userTransactions(web3Accounts[0], i);
        let amount = ethers.utils.formatEther(txn.amount);
        let percent = ethers.utils.formatEther(txn.percent);
        let stakingOver = txn.stakingOver;
        if (!stakingOver) tStaked += Number(amount) * 10 ** 9;
        let time = ethers.utils.formatEther(txn.time);
        let lockedUntil = ethers.utils.formatEther(txn.lockedUntil);
        let resp = {
          amount,
          percent,
          stakingOver,
          time,
          lockedUntil,
        };
        txns.push(resp);
      }
      setTotalStaked(tStaked);
      setTransactions(txns);
    } catch (error) {
      console.log(error);
    }
  };

  const disconnectWeb3Modal = async (loaded: boolean = false) => {
    web3Modal.clearCachedProvider();
    if (!loaded) window.location.reload();
  };

  useEffect(() => {
    console.log(onChain);
    disconnectWeb3Modal(true);
    if (window.ethereum !== null && address !== "") {
      window.ethereum.on("accountsChanged", function (accounts: string) {
        connectWeb3Wallet();
      });
      window.ethereum.on("networkChanged", function (chainId: number) {
        if (chainId !== 56) {
          setTimeout(() => {
            switchNetwork();
            connectWeb3Wallet();
          }, 5000);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUntilIn = (date: any) => {
    const time = new Date(new Date(date * 10 ** 18 * 1000)).toDateString();
    return time;
  };

  const stakedAt = (date: any, apy: number) => {
    apy *= 10 ** 18;
    apy /= 100;
    date *= 10 ** 18 * 1000;
    const time = 1000 * 60 * 60 * 24;
    const lockedUntil = new Date(new Date(date));
    let days = 30;
    if (apy === 17) days = 90;
    if (apy === 20) days = 180;
    if (apy === 25) days = 360;
    days *= time;
    return new Date(new Date(lockedUntil).getTime() - days).toDateString();
  };

  const noOfDays = (date: any, apy: number) => {
    apy *= 10 ** 18;
    apy /= 100;
    apy = Number(apy.toFixed(0));
    const time = 1000 * 60 * 60 * 24;
    const lockedUntil = new Date(new Date(date * 10 ** 18 * 1000));
    let days = 30;
    if (apy === 17) days = 90;
    if (apy === 20) days = 180;
    if (apy === 25) days = 360;
    const interval = days * time;
    let start = moment(new Date(new Date(lockedUntil).getTime() - interval));
    let end = moment(lockedUntil);
    return Math.abs(start.diff(end, "days"));
  };
  const toast = useToast();

  return (
    <Box
      bg={brandingColors.bgColor}
      backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/how-works-bg.png`}
      backgroundSize="contain"
      py={6}
      minH="100vh"
    >
      <AxleDialog
        close={() => setSuccess(false)}
        children={
          <TransactionSuccessDialog
            hash={hash}
            close={async () => {
              setSuccess(false);
            }}
            fee={axle}
          />
        }
        isOpen={success}
        key={2}
        size={"lg"}
      />

      <Box
        alignItems={"center"}
        mx={24}
        display={"flex"}
        justifyContent={{ base: "center", md: "space-between" }}
        my={{ base: 8, md: 4 }}
      >
        <Image maxH={"8vh"} src={Logo}></Image>
        <Wallet
          address={address}
          disconnect={disconnectWeb3Modal}
          balance={balance}
          connectWallet={connectWeb3Wallet}
          isLoading={false}
          openWallet={openWallet}
          setOpenWallet={setOpenWallet}
        />
      </Box>

      <Box
        justifyContent={"center"}
        alignItems="center"
        flexDirection={{ base: "column" }}
        display={"flex"}
      >
        <Box
          display={"flex"}
          justifyContent="center"
          flexDirection={"column"}
          alignItems="center"
          width={{ base: "100%", md: "90%", lg: "80%", xl: "75%" }}
          mx="auto"
        >
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            flexDirection={"column"}
            mb={4}
          >
            {address !== "" ? (
              <Box>
                <Box
                  boxShadow={`0px 0px 120px -30px ${brandingColors.secondaryTwoTextColor}`}
                  border={`3px solid ${brandingColors.newHighlightColor}`}
                  p={6}
                  borderRadius="xl"
                  bg={brandingColors.bgColor}
                  backgroundImage={`radial-gradient(circle, #4609c3, #330fa0, #220f7e, #160d5d, #0e063d);`}
                  color={brandingColors.secondaryTextColor}
                  fontWeight="bold"
                  justifyContent={"center"}
                  display="flex"
                  flexDirection={"column"}
                  alignItems="center"
                  rowGap={"1rem"}
                  minW={"18vw"}
                  minH={"14vh"}
                  my={6}
                >
                  <Text
                    fontFamily={headingFont}
                    lineHeight={"0.8"}
                    fontSize={{ base: "md", md: "xl" }}
                  >
                    TOTAL LOCKED
                  </Text>
                  <Text
                    fontFamily={headingFont}
                    lineHeight={"0.8"}
                    color={brandingColors.primaryTextColor}
                    fontSize={{ base: "xl", md: "2xl" }}
                  >
                    {pool} AXLE
                  </Text>
                  <Text
                    fontWeight={"bold"}
                    lineHeight="1.2"
                    fontFamily={brandingFonts.subFont}
                    fontSize={"xs"}
                  >
                    {creds.AXLE_STAKING.substring(0, 8)}....
                    {creds.AXLE_STAKING.substring(
                      creds.AXLE_STAKING.length - 8,
                      creds.AXLE_STAKING.length
                    )}
                  </Text>
                  <Divider />
                  <Flex
                    columnGap={"1rem"}
                    justifyContent={"space-between"}
                    alignItems="center"
                  >
                    <Text
                      fontFamily={brandingFonts.subFont}
                      lineHeight={"0.8"}
                      color={brandingColors.secondaryTextColor}
                      fontSize={{ base: "xs" }}
                    >
                      Your contributions
                    </Text>
                    <Text
                      fontFamily={brandingFonts.subFont}
                      fontWeight={"bold"}
                    >
                      |
                    </Text>
                    <Text
                      fontFamily={brandingFonts.subFont}
                      lineHeight={"0.8"}
                      color={brandingColors.primaryTextColor}
                      fontSize={{ base: "md" }}
                    >
                      {totalStaked} AXLE
                    </Text>
                  </Flex>
                </Box>
                <Box
                  my={6}
                  minW={"14vw"}
                  display={"flex"}
                  justifyContent="space-between"
                  fontSize={{ base: "sm", md: "xl" }}
                  columnGap=".5rem"
                  border={`3px solid ${brandingColors.newHighlightColor}`}
                  p={1}
                  borderRadius={"8vw"}
                >
                  <Box
                    px={4}
                    py={2}
                    width={"100%"}
                    color={brandingColors.secondaryTextColor}
                    boxShadow={
                      togglePage
                        ? `0px 0px 8px -2px ${brandingColors.secondaryTwoTextColor}`
                        : "none"
                    }
                    bg={
                      togglePage
                        ? brandingColors.primaryButtonColor
                        : brandingColors.bgColor
                    }
                    backgroundImage={
                      togglePage
                        ? `linear-gradient(to left, #ad78f7, #8e6ae7, #6e5cd6, #4a4fc6, #1442b5)`
                        : "none"
                    }
                    borderRadius={"8vw"}
                    textAlign="center"
                    // onClick={() => setTogglePage(true)}
                    cursor="pointer"
                  >
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      flexDirection="column"
                    >
                      <Text fontFamily={headingFont} fontWeight="bold">
                        FLEXIBLE
                      </Text>
                      <Text
                        lineHeight="0.5"
                        color={brandingColors.primaryTextColor}
                        fontSize={{ base: "x-small" }}
                        fontWeight="bold"
                      >
                        (coming soon)
                      </Text>
                    </Box>
                  </Box>
                  <Box
                    cursor="pointer"
                    color={brandingColors.secondaryTextColor}
                    boxShadow={
                      !togglePage
                        ? `0px 0px 8px -2px ${brandingColors.secondaryTwoTextColor}`
                        : "none"
                    }
                    bg={
                      !togglePage
                        ? brandingColors.primaryButtonColor
                        : brandingColors.bgColor
                    }
                    backgroundImage={
                      !togglePage
                        ? `linear-gradient(to right, #ad78f7, #8e6ae7, #6e5cd6, #4a4fc6, #1442b5)`
                        : "none"
                    }
                    borderRadius={"8vw"}
                    px={4}
                    py={2}
                    width={"100%"}
                    textAlign="center"
                    onClick={() => setTogglePage(false)}
                  >
                    <Text fontFamily={headingFont}>LOCKED</Text>
                  </Box>
                </Box>
              </Box>
            ) : null}
          </Box>

          {address === "" ? (
            <Box position={"fixed"} top="40%" bottom={"40%"} my={"auto"}>
              <Box
                border={`3px solid ${brandingColors.newHighlightColor}`}
                backgroundImage={`radial-gradient(circle, #4609c3, #330fa0, #220f7e, #160d5d, #0e063d);`}
                borderRadius="xl"
                p={12}
                display="flex"
                justifyContent={"center"}
                alignItems="center"
                flexDirection={"column"}
              >
                <Text
                  my={4}
                  fontSize={{ base: "sm", md: "xl" }}
                  textAlign="center"
                  color={brandingColors.primaryTextColor}
                  fontFamily={headingFont}
                >
                  Connect your wallet to stake $AXLE tokens!
                </Text>
                <Box
                  onClick={connectWeb3Wallet}
                  style={{ textAlign: "center" }}
                  className="btnc"
                  fontFamily={headingFont}
                >
                  Connect Wallet
                </Box>
              </Box>
            </Box>
          ) : (
            <Box>
              <Box
                color={brandingColors.primaryTextColor}
                boxShadow={`0px 0px 120px -70px ${brandingColors.newHighlightColor}`}
                border={`3px solid ${brandingColors.newHighlightColor}`}
                borderRadius="3xl"
              >
                <Box textAlign={"center"}>
                  <Text
                    color={brandingColors.secondaryTextColor}
                    fontSize={{ base: "xl", md: "2xl" }}
                    p={2}
                    my={2}
                    fontFamily={headingFont}
                  >
                    STAKE AXLE
                  </Text>
                </Box>
                <Divider bg={brandingColors.primaryButtonColor} my={2} />
                <Box
                  color={brandingColors.secondaryTextColor}
                  display={"flex"}
                  px={8}
                  py={2}
                  justifyContent="space-between"
                  fontSize={{ base: "xx-small", md: "md" }}
                  fontFamily={subFont}
                >
                  <Text fontSize={"sm"} fontFamily={headingFont}>
                    Amount{" "}
                  </Text>
                  <Text fontSize={"sm"} fontFamily={headingFont}>
                    ~My Balance {Number(axleBalance).toFixed(0)} AXLE
                  </Text>
                </Box>
                <Box px={8}>
                  <Box
                    height={"100%"}
                    width="100%"
                    px={4}
                    alignItems={"center"}
                    display={"flex"}
                    border={`3px solid ${brandingColors.fgColor}`}
                    borderRadius="xl"
                    fontSize={{ base: "xs", md: "md" }}
                  >
                    <Box fontFamily={headingFont}>$AXLE</Box>
                    <Input
                      mx={4}
                      fontWeight={"bold"}
                      placeholder="value (AXLE)"
                      onChange={onAxleChange}
                      color={brandingColors.highLightColor}
                      fontSize="xl"
                      type={"text"}
                      inputMode="decimal"
                      borderRadius={"none"}
                      textAlign="right"
                      value={axle}
                      borderLeft={`2px solid ${brandingColors.fgColor}`}
                      borderRight={`2px solid ${brandingColors.fgColor}`}
                      fontFamily={headingFont}
                      _active={{
                        outline: "none",
                        shadow: "none",
                      }}
                      _hover={{
                        outline: "none",
                        shadow: "none",
                      }}
                      _focus={{
                        outline: "none",
                        shadow: "none",
                      }}
                    ></Input>
                    <Box
                      fontFamily={headingFont}
                      fontWeight="bold"
                      cursor={"pointer"}
                      onClick={() => setAxle(Number(axleBalance).toFixed(0))}
                    >
                      MAX
                    </Box>
                  </Box>
                </Box>
                <Box mx={8} my={4}>
                  <Box
                    fontSize={{ base: "xx-small", md: "sm" }}
                    my={2}
                    color={brandingColors.secondaryTextColor}
                    fontFamily={headingFont}
                  >
                    Locking
                  </Box>
                  <Grid
                    display={"grid"}
                    gridTemplateColumns={{
                      base: "1fr 1fr",
                      md: "1fr 1fr 1fr",
                    }}
                    rowGap={"1rem"}
                    justifyContent="center"
                    columnGap={"1rem"}
                    alignItems={"center"}
                  >
                    {stakeRewards.map((s, i) => (
                      <Box
                        borderRadius={"xl"}
                        bg={
                          i === lockIn
                            ? brandingColors.newHighlightColor
                            : brandingColors.bgColor
                        }
                        boxShadow={`0px 0px 3px ${brandingColors.newHighlightColor}`}
                        textAlign={"center"}
                        onClick={() => {
                          setLockIn(i);
                        }}
                        key={i}
                        minW={"32"}
                        cursor="pointer"
                      >
                        <Text
                          color={brandingColors.secondaryTextColor}
                          px={3}
                          py={2}
                          fontSize={{ base: "sm", md: "md" }}
                          fontFamily={headingFont}
                        >
                          {" "}
                          {s.days} Days{" "}
                        </Text>
                        <Divider
                          bg={brandingColors.newHighlightColor}
                          color={brandingColors.newHighlightColor}
                        />
                        <Text
                          color={brandingColors.primaryTextColor}
                          px={3}
                          py={2}
                          fontSize={{ base: "xs", md: "sm" }}
                          fontFamily={headingFont}
                        >
                          {" "}
                          {s.roi}% APY
                        </Text>
                      </Box>
                    ))}
                  </Grid>
                </Box>
                <Box
                  // onClick={buy}
                  mx={8}
                  my={4}
                  textAlign="center"
                  className="btnc"
                  fontFamily={headingFont}
                  onClick={async () => await approveStake()}
                >
                  Enable Staking
                </Box>
                <Box
                  onClick={() => stake()}
                  mx={8}
                  my={4}
                  textAlign="center"
                  className="btnc"
                  fontFamily={headingFont}
                >
                  Stake
                </Box>
                <Box
                  mt={4}
                  borderTop={`2px solid ${brandingColors.newHighlightColor}`}
                  textAlign={"center"}
                  p={4}
                >
                  <Text
                    fontSize={{ base: "xs", md: "sm" }}
                    color={brandingColors.primaryTextColor}
                    fontFamily={headingFont}
                    fontWeight="bold"
                  >
                    Locking {Number(axle).toFixed(0)} AXLE for{" "}
                    {stakeRewards[lockIn].days} Days
                  </Text>
                </Box>
              </Box>
            </Box>
          )}
        </Box>
        {address !== "" ? (
          <Box
            my={8}
            borderRadius="3xl"
            borderLeft={`2px solid ${brandingColors.newHighlightColor}`}
            borderRight={`2px solid ${brandingColors.newHighlightColor}`}
            borderBottom={`2px solid ${brandingColors.newHighlightColor}`}
            color={brandingColors.primaryTextColor}
            boxShadow={`0px 0px 120px -70px ${brandingColors.newHighlightColor}`}
            height="100%"
            border={`3px solid ${brandingColors.newHighlightColor}`}
            py={2}
          >
            <Text
              textAlign={"center"}
              fontFamily={headingFont}
              my={2}
              color={brandingColors.secondaryTextColor}
              cursor="pointer"
              pb={4}
              fontSize={{ base: "xl", md: "2xl" }}
              borderBottom={`3px solid ${brandingColors.newHighlightColor}`}
            >
              TRANSACTIONS
            </Text>
            <TableContainer>
              <Table minW={`42vw`} variant={"unstyled"}>
                <Thead>
                  <Tr
                    borderBottom={`3px solid ${brandingColors.newHighlightColor}`}
                  >
                    {heading.map((h, i) => (
                      <Th
                        fontFamily={headingFont}
                        color={brandingColors.primaryTextColor}
                        key={i}
                      >
                        {h}
                      </Th>
                    ))}
                  </Tr>
                </Thead>
                <Tbody border="none">
                  {transactions.map((t, i) => (
                    <Tr
                      borderBottom={
                        i === transactions.length - 1
                          ? "none"
                          : `3px solid ${brandingColors.newHighlightColor}`
                      }
                    >
                      <Td
                        fontFamily={brandingFonts.subFont}
                        color={brandingColors.highLightColor}
                        fontSize={"sm"}
                        fontWeight="600"
                      >
                        {i + 1}
                      </Td>
                      <Td
                        fontFamily={brandingFonts.subFont}
                        color={brandingColors.highLightColor}
                        fontSize={"sm"}
                        fontWeight="600"
                      >
                        {t.amount * e9}
                      </Td>
                      <Td
                        fontFamily={brandingFonts.subFont}
                        color={brandingColors.highLightColor}
                        fontSize={"sm"}
                        fontWeight="600"
                      >
                        {stakedAt(t.lockedUntil, t.percent)}
                      </Td>
                      <Td
                        fontFamily={brandingFonts.subFont}
                        color={brandingColors.highLightColor}
                        fontSize={"sm"}
                        fontWeight="600"
                      >
                        {getUntilIn(t.lockedUntil)}
                      </Td>
                      <Td
                        fontFamily={brandingFonts.subFont}
                        color={brandingColors.highLightColor}
                        fontSize={"sm"}
                        fontWeight="600"
                      >
                        {noOfDays(t.lockedUntil, t.percent)}
                      </Td>
                      <Td
                        fontFamily={brandingFonts.subFont}
                        color={brandingColors.highLightColor}
                        fontSize={"sm"}
                        fontWeight="600"
                      >
                        {t.percent * 10 ** 16}%
                      </Td>
                      <Td
                        fontFamily={brandingFonts.subFont}
                        color={brandingColors.highLightColor}
                        fontSize={"sm"}
                        fontWeight="600"
                      >
                        {t.stakingOver ? "over" : "in progress"}
                      </Td>
                      <Td
                        fontFamily={brandingFonts.subFont}
                        color={brandingColors.highLightColor}
                        fontSize={"sm"}
                        fontWeight="600"
                        display="flex"
                        justifyContent={"center"}
                        columnGap=".5rem"
                      >
                        <Button
                          isDisabled={true}
                          onClick={() => preClaim(i + 1)}
                          color={brandingColors.highLightColor}
                          fontSize={{ base: "xs" }}
                          size="sm"
                          bg={brandingColors.primaryButtonColor}
                          fontFamily={headingFont}
                          _hover={{
                            bg: brandingColors.highLightColor,
                            color: brandingColors.primaryTextColor,
                          }}
                        >
                          PRE-CLAIM
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
                {transactions.length <= 0 ? (
                  <TableCaption
                    color={brandingColors.primaryTextColor}
                    fontFamily={headingFont}
                  >
                    No Transcations Found
                  </TableCaption>
                ) : null}
              </Table>
            </TableContainer>
          </Box>
        ) : null}
      </Box>
      <Box
        position={"fixed"}
        bottom="4%"
        right={"4%"}
        display={{ base: "none", lg: "block" }}
      >
        <a
          target={"_blank"}
          rel="noopener noreferrer"
          href="https://medium.com/@axlegames/axle-staking-how-to-stake-8ec1a4146660"
        >
          <Box
            px={6}
            py={2}
            bg={brandingColors.newHighlightColor}
            fontFamily={`'Russo One', sans-serif`}
            color={brandingColors.primaryTwoTextColor}
            border={`2px groove ${brandingColors.primaryTwoTextColor}`}
            borderRadius="sm"
            cursor="pointer"
            display={"flex"}
            _hover={{
              textDecoration: "underline",
            }}
            alignItems={"center"}
            columnGap={".25rem"}
          >
            <LinkIcon />
            <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
              How To Stake?
            </Text>
          </Box>
        </a>
      </Box>
    </Box>
  );
};

export default Stake;

const e9 = 10 ** 9;
const heading = [
  "sno",
  "amount",
  "staked at",
  "locked until",
  "days",
  "apy",
  "status",
  "options",
];

//  {togglePage ? (
//                 <Box
//                   minW={{ base: "80vw", md: "42vw" }}
//                   mx="auto"
//                   width={"80%"}
//                   borderRadius="3xl"
//                   borderLeft={`2px solid ${brandingColors.newHighlightColor}`}
//                   borderRight={`2px solid ${brandingColors.newHighlightColor}`}
//                   borderBottom={`2px solid ${brandingColors.newHighlightColor}`}
//                   color={brandingColors.primaryTextColor}
//                   boxShadow={`0px 0px 120px -70px ${brandingColors.newHighlightColor}`}
//                 >
//                   <Box
//                     textAlign={"center"}
//                     display="flex"
//                     justifyContent={"space-between"}
//                     border={`2px solid ${brandingColors.newHighlightColor}`}
//                     borderTopRadius="3xl"
//                   >
//                     <Text
//                       borderTopLeftRadius={"3xl"}
//                       boxShadow="xl"
//                       width={"100%"}
//                       fontSize={{ base: "md", md: "2xl" }}
//                       backgroundImage={
//                         !unstake
//                           ? `linear-gradient(to right, #061e37, #002956, #003376, #003b96, #1442b5)`
//                           : "none"
//                       }
//                       color={brandingColors.secondaryTextColor}
//                       cursor="pointer"
//                       onClick={() => setUnstake(false)}
//                       py={2}
//                       fontFamily={headingFont}
//                     >
//                       STAKE AXLE
//                     </Text>
//                     <Text
//                       fontFamily={headingFont}
//                       py={2}
//                       boxShadow="xl"
//                       color={brandingColors.secondaryTextColor}
//                       onClick={() => setUnstake(true)}
//                       cursor="pointer"
//                       width={"100%"}
//                       fontSize={{ base: "md", md: "2xl" }}
//                       borderTopRightRadius="3xl"
//                       backgroundImage={
//                         unstake
//                           ? `linear-gradient(to left, #061e37, #002956, #003376, #003b96, #1442b5)`
//                           : "none"
//                       }
//                     >
//                       UNSTAKE AXLE
//                     </Text>
//                   </Box>
//                   {!unstake ? (
//                     <Box borderRadius={"3xl"} p={6}>
//                       <Box
//                         color={brandingColors.secondaryTextColor}
//                         display={"flex"}
//                         px={2}
//                         py={2}
//                         justifyContent="space-between"
//                         fontSize={{ base: "xx-small", md: "sm" }}
//                       >
//                         <Text fontFamily={headingFont}>Amount</Text>
//                         <Text fontFamily={headingFont}>
//                           ~My Balance {axleBalance} AXLE
//                         </Text>
//                       </Box>
//                       <Box
//                         height={"100%"}
//                         width="100%"
//                         px={4}
//                         alignItems={"center"}
//                         display={"flex"}
//                         border={`3px solid ${brandingColors.fgColor}`}
//                         borderRadius="xl"
//                         fontSize={{ base: "xs", md: "md" }}
//                       >
//                         <Box fontFamily={headingFont}>$AXLE</Box>
//                         <Input
//                           mx={4}
//                           fontWeight={"bold"}
//                           color={brandingColors.highLightColor}
//                           onChange={onAxleChange}
//                           type={"number"}
//                           inputMode="decimal"
//                           borderRadius={"none"}
//                           fontSize="xl"
//                           fontFamily={headingFont}
//                           textAlign="right"
//                           value={axle}
//                           borderLeft={`2px solid ${brandingColors.fgColor}`}
//                           borderRight={`2px solid ${brandingColors.fgColor}`}
//                           min={0.2}
//                           width="100%"
//                           max={50}
//                           _active={{
//                             outline: "none",
//                             shadow: "none",
//                           }}
//                           _hover={{
//                             outline: "none",
//                             shadow: "none",
//                           }}
//                           _focus={{
//                             outline: "none",
//                             shadow: "none",
//                           }}
//                         ></Input>
//                         <Box fontFamily={headingFont} cursor={"pointer"}>
//                           MAX
//                         </Box>
//                       </Box>
//                       <Box
//                         fontSize={{ base: "xx-small", md: "md" }}
//                         px={2}
//                         my={1}
//                         color={brandingColors.secondaryTextColor}
//                         fontFamily={headingFont}
//                       >
//                         Min Stake Amount : 8000 AXLE
//                       </Box>

//                       <Box
//                         mt={4}
//                         onClick={buy}
//                         textAlign={"center"}
//                         className="btnc"
//                         fontFamily={headingFont}
//                       >
//                         Enable Stake
//                       </Box>
//                     </Box>
//                   ) : (
//                     <Box borderRadius={"3xl"} p={6}>
//                       <Box
//                         color={brandingColors.secondaryTextColor}
//                         display={"flex"}
//                         px={2}
//                         py={2}
//                         justifyContent="space-between"
//                         fontSize={{ base: "xx-small", md: "sm" }}
//                       >
//                         <Text fontFamily={headingFont}>Amount</Text>
//                         <Text fontFamily={headingFont}>
//                           ~My Balance {axleBalance} AXLE
//                         </Text>
//                       </Box>
//                       <Box
//                         height={"100%"}
//                         width="100%"
//                         px={4}
//                         alignItems={"center"}
//                         display={"flex"}
//                         border={`3px solid ${brandingColors.fgColor}`}
//                         borderRadius="xl"
//                         fontSize={{ base: "xs", md: "md" }}
//                       >
//                         <Box fontFamily={headingFont}>$AXLE</Box>
//                         <Input
//                           fontFamily={headingFont}
//                           fontSize="xl"
//                           mx={4}
//                           fontWeight={"bold"}
//                           color={brandingColors.highLightColor}
//                           placeholder="value (AXLE)"
//                           onChange={onAxleChange}
//                           type={"number"}
//                           inputMode="decimal"
//                           borderRadius={"none"}
//                           textAlign="right"
//                           value={axle}
//                           borderLeft={`2px solid ${brandingColors.fgColor}`}
//                           borderRight={`2px solid ${brandingColors.fgColor}`}
//                           min={0.2}
//                           max={50}
//                           _active={{
//                             outline: "none",
//                             shadow: "none",
//                           }}
//                           _hover={{
//                             outline: "none",
//                             shadow: "none",
//                           }}
//                           _focus={{
//                             outline: "none",
//                             shadow: "none",
//                           }}
//                         ></Input>
//                         <Box fontFamily={headingFont} cursor={"pointer"}>
//                           MAX
//                         </Box>
//                       </Box>
//                       <Box
//                         mt={4}
//                         textAlign={"center"}
//                         className="btnc"
//                         fontFamily={headingFont}
//                       >
//                         UNSTAKE AXLE
//                       </Box>
//                     </Box>
//                   )}
//                 </Box>
//               ) : null}
