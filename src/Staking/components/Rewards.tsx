import { Box, Text, Divider, Grid, GridItem } from "@chakra-ui/react";
import { brandingColors, brandingFonts } from "../../config/brandingColors";

const Rewards = (props: {
  totalStakedAmount: number;
  totalRewards: number;
  claimRewards: Function;
  stakeRewards: Function;
  hasStaked: boolean;
}) => {
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
              {props.totalStakedAmount} AXLE
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
              {props.totalRewards.toFixed(2)} AXLE
            </Text>
          </GridItem>
        </Grid>
        <Divider mb={4} />
        {props.hasStaked ? (
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
            <Box
              textAlign={"center"}
              width="100%"
              bg={brandingColors.successColor}
              p={4}
              transition="all 100ms ease-in"
              borderRadius="xl"
              color={brandingColors.bgColor}
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
            </Box>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
};

export default Rewards;
