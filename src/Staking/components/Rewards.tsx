import moment from "moment";
import { brandingColors, brandingFonts } from "../../config/brandingColors";
import { Box, Text, Divider, Grid, GridItem } from "@chakra-ui/react";

const Rewards = (props: {
  totalStakedAmount: string;
  totalRewards: string;
  claimRewards: Function;
  stakeRewards: Function;
  hasStaked: boolean;
  lastUpdate: number;
}) => {
  const time = moment(props.lastUpdate).format("LTS");
  const date = moment(props.lastUpdate).format("L");
  const u = Number(props.totalRewards.replace(" BNB", ""));
  return (
    <Box
      my={8}
      minW={{ base: "80vw", md: "42vw", lg: "30vw", xl: "20vw" }}
      mx="auto"
      borderRadius="3xl"
      borderLeft={`2px solid ${brandingColors.newHighlightColor}`}
      borderRight={`2px solid ${brandingColors.newHighlightColor}`}
      borderBottom={`2px solid ${brandingColors.newHighlightColor}`}
      color={brandingColors.primaryTextColor}
      boxShadow={`0px 0px 120px -70px ${brandingColors.newHighlightColor}`}
    >
      <Box
        textAlign={"center"}
        display="flex"
        justifyContent={"space-between"}
        border={`2px solid ${brandingColors.newHighlightColor}`}
        borderTopRadius="3xl"
      >
        <Text
          borderTopLeftRadius={"3xl"}
          boxShadow="xl"
          width={"100%"}
          fontSize={{ base: "md", md: "2xl" }}
          color={brandingColors.secondaryTextColor}
          cursor="pointer"
          py={2}
          fontFamily={brandingFonts.headingFont}
        >
          MY AXLE REWARDS
        </Text>
      </Box>
      <Divider />
      <Box>
        <Grid
          justifyContent={"center"}
          alignItems="center"
          templateColumns={`1fr 1fr`}
          rowGap="1rem"
          py={8}
        >
          <GridItem
            display={"flex"}
            justifyContent="center"
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Text fontFamily={brandingFonts.subFont}>Total Staked Amount</Text>
            <Text
              fontSize={"2xl"}
              color={brandingColors.primaryTextColor}
              fontFamily={brandingFonts.headingFont}
            >
              {props.totalStakedAmount}
            </Text>
          </GridItem>
          <GridItem
            display={"flex"}
            justifyContent="center"
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Text fontFamily={brandingFonts.subFont}> Total Rewards</Text>
            <Text
              fontSize={"2xl"}
              color={brandingColors.primaryTextColor}
              fontFamily={brandingFonts.subFont}
            >
              {props.totalRewards}
            </Text>
          </GridItem>
        </Grid>
        <Box>
          {props.lastUpdate !== 0 ? (
            <Box>
              <Divider mb={4} />
              <GridItem
                display={"flex"}
                justifyContent="center"
                flexDirection={"column"}
                alignItems={"center"}
                pb={4}
                px={8}
              >
                <Text fontFamily={brandingFonts.subFont}>
                  {" "}
                  Last Updated Time
                </Text>
                <Text
                  fontSize={"2xl"}
                  color={brandingColors.primaryTextColor}
                  fontFamily={brandingFonts.subFont}
                >
                  {`${date}, ${time}`}
                </Text>
              </GridItem>
            </Box>
          ) : null}
        </Box>

        <Divider mb={4} />

        {props.hasStaked || u > 0 ? (
          <Box
            justifyContent={"space-evenly"}
            alignItems="center"
            display={"flex"}
            mb={4}
            columnGap="2rem"
            px={4}
          >
            <Box
              textAlign={"center"}
              className="btnc"
              fontFamily={brandingFonts.subFont}
              onClick={() => props.claimRewards()}
              width="100%"
            >
              CLAIM REWARDS
            </Box>
            {/* <Box
              textAlign={"center"}
              width="100%"
              bg={brandingColors.successColor}
              p={4}
              transition="all 100ms ease-in"
              backgroundImage={`linear-gradient(to right top, #77cfa0, #5ba37c, #40795b, #27513b, #102d1e)`}
              borderRadius="xl"
              color={brandingColors.highLightColor}
              cursor="pointer"
              _hover={{
                bg: brandingColors.bgColor,
                boxShadow: `0px 0px 4px ${brandingColors.successColor}`,
                color: brandingColors.successColor,
              }}
              fontFamily={brandingFonts.subFont}
              onClick={() => props.stakeRewards()}
            >
              STAKE REWARDS
            </Box> */}
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Rewards;
