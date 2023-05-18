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
    >
      <Text
        left={"-14px"}
        pos={"absolute"}
        color={brandingColors.primaryButtonColor}
        fontFamily={brandingFonts.headingFont}
        bg={brandingColors.newHighlightColor}
        px={2}
        borderRadius="xl"
        py={props.number !== 0 ? 1 : 0}
      >
        {props.number !== 0 ? props.number : null}
      </Text>
      <Text fontSize={{ base: "4xl" }} fontFamily={brandingFonts.headingFont}>
        {props.title}
      </Text>
      <Text fontWeight={"bold"} fontFamily={brandingFonts.readingFont}>
        {props.sub}
      </Text>
    </Box>
  );
};

const Mint = () => {
  return (
    <Box
      p={{ base: 2, lg: 12 }}
      columnGap="6rem"
      display={"flex"}
      bg={brandingColors.bgColor}
      justifyContent="space-evenly"
    >
      <Box
        rowGap={"3rem"}
        alignItems={"center"}
        display={"flex"}
        flexDir="column"
        justifyContent={"center"}
        pos="relative"
      >
        <Box>
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
            <Divider my="8" mx="auto" width={"80%"} />
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
      >
        <Text fontSize={{ base: "3xl" }} fontFamily={brandingFonts.subFont}>
          Mint your ticket to reveal your NFT
        </Text>
        <Image src={GIFI} />
        <Flex justifyContent={"space-between"}>
          <Box>
            <Text
              fontSize={{ base: "2xl" }}
              fontFamily={brandingFonts.readingFont}
              fontWeight="bold"
            >
              DCB World x BRITTO
            </Text>
            <Text
              fontWeight="bold"
              fontSize={{ base: "2xl" }}
              fontFamily={brandingFonts.readingFont}
            >
              Edition #000001
            </Text>
          </Box>
          <Box>
            <Text
              fontWeight="bold"
              fontSize={{ base: "2xl" }}
              fontFamily={brandingFonts.readingFont}
              color={brandingColors.primaryButtonColor}
            >
              Price
            </Text>
            <Text
              fontWeight="bold"
              fontSize={{ base: "2xl" }}
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
            color={brandingColors.primaryButtonColor}
          >
            Enter a 6 digits Ticket Number and click on Buy Now
          </Text>
          <Box>
            <Flex my={8} columnGap={"1rem"}>
              {[4, 6, 8, 5, 3].map((m, i) => (
                <Box
                  borderRadius={"xl"}
                  py={4}
                  px={5}
                  bg={brandingColors.bgColor}
                  key={i}
                >
                  <Text
                    fontSize={"3xl"}
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
            fontSize={{ base: "lg" }}
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
  );
};

export default Mint;
