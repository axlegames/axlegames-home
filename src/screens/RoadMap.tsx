import { phases } from "../config/data";
import { brandingColors } from "../config/brandingColors";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";

import Heading from "../components/Heading";

const RoadMap = () => {
  return (
    <Box
      backgroundImage={`linear-gradient(to bottom, #270e5a, #200d53, #190b4b, #130a44, #0e063d);`}
      py={{ base: "16" }}
    >
      <Heading title="Roadmap" />
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems="center"
        rowGap={"3rem"}
        py={{ base: "16" }}
        columnGap="3rem"
      >
        <Grid
          gridTemplateColumns={{ base: "1fr" }}
          columnGap={"2rem"}
          rowGap={"2rem"}
          alignItems="center"
          justifyContent={"center"}
        >
          {phases.map((p, i) =>
            i < 3 ? (
              <Flex
                alignItems={"center"}
                justifyContent="center"
                key={i}
                flexDirection={"column"}
              >
                <Phase
                  phase={p.phase}
                  milestones={p.milestones}
                  text={p.text}
                  index={i}
                  current={i === 3 ? true : false}
                  key={i}
                />
              </Flex>
            ) : null
          )}
        </Grid>

        <Box
          data-aos="fade-down"
          minW="1vh"
          height={{ base: "800px" }}
          zIndex={2}
          borderRadius="md"
          bg={brandingColors.bgColor}
          boxShadow={`4px 4px 7px #350794,
             -4px -4px 7px #570bf2`}
          display={{ base: "none", lg: "flex" }}
        ></Box>

        <Grid
          gridTemplateColumns={{ base: "1fr" }}
          columnGap={"2rem"}
          rowGap="2rem"
          alignItems="center"
          justifyContent={"center"}
        >
          {phases.map((p, i) =>
            i > 2 ? (
              <Flex
                alignItems={"center"}
                justifyContent="center"
                key={i}
                flexDirection={"column"}
              >
                <Phase
                  phase={p.phase}
                  milestones={p.milestones}
                  text={p.text}
                  index={i}
                  current={i === 3 ? true : false}
                  key={i}
                />
              </Flex>
            ) : null
          )}
        </Grid>
      </Flex>
    </Box>
  );
};

interface Props {
  milestones: string[];
  text: string;
  index: number;
  current: boolean;
  phase: string;
}

const Phase = (props: Props) => {
  return (
    <Box display={"flex"} justifyContent="center" position={"relative"}>
      {props.current ? (
        <Box
          data-aos="fade-right"
          zIndex={1}
          bottom={"44%"}
          top={"44%"}
          borderTop={`32px solid transparent`}
          borderBottom={`32px solid transparent`}
          borderLeft={`32px solid #4609C3`}
          position={"absolute"}
          left="-13%"
        ></Box>
      ) : null}
      <Box
        cursor={"pointer"}
        data-aos={props.index % 2 === 0 ? `fade-left` : `fade-right`}
        boxShadow={`4px 4px 7px #350794,
             -4px -4px 7px #570bf2`}
        minW={"96"}
        minH={"64"}
        transition={`all 100ms ease-out`}
        _hover={{
          boxShadow: `inset 4px 4px 7px #350794,
            inset -4px -4px 7px #570bf2`,
        }}
        p={{ base: "4" }}
        borderRadius="xl"
      >
        <Text
          fontFamily={`"Chakra Petch", sans-serif`}
          fontSize={"3xl"}
          color={brandingColors.primaryTextColor}
          fontWeight={"bold"}
        >
          {props.text}
        </Text>
        <Box my={4} mx={"2"}>
          {props.milestones.map((m, i) => (
            <Flex
              alignItems={"center"}
              key={i}
              columnGap={".5rem"}
              justifyContent="flex-start"
            >
              {props.index < 3 ? (
                <GreenCircle />
              ) : props.index === 3 ? (
                <YellowCircle />
              ) : (
                <GrayCircle />
              )}
              <Text
                fontFamily={`"Chakra Petch", sans-serif`}
                fontWeight="bold"
                color={brandingColors.secondaryTextColor}
                fontSize={"sm"}
              >
                {m}
              </Text>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RoadMap;

const GreenCircle = () => (
  <Box
    height={"12px"}
    width="12px"
    bg={"green.400"}
    _hover={{ bg: "yellow.400" }}
    borderRadius="3xl"
    transition={"all 200ms ease-in"}
  ></Box>
);

const YellowCircle = () => (
  <Box height={"12px"} width="12px" bg={"yellow.400"} borderRadius="3xl"></Box>
);

const GrayCircle = () => (
  <Box
    height={"12px"}
    border={`2px`}
    borderStyle="double"
    borderColor={"gray.400"}
    width="12px"
    bg={"gray.800"}
    borderRadius="3xl"
  ></Box>
);
