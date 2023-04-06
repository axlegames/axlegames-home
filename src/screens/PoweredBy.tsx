import { powerdby } from "../config/data";
import { useEffect, useState } from "react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { brandingColors, brandingFonts } from "../config/brandingColors";
import { Box, Grid, Icon, Image, Text } from "@chakra-ui/react";

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
        boxShadow={`4px 4px 9px #0b052e, -4px -4px 9px #11074c`}
        py={{ base: "4" }}
        px={{ base: "2" }}
        borderRadius="xl"
        minW="316px"
        maxW="316px"
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

  return (
    <Box
      display={"flex"}
      justifyContent="center"
      flexDirection={"column"}
      rowGap={{ base: "2rem" }}
      py={12}
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
                index > 3
                  ? "none"
                  : `4px groove ${brandingColors.newHighlightColor}`,
            }}
            borderLeft={{
              base: "none",
              lg:
                index === 0 || index === 4
                  ? "none"
                  : `4px groove ${brandingColors.newHighlightColor}`,
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
