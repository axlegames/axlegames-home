import { Box, Flex, Image, Text } from "@chakra-ui/react";

const TransactionFailureDialog = (props: any) => {
  return (
    <Box>
      <Box display={"flex"} py={8} flexDirection="column" rowGap={"1rem"}>
        <Flex
          direction={"column"}
          justifyContent="center"
          rowGap={"1rem"}
          alignItems={"center"}
        >
          <Image
            width={"50%"}
            src={`https://axlegames.s3.ap-south-1.amazonaws.com/assets/gamein/cancel.png`}
          />
          <Text fontSize={"xl"}>Oops, something went wrong, try again</Text>
        </Flex>
        <Flex justifyContent={"center"}>
          <Box fontFamily={"Russo One"} className="btnc" onClick={props.close}>
            Close
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default TransactionFailureDialog;
