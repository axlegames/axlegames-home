import { Box, Grid, Text, Divider, Input } from "@chakra-ui/react";
import { brandingColors, brandingFonts } from "../../config/brandingColors";

const LockedStaking = (props: {
  axle: number;
  axleBalance: number;
  onAxleChange: Function;
  approveStake: Function;
  lockIn: number;
  setAxle: Function;
  setLockIn: Function;
  stake: Function;
}) => {
  const stakeRewards = [
    {
      days: 30,
      roi: 120,
    },
    {
      days: 90,
      roi: 160,
    },
    {
      days: 180,
      roi: 200,
    },
  ];

  return (
    <Box
      color={brandingColors.primaryTextColor}
      boxShadow={`0px 0px 120px -70px ${brandingColors.newHighlightColor}`}
      border={`3px solid ${brandingColors.newHighlightColor}`}
      borderRadius="3xl"
    >
      <Box textAlign={"center"}>
        <Text
          color={brandingColors.secondaryTextColor}
          fontSize={{ base: "xl", md: "2xl" }}
          p={2}
          my={2}
          fontFamily={brandingFonts.headingFont}
        >
          STAKE AXLE
        </Text>
      </Box>
      <Divider bg={brandingColors.primaryButtonColor} my={2} />
      <Box
        color={brandingColors.secondaryTextColor}
        display={"flex"}
        px={8}
        py={2}
        justifyContent="space-between"
        fontSize={{ base: "xx-small", md: "md" }}
        fontFamily={brandingFonts.subFont}
      >
        <Text fontSize={"sm"} fontFamily={brandingFonts.subFont}>
          Amount{" "}
        </Text>
        <Text fontSize={"sm"} fontFamily={brandingFonts.subFont}>
          ~My Balance {Number(props.axleBalance).toFixed(0)} AXLE
        </Text>
      </Box>
      <Box px={8}>
        <Box
          height={"100%"}
          width="100%"
          px={4}
          alignItems={"center"}
          display={"flex"}
          border={`3px solid ${brandingColors.fgColor}`}
          borderRadius="xl"
          fontSize={{ base: "xs", md: "md" }}
        >
          <Box fontFamily={brandingFonts.subFont}>$AXLE</Box>
          <Input
            mx={4}
            fontWeight={"bold"}
            placeholder="value (AXLE)"
            onChange={() => props.onAxleChange()}
            color={brandingColors.highLightColor}
            fontSize="xl"
            type={"text"}
            inputMode="decimal"
            borderRadius={"none"}
            textAlign="right"
            value={props.axle}
            borderLeft={`2px solid ${brandingColors.fgColor}`}
            borderRight={`2px solid ${brandingColors.fgColor}`}
            fontFamily={brandingFonts.headingFont}
            _active={{
              outline: "none",
              shadow: "none",
            }}
            _hover={{
              outline: "none",
              shadow: "none",
            }}
            _focus={{
              outline: "none",
              shadow: "none",
            }}
          ></Input>
          <Box
            fontFamily={brandingFonts.headingFont}
            fontWeight="bold"
            cursor={"pointer"}
            onClick={() => props.setAxle(Number(props.axleBalance).toFixed(0))}
          >
            MAX
          </Box>
        </Box>
      </Box>
      <Box mx={8} my={4}>
        <Box
          display={"flex"}
          fontSize={{ base: "xx-small", md: "sm" }}
          my={2}
          columnGap="1rem"
        >
          <Text
            color={brandingColors.secondaryTextColor}
            fontFamily={brandingFonts.headingFont}
          >
            Locking APYs
          </Text>
          <Text
            color={brandingColors.primaryTextColor}
            fontFamily={brandingFonts.headingFont}
            fontSize={{ base: "sm" }}
          >
            [Just for 24hours]
          </Text>
        </Box>
        <Grid
          display={"grid"}
          gridTemplateColumns={{
            base: "1fr 1fr",
            md: "1fr 1fr 1fr",
          }}
          rowGap={"1rem"}
          justifyContent="center"
          columnGap={"1rem"}
          alignItems={"center"}
        >
          {stakeRewards.map((s, i) => (
            <Box
              borderRadius={"xl"}
              bg={
                i === props.lockIn
                  ? brandingColors.newHighlightColor
                  : brandingColors.bgColor
              }
              boxShadow={`0px 0px 3px ${brandingColors.newHighlightColor}`}
              textAlign={"center"}
              onClick={() => {
                props.setLockIn(i);
              }}
              key={i}
              minW={"32"}
              cursor="pointer"
            >
              <Text
                color={brandingColors.secondaryTextColor}
                px={3}
                py={2}
                fontSize={{ base: "sm", md: "md" }}
                fontFamily={brandingFonts.headingFont}
              >
                {" "}
                {s.days} Days{" "}
              </Text>
              <Divider
                bg={brandingColors.newHighlightColor}
                color={brandingColors.newHighlightColor}
              />
              <Text
                color={brandingColors.primaryTextColor}
                px={3}
                py={2}
                fontSize={{ base: "xs", md: "sm" }}
                fontFamily={brandingFonts.headingFont}
              >
                {" "}
                {s.roi}% APY
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
      <Box
        mx={8}
        my={4}
        textAlign="center"
        className="btnc"
        fontFamily={brandingFonts.subFont}
        onClick={async () => await props.approveStake()}
      >
        Enable Staking
      </Box>
      <Box
        onClick={() => props.stake()}
        mx={8}
        my={4}
        textAlign="center"
        className="btnc"
        fontFamily={brandingFonts.subFont}
      >
        Stake
      </Box>
      <Box
        mt={4}
        borderTop={`2px solid ${brandingColors.newHighlightColor}`}
        textAlign={"center"}
        p={4}
      >
        <Text
          fontSize={{ base: "xs", md: "sm" }}
          color={brandingColors.primaryTextColor}
          fontFamily={brandingFonts.headingFont}
          fontWeight="bold"
        >
          Locking {Number(props.axle).toFixed(0)} AXLE for{" "}
          {stakeRewards[props.lockIn].days} Days
        </Text>
      </Box>
    </Box>
  );
};

export default LockedStaking;
