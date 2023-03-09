import {
  Box,
  Divider,
  Grid,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";

import Logo from "../assets/logo.png";

import Web3Modal from "web3modal";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnectProvider from "@walletconnect/web3-provider";

import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Wallet from "./Wallet";
import { brandingColors } from "../config/brandingColors";
import "../components/navbar/Navbar.css";

declare global {
  interface Window {
    ethereum: any;
  }
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
    roi: 14,
  },
  {
    days: 90,
    roi: 17,
  },
  {
    days: 180,
    roi: 20,
  },
  {
    days: 360,
    roi: 25,
  },
];

const Stake = () => {
  const [lockIn, setLockIn] = useState(0);
  const [balance, setBalance] = useState(0);
  const [pool, setPool] = useState("323,123,103");
  const [axleBalance, setAxleBalance] = useState<any>("0");
  const [openWallet, setOpenWallet] = useState(false);
  const [togglePage, setTogglePage] = useState(false);
  const [unstake, setUnstake] = useState(false);

  const [address, setAddress] = useState<string>("");
  const [onChain, setOnChain] = useState("");

  const [bnb, setBnb] = useState<any>("0.2");
  const [axle, setAxle] = useState<any>(15000);

  const onBnbChange = (e: any) => {
    const bnb = Number(e.target.value);
    setBnb(bnb.toString());
    setAxle((bnb * 75000).toString());
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
        params: [{ chainId: ethers.utils.hexlify(56) }],
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

  const connectWeb3Wallet = async () => {
    try {
      const web3Provider = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(web3Provider);
      const web3Accounts = await provider.listAccounts();
      setAddress(web3Accounts[0]);
      const network = await provider.getNetwork();
      if (network.chainId !== 56) switchNetwork();
      setNetworkName(network.chainId);
      let bnbBal: any = await provider.getBalance(web3Accounts[0]);
      bnbBal = Number(ethers.utils.formatEther(bnbBal));
      setBalance(bnbBal);
      // const signer = provider.getSigner();
      // const token = new ethers.Contract(
      //   TOKEN_CONTRACT_ADDRESS,
      //   axleTokenABI,
      //   signer
      // );
      // let bal = await token.balanceOf(web3Accounts[0]);
      // bal = ethers.utils.formatEther(bal);
      setAxleBalance(25000);
      setPool("3,212,189");
      // localStorage.setItem("isWalletConnected", "true");
    } catch (error) {
      console.log(error);
    }
  };

  const disconnectWeb3Modal = async (loaded: boolean = false) => {
    await web3Modal.clearCachedProvider();
    if (!loaded) window.location.reload();
  };

  useEffect(() => {
    console.log(onChain);
    console.log(axle);
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

  const toast = useToast();

  const buy = () => {
    if (axleBalance - bnb <= 0) {
      return toast({
        title: "Warning",
        description: `Insufficent funds!`,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
    setAxleBalance(axleBalance - bnb);
    return toast({
      title: "Success",
      description: `${bnb} AXLE has been staked`,
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Box
      bg={brandingColors.bgColor}
      backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/bg/token_countdown_bg.png`}
      backgroundSize="contain"
      fontFamily={"Shantell Sans"}
      fontWeight="bold"
      py={6}
      minH="100vh"
    >
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
        >
          <Box
            boxShadow={`0px 0px 120px -30px ${brandingColors.secondaryTwoTextColor}`}
            border={`3px solid ${brandingColors.newHighlightColor}`}
            p={6}
            borderRadius="xl"
            bg={brandingColors.bgColor}
            backgroundImage={`radial-gradient(circle, #061e37, #14213c, #202441, #2c2645, #372948)`}
            color={brandingColors.secondaryTextColor}
            fontWeight="bold"
            justifyContent={"center"}
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            rowGap={"1rem"}
            minW={"18vw"}
            minH={"14vh"}
          >
            <Text
              fontFamily={`Staatliches`}
              lineHeight={"0.8"}
              fontSize={{ base: "md", md: "xl" }}
            >
              TOTAL VALUE LOCKED
            </Text>
            <Text
              lineHeight={"0.8"}
              color={brandingColors.primaryTextColor}
              fontFamily={`Staatliches`}
              fontSize={{ base: "xl", md: "3xl" }}
            >
              ${pool}
            </Text>
            <Text
              lineHeight={"0.8"}
              color={brandingColors.secondaryTextColor}
              fontSize={{ base: "xs", md: "sm" }}
              fontFamily={`Staatliches`}
            >
              $ 0.00164 = 1 AXLE
            </Text>
          </Box>
          <Box
            mt={4}
            minW={"14vw"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={{ base: "sm", md: "xl" }}
            columnGap=".5rem"
            border={`3px solid ${brandingColors.newHighlightColor}`}
            p={1}
            borderRadius={"8vw"}
            fontFamily={`Staatliches`}
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
              onClick={() => setTogglePage(true)}
              cursor="pointer"
            >
              <Text fontFamily={`Staatliches`}>FLEXIBLE</Text>
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
              <Text fontFamily={`Staatliches`}>LOCKED</Text>
            </Box>
          </Box>
          {/* {togglePage ? (
            <Box
              color={brandingColors.secondaryTextColor}
              justifyContent="center"
              display={"flex"}
              flexDirection="column"
              my={12}
              alignItems={"center"}
            >
              <Text
                fontFamily={`'Russo One', sans-serif`}
                fontSize={"2xl"}
                fontWeight="bold"
              >
                FLEXIBLE STAKING
              </Text>
              <Text
                fontWeight={"bold"}
                fontSize={"xl"}
                color={brandingColors.primaryTextColor}
                my={4}
              >
                {" "}
                APY: 12%{" "}
              </Text>
              <Text fontSize={"2xl"} fontWeight="bold">
                {" "}
                Total $AXLE in Flexible Staking
              </Text>
              <Text
                fontWeight={"bold"}
                fontSize={"xl"}
                color={brandingColors.primaryTextColor}
              >
                ${pool.lockin} AXLE
              </Text>
            </Box>
          ) : (
            <Box
              color={brandingColors.secondaryTextColor}
              justifyContent="center"
              display={"flex"}
              flexDirection="column"
              my={12}
              alignItems={"center"}
            >
              <Text
                fontFamily={`'Russo One', sans-serif`}
                fontSize={"2xl"}
                fontWeight="bold"
              >
                LOCKED STAKING
              </Text>
              <Text mt={2} fontSize={"2xl"}>
                {" "}
                Total $AXLE in Locked Staking
              </Text>
              <Text fontSize={"xl"} color={brandingColors.primaryTextColor}>
                ${pool.lockin} AXLE
              </Text>
            </Box>
          )} */}
        </Box>
        <Box my={8}></Box>

        {address === "" ? (
          <Box
            border={`3px solid ${brandingColors.fgColor}`}
            borderRadius="xl"
            p={12}
          >
            <Text
              my={4}
              fontSize={{ base: "sm", md: "xl" }}
              textAlign="center"
              color={brandingColors.primaryTextColor}
              fontFamily={`Staatliches`}
            >
              Connect your wallet to stake $AXLE tokens!
            </Text>
            <Box
              onClick={connectWeb3Wallet}
              style={{ textAlign: "center" }}
              className="btnc"
              fontFamily={`Staatliches`}
            >
              Connect Wallet
            </Box>
          </Box>
        ) : (
          <Box>
            {togglePage ? (
              <Box
                minW={{ base: "90vw", md: "42vw" }}
                mx="auto"
                width={"100%"}
                borderRadius="3xl"
                borderLeft={`2px solid ${brandingColors.newHighlightColor}`}
                borderRight={`2px solid ${brandingColors.newHighlightColor}`}
                borderBottom={`2px solid ${brandingColors.newHighlightColor}`}
                color={brandingColors.primaryTextColor}
                boxShadow={`0px 0px 120px -70px ${brandingColors.newHighlightColor}`}
              >
                <Box
                  textAlign={"center"}
                  display="flex"
                  justifyContent={"space-between"}
                  border={`2px solid ${brandingColors.newHighlightColor}`}
                  borderTopRadius="3xl"
                >
                  <Text
                    borderTopLeftRadius={"3xl"}
                    boxShadow="xl"
                    width={"100%"}
                    fontSize={{ base: "md", md: "2xl" }}
                    backgroundImage={
                      !unstake
                        ? `linear-gradient(to right, #061e37, #002956, #003376, #003b96, #1442b5)`
                        : "none"
                    }
                    color={brandingColors.secondaryTextColor}
                    cursor="pointer"
                    onClick={() => setUnstake(false)}
                    fontFamily={`Staatliches`}
                    py={2}
                  >
                    STAKE AXLE
                  </Text>
                  <Text
                    py={2}
                    boxShadow="xl"
                    color={brandingColors.secondaryTextColor}
                    onClick={() => setUnstake(true)}
                    cursor="pointer"
                    width={"100%"}
                    fontSize={{ base: "md", md: "2xl" }}
                    borderTopRightRadius="3xl"
                    fontFamily={`Staatliches`}
                    backgroundImage={
                      unstake
                        ? `linear-gradient(to left, #061e37, #002956, #003376, #003b96, #1442b5)`
                        : "none"
                    }
                  >
                    UNSTAKE AXLE
                  </Text>
                </Box>
                {!unstake ? (
                  <Box borderRadius={"3xl"} p={6}>
                    <Box
                      color={brandingColors.secondaryTextColor}
                      display={"flex"}
                      px={2}
                      py={2}
                      justifyContent="space-between"
                      fontSize={{ base: "xx-small", md: "sm" }}
                    >
                      <Text fontFamily={"Shantell Sans"}>Amount</Text>
                      <Text fontFamily={"Shantell Sans"}>
                        ~My Balance {axleBalance} AXLE
                      </Text>
                    </Box>
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
                      <Box>$AXLE</Box>
                      <Input
                        mx={4}
                        fontWeight={"bold"}
                        color={brandingColors.primaryButtonColor}
                        onChange={onBnbChange}
                        type={"number"}
                        inputMode="decimal"
                        borderRadius={"none"}
                        textAlign="right"
                        value={bnb}
                        borderLeft={`2px solid ${brandingColors.fgColor}`}
                        borderRight={`2px solid ${brandingColors.fgColor}`}
                        min={0.2}
                        width="100%"
                        max={50}
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
                      <Box cursor={"pointer"}>MAX</Box>
                    </Box>
                    <Box
                      fontSize={{ base: "xx-small", md: "md" }}
                      px={2}
                      color={brandingColors.secondaryTextColor}
                    >
                      Min Stake Amount : 8000 AXLE
                    </Box>

                    <Box
                      mt={4}
                      onClick={buy}
                      textAlign={"center"}
                      className="btnc"
                      fontFamily={`Staatliches`}
                    >
                      Enable Staking
                    </Box>
                  </Box>
                ) : (
                  <Box borderRadius={"3xl"} p={6}>
                    <Box
                      color={brandingColors.secondaryTextColor}
                      display={"flex"}
                      px={2}
                      py={2}
                      justifyContent="space-between"
                      fontSize={{ base: "xx-small", md: "sm" }}
                    >
                      <Text fontFamily={"Shantell Sans"}>Amount</Text>
                      <Text fontFamily={"Shantell Sans"}>
                        ~My Balance {axleBalance} AXLE
                      </Text>
                    </Box>
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
                      <Box>$AXLE</Box>
                      <Input
                        mx={4}
                        fontWeight={"bold"}
                        color={brandingColors.primaryButtonColor}
                        placeholder="value (BNB)"
                        onChange={onBnbChange}
                        type={"number"}
                        inputMode="decimal"
                        borderRadius={"none"}
                        textAlign="right"
                        value={bnb}
                        borderLeft={`2px solid ${brandingColors.fgColor}`}
                        borderRight={`2px solid ${brandingColors.fgColor}`}
                        min={0.2}
                        max={50}
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
                      <Box cursor={"pointer"}>MAX</Box>
                    </Box>
                    <Box
                      mt={4}
                      textAlign={"center"}
                      fontFamily={`Staatliches`}
                      className="btnc"
                    >
                      UNSTAKE AXLE
                    </Box>
                  </Box>
                )}
              </Box>
            ) : (
              <Box
                minW={`42vw`}
                color={brandingColors.primaryTextColor}
                boxShadow={`0px 0px 120px -70px ${brandingColors.newHighlightColor}`}
                border={`3px solid ${brandingColors.newHighlightColor}`}
                borderRadius="3xl"
              >
                <Box textAlign={"center"}>
                  <Text
                    color={brandingColors.secondaryTextColor}
                    fontFamily={`Staatliches`}
                    fontSize={{ base: "xl", md: "3xl" }}
                    p={2}
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
                >
                  <Text fontFamily={"Shantell Sans"}>Amount</Text>
                  <Text fontFamily={"Shantell Sans"}>
                    ~My Balance {axleBalance} AXLE
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
                    <Box>$AXLE</Box>
                    <Input
                      mx={4}
                      fontWeight={"bold"}
                      color={brandingColors.primaryButtonColor}
                      placeholder="value (BNB)"
                      onChange={onBnbChange}
                      type={"number"}
                      inputMode="decimal"
                      borderRadius={"none"}
                      textAlign="right"
                      value={bnb}
                      borderLeft={`2px solid ${brandingColors.fgColor}`}
                      borderRight={`2px solid ${brandingColors.fgColor}`}
                      min={0.2}
                      max={50}
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
                    <Box cursor={"pointer"}>MAX</Box>
                  </Box>
                </Box>
                <Box mx={8} my={4}>
                  <Box
                    fontSize={{ base: "xx-small", md: "md" }}
                    my={2}
                    color={brandingColors.secondaryTextColor}
                  >
                    Locking
                  </Box>
                  <Grid
                    display={"grid"}
                    gridTemplateColumns={{
                      base: "1fr 1fr",
                      md: "1fr 1fr 1fr 1fr",
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
                        onClick={() => setLockIn(i)}
                        key={i}
                        minW={"32"}
                        cursor="pointer"
                      >
                        <Text
                          color={brandingColors.secondaryTextColor}
                          fontFamily={`Staatliches`}
                          px={3}
                          py={2}
                          fontSize={{ base: "sm", md: "md", lg: "xl" }}
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
                          fontSize={{ base: "xs", md: "sm", lg: "md" }}
                          fontFamily={`Staatliches`}
                        >
                          {" "}
                          {s.roi}% APY
                        </Text>
                      </Box>
                    ))}
                  </Grid>
                </Box>
                <Box
                  onClick={buy}
                  mx={8}
                  my={4}
                  textAlign="center"
                  className="btnc"
                  fontFamily={`Staatliches`}
                >
                  Enable Staking
                </Box>
                <Box
                  mt={4}
                  borderTop={`2px solid ${brandingColors.newHighlightColor}`}
                  textAlign={"center"}
                  p={4}
                >
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    color={brandingColors.primaryTextColor}
                    fontFamily={"Shantell Sans"}
                  >
                    Locking {bnb} AXLE for {stakeRewards[lockIn].days} Days
                  </Text>
                </Box>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Stake;
