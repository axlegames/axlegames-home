import { Box, Flex, Image, Text, useToast } from "@chakra-ui/react";

import { ethers } from "ethers";
import { useState, useEffect } from "react";

import creds from "../../../abi/creds";
import Wallet from "../../Wallet";

import { LinkIcon } from "@chakra-ui/icons";
import { brandingColors } from "../../../config/brandingColors";

import AxleDialog from "../../dialog/AxleDialog";
import TransactionSuccessDialog from "../../dialog/TransactionSuccessDialog";

import Logo from "../../../assets/logo.png";

import "../../../components/navbar/Navbar.css";

import FlexStake from "../../components/FlexStaking";
import ConnectModal from "../../components/ConnectModal";
import { chainIds, e9, web3Modal } from "../../components/utils";
import Stats from "../../components/Stats";
import Rewards from "../../components/Rewards";

const TOKEN_CONTRACT_ADDRESS = creds.AXLE_CONTRACT;
const axleTokenABI = creds.tokenAbi;
const AXLE_FLEX_STAKING_BNB = creds.AXLE_BNB_FLEX_STAKING;
const axleFlexStakingBnbAbi = creds.flexStakingBnbAbi;

declare global {
  interface Window {
    ethereum: any;
  }
}

const Stake = () => {
  const [hash, setHash] = useState<string>("");
  const [success, setSuccess] = useState(false);
  const [balance, setBalance] = useState(0);
  const [pool, setPool] = useState("323,123,103");
  const [axleBalance, setAxleBalance] = useState<any>("0");
  const [openWallet, setOpenWallet] = useState(false);

  const [address, setAddress] = useState<string>("");
  const [onChain, setOnChain] = useState("");

  const [axle, setAxle] = useState<any>(100000);
  const [tokenContract, setTokenContract] = useState<any>();
  const [flexStakingContract, setFlexStakingContract] = useState<any>();
  const [totalStaked, setTotalStaked] = useState(0);
  const [reward, setReward] = useState(0);

  const onAxleChange = (e: any) => {
    const axle = Number(e.target.value);
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
              chainName: creds.chain.chainName,
              chainId: creds.chain.chainId,
              nativeCurrency: {
                name: creds.chain.nativeCurrency.name,
                decimals: creds.chain.nativeCurrency.decimals,
                symbol: creds.chain.nativeCurrency.symbol,
              },
              rpcUrls: creds.chain.rpcUrls,
            },
          ],
        });
      }
    }
  };

  const stakeFlexStaking = async () => {
    try {
      if (axle < 100000) {
        return toast({
          title: "Warning!",
          description: `Min Stake is 100,000 AXLE`,
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }

      if (axle > 20000000) {
        return toast({
          title: "Warning!",
          description: `Max Stake is 20,000,000 AXLE`,
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
      const hash = await flexStakingContract.deposit(axle * 10 ** 9);
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

  const approveStakeFlexStaking = async () => {
    try {
      const hash = await tokenContract.approve(
        creds.AXLE_FLEX_STAKING,
        axle * e9
      );
      console.log(hash);
      // setSuccess(true);
      setHash(hash.hash);
      return toast({
        title: "Staking Enabled",
        description: `${axle} AXLE approved for staking`,
        status: "warning",
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

  const stakeRewardsFun = async () => {
    try {
      const hash = await flexStakingContract.stakeRewards();
      console.log(hash);
      // setSuccess(true);
      setHash(hash.hash);
      return toast({
        title: "Success",
        description: `Rewards Staked`,
        status: "warning",
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

  const claimRewards = async () => {
    try {
      const hash = await flexStakingContract.claimRewards();
      console.log(hash);
      // setSuccess(true);
      setHash(hash.hash);
      return toast({
        title: "Success",
        description: `Rewards Claimed`,
        status: "warning",
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

  const withdraw = async () => {
    try {
      const hash = await flexStakingContract.withdraw(axle * e9);
      console.log(hash);
      // setSuccess(true);
      setHash(hash.hash);
      return toast({
        title: "Withdraw successful",
        description: `${axle} AXLE has withdrawn`,
        status: "warning",
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

  const connectWeb3Wallet = async () => {
    try {
      const e9 = 10 ** 9;
      const web3Provider = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(web3Provider);
      const web3Accounts = await provider.listAccounts();
      const network = await provider.getNetwork();
      if (network.chainId !== creds.chain.chainId) switchNetwork();
      let bnbBal: any = await provider.getBalance(web3Accounts[0]);
      bnbBal = Number(ethers.utils.formatEther(bnbBal));
      const signer = provider.getSigner();
      const token = new ethers.Contract(
        TOKEN_CONTRACT_ADDRESS,
        axleTokenABI,
        signer
      );
      const flexStaking = new ethers.Contract(
        AXLE_FLEX_STAKING_BNB,
        axleFlexStakingBnbAbi,
        signer
      );
      console.log(flexStaking);
      const tx = await flexStaking.getDepositInfo(web3Accounts[0]);
      if (tx.length > 0) {
        const t = ethers.utils.formatEther(tx[0]) as any;
        const x1 = ethers.utils.formatEther(tx[1]) as any;
        let pool = await flexStaking.total_staked();
        pool = ethers.utils.formatEther(pool);
        setTotalStaked(t * 10 ** 9);
        setPool((pool * 10 ** 9).toString());
        setReward(x1 * 10 ** 9);
      }
      let bal = await token.balanceOf(web3Accounts[0]);
      bal = ethers.utils.formatEther(bal);
      setAddress(web3Accounts[0]);
      setNetworkName(network.chainId);
      setTokenContract(token);
      setFlexStakingContract(flexStaking);
      setAxleBalance(bal * e9);
      setBalance(bnbBal);
      localStorage.setItem("isWalletConnected", "true");
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
        {address !== "" ? (
          <Box>
            <Box
              display={"flex"}
              justifyContent="center"
              flexDirection={"column"}
              alignItems="center"
              width={{ base: "100%", md: "90%", lg: "80%", xl: "75%" }}
              mx="auto"
            >
              <Stats
                contractAddress={AXLE_FLEX_STAKING_BNB}
                pool={pool}
                totalStaked={totalStaked}
              />
              <Flex justifyContent={"center"} alignItems="center">
                <FlexStake
                  approveStake={approveStakeFlexStaking}
                  axle={axle}
                  axleBalance={axleBalance}
                  onAxleChange={onAxleChange}
                  stakeFlexStaking={stakeFlexStaking}
                  withdraw={withdraw}
                  hasStaked={totalStaked > 0 ? true : false}
                />
              </Flex>
            </Box>
            <Rewards
              totalRewards={reward}
              totalStakedAmount={totalStaked}
              claimRewards={claimRewards}
              stakeRewards={stakeRewardsFun}
              hasStaked={totalStaked > 0 ? true : false}
            />
          </Box>
        ) : (
          <ConnectModal connectWeb3Wallet={connectWeb3Wallet} />
        )}
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
