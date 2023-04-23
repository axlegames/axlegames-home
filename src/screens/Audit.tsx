import { Box, Image, Icon, Text, Flex } from "@chakra-ui/react";
import Heading from "../components/Heading";
import { brandingColors, brandingFonts } from "../config/brandingColors";

import SP from "../assets/sp.png";
import PS from "../assets/ps.png";
import Marketing from "../assets/market.png";
import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import Marquee from "react-fast-marquee";

import Ninja from "../assets/tchannels/ninja.jpeg";
import Future from "../assets/tchannels/future.jpeg";
import Sherlock from "../assets/tchannels/sherlock.jpeg";
import CCat from "../assets/tchannels/cryptocat.jpeg";
import Zlaunch from "../assets/tchannels/zlaunch.jpeg";
import Sonic from "../assets/tchannels/Sonicwhalescalls.jpeg";
import Mark from "../assets/tchannels/Markgems.jpeg";
import ShillSea from "../assets/tchannels/Shillseals.jpeg";
import DEX from "../assets/tchannels/dwen_exchange.jpeg";
import Doc from "../assets/tchannels/docclub.jpeg";
import Sapphire from "../assets/tchannels/Sapphirecalls.jpeg";
import Monkey from "../assets/tchannels/MonkeyTreasury.jpeg";
import Tweet from "../assets/banner/tweet.png";
import Bitgert from "../assets/bitgert.png";
import Nuls from "../assets/nuls.png";
import Nerve from "../assets/nerve.png";

interface Profile {
  description: string;
  id: number;
  name: string;
  profile_image_url: string;
  public_metrics: {
    followers_count: number;
    following_count: number;
    listed_count: number;
    tweet_count: number;
  };
  username: string;
  verified: boolean;
}

const data = [
  {
    img: Ninja,
    name: "ninjalounge",
  },
  {
    img: Future,
    name: "Future_lounge",
  },
  {
    img: Sherlock,
    name: "Sherlock calls",
  },
  {
    img: CCat,
    name: "Cryptocatcalls",
  },
  {
    img: Zlaunch,
    name: "Zlaunchbotofficial",
  },
  {
    img: Sonic,
    name: "Sonicwhales",
  },
  {
    img: Mark,
    name: "Markgems",
  },
  {
    img: ShillSea,
    name: "Shillseals",
  },
  {
    img: DEX,
    name: "Dwen_Exchange",
  },
  {
    img: Doc,
    name: "doctoreclub",
  },
  {
    img: Sapphire,
    name: "Sapphire calls",
  },
  {
    img: Monkey,
    name: "MonkeyTreasury",
  },
];

const TwitterProfileCard = (props: Profile) => {
  return (
    <Box
      m={4}
      bg={brandingColors.bgColor}
      boxShadow={`0px 0px 4px ${brandingColors.newHighlightColor}`}
      py={{ base: "4" }}
      px={{ base: "2" }}
      borderRadius="xl"
      minW="340px"
      maxW="340px"
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      columnGap={"1rem"}
    >
      <Image
        borderRadius={"10vh"}
        width={"50px"}
        boxShadow={`0px 2px 2px ${brandingColors.newHighlightColor}`}
        maxW="260px"
        borderTopRadius={`0px 0px 4px ${brandingColors.newHighlightColor}`}
        border={`3px solid ${brandingColors.newHighlightColor}`}
        src={props.profile_image_url}
      />
      <Text
        fontSize={"xl"}
        color={brandingColors.secondaryTextColor}
        fontFamily={brandingFonts.headingFont}
        fontWeight="bold"
      >
        {props.username}
      </Text>

      {props.verified ? (
        <Icon
          color={"blue.400"}
          height="28px"
          width={"28px"}
          as={CheckCircleIcon}
        ></Icon>
      ) : null}
    </Box>
  );
};

const Audit = () => {
  const [profiles, setProfiles] = useState<Array<Profile>>([]);

  useEffect(() => {
    fetch("https://api.axlegames.io/axlegames/api/v1/users/twitter/profiles")
      .then(async (res) => {
        const { data } = await res.json();
        setProfiles(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const img = [SP, PS];
  const img0 = [Nuls, Bitgert, Nerve];
  const texts = ["NULS Blockchain", "Bitgert", "Nerve Network"];
  return (
    <Box py={12} zIndex={800}>
      <Box
        borderRadius={"xl"}
        justifyContent={"space-evenly"}
        alignItems="center"
        display={"flex"}
        py={{ base: 12, lg: 24 }}
        px={4}
        columnGap="3rem"
        rowGap={"2rem"}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box>
          <Text
            lineHeight={"1.6"}
            fontSize={{ base: "3xl", md: "6xl", xl: "7xl" }}
            fontFamily={brandingFonts.subFont}
            data-aos="fade-left"
          >
            Elon Musk shilling
          </Text>
          <Text
            data-aos="fade-left"
            lineHeight={"1.6"}
            fontSize={{ base: "3xl", md: "6xl", xl: "7xl" }}
            fontFamily={brandingFonts.subFont}
            color={brandingColors.secondaryTwoTextColor}
          >
            Metamorphosis AI
          </Text>
        </Box>
        <a
          href="https://twitter.com/elonmusk/status/1642710694301929473"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            data-aos="fade-right"
            boxShadow={`0px 0px 156px -4px ${brandingColors.newHighlightColor}`}
            borderRadius={"xl"}
            maxW={{ base: "auto", md: "420px" }}
            src={Tweet}
          />
        </a>
      </Box>
      <Flex
        py={12}
        flexDirection={{ base: "column", xl: "row" }}
        justifyContent={"space-evenly"}
        alignItems={{ base: "center", xl: "start" }}
      >
        <Box>
          <Heading title="Audited and KYC'ED By" />
          <Box>
            <Box
              columnGap={"2rem"}
              flexDirection={{ base: "column", xl: "row" }}
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              {img.map((s, i) => (
                <Image
                  data-aos="fade-up"
                  maxW={{ base: "280px", xl: "320px" }}
                  borderRadius="xl"
                  className="logos"
                  src={s}
                />
              ))}
            </Box>
          </Box>
        </Box>

        <Box>
          <Heading isSub={true} subTitle="STRATEGIC ADVISORS" title=" Our" />
          <Box>
            <Box
              columnGap={"2rem"}
              flexDirection={{ base: "column", xl: "row" }}
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              rowGap="1rem"
            >
              {img0.map((s, i) => (
                <Box
                  data-aos="fade-up"
                  flexDirection={"column"}
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                  textAlign={"center"}
                >
                  <Image
                    style={{ borderRadius: "200%" }}
                    maxW={{ base: "150px", xl: "180px" }}
                    className="logos"
                    src={s}
                  />
                  <Text
                    my={4}
                    fontSize={{ base: "xl" }}
                    fontWeight={"bold"}
                    fontFamily={brandingFonts.subFont}
                  >
                    {texts[i].toUpperCase()}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Flex>
      <Box
        bg={brandingColors.bgColor}
        backgroundImage={`https://axlegames.s3.ap-south-1.amazonaws.com/theme_assets/images/counter-bg.png`}
        py={16}
      >
        <Heading
          isSub={true}
          isTeam={true}
          subTitle="GLOBAL MARKETING PARTNERS"
          title="our"
        />

        <Marquee direction="left" gradientWidth={0} speed={60}>
          {profiles.map((profile, index) => (
            <TwitterProfileCard key={index} {...profile} />
          ))}
        </Marquee>
        <Marquee direction="right" gradientWidth={0} speed={120}>
          {data.map((profile, index) => (
            <TwitterProfileCard
              key={index}
              description=""
              name=""
              id={0}
              public_metrics={{
                followers_count: 0,
                following_count: 0,
                listed_count: 0,
                tweet_count: 0,
              }}
              verified={true}
              username={profile.name}
              profile_image_url={profile.img}
            />
          ))}
        </Marquee>

        <Box
          display={"flex"}
          justifyContent="center"
          flexDirection={"column"}
          alignItems={"center"}
          py={12}
        >
          <Heading
            isTeam={true}
            subTitle="CHINESE MARKETING PARTNERS"
            isSub={true}
            title="OUR"
          />
          <Box
            data-aos="fade-up"
            borderRadius={"md"}
            bg={brandingColors.highLightColor}
          >
            <Image
              borderRadius={"xl"}
              maxW={{ base: "386px", md: "512px", lg: "786px" }}
              src={Marketing}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Audit;
