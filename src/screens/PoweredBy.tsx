import { powerdby } from "../config/data";

import { brandingColors } from "../config/brandingColors";
import { Box, Grid, Image } from "@chakra-ui/react";

import Heading from "../components/Heading";

const PoweredBy = (props: any) => {
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      flexDirection={"column"}
      rowGap={{ base: "2rem" }}
      py={12}
    >
      <Heading title="Powered By" />
      <Grid
        py={{ lg: "16" }}
        width={{ lg: "85%", xl: "75%", "2xl": "65%" }}
        mx={{ lg: "auto" }}
        gridTemplateColumns={{
          base: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
          lg: "1fr 1fr 1fr 1fr",
        }}
        justifyContent="flex-start"
      >
        {powerdby.map((img, index) => (
          <Box
            key={index}
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            borderBottom={{
              base: "none",
              lg:
                index > 3
                  ? "none"
                  : `4px groove ${brandingColors.newHighlightColor}`,
            }}
            borderLeft={{
              base: "none",
              lg:
                index === 0 || index === 4
                  ? "none"
                  : `4px groove ${brandingColors.newHighlightColor}`,
            }}
            p={{ lg: 6 }}
          >
            <Image
              width={{ base: "40%", lg: "70%" }}
              className="logos"
              src={img}
              data-aos={`zoom-out`}
            ></Image>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default PoweredBy;
