import GIFI from "../assets/ticket.gif";
import { brandingColors, brandingFonts } from "../config/brandingColors";
import { Box, Flex, Image, Text, Button, Divider } from "@chakra-ui/react";

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
      <Text fontSize={{ base: "2xl" }} fontFamily={brandingFonts.headingFont}>
        {props.title}
      </Text>
      <Text
        fontSize={"md"}
        fontWeight={"bold"}
        fontFamily={brandingFonts.readingFont}
      >
        {props.sub}
      </Text>
    </Box>
  );
};

const Mint = () => {
  return (
    <Box bg={brandingColors.bgColor}>
      <Box
        width={{ base: "100%", md: "90%" }}
        mx="auto"
        p={{ base: 2, lg: 12 }}
        columnGap="6rem"
        display={"flex"}
        bg={brandingColors.bgColor}
        justifyContent="space-evenly"
      >
        <Box
          alignItems={"center"}
          display={"flex"}
          flexDir="column"
          justifyContent={"center"}
          pos="relative"
        >
          <Box borderLeft={"1px dotted #ffffff"}>
            <Header
              number={1}
              sub="Enter a ticket number between (000001 -999999) to reveal your
              ticket design."
              title="Enter Ticket Number"
            />
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              pos={"relative"}
            >
              <Divider mb="8" mx="auto" width={"80%"} />
              <Text
                top={"-24px"}
                fontWeight={"bold"}
                fontFamily={brandingFonts.headingFont}
                color={brandingColors.primaryButtonColor}
                fontSize={"3xl"}
                zIndex={10000}
                p={2}
                boxShadow="dark-lg"
                bg={brandingColors.bgColor}
                pos={"absolute"}
              >
                or
              </Text>
            </Box>
            <Header
              number={0}
              sub="Use our random generator to get a random ticket design and number."
              title="Generate Random"
            />
          </Box>
          <Header
            number={2}
            title="Purchase Ticket"
            sub="Complete payment to purchase and own your one of a kind NFT ticket."
          />
          <Header
            number={3}
            title="Own, Earn, Donate"
            sub="Your tickets will be automatically enrolled in all weekly and Grand
            Prize draws. For each purchased ticket we will donate part of the
            ticket fees to charity organizations."
          />
        </Box>
        <Box
          display={"flex"}
          rowGap="2rem"
          flexDir={"column"}
          borderRadius={"xl"}
          p={8}
          bg={brandingColors.newHighlightColor}
          justifyContent="center"
          alignItems={"center"}
        >
          <Text fontSize={{ base: "2xl" }} fontFamily={brandingFonts.subFont}>
            Mint your ticket to reveal your NFT
          </Text>
          <Image src={GIFI} />
          <Flex width={"100%"} px={8} justifyContent={"space-between"}>
            <Box>
              <Text
                fontSize={{ base: "xl" }}
                fontFamily={brandingFonts.readingFont}
                fontWeight="bold"
              >
                DCB World x BRITTO
              </Text>
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl" }}
                fontFamily={brandingFonts.readingFont}
              >
                Edition #000001
              </Text>
            </Box>
            <Box>
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl" }}
                fontFamily={brandingFonts.readingFont}
                color={brandingColors.primaryButtonColor}
              >
                Price
              </Text>
              <Text
                fontWeight="bold"
                fontSize={{ base: "xl" }}
                fontFamily={brandingFonts.readingFont}
                color={brandingColors.primaryButtonColor}
              >
                0.2
              </Text>
            </Box>
          </Flex>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            flexDir="column"
          >
            <Text
              fontWeight={"normal"}
              fontSize={{ base: "lg" }}
              fontFamily={brandingFonts.subFont}
              color={brandingColors.secondaryTwoTextColor}
            >
              Enter a 6 digits Ticket Number and click on Buy Now
            </Text>
            <Box>
              <Flex my={3} columnGap={".5rem"}>
                {[4, 6, 8, 5, 3].map((m, i) => (
                  <Box
                    borderRadius={"xl"}
                    py={2}
                    px={3}
                    bg={brandingColors.bgColor}
                    key={i}
                  >
                    <Text
                      fontSize={"xl"}
                      fontFamily={brandingFonts.subFont}
                      color={brandingColors.primaryButtonColor}
                    >
                      {m}
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Box>
            <Text
              fontWeight={"normal"}
              fontSize={{ base: "md" }}
              fontFamily={brandingFonts.subFont}
            >
              This ticket number is already sold. Choose a different number.
            </Text>
            <Box
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              pos={"relative"}
            >
              <Divider
                h={2}
                bg={brandingColors.bgColor}
                my="8"
                mx="auto"
                width={"80%"}
              />
              <Text
                fontWeight={"bold"}
                fontFamily={brandingFonts.headingFont}
                color={brandingColors.primaryButtonColor}
                fontSize={"3xl"}
                zIndex={10000}
                p={2}
                boxShadow="dark-lg"
                bg={brandingColors.bgColor}
                pos={"absolute"}
                borderRadius="xl"
              >
                or
              </Text>
            </Box>
            <Text
              fontSize={"2xl"}
              fontFamily={brandingFonts.subFont}
              color={brandingColors.secondaryTextColor}
              mb={4}
              cursor="pointer"
            >
              GENERATE RANDOM TICKET
            </Text>
            <Button
              fontWeight={"normal"}
              fontSize={{ base: "2xl" }}
              fontFamily={brandingFonts.subFont}
              color={brandingColors.primaryButtonColor}
              bg={brandingColors.bgColor}
              boxShadow="dark-lg"
            >
              Connect wallet
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mint;
