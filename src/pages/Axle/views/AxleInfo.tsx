import { Box, Flex, FormControl, Grid, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import Dialog from "../dialog/AxleDialog";
import PreSale from "../dialog/PreSaleDialog";
import NeuButton from "../component/NeuButton";
import Tag from "../component/Tag";
import { brandingColors } from "../../../config/brandingColors";

const AxleInfo = () => {
  const token = [
    {
      name: "Name",
      value: "Axle Games",
    },
    {
      name: "Ticker",
      value: "$AXLE",
    },
    {
      name: "Total supply",
      value: "500 million",
    },
    {
      name: "Type",
      value: "BEP-20",
    },
    {
      name: "Sale",
      value: "200 million",
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <Grid
      templateColumns={{ base: "1fr", xl: "1fr 1fr" }}
      alignItems={"center"}
      borderRadius="xl"
      px={{ base: "4", lg: "8" }}
    >
      <Dialog
        close={() => setOpen(false)}
        children={<PreSale />}
        isOpen={open}
        key={1}
        size={"lg"}
      />

      <Flex
        my={{ base: "8" }}
        px={{ base: "4" }}
        direction={"row"}
        textAlign={"left"}
        fontWeight="bold"
      >
        <Flex
          direction="column"
          bg={brandingColors.fgColor}
          borderRadius="2xl"
          px={{ base: "3" }}
          pt={{ base: "3" }}
          fontWeight="bold"
          minW={"30vw"}
          width="100%"
        >
          <Text
            color={brandingColors.primaryTextColor}
            fontSize={{ base: "xl", xl: "3xl" }}
            textAlign="center"
          >
            Token Information
          </Text>
          <Flex my={4} rowGap={".5rem"} direction={"column"}>
            {token.map((t, i) => (
              <Tag key={i} name={t.name} value={t.value} />
            ))}
          </Flex>
        </Flex>
      </Flex>

      <Box
        borderRadius={"2vh 4vw"}
        justifyContent={"center"}
        alignSelf="center"
        bg={brandingColors.fgColor}
        display={"flex"}
        py={{ base: "24", lg: "8" }}
        height="80%"
        boxShadow={"xl"}
        px={8}
        flexDirection="column"
        fontSize={{ base: "md", lg: "xl" }}
        color={brandingColors.primaryTextColor}
        fontWeight="bold"
        fontFamily={`'Russo One', sans-serif`}
        rowGap="2rem"
        pos={"relative"}
      >
        <Box
          px={8}
          top={"-8%"}
          boxShadow="xl"
          borderRadius="xl"
          bg={brandingColors.fgColor}
          position="absolute"
          py={{ base: "4", xl: 0 }}
        >
          <Text>Buy $AXLE</Text>
        </Box>
        <Grid
          templateColumns={{ base: "1fr 3fr" }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text>BNB</Text>
          <FormControl isRequired>
            <Input
              outline={"none"}
              boxShadow={`1px 1px 4px ${brandingColors.newHighlightColor}`}
              color={brandingColors.secondaryTwoTextColor}
              fontWeight="bold"
              size={"lg"}
              placeholder="BNB"
            />
          </FormControl>
        </Grid>
        <Grid
          templateColumns={"1fr 3fr"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text>$AXLE</Text>
          <FormControl isRequired>
            <Input
              boxShadow={`1px 1px 4px ${brandingColors.newHighlightColor}`}
              color={brandingColors.secondaryTwoTextColor}
              fontWeight="bold"
              size="lg"
              placeholder="$AXLE"
            />
          </FormControl>
        </Grid>
        <Flex justifyContent={"center"}>
          <NeuButton
            bg={brandingColors.neuPrimaryBg}
            label="connect wallet"
            onClick={() => setOpen(true)}
            shadow={brandingColors.newPrimaryShadow}
          />
        </Flex>
      </Box>
    </Grid>
  );
};

export default AxleInfo;
