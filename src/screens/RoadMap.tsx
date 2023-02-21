import { phases } from "../config/data";
import { brandingColors } from "../config/brandingColors";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";

import Heading from "../components/Heading";

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
        rowGap={"1rem"}
        py={{ base: "16" }}
        columnGap="1rem"
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
          minW="2vh"
          height={"84vh"}
          borderRadius="md"
          boxShadow={"lg"}
          bg={`#4609C3`}
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
          zIndex={100}
          bottom={"44%"}
          top={"44%"}
          borderTop={`32px solid transparent`}
          borderBottom={`32px solid transparent`}
          borderLeft={`32px solid #4609C3`}
          position={"absolute"}
          left="-5%"
        ></Box>
      ) : null}
      <Box
        cursor={"pointer"}
        data-aos={props.index % 2 === 0 ? `fade-left` : `fade-right`}
        bg={brandingColors.bgColor}
        _hover={{
          boxShadow: `0px 0px 24px -8px ${brandingColors.newHighlightColor}`,
          transition: "all 100ms ease-out",
        }}
        p={{ base: "4" }}
        borderRadius="xl"
        minW={{ base: "96" }}
        minH={{ base: "64" }}
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

// const MPhase = (props: Props) => {
//   return (
//     <Box display={"flex"} justifyContent="center" position={"relative"}>
//       <Box
//         p={{ base: "4" }}
//         borderRadius="xl"
//         position={"absolute"}
//         minW={{ base: "60%" }}
//         zIndex={4}
//       ></Box>
//       <Box
//         data-aos={props.index % 2 === 0 ? `fade-right` : `fade-left`}
//         display={"flex"}
//         bg={brandingColors.bgColor}
//         boxShadow={`2px 2px 2px 3px ${
//           props.index < 3
//             ? brandingColors.successColor
//             : props.index === 3
//             ? brandingColors.newHighlightColor
//             : brandingColors.disableColor
//         }`}
//         boxSize={props.current ? "48" : "36"}
//         borderRadius={"50vh"}
//         position="relative"
//         alignItems={"center"}
//         justifyContent="center"
//         flexDirection={"column"}
//       >
//         <Text
//           textAlign={"center"}
//           borderRadius={"xl"}
//           px={4}
//           color={
//             props.index < 3
//               ? brandingColors.successColor
//               : props.index === 3
//               ? brandingColors.newHighlightColor
//               : brandingColors.disableColor
//           }
//           fontSize={"2xl"}
//           fontFamily={`"Chakra Petch", sans-serif`}
//           textShadow={`2px 2px 3px ${
//             props.index < 3
//               ? brandingColors.successColor
//               : props.index === 3
//               ? brandingColors.newHighlightColor
//               : brandingColors.disableColor
//           }`}
//         >
//           Q{props.index + 1}
//         </Text>
//         <Text
//           textAlign={"center"}
//           borderRadius={"xl"}
//           px={4}
//           color={
//             props.index < 3
//               ? brandingColors.successColor
//               : props.index === 3
//               ? brandingColors.newHighlightColor
//               : brandingColors.disableColor
//           }
//           fontSize={"md"}
//           textShadow={`2px 2px 3px ${
//             props.index < 3
//               ? brandingColors.successColor
//               : props.index === 3
//               ? brandingColors.newHighlightColor
//               : brandingColors.disableColor
//           }`}
//         >
//           {props.phase}
//         </Text>
//         <Text
//           onClick={() => changeState(props)}
//           width={"100%"}
//           fontSize="xs"
//           textDecoration={"underline"}
//           variant={"ghost"}
//           color={brandingColors.secondaryTextColor}
//           textAlign={"center"}
//         >
//           see more
//         </Text>
//       </Box>

//       <Box
//         data-aos={props.index % 2 === 0 ? `fade-left` : `fade-right`}
//         bg={
//           props.index < 3
//             ? brandingColors.successColor
//             : props.index === 3
//             ? brandingColors.newHighlightColor
//             : brandingColors.disableColor
//         }
//         borderRadius="xl"
//         bottom={props.current ? "-35%" : "-45%"}
//         zIndex={12}
//         position={"absolute"}
//         px={4}
//         py={2}
//       >
//         <Text
//           fontWeight={"bold"}
//           fontFamily={`"Chakra Petch", sans-serif`}
//           textAlign={"center"}
//           color={brandingColors.secondaryTextColor}
//         >
//           {props.milestones[0]}
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// const MLinker = (props: any) => {
//   return (
//     <Box
//       data-aos={props.index % 2 === 0 ? `fade-right` : `fade-left`}
//       flexDirection={"column"}
//       alignItems="center"
//       display={"flex"}
//       justifyContent="center"
//     >
//       <Box
//         height={props.isLast ? "30px" : "98px"}
//         width="6"
//         bg={
//           props.index < 3
//             ? brandingColors.successColor
//             : props.index === 3
//             ? brandingColors.newHighlightColor
//             : brandingColors.disableColor
//         }
//         border={`3px solid ${
//           props.index < 3
//             ? brandingColors.successColor
//             : props.index === 3
//             ? brandingColors.newHighlightColor
//             : brandingColors.disableColor
//         }`}
//       ></Box>
//     </Box>
//   );
// };

// const Linker = (props: any) => {
//   return (
//     <Box display={"flex"} justifyContent="center">
//       <Box
//         display={"flex"}
//         alignSelf="center"
//         justifySelf={"center"}
//         bg={
//           props.index < 3
//             ? brandingColors.successColor
//             : props.index === 3
//             ? brandingColors.newHighlightColor
//             : brandingColors.disableColor
//         }
//         boxShadow="xl"
//         width={"6"}
//         height="12"
//         border={`2px solid ${
//           props.index < 3
//             ? brandingColors.successColor
//             : props.index === 3
//             ? brandingColors.newHighlightColor
//             : brandingColors.disableColor
//         }`}
//         position="relative"
//       ></Box>
//     </Box>
//   );
// };

// const CModal = (props: any) => {
//     return (
//       <Modal
//         blockScrollOnMount={false}
//         isOpen={props.open}
//         onClose={props.close}
//       >
//         <ModalOverlay />
//         <ModalContent m={4} bg={brandingColors.bgColor}>
//           <ModalHeader
//             textAlign={"center"}
//             fontFamily={`"Chakra Petch", sans-serif`}
//             color={brandingColors.primaryTextColor}
//           >
//             {state?.text}{" "}
//           </ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Box mx={"2"}>
//               {state?.milestones.map((m: string, i: number) => (
//                 <Flex key={i} columnGap={".1rem"} justifyContent="flex-start">
//                   <Icon
//                     color={
//                       state.index < 3
//                         ? brandingColors.successColor
//                         : state.index === 3
//                         ? brandingColors.primaryTextColor
//                         : brandingColors.disableColor
//                     }
//                     as={
//                       state.index < 3
//                         ? SunIcon
//                         : state.index === 3
//                         ? SunIcon
//                         : SunIcon
//                     }
//                   />
//                   <Text
//                     color={brandingColors.secondaryTextColor}
//                     fontSize={"sm"}
//                   >
//                     {m}
//                   </Text>
//                 </Flex>
//               ))}
//             </Box>
//           </ModalBody>

//           <ModalFooter>
//             <NeuButton
//               label="Close"
//               onClick={props.close}
//               bg={brandingColors.neuPrimaryBg}
//               shadow={brandingColors.newPrimaryShadow}
//             />
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     );
//   };

//   function changeState(props: Props) {
//     setOpen(!open);
//     setState(props);
//   }

/* <CModal open={open} close={() => setOpen(false)} />
      {/* <Grid
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
      </Grid> */
