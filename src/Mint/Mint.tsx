import { brandingColors, brandingFonts } from "../config/brandingColors";
import { Box, Flex, Image, Text, Divider } from "@chakra-ui/react";

import { ethers } from "ethers";

import { useState } from "react";
import { web3Modal, chainIds } from "../Staking/components/utils";

import Wallet from "../Staking/Wallet";
import Logo from "../assets/logo.png";

import creds from "../abi/creds";

const TOKEN_CONTRACT_ADDRESS = creds.AXLE_CONTRACT;
const axleTokenABI = creds.tokenAbi;

const Mint = () => {
  const [balance, setBalance] = useState(0);
  const [axleBalance, setAxleBalance] = useState<any>("0");

  const [address, setAddress] = useState<string>("");
  const [onChain, setOnChain] = useState("");
  const [openWallet, setOpenWallet] = useState(false);

  const [tokenContract, setTokenContract] = useState<any>();

  console.log(axleBalance, onChain, tokenContract);

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
      let bal = await token.balanceOf(web3Accounts[0]);
      bal = ethers.utils.formatEther(bal);
      setAddress(web3Accounts[0]);
      setNetworkName(network.chainId);
      setTokenContract(token);
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

  return (
    <Box
      bg={brandingColors.bgColor}
      backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/how-works-bg.png`}
      backgroundSize="contain"
      py={6}
      backgroundRepeat="no-repeat"
      backgroundPosition={"center"}
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
        width={{ base: "100%", md: "90%" }}
        mx="auto"
        p={{ base: 8, lg: 12 }}
        columnGap="6rem"
        rowGap={"3rem"}
        display={"flex"}
        justifyContent="space-evenly"
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box
          display={"flex"}
          flexDir="column"
          justifyContent={"center"}
          pos="relative"
        >
          <Box borderLeft={"1px dotted #ffffff"}>
            <Header
              number={1}
              sub="Connect your supported DEX wallet - Metamask, Trust wallet, Coinbase Wallet etc"
              title="Connect Wallet"
            />
          </Box>
          <Header
            number={2}
            title="Check eligibility"
            sub="If you are eligible for Zeus NFT, you can mint it at zero cost."
          />
          <Header
            number={3}
            title="Free Mint or Buy"
            sub="You can buy the NFT for 0.5 BNB or mint it for free if your wallet is  eligible or whitelisted. Zeus NFT is the most powerful NFT in the Axle Ecosystem"
          />
        </Box>
        <Box
          display={"flex"}
          rowGap="2rem"
          flexDir={"column"}
          borderRadius={"xl"}
          px={2}
          py={8}
          justifyContent="center"
          alignItems={"center"}
          width="100%"
        >
          <Text
            textAlign={"center"}
            fontSize={{ base: "2xl", sm: "4xl" }}
            fontFamily={brandingFonts.headingFont}
          >
            Mint your Zues NFT
          </Text>
          <Divider
            borderRadius={"xl"}
            p={1}
            outline="none"
            border="none"
            bg={brandingColors.primaryButtonColor}
          />
          <video
            style={{ maxHeight: "420px" }}
            muted
            loop
            src={`https://axlegames.s3.ap-south-1.amazonaws.com/zeus.mp4`}
            autoPlay
          ></video>

          <Divider
            borderRadius={"xl"}
            p={1}
            outline="none"
            border="none"
            bg={brandingColors.primaryButtonColor}
          />

          <Flex
            width={"100%"}
            p={{ base: 2 }}
            borderRadius="xl"
            justifyContent={"space-between"}
            boxShadow={`0px 0px 5px ${brandingColors.primaryButtonColor}`}
          >
            <Box>
              <Text
                fontSize={{ base: "sm", md: "xl" }}
                fontFamily={brandingFonts.subFont}
                fontWeight="bold"
                p={2}
              >
                Zues NFT
              </Text>
              <Text
                fontSize={{ base: "sm", md: "xl" }}
                fontFamily={brandingFonts.headingFont}
                fontWeight="bold"
                color={brandingColors.primaryButtonColor}
                p={2}
                borderRadius="xl"
                boxShadow="dark-lg"
                bg={brandingColors.bgColor}
              >
                200 AVAILABLE
              </Text>
            </Box>
            <Box>
              <Text
                fontWeight="bold"
                fontSize={{ base: "sm", md: "xl" }}
                fontFamily={brandingFonts.subFont}
                color={brandingColors.secondaryTextColor}
                p={2}
              >
                Price
              </Text>
              <Text
                p={2}
                borderRadius="xl"
                boxShadow="dark-lg"
                bg={brandingColors.bgColor}
                fontWeight="bold"
                fontSize={{ base: "sm", md: "xl" }}
                fontFamily={brandingFonts.headingFont}
                color={brandingColors.primaryButtonColor}
              >
                0.5 BNB
              </Text>
            </Box>
          </Flex>

          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            flexDir="column"
          >
            {address === "" ? (
              <Box
                className="btnc"
                fontSize={{ base: "2xl" }}
                fontFamily={brandingFonts.subFont}
                onClick={connectWeb3Wallet}
              >
                Connect wallet
              </Box>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mint;

interface Props {
  title: string;
  sub: string;
  number: number;
}

const Header = (props: Props) => {
  return (
    <Box
      pos={"relative"}
      rowGap={".2rem"}
      display={"flex"}
      flexDir="column"
      px={8}
      pb={props.number !== 3 ? 8 : 0}
      borderLeft={
        props.number === 0 || props.number === 1 ? "" : "1px dotted #ffffff"
      }
    >
      <Text
        left={"-14px"}
        pos={"absolute"}
        color={brandingColors.primaryButtonColor}
        fontFamily={brandingFonts.headingFont}
        bg={brandingColors.bgColor}
        boxShadow="dark-lg"
        border={
          props.number !== 0 ? `1px solid ${brandingColors.neuPrimaryBg}` : ""
        }
        px={2}
        borderRadius="xl"
        py={props.number !== 0 ? 1 : 0}
      >
        {props.number !== 0 ? props.number : null}
      </Text>
      <Text
        fontSize={{ base: "lg", lg: "2xl" }}
        fontFamily={brandingFonts.headingFont}
      >
        {props.title}
      </Text>
      <Text
        fontSize={{ base: "sm", lg: "md" }}
        fontWeight={"bold"}
        fontFamily={brandingFonts.readingFont}
      >
        {props.sub}
      </Text>
    </Box>
  );
};
