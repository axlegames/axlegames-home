import { Box, Flex, Image, Text } from "@chakra-ui/react";
import creds from "../abi/creds";
import { brandingColors, brandingFonts } from "../config/brandingColors";

const SuccessfulMintDialog = (props: any) => {
  return (
    <Box display={"flex"} py={16} px={0} flexDirection="column" rowGap={"1rem"}>
      <Flex
        direction={"column"}
        justifyContent="center"
        rowGap={"1rem"}
        alignItems={"center"}
        fontFamily={brandingFonts.headingFont}
      >
        <Image
          width={"50%"}
          src={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/gamein/checked.webp`}
        />
        <Text fontFamily={brandingFonts.headingFont} fontSize={"xl"}>
          Hooray!
        </Text>{" "}
        <Text fontFamily={brandingFonts.headingFont} fontSize={"md"}>
          {" "}
          You have minted nfts
        </Text>
        <a
          href={creds.blockChainUrl + props.hash}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Box
            cursor={"pointer"}
            transition={`100ms all ease-in`}
            textAlign="center"
          >
            <Text
              as="u"
              fontSize={"md"}
              color={brandingColors.primaryTextColor}
              textUnderlineOffset={"unset"}
            >
              check transaction on blockchain
            </Text>
          </Box>
        </a>
        <Text
          color={brandingColors.dangerColor}
          textAlign={"left"}
          fontSize={"sm"}
        >
          **please refresh the page after 2 minutes for the updated AXLE
        </Text>
      </Flex>
    </Box>
  );
};
export default SuccessfulMintDialog;
