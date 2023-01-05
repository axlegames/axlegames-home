import { powerdby } from "../config/data";
import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { brandingColors } from "../config/brandingColors";
import { Box, Divider, Flex, Grid, Icon, Image, Text } from "@chakra-ui/react";

import Marquee from "react-fast-marquee";
import Heading from "../components/Heading";

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

const PoweredBy = (props: any) => {
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

  const TwitterProfileCard = (props: Profile) => {
    return (
      <Box
        m={4}
        bg={brandingColors.bgColor}
        boxShadow={`5px 5px 13px #05192d, -5px -5px 13px #072341`}
        p={{ base: "4" }}
        borderRadius="xl"
        minW="216px"
        display={"flex"}
        justifyContent="center"
        flexDirection={"column"}
        alignItems="center"
      >
        <Image
          borderRadius={"10vh"}
          width={"60px"}
          src={props.profile_image_url}
        />
        <Flex justifyContent={"center"} alignItems="center" columnGap={".2rem"}>
          <Text
            color={brandingColors.secondaryTextColor}
            fontFamily={`'Russo One', sans-serif`}
          >
            {props.username}
          </Text>
          {props.verified ? (
            <Icon color={"blue.400"} as={CheckCircleIcon}></Icon>
          ) : null}
        </Flex>
        <Divider my={4} />
        <Flex columnGap="2rem">
          <Flex
            flexDirection={"column"}
            justifyContent="center"
            alignItems={"center"}
          >
            <Text
              fontFamily={`'Russo One', sans-serif`}
              color={brandingColors.primaryTextColor}
              fontSize="xl"
            >
              {props.public_metrics.followers_count}
            </Text>
            <Text color={brandingColors.secondaryTextColor} fontSize={"sm"}>
              Followers
            </Text>
          </Flex>
          <Flex
            flexDirection={"column"}
            justifyContent="center"
            alignItems={"center"}
          >
            <Text
              fontFamily={`'Russo One', sans-serif`}
              color={brandingColors.primaryTextColor}
              fontSize="xl"
            >
              {props.public_metrics.following_count}{" "}
            </Text>
            <Text color={brandingColors.secondaryTextColor} fontSize={"sm"}>
              Following
            </Text>
          </Flex>
          <Flex
            flexDirection={"column"}
            justifyContent="center"
            alignItems={"center"}
          >
            <Text
              fontFamily={`'Russo One', sans-serif`}
              color={brandingColors.primaryTextColor}
              fontSize="xl"
            >
              {props.public_metrics.tweet_count}
            </Text>
            <Text color={brandingColors.secondaryTextColor} fontSize={"sm"}>
              Tweets
            </Text>
          </Flex>
        </Flex>
      </Box>
    );
  };

  return (
    <Box
      display={"flex"}
      justifyContent="center"
      flexDirection={"column"}
      rowGap={{ base: "2rem" }}
      py={{ base: "16" }}
      px={{ base: "0" }}
    >
      <Heading title="Powered By" />
      <Grid
        py={{ lg: "16" }}
        width={{ lg: "85%", xl: "75%", "2xl": "65%" }}
        mx={{ lg: "auto" }}
        gridTemplateColumns={{
          base: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
          lg: "1fr 1fr 1fr 1fr",
        }}
        justifyContent="flex-start"
      >
        {powerdby.map((img, index) => (
          <Box
            key={index}
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            borderBottom={{
              base: "none",
              lg:
                index > 3 ? "none" : `3px solid ${brandingColors.disableColor}`,
            }}
            borderLeft={{
              base: "none",
              lg:
                index === 0 || index === 4
                  ? "none"
                  : `3px solid ${brandingColors.disableColor}`,
            }}
            p={{ lg: 6 }}
          >
            <Image
              width={{ base: "40%", lg: "70%" }}
              className="logos"
              src={img}
              data-aos={`zoom-out`}
            ></Image>
          </Box>
        ))}
      </Grid>

      <Heading title="Supporters" />

      <Marquee gradientWidth={0} speed={40}>
        {profiles.map((profile, index) => (
          <TwitterProfileCard key={index} {...profile} />
        ))}
      </Marquee>
    </Box>
  );
};

export default PoweredBy;
