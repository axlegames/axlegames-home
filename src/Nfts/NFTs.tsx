import {
  Box,
  Flex,
  Image,
  Input,
  List,
  Progress,
  Tag,
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
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

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
  const [balances, setBalances] = useState(["0", "0", "0"]);

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

      const zuesBalance = Number(
        ethers.utils.formatEther(
          await zuesMintContractc.balanceOf(web3Accounts[0], 1)
        )
      ).toFixed(0);
      const posBalance = Number(
        ethers.utils.formatEther(
          await zuesMintContractc.balanceOf(web3Accounts[0], 2)
        )
      ).toFixed(0);
      const hadesBalance = Number(
        ethers.utils.formatEther(
          await zuesMintContractc.balanceOf(web3Accounts[0], 3)
        )
      ).toFixed(0);

      setBalances([zuesBalance, posBalance, hadesBalance]);
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
      if (address === "") return connectWeb3Wallet();
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
  const [inputs, setInputs] = useState([1, 1, 1]);

  const updateInput = (e: number, i: number) => {
    if (e <= 0) {
      return toast({
        title: "Oops!",
        description: "min mint limit is 1",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }

    if (e > 5)
      return toast({
        title: "Oops!",
        description: "max mint limit is only 5",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    let tempInputs = inputs;
    tempInputs[i] = e;
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

      <Flex
        columnGap={{ base: "1rem", xl: "1rem" }}
        justifyContent="center"
        flexDir={{ base: "column", xl: "row" }}
        alignItems="center"
        py={4}
        mx="auto"
      >
        {nfts.map((nft, index) => (
          <NFT
            {...nft}
            key={index}
            type={nft.type}
            balance={balances[index]}
            index={index}
            value={inputs[index].toString()}
            mint={() => mint(index, nft.type)}
            updateInput={updateInput}
            price={nft.price}
            slide={index % 2 === 0 ? `fade-down` : `fade-up`}
          />
        ))}
      </Flex>
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
  price: number;
  t: string;
  attributes: {
    power: number;
    luck: number;
    efficiency: number;
    resilience: number;
  };
  balance: string;
}

export const nfts = [
  {
    type: 1,
    title: "Zeus",
    text: "Thunder NFT",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/zeus.mp4`,
    price: 1,
    attributes: { power: 10, luck: 8, efficiency: 7, resilience: 6 },
    t: "LEGENDARY",
  },
  {
    type: 2,
    title: "Poseidon",
    text: "Trident NFT",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/poseidon.mp4`,
    price: 0.5,
    attributes: { power: 8, luck: 6, efficiency: 6, resilience: 7 },
    t: "RARE",
  },
  {
    type: 3,
    title: "Hades",
    text: "Fire NFT",
    img: `https://axlegames.s3.ap-south-1.amazonaws.com/hades.mp4`,
    price: 0.3,
    attributes: { power: 7, luck: 5, efficiency: 5, resilience: 7 },
    t: "EPIC",
  },
];

const NFT = (props: Props) => {
  let t = "";
  if (props.t === "LEGENDARY") t = "yellow.400";
  if (props.t === "RARE") t = "purple.400";
  if (props.t === "EPIC") t = "cyan.400";

  return (
    <Box data-aos={props.slide}>
      <Box
        alignItems="center"
        display="flex"
        flexDirection={{ base: "column" }}
        zIndex={300}
        height="100%"
        width={"100%"}
      >
        <Box
          borderRadius="xl"
          backgroundImage={`radial-gradient(circle, #4609c3, #330fa0, #220f7e, #160d5d, #0e063d)`}
          display={"grid"}
          justifyContent={"center"}
          alignItems={"center"}
          boxShadow={"dark-lg"}
          flexGrow={1}
          p={4}
          m={4}
          rowGap="1rem"
        >
          <Text
            color={brandingColors.primaryTextColor}
            fontFamily={brandingFonts.headingFont}
            fontSize={{ base: "xl", lg: "2xl", "2xl": "3xl" }}
            textAlign={"center"}
            fontWeight="bold"
            mb={3}
          >
            {props.title}
          </Text>
          <Box display={"flex"} justifyContent="center">
            <video
              muted
              loop
              src={props.img}
              width="260"
              autoPlay
              height="180"
            ></video>
          </Box>
          <Text
            color={brandingColors.secondaryTwoTextColor}
            textShadow={`0px 0px 4px ${brandingColors.newHighlightColor}`}
            fontWeight={"bold"}
            fontSize={{ base: "2xl" }}
            textAlign={"center"}
            fontFamily={brandingFonts.subFont}
          >
            {props.text}
          </Text>

          <Flex columnGap={"1rem"} borderRadius="md" flexDir={"column"}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Text
                fontSize={{ base: "xs", lg: "sm" }}
                fontFamily={brandingFonts.subFont}
              >
                Price :{" "}
                <Box
                  display={"inline"}
                  color={brandingColors.primaryButtonColor}
                  fontWeight="bold"
                >
                  {props.price} BNB
                </Box>
              </Text>

              <Text
                fontSize={{ base: "xs", lg: "sm" }}
                fontFamily={brandingFonts.subFont}
              >
                Balance :{" "}
                <Box
                  display={"inline"}
                  color={brandingColors.primaryButtonColor}
                  fontWeight="bold"
                >
                  {props.balance} {props.title} NFT
                </Box>
              </Text>
            </Flex>
            <Box borderRadius="md">
              <Flex
                alignItems={"center"}
                my={4}
                justifyContent="space-between"
                columnGap={"2rem"}
              >
                <Flex justifyContent={{ base: "center" }}>
                  <Box
                    boxShadow={"dark-lg"}
                    textAlign={"center"}
                    minW="40"
                    fontFamily={brandingFonts.subFont}
                    className="btnc"
                    onClick={() => props.mint()}
                  >
                    MINT
                  </Box>
                </Flex>
                <Flex
                  justifyContent={"space-evenly"}
                  columnGap="1rem"
                  alignItems={"center"}
                >
                  <MinusIcon
                    onClick={(e) =>
                      props.updateInput(Number(props.value) - 1, props.index)
                    }
                    cursor={"pointer"}
                    color={brandingColors.primaryButtonColor}
                  />
                  <Input
                    value={props.value}
                    onChange={(e) =>
                      props.updateInput(Number(e.target?.value), props.index)
                    }
                    defaultValue={1}
                    fontWeight={"bold"}
                    fontFamily={brandingFonts.subFont}
                    color={brandingColors.primaryButtonColor}
                    maxW="48px"
                    type="text"
                    maxLength={1}
                    textAlign="center"
                  />

                  <AddIcon
                    onClick={(e) =>
                      props.updateInput(Number(props.value) + 1, props.index)
                    }
                    cursor={"pointer"}
                    color={brandingColors.primaryButtonColor}
                  />
                </Flex>
              </Flex>
            </Box>
          </Flex>

          <List>
            <Flex my={2} justifyContent={"space-between"}>
              <Text
                color={brandingColors.primaryButtonColor}
                textShadow={`0px 0px 2px ${brandingColors.primaryButtonColor}`}
                fontWeight={"bold"}
                fontSize={{ base: "md" }}
                textAlign={"left"}
                fontFamily={brandingFonts.headingFont}
              >
                ATTRIBUTES
              </Text>
              <Tag boxShadow={"dark-lg"} bg={brandingColors.bgColor}>
                <Box
                  color={t}
                  fontWeight={"bold"}
                  fontSize={{ base: "md" }}
                  textAlign={"left"}
                  fontFamily={brandingFonts.headingFont}
                >
                  {props.t}
                </Box>
              </Tag>
            </Flex>

            <Box my={5}>
              <Box
                display={"grid"}
                justifyContent="center"
                alignItems={"center"}
                columnGap="1rem"
                my={4}
                gridTemplateColumns={"3fr 5fr .5fr"}
              >
                <Text
                  fontSize={{ base: "xs", lg: "sm" }}
                  fontFamily={brandingFonts.subFont}
                >
                  POWER{" "}
                </Text>
                <Progress
                  borderRadius={"xl"}
                  hasStripe
                  isAnimated
                  max={10}
                  min={0}
                  bg={brandingColors.bgColor}
                  height="32px"
                  colorScheme="orange"
                  value={props.attributes.power}
                  pos="relative"
                  width={"100%"}
                />
                <Text
                  fontSize={{ base: "xs", lg: "sm" }}
                  fontFamily={brandingFonts.subFont}
                  color="orange"
                >
                  {props.attributes.power}/10
                </Text>
              </Box>
              <Box
                display={"grid"}
                justifyContent="center"
                alignItems={"center"}
                columnGap="1rem"
                my={4}
                gridTemplateColumns={"3fr 5fr .5fr"}
              >
                <Text
                  fontSize={{ base: "xs", lg: "sm" }}
                  fontFamily={brandingFonts.subFont}
                >
                  LUCK
                </Text>
                <Progress
                  borderRadius={"xl"}
                  hasStripe
                  isAnimated
                  max={10}
                  min={0}
                  bg={brandingColors.bgColor}
                  height="32px"
                  width={"100%"}
                  colorScheme="green"
                  value={props.attributes.luck}
                />
                <Text
                  fontSize={{ base: "xs", lg: "sm" }}
                  fontFamily={brandingFonts.subFont}
                  color="green"
                >
                  {props.attributes.luck}/10
                </Text>
              </Box>
              <Box
                display={"grid"}
                justifyContent="center"
                alignItems={"center"}
                columnGap="1rem"
                my={4}
                gridTemplateColumns={"3fr 5fr .5fr"}
              >
                <Text
                  fontSize={{ base: "xs", lg: "sm" }}
                  fontFamily={brandingFonts.subFont}
                  width="100%"
                >
                  EFFICIENCY
                </Text>
                <Progress
                  borderRadius={"xl"}
                  hasStripe
                  isAnimated
                  max={10}
                  min={0}
                  bg={brandingColors.bgColor}
                  height="32px"
                  width={"100%"}
                  colorScheme="pink"
                  value={props.attributes.efficiency}
                />
                <Text
                  fontSize={{ base: "xs", lg: "sm" }}
                  fontFamily={brandingFonts.subFont}
                  color="pink"
                >
                  {props.attributes.efficiency}/10
                </Text>
              </Box>
              <Box
                display={"grid"}
                justifyContent="center"
                alignItems={"center"}
                columnGap="1rem"
                my={4}
                gridTemplateColumns={"3fr 5fr .5fr"}
              >
                <Text
                  fontSize={{ base: "xs", lg: "sm" }}
                  fontFamily={brandingFonts.subFont}
                  width="100%"
                >
                  RESILIENCE
                </Text>
                <Progress
                  borderRadius={"xl"}
                  hasStripe
                  isAnimated
                  max={10}
                  min={0}
                  bg={brandingColors.bgColor}
                  height="32px"
                  width={"100%"}
                  colorScheme="blue"
                  value={props.attributes.resilience}
                />
                <Text
                  fontSize={{ base: "xs", lg: "sm" }}
                  fontFamily={brandingFonts.subFont}
                  color="blue.300"
                >
                  {props.attributes.resilience}/10
                </Text>
              </Box>
            </Box>
          </List>
        </Box>
      </Box>
    </Box>
  );
};
