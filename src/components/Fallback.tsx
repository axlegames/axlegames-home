import { Box } from "@chakra-ui/react";
import { Triangle } from "react-loader-spinner";
import { brandingColors } from "../config/brandingColors";

const FallBack = () => {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      bg={brandingColors.bgColor}
      position="fixed"
      zIndex={500}
      margin={0}
      padding={0}
    >
      <Triangle
        height={"100"}
        width={"100"}
        ariaLabel="grid-loading"
        color={brandingColors.primaryTextColor}
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Box>
  );
};

export default FallBack;
