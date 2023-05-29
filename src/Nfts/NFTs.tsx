import {
  Box,
  Flex,
  Grid,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";

import { brandingColors, brandingFonts } from "../config/brandingColors";

import Logo from "../assets/logo.png";
import creds from "../abi/creds";

import AxleDialog from "../Staking/dialog/AxleDialog";
import SuccessfulMintDialog from "../Mint/SuccessfulMintDialog";

import { ethers } from "ethers";
import { useState } from "react";
import { chainIds, web3Modal } from "../Staking/components/utils";

import Wallet from "../Staking/Wallet";

const AXLE_ZUES_MINT_ADDRESS = creds.AXLE_ZUES_MINT;
const axleZuesMintAbi = creds.axleZuesMintAbi;

const NFTs = () => {
  const toast = useToast();
  const [balance, setBalance] = useState(0);

  const [address, setAddress] = useState<string>("");
  const [onChain, setOnChain] = useState("");
  const [openWallet, setOpenWallet] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [isMinted, setIsMinted] = useState(false);

  console.log(isEligible, isMinted);

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
      setIsMinted(isMintedC);
      setAddress(web3Accounts[0]);
      setNetworkName(network.chainId);
      setZuesMintContract(zuesMintContractc);
      setBalance(bnbBal);
      console.log(zuesMintContractc, onChain);
      const eligibility = await zuesMintContractc.whitelist(web3Accounts[0]);
      setIsEligible(eligibility);
      localStorage.setItem("isWalletConnected", "true");
    } catch (error) {
      console.log(error);
    }
  };

  const disconnectWeb3Modal = async (loaded: boolean = false) => {
    web3Modal.clearCachedProvider();
    if (!loaded) window.location.reload();
  };

  const mint = async (index: number, type: number) => {
    try {
      const resp = await zuesMintContract.publicMint(
        Number(type),
        Number(inputs[index])
      );
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
  const [inputs, setInputs] = useState(["", "", ""]);

  const updateInput = (e: any, i: number) => {
    const nft = e.target.value;
    if (nft > 5)
      return toast({
        title: "Oops!",
        description: "max mint limit is only 5",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    let tempInputs = inputs;
    tempInputs[i] = nft;
    setInputs([...tempInputs]);
  };

  return (
    <Box
      minH="100vh"
      py={{ base: "4", lg: "8" }}
      bg={brandingColors.bgColor}
      backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/how-works-bg.png`}
      backgroundRepeat="no-repeat"
      backgroundPosition={"center"}
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

      <Grid
        columnGap={{ base: "1rem", xl: "1rem" }}
        justifyContent={"space-evenly"}
        alignItems="center"
        gridTemplateColumns={{ base: "1fr" }}
        py={4}
        width={{ base: "90%", lg: "80%", xl: "75%", "2xl": "65%" }}
        mx="auto"
      >
        {nfts.map((nft, index) => (
          <NFT
            {...nft}
            key={index}
            type={nft.type}
            index={index}
            value={inputs[index]}
            mint={() => mint(index, nft.type)}
            updateInput={updateInput}
            slide={index % 2 === 0 ? `fade-down` : `fade-up`}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default NFTs;

interface Props {
  value: string;
  title: string;
  text: string;
  img: string;
  slide: string;
  updateInput: Function;
  index: number;
  mint: Function;
  type: number;
}

export const nfts = [
  {
    type: 1,
    title: "Zeus",
    text: "Thunder NFT",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/zeus.mp4`,
  },
  {
    type: 2,
    title: "Poseidon",
    text: "Trident NFT",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/poseidon.mp4`,
  },
  {
    type: 3,
    title: "Hades",
    text: "Fire NFT",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/hades.mp4`,
  },
];

const NFT = (props: Props) => {
  return (
    <Box data-aos={props.slide}>
      <Box
        alignItems="center"
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        zIndex={300}
        height="100%"
        width={"100%"}
      >
        <video
          muted
          loop
          src={props.img}
          width="260"
          autoPlay
          height="140"
        ></video>
        <Box
          borderRadius="xl"
          backgroundImage={`radial-gradient(circle, #4609c3, #330fa0, #220f7e, #160d5d, #0e063d)`}
          display={"grid"}
          minH="260px"
          boxShadow={"dark-lg"}
          flexGrow={1}
          p={8}
          m={4}
          rowGap="1rem"
        >
          <Box>
            <Text
              color={brandingColors.primaryTextColor}
              fontFamily={brandingFonts.headingFont}
              fontSize={{ base: "xl", lg: "2xl", "2xl": "4xl" }}
              textAlign={"left"}
              fontWeight="bold"
              mb={3}
            >
              {props.title}
            </Text>
            <Text
              color={brandingColors.secondaryTextColor}
              fontWeight={"bold"}
              fontSize={{ base: "xs", md: "sm", xl: "md" }}
              textAlign={"left"}
              fontFamily={brandingFonts.subFont}
            >
              {props.text}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
              debitis quis expedita rerum saepe sint reiciendis? Explicabo
              fugiat provident ab laborum dolorem sit assumenda sapiente libero,
              esse inventore rerum veritatis.
            </Text>
          </Box>
          <Flex
            columnGap={"1rem"}
            bg={brandingColors.bgColor}
            p={4}
            borderRadius="md"
            flexDir={"column"}
          >
            <Flex mb={4} justifyContent={"space-between"} alignItems={"center"}>
              <Text
                fontSize={{ base: "xs", lg: "md", xl: "lg" }}
                fontFamily={brandingFonts.subFont}
                color={brandingColors.primaryButtonColor}
              >
                You Secure
              </Text>
              <Text
                fontSize={{ base: "xs", lg: "md", xl: "lg" }}
                fontFamily={brandingFonts.subFont}
              >
                Balance : 0 {props.title} NFT
              </Text>
            </Flex>
            <Box
              boxShadow={"dark-lg"}
              p={4}
              borderRadius="md"
              bg={brandingColors.bgColor}
            >
              <Flex
                alignItems={"center"}
                my={4}
                justifyContent={"space-between"}
              >
                <Text
                  fontFamily={brandingFonts.subFont}
                  color={brandingColors.primaryButtonColor}
                >
                  {props.title} NFTs
                </Text>
                <Input
                  value={props.value}
                  onChange={(e) => props.updateInput(e, props.index)}
                  defaultValue={1}
                  fontWeight={"bold"}
                  fontFamily={brandingFonts.subFont}
                  color={brandingColors.primaryButtonColor}
                  maxW="48px"
                  type="text"
                  maxLength={1}
                  textAlign="center"
                />
              </Flex>
              <Flex justifyContent={{ base: "center", lg: "flex-end" }}>
                <Box
                  textAlign={"center"}
                  minW="40"
                  fontFamily={brandingFonts.subFont}
                  className="btnc"
                  onClick={() => props.mint()}
                >
                  MINT
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
