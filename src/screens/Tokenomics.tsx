import Heading from "../components/Heading";

import { chart, tokenomics } from "../config/data";
import { brandingColors } from "../config/brandingColors";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const Tokenomics = () => {
  const aligner = (index: number) => {
    if (index === 0) return "flex-end";
    if (index === 1) return "center";
    return "flex-start";
  };

  return (
    <Box bg={brandingColors.bgColor} p={{ base: "4", lg: "16" }}>
      <Heading title="Tokenomics" />
      <Grid
        pt={{ base: "16" }}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
        columnGap={"3rem"}
        rowGap={"3rem"}
        justifyContent="center"
        width={{ lg: "80%" }}
        mx={{ lg: "auto" }}
        bg={brandingColors.bgColor}
      >
        {tokenomics.map((t, i) => (
          <GridItem
            key={i}
            display={"flex"}
            flexDirection="row"
            borderRadius="md"
            alignItems={"center"}
            justifyContent={{ base: "center", lg: aligner(i) }}
            columnGap="1rem"
            p={2}
          >
            <Image
              maxW={{ base: "60px", xl: "80px" }}
              borderRadius={"xl"}
              src={t.img}
              data-aos={`fade-left`}
            />

            <Box
              display={"flex"}
              flexDirection="column"
              alignItems={"center"}
              justifyContent="flex-start"
              data-aos={`fade-right`}
            >
              <Text
                lineHeight={"1"}
                fontSize={{ base: "md", lg: "3xl" }}
                color={brandingColors.primaryTextColor}
                fontFamily={`"Chakra Petch", sans-serif`}
                fontWeight="bold"
              >
                {t.title}
              </Text>
              <Text
                fontSize={{ base: "sm", md: "md" }}
                fontWeight={"normal"}
                color={brandingColors.secondaryTextColor}
              >
                {t.sub}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
      <Grid
        px={{ base: "4" }}
        alignItems="center"
        justifyContent="center"
        gridTemplateColumns={{ base: "1fr", lg: "1fr" }}
        columnGap={{ base: "8rem" }}
        rowGap={{ base: "2rem" }}
        bg={brandingColors.bgColor}
      >
        <Box display={"flex"} justifyContent="flex-end">
          <Box
            data-aos={`zoom-in`}
            height={{ base: "70vh" }}
            width="100%"
            borderRadius="xl"
            color={brandingColors.secondaryTextColor}
          >
            <iframe
              data-aos={"zoom-in"}
              style={{
                height: "100%",
                width: "100%",
                overflow: "hidden",
              }}
              title="charts"
              srcDoc={chart}
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Tokenomics;
