import { Box, Button, Divider, Flex, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";
import Heading from "../components/Heading";
import { brandingColors } from "../config/brandingColors";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const phases = [
  {
    text: "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
    phase: "completed",
    milestones: [
      "Research on Web3, Gaming & Metaverse; Idea and Conceptualisation…",
    ],
  },
  {
    text: "Website Development Prototype Building…",
    phase: "completed",
    milestones: [
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
  const [state, setState] = useState<Props>({
    milestones: [],
    phase: "",
    index: 0,
    text: "",
    current: false,
  });
  const [open, setOpen] = useState<Boolean>(false);

  const CModal = (props: any) => {
    return (
      <Modal
        blockScrollOnMount={false}
        isOpen={props.open}
        onClose={props.close}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> {state?.text} </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box m={"4"} overflowY={"scroll"} maxH="48">
              {state?.milestones.map((m: string, i: number) => (
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
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={props.close}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };

  function changeState(props: Props) {
    console.log(props);
    // setOpen(!open);
    setState(props);
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
          zIndex={4}
        ></Box>
        <Box
          display={"flex"}
          bg={brandingColors.bgColor}
          boxShadow={
            props.current
              ? `0px 0px 32px ${brandingColors.newHighlightColor}`
              : "xl"
          }
          boxSize={props.current ? "52" : "44"}
          borderRadius={"50vh"}
          border={`4px solid ${brandingColors.newHighlightColor}`}
          position="relative"
          alignItems={"center"}
          justifyContent="center"
          flexDirection={"column"}
        >
          <Text color={brandingColors.primaryTextColor} fontSize={"3xl"}>
            Phase {props.index + 1}
          </Text>
          <Text color={brandingColors.secondaryTextColor}>{props.phase} </Text>
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
            onClick={() => changeState(props)}
            width={"100%"}
            size="md"
            textDecoration={"underline"}
            variant={"link"}
          >
            see more
          </Button>
        </Box>
        <Box
          height={"90px"}
          width="6"
          bg={brandingColors.bgColor}
          border={`3px solid ${brandingColors.newHighlightColor}`}
        ></Box>
      </Box>
    );
  };

  return (
    <Box
      backgroundImage={`linear-gradient(to bottom, #061e37, #06223e, #072544, #07294b, #082d52, #082d52, #082d52, #082d52, #07294b, #072544, #06223e, #061e37)`}
      py={{ base: "16" }}
    >
      <Heading title="Roadmap" />
      <CModal open={open} close={() => setOpen(false)} />
      <Grid
        display={{ base: "grid", lg: "none" }}
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
              <MLinker
                phase={p.phase}
                milestones={p.milestones}
                text={p.text}
                index={i}
                current={i === 3 ? true : false}
                key={i}
                main={p.text}
              />
            )}
          </Flex>
        ))}
      </Grid>

      <Grid
        display={{ base: "none", lg: "grid" }}
        gridTemplateColumns={{ base: "1fr" }}
        columnGap={"2rem"}
        p={{ lg: "16" }}
        pb={{ lg: "64" }}
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
        border={`2px dotted ${brandingColors.newHighlightColor}`}
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
        <Divider my={2} />
        <Box mx={"2"} overflowY={"scroll"} maxH="48">
          {props.milestones.map((m, i) => (
            <Text
              key={i}
              color={brandingColors.secondaryTextColor}
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
            ? `0px 0px 32px ${brandingColors.newHighlightColor}`
            : "xl"
        }
        boxSize={props.current ? "48" : "44"}
        borderRadius={"50vh"}
        border={`4px solid ${brandingColors.newHighlightColor}`}
        position="relative"
        alignItems={"center"}
        justifyContent="center"
        flexDirection={"column"}
      >
        <Text color={brandingColors.primaryTextColor} fontSize={"3xl"}>
          Phase {props.index + 1}
        </Text>
        <Text color={brandingColors.secondaryTextColor}>{props.phase} </Text>
      </Box>
    </Box>
  );
};

export default RoadMap;
