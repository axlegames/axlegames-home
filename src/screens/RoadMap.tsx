import { Box, Button, Divider, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import Heading from "../components/Heading";
import { brandingColors } from "../config/brandingColors";
import { HiClock } from "react-icons/hi";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import NeuButton from "../components/NeuButton";
import { TiTick } from "react-icons/ti";
import { BsDot } from "react-icons/bs";

const phases = [
  {
    text: "Phase 1",
    phase: "completed",
    milestones: [
      "Axle games Ideation",
      "Core Team formation",
      "Infrastructure Planning and Setup",
      "Product Workflow and Design",
      "Social Media Setup",
      "White paper and PitchDeck Release",
    ],
  },
  {
    text: "Phase 2",
    phase: "completed",
    milestones: [
      "Business Model Validation",
      "SDE / Smart contracts Architecture",
      "LLD / HLD Design Mockups",
      "axlegames.io - Live",
      "Wordle #5,#6,#7 - Practice",
      "Absurdle - Practice",
    ],
  },
  {
    text: "Phase 3",
    phase: "completed",
    milestones: [
      "Axle Token Audit - Solidproof",
      "Presale Community AMA’s",
      "BSC, ETH Wallet - Testnet",
      "Brand Development - Campaigns and",
      "Platform Auditing -3rd Party",
      "Zeus Presale - Live",
    ],
  },
  {
    text: "Phase 4",
    phase: "on going",
    milestones: [
      "Team Expansion - New hiring",
      "Poseidon and Hades Sale - Live",
      "Axle Token Staking",
      "Axle Swap Launch",
      "Lewdle  and Lookdle Launch",
    ],
  },
  {
    text: "Phase 5",
    phase: "up coming",
    milestones: [
      "Axle Arena Launch",
      "Axle DAO Launch",
      "In-game purchases",
      "Axle Games Multiplayer Support",
      "Streaming on Axle Games",
      "Nerdle , Quordle and Redactle Launch",
    ],
  },
  {
    text: "Phase 6",
    phase: "up coming",
    milestones: [
      "Axle NFT Marketplace",
      "CEX Listings",
      "AXLE SDK Launch",
      "FIAT payment gateway",
      "Community events - Meet-ups",
      "Cross Wordle, Framed and Hurdle  Launch",
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
        <ModalContent m={4} bg={brandingColors.bgColor}>
          <ModalHeader
            textAlign={"center"}
            fontFamily={`'Russo One', sans-serif`}
            color={brandingColors.primaryTextColor}
          >
            {state?.text}{" "}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box mx={"2"}>
              {state?.milestones.map((m: string, i: number) => (
                <Flex columnGap={".1rem"} justifyContent="flex-start">
                  <Icon
                    color={
                      state.index < 2
                        ? brandingColors.successColor
                        : state.index === 2
                        ? brandingColors.primaryTextColor
                        : brandingColors.disableColor
                    }
                    as={
                      state.index < 2
                        ? TiTick
                        : state.index === 2
                        ? HiClock
                        : BsDot
                    }
                  />
                  <Text
                    key={i}
                    color={
                      state.index < 2
                        ? brandingColors.successColor
                        : state.index === 2
                        ? brandingColors.primaryTextColor
                        : brandingColors.disableColor
                    }
                    fontSize={"sm"}
                  >
                    {m}
                  </Text>
                </Flex>
              ))}
            </Box>
          </ModalBody>

          <ModalFooter>
            <NeuButton
              label="Close"
              onClick={props.close}
              bg={brandingColors.neuPrimaryBg}
              shadow={brandingColors.newPrimaryShadow}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };

  function changeState(props: Props) {
    setOpen(!open);
    setState(props);
  }

  const MPhase = (props: Props) => {
    return (
      <Box display={"flex"} justifyContent="center" position={"relative"}>
        <Box
          p={{ base: "4" }}
          borderRadius="xl"
          position={"absolute"}
          minW={{ base: "60%" }}
          zIndex={4}
        ></Box>
        <Box
          display={"flex"}
          bg={brandingColors.bgColor}
          boxShadow={`0px 0px 32px ${
            props.index < 2
              ? brandingColors.successColor
              : props.index === 2
              ? brandingColors.newHighlightColor
              : brandingColors.disableColor
          }`}
          boxSize={props.current ? "48" : "36"}
          borderRadius={"50vh"}
          border={`4px solid ${
            props.index < 2
              ? brandingColors.successColor
              : props.index === 2
              ? brandingColors.newHighlightColor
              : brandingColors.disableColor
          }`}
          position="relative"
          alignItems={"center"}
          justifyContent="center"
          flexDirection={"column"}
        >
          <Text
            textAlign={"center"}
            borderRadius={"xl"}
            px={4}
            color={
              props.index < 2
                ? brandingColors.successColor
                : props.index === 2
                ? brandingColors.newHighlightColor
                : brandingColors.disableColor
            }
            fontSize={"2xl"}
            fontFamily={`'Russo One', sans-serif`}
            textShadow={`2px 2px 3px ${
              props.index < 2
                ? brandingColors.successColor
                : props.index === 2
                ? brandingColors.newHighlightColor
                : brandingColors.disableColor
            }`}
          >
            Q{props.index + 1}
          </Text>
          <Text
            textAlign={"center"}
            borderRadius={"xl"}
            px={4}
            color={
              props.index < 2
                ? brandingColors.successColor
                : props.index === 2
                ? brandingColors.newHighlightColor
                : brandingColors.disableColor
            }
            fontSize={"md"}
            textShadow={`2px 2px 3px ${
              props.index < 2
                ? brandingColors.successColor
                : props.index === 2
                ? brandingColors.newHighlightColor
                : brandingColors.disableColor
            }`}
          >
            {props.phase}
          </Text>
          <Button
            onClick={() => changeState(props)}
            width={"100%"}
            size="sm"
            textDecoration={"underline"}
            variant={"ghos"}
          >
            see more
          </Button>
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
          height={"40px"}
          width="6"
          bg={
            props.index < 2
              ? brandingColors.successColor
              : props.index === 2
              ? brandingColors.newHighlightColor
              : brandingColors.disableColor
          }
          border={`3px solid ${
            props.index < 2
              ? brandingColors.successColor
              : props.index === 2
              ? brandingColors.newHighlightColor
              : brandingColors.disableColor
          }`}
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
              current={i === 2 ? true : false}
              key={i}
            />

            {i === phases.length - 1 ? null : (
              <MLinker
                phase={p.phase}
                milestones={p.milestones}
                text={p.text}
                index={i}
                current={i === 2 ? true : false}
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
              current={i === 2 ? true : false}
              key={i}
            />
            {i === phases.length - 1 ? null : <Linker index={i} />}
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

const Linker = (props: any) => {
  return (
    <Box display={"flex"} justifyContent="center">
      <Box
        display={"flex"}
        alignSelf="center"
        justifySelf={"center"}
        bg={
          props.index < 2
            ? brandingColors.successColor
            : props.index === 2
            ? brandingColors.newHighlightColor
            : brandingColors.disableColor
        }
        boxShadow="xl"
        width={"6"}
        height="12"
        border={`2px solid ${
          props.index < 2
            ? brandingColors.successColor
            : props.index === 2
            ? brandingColors.newHighlightColor
            : brandingColors.disableColor
        }`}
        position="relative"
      ></Box>
    </Box>
  );
};

const Phase = (props: Props) => {
  return (
    <Box display={"flex"} justifyContent="center" position={"relative"}>
      <Box
        data-aos={props.index % 2 === 0 ? `fade-left` : `fade-right`}
        bg={brandingColors.bgColor}
        p={{ base: "4" }}
        borderRadius="xl"
        position={"absolute"}
        left={props.index % 2 === 0 ? "" : "60%"}
        right={props.index % 2 !== 0 ? "" : "60%"}
        maxW={"80"}
        boxShadow={`0px 0px 4px ${
          props.index < 2
            ? brandingColors.successColor
            : props.index === 2
            ? brandingColors.newHighlightColor
            : brandingColors.disableColor
        }`}
      >
        <Text
          fontFamily={`'Russo One', sans-serif`}
          fontSize={"xl"}
          color={brandingColors.primaryTextColor}
          textAlign="center"
        >
          {props.text}
        </Text>
        <Divider my={2} />
        <Box mx={"2"}>
          {props.milestones.map((m, i) => (
            <Flex columnGap={".1rem"} justifyContent="flex-start">
              <Icon
                color={
                  props.index < 2
                    ? brandingColors.successColor
                    : props.index === 2
                    ? brandingColors.primaryTextColor
                    : brandingColors.disableColor
                }
                as={
                  props.index < 2 ? TiTick : props.index === 2 ? HiClock : BsDot
                }
              />
              <Text
                key={i}
                color={brandingColors.secondaryTextColor}
                fontSize={"sm"}
              >
                {m}
              </Text>
            </Flex>
          ))}
        </Box>
      </Box>
      <Box
        data-aos={props.index % 2 === 0 ? `fade-right` : `fade-left`}
        display={"flex"}
        bg={brandingColors.bgColor}
        boxSize={props.current ? "48" : "36"}
        borderRadius={"50vh"}
        position="relative"
        alignItems={"center"}
        justifyContent="center"
        flexDirection={"column"}
        boxShadow={`2px 2px 2px 3px ${
          props.index < 2
            ? brandingColors.successColor
            : props.index === 2
            ? brandingColors.newHighlightColor
            : brandingColors.disableColor
        }`}
      >
        <Text
          textAlign={"center"}
          borderRadius={"xl"}
          px={4}
          color={
            props.index < 2
              ? brandingColors.successColor
              : props.index === 2
              ? brandingColors.newHighlightColor
              : brandingColors.disableColor
          }
          fontSize={"7xl"}
          fontFamily={`'Russo One', sans-serif`}
          textShadow={`2px 2px 3px ${
            props.index < 2
              ? brandingColors.successColor
              : props.index === 2
              ? brandingColors.newHighlightColor
              : brandingColors.disableColor
          }`}
        >
          {`${props.index + 1}`}
        </Text>
      </Box>
    </Box>
  );
};

export default RoadMap;
