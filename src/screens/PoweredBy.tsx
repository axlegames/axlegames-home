import { Box, Divider, Flex, Grid, Icon, Image, Text } from "@chakra-ui/react";

import Heading from "../components/Heading";
import { useEffect, useState } from "react";
import axios from "axios";
import { brandingColors } from "../config/brandingColors";
import { GoVerified } from "react-icons/go";

import Binance from "../assets/powerdby/bnb.svg";
import AWS from "../assets/powerdby/aws.svg";
import Azure from "../assets/powerdby/azure.svg";
import Blender from "../assets/powerdby/unreal.svg";
import Node from "../assets/powerdby/node.png";

import Sol from "../assets/powerdby/sol.svg";
import React from "../assets/powerdby/react.png";
import MongoDB from "../assets/powerdby/mongo.png";
import Marquee from "react-fast-marquee";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

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
    axios
      .get("https://api.axlegames.io/axlegames/api/v1/users/twitter/profiles")
      .then((res) => {
        setProfiles(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const images = [Binance, AWS, Azure, Blender, Sol, React, MongoDB, Node];

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
            <Icon color={"blue.400"} as={GoVerified}></Icon>
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
      // backgroundImage={BG}
      flexDirection={"column"}
      rowGap={{ base: "2rem" }}
      py={{ base: "16" }}
      px={{ base: "12" }}
    >
      <Heading title="Powered By" />
      <Grid
        py={{ base: "16" }}
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
        {images.map((img, index) => (
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            borderBottom={
              index > 3 ? "none" : "1px solid rgba(255, 255, 255, 0.4)"
            }
            borderLeft={
              index === 0 || index === 4
                ? "none"
                : "1px solid rgba(255, 255, 255, 0.4)"
            }
            p={6}
          >
            <Image height="60px" width={"150px"} src={img}></Image>
          </Box>
        ))}
      </Grid>

      <Heading title="Supporters" />

      <Marquee gradientWidth={0} speed={40}>
        {profiles.map((profile, index) => (
          <TwitterProfileCard {...profile} />
        ))}
      </Marquee>
    </Box>
  );
};

export default PoweredBy;
