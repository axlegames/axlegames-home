import { Box, Button, Divider, Flex, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import Heading from "../components/Heading";
import { brandingColors } from "../config/brandingColors";

const phases = [
  {
    text: "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
    phase: "completed",
    milestones: [
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
    ],
  },
  {
    text: "Website Development Prototype Building…",
    phase: "completed",
    milestones: [
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
    ],
  },
  {
    text: "AXLE token smart contract, Mainnet Deployment, Website launch;",
    phase: "completed",
    milestones: [
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
    ],
  },
  {
    text: "Testing Battle Swap on testnet, Battle Stake Launch",
    phase: "on going",
    milestones: [
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
    ],
  },
  {
    text: "Game Asset Minting on Battle market",
    phase: "up coming",
    milestones: [
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
    ],
  },
  {
    text: "Unique Avatar Release on Battle Market, Multiple Game Launch, World building For Battle Arena",
    phase: "up coming",
    milestones: [
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
    ],
  },
];

const RoadMap = () => {
  const [state, setState] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  function changeState(index: number) {
    const copy = state;
    copy[index] = !copy[index];
    setState(copy);
  }

  const MPhase = (props: Props) => {
    return (
      <Box display={"flex"} justifyContent="center" position={"relative"}>
        <Box
          bg={brandingColors.bgColor}
          p={{ base: "4" }}
          borderRadius="xl"
          position={"absolute"}
          minW={{ base: "60%" }}
        >
          <Box
            display={state[props.index] ? "flex" : "none"}
            m={"4"}
            overflowY={"scroll"}
            maxH="48"
          >
            {props.milestones.map((m, i) => (
              <Text
                textAlign={"center"}
                key={i}
                color={brandingColors.secondaryTwoTextColor}
                fontSize={"sm"}
              >
                {m}
              </Text>
            ))}
          </Box>
        </Box>
        <Box
          display={"flex"}
          bg={brandingColors.bgColor}
          boxShadow={
            props.current
              ? `0px 0px 32px ${brandingColors.primaryTextColor}`
              : "xl"
          }
          boxSize={props.current ? "52" : "44"}
          borderRadius={"50vh"}
          border={`4px solid ${brandingColors.primaryTextColor}`}
          position="relative"
          alignItems={"center"}
          justifyContent="center"
          flexDirection={"column"}
        >
          <Text color={brandingColors.primaryTextColor} fontSize={"3xl"}>
            Phase {props.index + 1}
          </Text>
          <Text color={brandingColors.secondaryTwoTextColor}>
            {props.phase}{" "}
          </Text>
        </Box>
      </Box>
    );
  };

  const MLinker = (props: any) => {
    return (
      <Box
        flexDirection={"column"}
        alignItems="center"
        display={"flex"}
        justifyContent="center"
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          maxW={"80"}
          bg={brandingColors.bgColor}
          p={4}
          borderRadius="2xl"
          flexDirection="column"
        >
          <Text textAlign={"center"} color={brandingColors.primaryTextColor}>
            {props.main}
          </Text>
          <Button
            onClick={() => changeState(props.index)}
            width={"100%"}
            size="md"
            textDecoration={"underline"}
            variant={"link"}
          >
            see more
          </Button>
        </Box>
      </Box>
    );
  };

  return (
    <Box py={{ base: "16" }}>
      <Heading title="Roadmap" />

      <Grid
        display={{ base: "grid", xl: "none" }}
        gridTemplateColumns={{ base: "1fr" }}
        columnGap={"2rem"}
        p={{ lg: "16" }}
        alignItems="center"
        justifyContent={"center"}
        py={{ base: "16" }}
      >
        {phases.map((p, i) => (
          <Flex key={i} flexDirection={"column"}>
            <MPhase
              phase={p.phase}
              milestones={p.milestones}
              text={p.text}
              index={i}
              current={i === 3 ? true : false}
              key={i}
            />
            {i === phases.length - 1 ? null : (
              <MLinker index={i} main={p.text} />
            )}
          </Flex>
        ))}
      </Grid>

      <Grid
        display={{ base: "none", xl: "grid" }}
        gridTemplateColumns={{ base: "1fr" }}
        columnGap={"2rem"}
        p={{ lg: "16" }}
        alignItems="center"
        justifyContent={"center"}
      >
        {phases.map((p, i) => (
          <Flex key={i} flexDirection={"column"}>
            <Phase
              phase={p.phase}
              milestones={p.milestones}
              text={p.text}
              index={i}
              current={i === 3 ? true : false}
              key={i}
            />
            {i === phases.length - 1 ? null : <Linker />}
          </Flex>
        ))}
      </Grid>
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

const Linker = () => {
  return (
    <Box display={"flex"} justifyContent="center">
      <Box
        display={"flex"}
        alignSelf="center"
        justifySelf={"center"}
        bg={brandingColors.bgColor}
        boxShadow="xl"
        width={"6"}
        height="16"
        border={`2px dotted ${brandingColors.primaryTextColor}`}
        borderRadius="sm"
        position="relative"
      ></Box>
    </Box>
  );
};

const Phase = (props: Props) => {
  return (
    <Box display={"flex"} justifyContent="center" position={"relative"}>
      <Box
        bg={brandingColors.bgColor}
        p={{ base: "4" }}
        borderRadius="xl"
        position={"absolute"}
        left={props.index % 2 === 0 ? "" : "60%"}
        right={props.index % 2 !== 0 ? "" : "60%"}
        maxW={"80"}
      >
        <Text fontSize={"xl"} color={brandingColors.primaryTextColor}>
          {props.text}
        </Text>
        <Divider my={4} />
        <Box m={"4"} overflowY={"scroll"} maxH="48">
          {props.milestones.map((m, i) => (
            <Text
              key={i}
              color={brandingColors.secondaryTwoTextColor}
              fontSize={"sm"}
            >
              {m}
            </Text>
          ))}
        </Box>
      </Box>
      <Box
        display={"flex"}
        bg={brandingColors.bgColor}
        boxShadow={
          props.current
            ? `0px 0px 32px ${brandingColors.primaryTextColor}`
            : "xl"
        }
        boxSize={props.current ? "52" : "44"}
        borderRadius={"50vh"}
        border={`4px solid ${brandingColors.primaryTextColor}`}
        position="relative"
        alignItems={"center"}
        justifyContent="center"
        flexDirection={"column"}
      >
        <Text color={brandingColors.primaryTextColor} fontSize={"3xl"}>
          Phase {props.index + 1}
        </Text>
        <Text color={brandingColors.secondaryTwoTextColor}>{props.phase} </Text>
      </Box>
    </Box>
  );
};

export default RoadMap;
