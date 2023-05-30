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

import { useState } from "react";

import Wallet from "../Staking/Wallet";
import Logo from "../assets/logo.png";

import creds from "../abi/creds";
import whitelist from "./whitelist.json";
import axleZuesMintAbi from "../abi/mainnet/AxleZuesMintMain.json";

import AxleDialog from "../Staking/dialog/AxleDialog";
import SuccessfulMintDialog from "./SuccessfulMintDialog";

import { useWeb3Modal } from "@web3modal/react";
import { bsc, bscTestnet, mainnet } from "wagmi/chains";
import { useDisconnect, useConnect, useAccount, useContractRead } from "wagmi";
import { useEffect } from "react";

// const AXLE_ZUES_MINT_ADDRESS = creds.AXLE_ZUES_MINT;
// const axleZuesMintAbi = creds.axleZuesMintAbi;

const Mint = () => {
  const { disconnect } = useDisconnect();

  const { address, isConnected } = useAccount();
  const { open, setDefaultChain, close, isOpen } = useWeb3Modal();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const { data: isMinted, error: mintError } = useContractRead({
    address: "0x0bF185598824Fb6160F6AC8Cb1a19f39C65453aa",
    abi: axleZuesMintAbi,
    functionName: "alreadyMintedList",
    args: [address],
  });

  // const { data: isEligible } = useContractRead({
  //   address: "0xdD430aB53a671C18941D3E70355224e141896fC4",
  //   abi: axleZuesMintAbi,
  //   functionName: "whitelist",
  //   args: [address!],
  // });
  let isEligible = false;

  console.log(isMinted, isEligible, mintError);

  const toast = useToast();

  const [balance, setBalance] = useState(0);
  const [nft, setNft] = useState(0);
  const [openWallet, setOpenWallet] = useState(false);
  const [hash, setHash] = useState("");
  const [success, setSuccess] = useState(false);

  const connectWeb3Wallet = async () => {
    try {
      open();
      setDefaultChain(bscTestnet);

      // const balance = await fetchBalance({
      //   address,
      // });
      // console.log(balance);
      // let bnbBal: any = await provider.getBalance(web3Accounts[0]);
      // bnbBal = Number(ethers.utils.formatEther(bnbBal));
      // const signer = provider.getSigner();
      // const zuesMintContractc = new ethers.Contract(
      //   AXLE_ZUES_MINT_ADDRESS,
      //   axleZuesMintAbi,
      //   signer
      // );
      // const isMintedC = await zuesMintContractc.alreadyMintedList(
      //   web3Accounts[0]
      // );
      // setIsMinted(isMintedC);
      // setAddress(web3Accounts[0]);
      // setNetworkName(network.chainId);
      // setZuesMintContract(zuesMintContractc);
      // setBalance(bnbBal);
      // const eligibility = await zuesMintContractc.whitelist(web3Accounts[0]);
      // setIsEligible(eligibility);
      // for (let i = 0; i < whitelist.length; i++)
      //   if (whitelist[i].address === web3Accounts[0]) setNft(whitelist[i].nfts);
      // localStorage.setItem("isWalletConnected", "true");
    } catch (error) {
      console.log(error);
    }
  };

  const mint = async () => {
    try {
      // const resp = await zuesMintContract.whiteListMint(1, nft);
      // console.log(resp);
      // if (resp) {
      //   setHash(resp.hash);
      //   setSuccess(true);
      // }
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
          address={address ?? ""}
          disconnect={() => disconnect()}
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
        <Box fontSize={"5xl"} color={brandingColors.primaryButtonColor}>
          {!isMinted} {!isEligible}
        </Box>
        <Box>
          <div style={{ color: "white" }}>
            {connectors.map((connector) => (
              <button
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
              >
                {connector.name}
                {!connector.ready && " (unsupported)"}
                {isLoading &&
                  connector.id === pendingConnector?.id &&
                  " (connecting)"}
              </button>
            ))}

            {error && <div>{error.message}</div>}
          </div>
        </Box>
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
              {isEligible && isConnected ? (
                <Box>
                  <Box
                    className="btnc"
                    fontSize={{ base: "2xl" }}
                    fontFamily={brandingFonts.subFont}
                    onClick={mint}
                    textAlign="center"
                  >
                    CLAIM YOUR FREE NFT
                  </Box>
                  <Text
                    textAlign={"center"}
                    mt={4}
                    fontSize="2xl"
                    fontFamily={brandingFonts.subFont}
                    color={brandingColors.primaryTwoTextColor}
                  >
                    {`You are eligible to mint ${nft} NFTs`}
                  </Text>
                </Box>
              ) : (
                <Box>
                  {isConnected ? (
                    <Text
                      textAlign={"center"}
                      mt={4}
                      fontSize="2xl"
                      fontFamily={brandingFonts.subFont}
                      color={brandingColors.secondaryTwoTextColor}
                    >
                      {`Your adress is not eligible to mint`}
                    </Text>
                  ) : (
                    <Box
                      className="btnc"
                      fontSize={{ base: "2xl" }}
                      fontFamily={brandingFonts.subFont}
                      onClick={connectWeb3Wallet}
                    >
                      CLAIM YOUR FREE NFT
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          ) : (
            <Box>
              <Text
                textAlign={"center"}
                mt={4}
                fontSize="3xl"
                fontFamily={brandingFonts.subFont}
                color={brandingColors.secondaryTwoTextColor}
              >
                {`your already minted your free nfts`}
              </Text>

              <Divider my={4} />
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
          )}
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
