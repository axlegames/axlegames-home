import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { brandingColors } from "../config/brandingColors";
import NeuButton from "../components/NeuButton";
import "../components/navbar/Navbar.css";
import Ban from "../assets/banner.png";

import Twitter from "../assets/socials/twitter.svg";
import Telegram from "../assets/socials/telegram.svg";
import Youtube from "../assets/socials/youtube.svg";
import Link from "../assets/socials/link.svg";
import { useState } from "react";
import { socials } from "../config/data";

const Giveaway = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Box
      bg={brandingColors.bgColor}
      backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/bg/token_bg.png`}
      minH="100vh"
      minW="100vw"
    >
      <Box
        pt={8}
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        flexDirection="column"
        rowGap={"2rem"}
        width={{ base: "100%", sm: "95%", md: "85%", lg: "75%", xl: "55%" }}
        margin="auto"
        textAlign={"center"}
      >
        <Text
          fontFamily={`'Russo One', sans-serif`}
          fontWeight="bold"
          fontSize={{ base: "2xl", sm: "4xl", md: "5xl" }}
          color={brandingColors.primaryTextColor}
          mt={8}
        >
          Exclusive $5,000 Giveaway!
        </Text>
        <Box
          width={"100%"}
          justifyContent="space-evenly"
          alignItems={"center"}
          bg={brandingColors.bgColor}
          display={"flex"}
          fontSize={{ base: "3xl" }}
          fontWeight="bold"
          border={`3px solid ${brandingColors.bgColor}`}
          borderRadius="lg"
          p={2}
          columnGap=".5rem"
        >
          <Box
            onClick={() => setToggle(false)}
            cursor={"pointer"}
            width={"100%"}
            boxShadow={"md"}
            transition={`200ms all ease-in`}
            borderRadius="md"
            bg={
              !toggle ? brandingColors.primaryTextColor : brandingColors.fgColor
            }
            color={
              toggle ? brandingColors.primaryTextColor : brandingColors.fgColor
            }
          >
            Join
          </Box>
          <Box
            onClick={() => setToggle(true)}
            borderRadius="md"
            boxShadow={"md"}
            cursor={"pointer"}
            width={"100%"}
            transition={`200ms all ease-in`}
            bg={
              toggle ? brandingColors.primaryTextColor : brandingColors.fgColor
            }
            color={
              !toggle ? brandingColors.primaryTextColor : brandingColors.fgColor
            }
          >
            Check
          </Box>
        </Box>

        {!toggle ? <Join toggle={toggle} /> : <Check />}
        <Box
          flexDirection={"column"}
          display={"flex"}
          justifyContent={"center"}
          textAlign="left"
          fontWeight={"bold"}
          rowGap="1rem"
          px={4}
          mt={4}
        >
          <Text color={brandingColors.successColor}>
            Note: We will manually check each wallet and social account, if you
            unfollow AxleGames social accounts before the giveaway date, your
            wallet will be excluded and not be eligible for the giveaway.
          </Text>
          <Text color={brandingColors.dangerColor}>
            Warning: Never share your Seed Phrase / Private Key with anyone. We
            will NEVER ask for private keys/phrases or to send funds. We will
            never ask you to connect a wallet to a website to get an giveaway.
            If someone asks you to connect a wallet to get an giveaway on a
            website, it is a scammer, and beware of all scammers.
          </Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        flexDirection="column"
        pb={28}
      >
        <Image
          my={4}
          width={{ base: "220px" }}
          src={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/logo.png`}
        />
        <Text
          fontFamily={`'Russo One', sans-serif`}
          fontSize={"3xl"}
          color={brandingColors.primaryTextColor}
        >
          AxleGames
        </Text>
        <Text
          fontFamily={`'Russo One', sans-serif`}
          fontSize={"xl"}
          color={brandingColors.secondaryTextColor}
        >
          Singapore
        </Text>
      </Box>
      <Box
        boxShadow={"xl"}
        py={3}
        fontWeight="bold"
        width={"100vw"}
        bg={brandingColors.fgColor}
        position="fixed"
        bottom={0}
      >
        <Flex
          flexDirection={{ base: "column", lg: "row" }}
          color={brandingColors.secondaryTextColor}
          alignItems={"center"}
          mx={12}
          justifyContent={"space-between"}
          rowGap="1rem"
        >
          <Box>AxleGames 2022 © All right reserved</Box>
          <Flex
            flexDirection={{ base: "column", lg: "row" }}
            columnGap={"2rem"}
            alignItems="center"
            justifyContent="center"
          >
            <Text>Terms & Conditions</Text>
            <Text>Privacy Policy</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

interface form {
  label: string;
  onChange: Function;
  placeholder: string;
}

const FormInput = (input: form) => {
  return (
    <Box width={"100%"}>
      <FormControl>
        <FormLabel color={brandingColors.primaryTextColor}>
          {input.label}
        </FormLabel>
        <Input
          width={"100%"}
          required={true}
          fontWeight={"bold"}
          color={brandingColors.primaryButtonColor}
          placeholder={input.placeholder}
          onChange={() => input.onChange()}
        ></Input>
      </FormControl>
    </Box>
  );
};

const Check = () => {
  return (
    <Box width={"100%"}>
      <Box
        display={"flex"}
        rowGap="1rem"
        flexDirection={"column"}
        width={{ base: "100%", sm: "95%", md: "85%", lg: "65%", xl: "55%" }}
        margin="auto"
        px={4}
      >
        <Text textAlign={"left"} color={brandingColors.primaryTextColor}>
          Please Enter the wallet address
        </Text>
        <FormInput
          label="Wallet Address"
          onChange={() => {}}
          placeholder="Wallet Address"
        />

        <div className="btn">Submit</div>
      </Box>
    </Box>
  );
};

const Join = (props: any) => {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      flexDirection="column"
      rowGap={"1rem"}
      transition={`200ms all ease-in`}
    >
      <Image px={8} maxW={"720px"} borderRadius="xl" src={Ban} />
      <Box
        display={"flex"}
        justifyContent="center"
        flexDirection={"column"}
        color={brandingColors.secondaryTextColor}
        alignItems="center"
        rowGap={"2rem"}
        px={8}
      >
        <Text
          fontFamily={`'Russo One', sans-serif`}
          color={brandingColors.primaryTextColor}
          fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
        >
          Rules for the $5K AXLE Giveaway*:
        </Text>
        <Box
          display={"flex"}
          flexDirection={"column"}
          color={brandingColors.secondaryTextColor}
          rowGap={"2rem"}
          textAlign={"left"}
          fontWeight="bold"
        >
          <Box>
            <Text fontSize={{ base: "sm", sm: "lg", md: "xl" }}>
              1. Follow AxleGames Official Social Accounts:
            </Text>
            <Box>
              <Flex
                fontSize={{ base: "sm", sm: "md", md: "lg" }}
                justifyContent={"space-between"}
                alignItems="center"
              >
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href="https://t.me/axlegames_en"
                >
                  <Flex
                    cursor={"pointer"}
                    justifyContent={"center"}
                    alignItems="center"
                    onClick={() => {}}
                  >
                    <Image width={"16"} src={Telegram} />
                    <Text>Telegram Group</Text>
                  </Flex>
                </a>
                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href="https://twitter.com/AxleGames"
                >
                  <Flex
                    cursor={"pointer"}
                    justifyContent={"center"}
                    alignItems="center"
                  >
                    <Image width={"16"} src={Twitter} />
                    <Text>Twitter</Text>
                  </Flex>
                </a>

                <a
                  target={"_blank"}
                  rel="noopener noreferrer"
                  href="https://t.me/axlegames"
                >
                  <Flex
                    cursor={"pointer"}
                    justifyContent={"center"}
                    alignItems="center"
                  >
                    <Image width={"16"} src={Telegram} />
                    <Text>Telegram Announcements</Text>
                  </Flex>
                </a>
              </Flex>
            </Box>
          </Box>
          <Box
            display={"flex"}
            justifyContent="space-between"
            flexDirection={"column"}
            rowGap="1rem"
          >
            <Text fontSize={{ base: "sm", sm: "lg", md: "xl" }}>
              2. Like + Retweet + Tag 3 Friends
            </Text>
            <Flex
              justifyContent={"space-evenly"}
              alignItems="center"
              fontSize={{ base: "sm", sm: "md", md: "lg" }}
            >
              <Flex
                cursor={"pointer"}
                justifyContent={"center"}
                alignItems="center"
                columnGap={".25rem"}
              >
                <Image width={"6"} src={Link} />
                <Text>Twitter Link 1</Text>
              </Flex>

              <Flex
                cursor={"pointer"}
                justifyContent={"center"}
                alignItems="center"
                columnGap={".25rem"}
              >
                <Image width={"6"} src={Link} />
                <Text>Twitter Link 2</Text>
              </Flex>
            </Flex>
          </Box>

          <Text fontSize={{ base: "sm", sm: "lg", md: "xl" }}>
            3. Submit Your BEP-20 Wallet Address and Twitter/Telegram Username
          </Text>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        rowGap="1rem"
        flexDirection={"column"}
        width={{ base: "100%", sm: "95%", md: "85%", lg: "65%", xl: "55%" }}
        margin="auto"
        px={4}
      >
        <FormInput
          label="Twitter username"
          onChange={() => {}}
          placeholder="Twitter Handle"
        />

        <FormInput
          label="Telegram username"
          onChange={() => {}}
          placeholder="Telegram Username"
        />

        <FormInput
          label="Wallet Address"
          onChange={() => {}}
          placeholder="Wallet Address"
        />

        <div style={{ width: "100%" }} className="btn">
          Submit
        </div>
      </Box>
    </Box>
  );
};

export default Giveaway;
