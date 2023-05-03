import { Box, Flex, Image, Text } from "@chakra-ui/react";

import { ethers } from "ethers";
import { useState } from "react";

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
import { web3Modal } from "../../components/utils";
import Stats from "../../components/Stats";
import Rewards from "../../components/Rewards";

const TOKEN_CONTRACT_ADDRESS = creds.AXLE_CONTRACT;
const axleTokenABI = creds.tokenAbi;
const axleStakingABI = creds.stakingAbi;
const AXLE_STAKING = creds.AXLE_STAKING;

declare global {
  interface Window {
    ethereum: any;
  }
}

const BnbStake = () => {
  const [success, setSuccess] = useState(false);
  const [balance, setBalance] = useState(0);
  const [pool, setPool] = useState("323,123,103");
  const [axleBalance, setAxleBalance] = useState<any>("0");
  const [openWallet, setOpenWallet] = useState(false);

  const [address, setAddress] = useState<string>("");
  //   const [onChain, setOnChain] = useState("");

  const [axle, setAxle] = useState<any>(100000);
  //   const [tokenContract, setTokenContract] = useState<any>();
  //   const [stakingContract, setStakingContract] = useState<any>();
  const [totalStaked, setTotalStaked] = useState(0);
  const [reward, setReward] = useState(0);

  const onAxleChange = (e: any) => {
    const axle = Number(e.target.value);
    setAxle(axle);
  };

  //   const setNetworkName = (chainId: number) => {
  //     for (let i = 0; i < chainIds.length; i++) {
  //       if (chainIds[i].chainId === chainId) {
  //         setOnChain(chainIds[i].network);
  //       }
  //     }
  //   };

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
      const stake = new ethers.Contract(AXLE_STAKING, axleStakingABI, signer);
      let bal = await token.balanceOf(web3Accounts[0]);
      bal = ethers.utils.formatEther(bal);
      const totalStakeAmout: any = ethers.utils.formatEther(
        await stake.totalstakedamount()
      );
      setAddress(web3Accounts[0]);
      //   setNetworkName(network.chainId);
      //   setTokenContract(token);
      //   setStakingContract(stake);
      setAxleBalance(bal * e9);
      setPool((totalStakeAmout * e9).toString());
      setBalance(bnbBal);
      setReward(100 * 10 ** 9);
      //   setTotalStaked(t * 10 ** 9);
      //   setPool((pool * 10 ** 9).toString());
      localStorage.setItem("isWalletConnected", "true");
      let tStaked: any = 0;
      setTotalStaked(tStaked);
    } catch (error) {
      console.log(error);
    }
  };

  const disconnectWeb3Modal = async (loaded: boolean = false) => {
    web3Modal.clearCachedProvider();
    if (!loaded) window.location.reload();
  };

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
            hash={""}
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
              <Stats toggle={true} pool={pool} totalStaked={totalStaked} />
              <Flex justifyContent={"center"} alignItems="center">
                <FlexStake
                  approveStake={() => {}}
                  axle={axle}
                  axleBalance={axleBalance}
                  onAxleChange={onAxleChange}
                  stakeFlexStaking={() => {}}
                  withdraw={() => {}}
                  hasStaked={totalStaked > 0 ? true : false}
                />
              </Flex>
            </Box>
            <Rewards
              totalRewards={reward}
              totalStakedAmount={totalStaked}
              claimRewards={() => {}}
              stakeRewards={() => {}}
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

export default BnbStake;
