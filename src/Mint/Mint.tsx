import { brandingColors, brandingFonts } from "../config/brandingColors";
import {
  Box,
  Image,
  Text,
  Divider,
  Flex,
  Link,
  useToast,
} from "@chakra-ui/react";

import { ethers } from "ethers";

import { useState } from "react";
import { web3Modal, chainIds } from "../Staking/components/utils";

import Wallet from "../Staking/Wallet";
import Logo from "../assets/logo.png";

import creds from "../abi/creds";
import whitelist from "./whitelist.json";

import AxleDialog from "../Staking/dialog/AxleDialog";
import SuccessfulMintDialog from "./SuccessfulMintDialog";

const AXLE_ZUES_MINT_ADDRESS = creds.AXLE_ZUES_MINT;
const axleZuesMintAbi = creds.axleZuesMintAbi;

const Mint = () => {
  const toast = useToast();
  const [balance, setBalance] = useState(0);

  const [nft, setNft] = useState(0);
  const [address, setAddress] = useState<string>("");
  const [onChain, setOnChain] = useState("");
  const [openWallet, setOpenWallet] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [isMinted, setIsMinted] = useState(false);

  const [hash, setHash] = useState("");
  const [success, setSuccess] = useState(false);

  const [zuesMintContract, setZuesMintContract] = useState<any>();

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
      const web3Provider = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(web3Provider);
      const web3Accounts = await provider.listAccounts();
      const network = await provider.getNetwork();
      if (network.chainId !== creds.chain.chainId) switchNetwork();
      let bnbBal: any = await provider.getBalance(web3Accounts[0]);
      bnbBal = Number(ethers.utils.formatEther(bnbBal));
      const signer = provider.getSigner();
      const zuesMintContractc = new ethers.Contract(
        AXLE_ZUES_MINT_ADDRESS,
        axleZuesMintAbi,
        signer
      );
      const isMintedC = await zuesMintContractc.alreadyMintedList(
        web3Accounts[0]
      );
      console.log(await zuesMintContractc.uri(1));
      setIsMinted(isMintedC);
      setAddress(web3Accounts[0]);
      setNetworkName(network.chainId);
      setZuesMintContract(zuesMintContractc);
      setBalance(bnbBal);
      console.log(zuesMintContractc, onChain);
      const eligibility = await zuesMintContractc.whitelist(web3Accounts[0]);
      setIsEligible(eligibility);
      for (let i = 0; i < whitelist.length; i++)
        if (whitelist[i].address === web3Accounts[0]) setNft(whitelist[i].nfts);
      localStorage.setItem("isWalletConnected", "true");
    } catch (error) {
      console.log(error);
    }
  };

  const disconnectWeb3Modal = async (loaded: boolean = false) => {
    web3Modal.clearCachedProvider();
    if (!loaded) window.location.reload();
  };

  const mint = async () => {
    try {
      const resp = await zuesMintContract.whiteListMint(1, nft);
      console.log(resp);
      if (resp) {
        setHash(resp.hash);
        setSuccess(true);
      }
    } catch (err) {
      console.log(err);
      return toast({
        title: "Oops!",
        description: "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
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
      <AxleDialog
        close={() => setSuccess(false)}
        children={
          <SuccessfulMintDialog
            hash={hash}
            close={async () => {
              setSuccess(false);
            }}
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
        width={{ base: "100%", md: "90%" }}
        mx="auto"
        py={{ base: 8, lg: 12 }}
        rowGap={"3rem"}
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        flexDir={{ base: "column", lg: "row" }}
      >
        <Box
          display={"flex"}
          rowGap="1.5rem"
          flexDir={"column"}
          borderRadius={"xl"}
          px={2}
          justifyContent="center"
          alignItems={"center"}
          width="100%"
        >
          {!isMinted ? (
            <Text
              textAlign={"center"}
              fontSize={{ base: "2xl", sm: "4xl" }}
              fontFamily={brandingFonts.headingFont}
              color={brandingColors.primaryButtonColor}
            >
              Mint your Zues NFT
            </Text>
          ) : null}

          <video
            style={{ maxHeight: "500px" }}
            muted
            loop
            src={`https://axlegames.s3.ap-south-1.amazonaws.com/zeus.mp4`}
            autoPlay
          ></video>
          <Box>
            {address !== "" ? (
              <Box>
                <Text
                  fontFamily={brandingFonts.subFont}
                  color={brandingColors.primaryButtonColor}
                >
                  {isMinted
                    ? ""
                    : isEligible
                    ? `You are eligible to mint ${nft} NFTs`
                    : `Your adress is not eligible to mint`}
                </Text>
              </Box>
            ) : null}
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDir="column"
          justifyContent={"center"}
          alignItems="center"
          pos="relative"
          px={8}
          borderRadius="xl"
        />
        <Box
          minW={{ base: "100%", lg: "80%", xl: "65%", "2xl": "55%" }}
          display={"flex"}
          flexDir="column"
          justifyContent={"center"}
          pos="relative"
          px={8}
          borderRadius="xl"
        >
          <Header
            number={1}
            sub="Connect your supported DEX wallet - Metamask, Trust wallet, Coinbase Wallet etc"
            title="Connect Wallet"
          />
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
          {!isMinted ? (
            <Box mt={8} justifyContent="center" display={"flex"}>
              <Box
                className="btnc"
                fontSize={{ base: "2xl" }}
                fontFamily={brandingFonts.subFont}
                onClick={address !== "" ? mint : connectWeb3Wallet}
              >
                CLAIM YOUR FREE NFT
              </Box>
            </Box>
          ) : null}
          {isMinted ? (
            <Box my={8}>
              <Box>
                <Text
                  fontFamily={brandingFonts.subFont}
                  color={brandingColors.secondaryTwoTextColor}
                  fontSize={{ base: "2xl" }}
                  textAlign={"center"}
                  pb={4}
                >
                  You have already minted!
                </Text>
              </Box>
              <Divider mb={4} mx="auto" width={"100%"} />
              <Flex flexDir={"column"} justifyContent={"space-between"}>
                <Flex
                  alignItems={{ base: "start", lg: "center" }}
                  justifyContent={"start"}
                  columnGap="1rem"
                  flexDir={{ base: "column", lg: "row" }}
                >
                  <Text
                    fontFamily={brandingFonts.headingFont}
                    color={brandingColors.primaryTwoTextColor}
                    fontSize="sm"
                  >
                    NFT :
                  </Text>
                  <Link
                    fontSize={"xs"}
                    fontWeight="bold"
                    fontFamily={brandingFonts.readingFont}
                    color={brandingColors.secondaryTextColor}
                    href="https://nftstorage.link/ipfs/bafybeib2h4cbc6s3psqklydbfw4zzujid5xmn3fpbtpbg4e57nxp23ewu4/"
                    as="a"
                    target={"_blank"}
                  >
                    https://nftstorage.link/ipfs/bafybeib2h4cbc6s3psqklydbfw4zzujid5xmn3fpbtpbg4e57nxp23ewu4/
                  </Link>
                </Flex>
                <Flex
                  justifyContent={"start"}
                  columnGap="1rem"
                  flexDir={{ base: "column", lg: "row" }}
                  alignItems={{ base: "start", lg: "center" }}
                >
                  <Text
                    fontSize="sm"
                    fontFamily={brandingFonts.headingFont}
                    color={brandingColors.primaryTwoTextColor}
                    textAlign="left"
                  >
                    ANIMATION :
                  </Text>
                  <Link
                    fontSize={"xs"}
                    fontWeight="bold"
                    fontFamily={brandingFonts.readingFont}
                    color={brandingColors.secondaryTextColor}
                    href="https://nftstorage.link/ipfs/bafybeib74zule2luvlpg2ywjng6u6dl3udxvgkfeikbox4mysiyfomgm7y/"
                    target={"_blank"}
                    as="a"
                  >
                    https://nftstorage.link/ipfs/bafybeib74zule2luvlpg2ywjng6u6dl3udxvgkfeikbox4mysiyfomgm7y/
                  </Link>
                </Flex>

                <Flex
                  flexDir={{ base: "column", lg: "row" }}
                  alignItems={{ base: "start", lg: "center" }}
                  justifyContent={"start"}
                  columnGap="1rem"
                >
                  <Text
                    fontSize={"sm"}
                    fontFamily={brandingFonts.headingFont}
                    color={brandingColors.primaryTwoTextColor}
                  >
                    METADATA :
                  </Text>
                  <Link
                    fontSize={"xs"}
                    fontWeight="bold"
                    fontFamily={brandingFonts.readingFont}
                    color={brandingColors.secondaryTextColor}
                    href="https://nftstorage.link/ipfs/bafybeifi5cufjdrnw2kf4qvdscr3u2tgsf6fxgagnxmbgfkdar5qjan6hy/1.json"
                    target={"_blank"}
                    as="a"
                  >
                    https://nftstorage.link/ipfs/bafybeifi5cufjdrnw2kf4qvdscr3u2tgsf6fxgagnxmbgfkdar5qjan6hy/1.json
                  </Link>
                </Flex>
              </Flex>
            </Box>
          ) : null}
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
      borderRadius="none"
      borderLeft={"6px dotted #ffffff"}
    >
      <Box
        top={"-6px"}
        left={"-23px"}
        pos={"absolute"}
        color={brandingColors.primaryButtonColor}
        fontFamily={brandingFonts.headingFont}
        bg={brandingColors.bgColor}
        boxShadow="dark-lg"
        border={
          props.number !== 0 ? `1px solid ${brandingColors.neuPrimaryBg}` : ""
        }
        borderRadius="3xl"
        minH="10"
        minW="10"
        textAlign={"center"}
        display="flex"
        alignItems="center"
        justifyContent={"center"}
      >
        {props.number !== 0 ? props.number : null}
      </Box>
      <Text
        fontSize={{ base: "lg", lg: "3xl" }}
        fontFamily={brandingFonts.headingFont}
        color={brandingColors.primaryButtonColor}
      >
        {props.title}
      </Text>
      <Text
        fontSize={{ base: "sm", lg: "lg" }}
        fontWeight={"bold"}
        fontFamily={brandingFonts.readingFont}
      >
        {props.sub}
      </Text>
    </Box>
  );
};
