import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { phases } from "../config/data";
import { useState } from "react";
import { brandingColors } from "../config/brandingColors";
import { Box, Divider, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import { CheckIcon, TimeIcon, ChevronRightIcon } from "@chakra-ui/icons";

import Heading from "../components/Heading";
import NeuButton from "../components/NeuButton";

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
            fontFamily={`"Chakra Petch", sans-serif`}
            color={brandingColors.primaryTextColor}
          >
            {state?.text}{" "}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box mx={"2"}>
              {state?.milestones.map((m: string, i: number) => (
                <Flex key={i} columnGap={".1rem"} justifyContent="flex-start">
                  <Icon
                    color={
                      state.index < 3
                        ? brandingColors.successColor
                        : state.index === 3
                        ? brandingColors.primaryTextColor
                        : brandingColors.disableColor
                    }
                    as={
                      state.index < 3
                        ? CheckIcon
                        : state.index === 3
                        ? TimeIcon
                        : ChevronRightIcon
                    }
                  />
                  <Text
                    color={brandingColors.secondaryTextColor}
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
          data-aos={props.index % 2 === 0 ? `fade-right` : `fade-left`}
          display={"flex"}
          bg={brandingColors.bgColor}
          boxShadow={`2px 2px 2px 3px ${
            props.index < 3
              ? brandingColors.successColor
              : props.index === 3
              ? brandingColors.newHighlightColor
              : brandingColors.disableColor
          }`}
          boxSize={props.current ? "48" : "36"}
          borderRadius={"50vh"}
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
              props.index < 3
                ? brandingColors.successColor
                : props.index === 3
                ? brandingColors.newHighlightColor
                : brandingColors.disableColor
            }
            fontSize={"2xl"}
            fontFamily={`"Chakra Petch", sans-serif`}
            textShadow={`2px 2px 3px ${
              props.index < 3
                ? brandingColors.successColor
                : props.index === 3
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
              props.index < 3
                ? brandingColors.successColor
                : props.index === 3
                ? brandingColors.newHighlightColor
                : brandingColors.disableColor
            }
            fontSize={"md"}
            textShadow={`2px 2px 3px ${
              props.index < 3
                ? brandingColors.successColor
                : props.index === 3
                ? brandingColors.newHighlightColor
                : brandingColors.disableColor
            }`}
          >
            {props.phase}
          </Text>
          <Text
            onClick={() => changeState(props)}
            width={"100%"}
            fontSize="xs"
            textDecoration={"underline"}
            variant={"ghost"}
            color={brandingColors.secondaryTextColor}
            textAlign={"center"}
          >
            see more
          </Text>
        </Box>

        <Box
          data-aos={props.index % 2 === 0 ? `fade-left` : `fade-right`}
          bg={
            props.index < 3
              ? brandingColors.successColor
              : props.index === 3
              ? brandingColors.newHighlightColor
              : brandingColors.disableColor
          }
          borderRadius="xl"
          bottom={props.current ? "-35%" : "-45%"}
          zIndex={12}
          position={"absolute"}
          px={4}
          py={2}
        >
          <Text
            fontWeight={"bold"}
            fontFamily={`"Chakra Petch", sans-serif`}
            textAlign={"center"}
            color={brandingColors.secondaryTextColor}
          >
            {props.milestones[0]}
          </Text>
        </Box>
      </Box>
    );
  };

  const MLinker = (props: any) => {
    return (
      <Box
        data-aos={props.index % 2 === 0 ? `fade-right` : `fade-left`}
        flexDirection={"column"}
        alignItems="center"
        display={"flex"}
        justifyContent="center"
      >
        <Box
          height={props.isLast ? "30px" : "98px"}
          width="6"
          bg={
            props.index < 3
              ? brandingColors.successColor
              : props.index === 3
              ? brandingColors.newHighlightColor
              : brandingColors.disableColor
          }
          border={`3px solid ${
            props.index < 3
              ? brandingColors.successColor
              : props.index === 3
              ? brandingColors.newHighlightColor
              : brandingColors.disableColor
          }`}
        ></Box>
      </Box>
    );
  };

  return (
    <Box
      backgroundImage={`radial-gradient(circle, #4609c3, #330fa0, #220f7e, #160d5d, #0e063d)`}
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
            />

            <MLinker
              phase={p.phase}
              milestones={p.milestones}
              text={p.text}
              index={i}
              current={i === 3 ? true : false}
              main={p.text}
              isLast={i === phases.length - 1}
            />
          </Flex>
        ))}
      </Grid>

      <Flex justifyContent={"center"}>
        <Grid
          display={{ base: "none", lg: "grid" }}
          gridTemplateColumns={{ base: "1fr" }}
          columnGap={"2rem"}
          p={{ lg: "16" }}
          pb={{ lg: "64" }}
          alignItems="center"
          justifyContent={"center"}
        >
          {phases.map((p, i) =>
            i < 3 ? (
              <Flex key={i} flexDirection={"column"}>
                <Phase
                  phase={p.phase}
                  milestones={p.milestones}
                  text={p.text}
                  index={i}
                  current={i === 3 ? true : false}
                  key={i}
                />
                {/* {i === phases.length - 1 ? null : <Linker index={i} />} */}
              </Flex>
            ) : null
          )}
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
          {phases.map((p, i) =>
            i > 2 ? (
              <Flex key={i} flexDirection={"column"}>
                <Phase
                  phase={p.phase}
                  milestones={p.milestones}
                  text={p.text}
                  index={i}
                  current={i === 3 ? true : false}
                  key={i}
                />
                {/* {i === phases.length - 1 ? null : <Linker index={i} />} */}
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

const Linker = (props: any) => {
  return (
    <Box display={"flex"} justifyContent="center">
      <Box
        display={"flex"}
        alignSelf="center"
        justifySelf={"center"}
        bg={
          props.index < 3
            ? brandingColors.successColor
            : props.index === 3
            ? brandingColors.newHighlightColor
            : brandingColors.disableColor
        }
        boxShadow="xl"
        width={"6"}
        height="12"
        border={`2px solid ${
          props.index < 3
            ? brandingColors.successColor
            : props.index === 3
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
        left={props.index % 2 === 0 ? "" : "60%"}
        right={props.index % 2 !== 0 ? "" : "60%"}
        maxW={"80"}
        boxShadow={`0px 0px 4px ${
          props.index < 3
            ? brandingColors.successColor
            : props.index === 3
            ? brandingColors.newHighlightColor
            : brandingColors.disableColor
        }`}
      >
        <Text
          fontFamily={`"Chakra Petch", sans-serif`}
          fontSize={"xl"}
          color={brandingColors.primaryTextColor}
          textAlign="center"
        >
          {props.text}
        </Text>
        <Divider my={2} />
        <Box mx={"2"}>
          {props.milestones.map((m, i) => (
            <Flex key={i} columnGap={".1rem"} justifyContent="flex-start">
              <Icon
                color={
                  props.index < 3
                    ? brandingColors.successColor
                    : props.index === 3
                    ? brandingColors.primaryTextColor
                    : brandingColors.disableColor
                }
                as={
                  props.index < 3
                    ? CheckIcon
                    : props.index === 3
                    ? TimeIcon
                    : ChevronRightIcon
                }
              />
              <Text color={brandingColors.secondaryTextColor} fontSize={"sm"}>
                {m}
              </Text>
            </Flex>
          ))}
        </Box>
      </Box>
      {/* <Box
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
          props.index < 3
            ? brandingColors.successColor
            : props.index === 3
            ? brandingColors.newHighlightColor
            : brandingColors.disableColor
        }`}
      >
        <Text
          textAlign={"center"}
          borderRadius={"xl"}
          px={4}
          color={
            props.index < 3
              ? brandingColors.successColor
              : props.index === 3
              ? brandingColors.newHighlightColor
              : brandingColors.disableColor
          }
          fontSize={"7xl"}
          fontFamily={`"Chakra Petch", sans-serif`}
          textShadow={`2px 2px 3px ${
            props.index < 3
              ? brandingColors.successColor
              : props.index === 3
              ? brandingColors.newHighlightColor
              : brandingColors.disableColor
          }`}
        >
          {`${props.index + 1}`}
        </Text>
      </Box> */}
    </Box>
  );
};

export default RoadMap;
