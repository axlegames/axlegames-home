import { useEffect, useState } from "react";
import { socials, homeSlides, links } from "../config/data";
import { brandingColors } from "../config/brandingColors";
import { Player } from "@lottiefiles/react-lottie-player";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import Carousel from "nuka-carousel";
import NeuButton from "../components/NeuButton";

import Skeleton from "react-loading-skeleton";

const Main = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 8000);
  }, []);

  return (
    <Box minH={{ lg: "90vh" }} position="relative">
      <Box display={{ base: "block", md: "none" }}>
        <MobileAndIpadView />
      </Box>

      <Box display={{ base: "none", md: "block" }}>
        <LaptopAndDesktopView show={show} />
      </Box>
      <Flex
        display={{ base: "flex" }}
        rowGap={{ base: "1rem" }}
        alignItems={"center"}
        flexDirection={{ base: "row" }}
        justifyContent={{ base: "center" }}
      >
        {socials.map((i, x) => (
          <a href={links[x]} target={"_blank"} rel="noopener noreferrer">
            <Image
              key={i}
              data-aos={`zoom-in`}
              height={{ base: "12", lg: "20" }}
              width={{ base: "12", lg: "20" }}
              _hover={{
                transform: "scale(1.1)",
                transition: "all 200ms ease-in",
                cursor: "pointer",
              }}
              src={i}
            />
          </a>
        ))}
      </Flex>
    </Box>
  );
};
export default Main;

const MobileAndIpadView = () => {
  return (
    <Box py={8} display="flex" alignItems={"center"} height="60vh">
      <Carousel
        wrapAround={true}
        autoplay={true}
        defaultControlsConfig={{
          pagingDotsStyle: {
            height: "28px",
            width: "28px",
            fill: "#8D8CFF",
          },
          nextButtonStyle: { display: "none" },
          prevButtonStyle: {
            display: "none",
          },
          nextButtonText: "",
          prevButtonText: "",
        }}
        slidesToShow={1}
      >
        {homeSlides.map((m, i) => (
          <Box
            width={"100%"}
            fontWeight={"bold"}
            display="flex"
            flexDirection={"column"}
            rowGap="2rem"
            p={8}
            key={i}
            position={"relative"}
          >
            <Box display={"flex"} flexDirection="column" rowGap={"1rem"}>
              <Text
                lineHeight={"1.2"}
                fontSize={{ base: "sm", sm: "18px", lg: "24px" }}
                color={brandingColors.secondaryTextColor}
                fontFamily={`'Russo One', sans-serif`}
              >
                {m.mainText}
              </Text>
              <Box>
                <Text
                  className="glowc_text"
                  fontFamily={`'Russo One', sans-serif`}
                  lineHeight={"1"}
                  fontSize={{ base: "2xl" }}
                  fontWeight="normal"
                >
                  {m.header}
                </Text>
                <Text
                  className="glowc_text"
                  fontFamily={`'Russo One', sans-serif`}
                  lineHeight={"1"}
                  fontSize={{ base: "2xl" }}
                  fontWeight="normal"
                >
                  {m.subHeader}
                </Text>
              </Box>
              <Flex columnGap={"1rem"}>
                <NeuButton
                  label={"GO TO APP"}
                  onClick={() => {}}
                  bg={brandingColors.neuPrimaryBg}
                  shadow={brandingColors.newPrimaryShadow}
                />
                <NeuButton
                  label={"BUY $AXLE"}
                  onClick={() => {}}
                  bg={brandingColors.neuPrimaryBg}
                  shadow={brandingColors.newPrimaryShadow}
                />
              </Flex>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};
type Props = {
  show: boolean;
};

const LaptopAndDesktopView = (props: Props) => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      justifyContent={"center"}
      alignSelf="center"
    >
      <Carousel
        wrapAround={true}
        autoplay={true}
        defaultControlsConfig={{
          pagingDotsStyle: {
            height: "28px",
            width: "28px",
            fill: "#8D8CFF",
          },
          nextButtonStyle: { display: "none" },
          prevButtonStyle: {
            display: "none",
          },
          nextButtonText: "",
          prevButtonText: "",
        }}
        slidesToShow={1}
      >
        {homeSlides.map((m, i) => (
          <Grid
            m={5}
            justifyContent="space-between"
            key={i}
            borderRadius="3xl"
            alignItems={"center"}
            maxW={{ lg: "80vw" }}
            minH={{ lg: "70vh" }}
            p={{ base: "8" }}
            mx="auto"
            gridTemplateColumns={{ base: "1fr 1fr" }}
            columnGap={{ base: "2rem" }}
          >
            <Box
              fontWeight={"bold"}
              display="flex"
              flexDirection={"column"}
              rowGap="2rem"
              position={"relative"}
              style={{ backdropFilter: "blur(4px)" }}
              p={8}
            >
              <Box display={"flex"} flexDirection="column" rowGap={".5rem"}>
                <Text
                  lineHeight={"1.2"}
                  fontSize={{ base: "sm", sm: "18px", lg: "24px" }}
                  color={brandingColors.secondaryTextColor}
                  fontFamily={`'Russo One', sans-serif`}
                >
                  {m.mainText}
                </Text>
                <Box>
                  <Text
                    className="glowc_text"
                    fontFamily={`'Russo One', sans-serif`}
                    lineHeight={"1"}
                    fontSize={{ base: "md", sm: "24px", lg: "48px" }}
                    fontWeight="normal"
                  >
                    {m.header}
                  </Text>
                  <Text
                    className="glowc_text"
                    fontFamily={`'Russo One', sans-serif`}
                    lineHeight={"1"}
                    fontSize={{ base: "md", lg: "48px" }}
                    fontWeight="normal"
                  >
                    {m.subHeader}
                  </Text>
                </Box>
              </Box>
              <Box display={"flex"} flexDirection="column" rowGap={"3rem"}>
                <Flex display={{ base: "flex", md: "none" }} columnGap={"1rem"}>
                  <NeuButton
                    bg={"#A34400"}
                    shadow={"#FF7C1F"}
                    onClick={() => {}}
                    label="GO TO APP"
                  ></NeuButton>
                  <NeuButton
                    bg={"#A34400"}
                    shadow={"#FF7C1F"}
                    onClick={() => {}}
                    label="BUY $AXLE"
                  ></NeuButton>
                </Flex>
                <Flex display={{ base: "none", md: "flex" }} columnGap={"1rem"}>
                  <a
                    className="btn"
                    href="https://play.axlegames.io"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    GO TO APP
                  </a>
                  <div className="btn-secondary">BUY $AXLE</div>
                </Flex>
              </Box>
            </Box>
            {props.show ? null : (
              <Box width={"100%"}>
                <Skeleton
                  baseColor={brandingColors.bgColor}
                  highlightColor={brandingColors.fgColor}
                  style={{
                    boxShadow: `0px 0px 4px ${brandingColors.fgColor}`,
                  }}
                  borderRadius={"1vh"}
                  height={"300px"}
                  width="100%"
                  count={1}
                ></Skeleton>
                <Skeleton
                  baseColor={brandingColors.bgColor}
                  highlightColor={brandingColors.fgColor}
                  style={{
                    boxShadow: `0px 0px 4px ${brandingColors.fgColor}`,
                  }}
                  height={"100%"}
                  width="100%"
                  count={3}
                ></Skeleton>
              </Box>
            )}

            <div
              style={{
                display: props.show ? "block" : "none",
                width: "100%",
              }}
            >
              <Player
                style={{ width: "100%" }}
                loop
                autoplay
                src={m.json}
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
              />
            </div>
          </Grid>
        ))}
      </Carousel>
    </Box>
  );
};
