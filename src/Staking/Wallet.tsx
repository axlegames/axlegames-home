import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { brandingColors } from "../config/brandingColors";

interface Props {
  connectWallet: Function;
  openWallet: boolean;
  address: string;
  balance: any;
  isLoading: boolean;
  setOpenWallet: Function;
  disconnect: Function;
}

const headingFont = "Russo One";
const subFont = "Inter";

const Wallet = (props: Props) => {
  const DropDown = () => {
    return (
      <Box>
        {props.openWallet ? (
          <Box
            onClick={() => props.setOpenWallet(!props.openWallet)}
            width={"100%"}
            bottom={"-235%"}
            zIndex={200}
            p={2}
            bg={brandingColors.newHighlightColor}
            position="absolute"
            display={"flex"}
            flexDirection="column"
            alignItems={"center"}
            borderRadius="md"
            justifyContent="center"
            minH={"90px"}
          >
            <Box
              width={"100%"}
              textAlign="center"
              borderRadius="md"
              display={"flex"}
              justifyContent="center"
              flexDirection={"column"}
              bg={brandingColors.bgColor}
              p={2}
            >
              <Text
                fontFamily={headingFont}
                color={brandingColors.secondaryTextColor}
                fontSize="sm"
              >
                Your wallet balance
              </Text>
              <Text
                fontFamily={headingFont}
                fontSize={"md"}
                color={brandingColors.secondaryTextColor}
              >
                {Number(props.balance).toFixed(2)} BNB{" "}
              </Text>
            </Box>
            <Button
              fontWeight={"bold"}
              _hover={{
                bg: brandingColors.ternaryButtonColor,
              }}
              bg={brandingColors.bgColor}
              color={brandingColors.secondaryTextColor}
              mt={"1"}
              fontFamily={headingFont}
              width={"100%"}
              onClick={() => props.disconnect()}
            >
              Disconnect
            </Button>
          </Box>
        ) : null}
      </Box>
    );
  };

  return (
    <Box columnGap={"2rem"} display={{ base: "none", md: "flex" }} minW="64px">
      <Flex
        my={3}
        display={{ base: "flex" }}
        rowGap={{ base: "1rem" }}
        alignItems={"center"}
        justifyContent={{ base: "center" }}
        flexDirection={{ base: "row" }}
        columnGap="1rem"
      ></Flex>
      {props.address !== "" ? (
        <Box
          position="relative"
          display={{ base: "none", md: "flex" }}
          bg={brandingColors.bgColor}
          my={4}
          borderRadius="md"
          columnGap={"1rem"}
          cursor={"pointer"}
          py={2}
          onClick={() => props.setOpenWallet(!props.openWallet)}
        >
          <DropDown />
          <Box display={"flex"} alignItems="center">
            <Image
              bg={brandingColors.bgColor}
              p={2}
              borderRadius="3xl"
              width={"42px"}
              src={`https://axlegames.s3.ap-south-1.amazonaws.com/bnb.png`}
            />
          </Box>

          <Box pr={4}>
            <Text
              fontFamily={headingFont}
              fontSize={"md"}
              color={brandingColors.secondaryTextColor}
              lineHeight="1.5"
            >
              {!props.isLoading
                ? `${Number(props.balance).toFixed(2)} BNB`
                : `...`}
            </Text>
            {props.address !== "" ? (
              <Flex
                color={brandingColors.secondaryTextColor}
                direction={"column"}
              >
                <Text
                  fontWeight={"bold"}
                  lineHeight="1.2"
                  fontFamily={subFont}
                  fontSize={"xs"}
                >
                  {props.address.substring(0, 8)}....
                  {props.address.substring(
                    props.address.length - 8,
                    props.address.length
                  )}
                </Text>
              </Flex>
            ) : null}
          </Box>
        </Box>
      ) : (
        <Box m={5}>
          <Box
            fontFamily={headingFont}
            className="btnc"
            onClick={() => props.connectWallet()}
          >
            Connect Wallet
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Wallet;
