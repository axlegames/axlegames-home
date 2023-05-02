import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Button,
  Tr,
} from "@chakra-ui/react";
import moment from "moment";
import { brandingColors, brandingFonts } from "../../config/brandingColors";
import { Transactions, e9 } from "./utils";

const StakeTransactions = (props: {
  transactions: Transactions[];
  preClaim: Function;
  toggle: boolean;
  preClaimFlex: Function;
}) => {
  const heading = [
    "sno",
    "amount",
    "staked at",
    "locked until",
    "days",
    "apy",
    "status",
    "options",
  ];

  const getUntilIn = (date: any) => {
    const time = new Date(new Date(date * 10 ** 18 * 1000)).toDateString();
    return time;
  };

  const stakedAt = (date: any, apy: number) => {
    apy *= 10 ** 18;
    apy /= 100;
    date *= 10 ** 18 * 1000;
    const time = 1000 * 60 * 60 * 24;
    const lockedUntil = new Date(new Date(date));
    let days = 30;
    if (apy === 17) days = 90;
    if (apy === 20) days = 180;
    if (apy === 25) days = 360;
    days *= time;
    return new Date(new Date(lockedUntil).getTime() - days).toDateString();
  };

  const noOfDays = (date: any, apy: number) => {
    apy *= 10 ** 9;
    apy /= 100;
    apy = Number(apy.toFixed(0));
    const time = 1000 * 60 * 60 * 24;
    const lockedUntil = new Date(new Date(date * 10 ** 9 * 1000));
    let days = 30;
    if (apy === 17) days = 90;
    if (apy === 20) days = 180;
    if (apy === 25) days = 360;
    const interval = days * time;
    let start = moment(new Date(new Date(lockedUntil).getTime() - interval));
    let end = moment(lockedUntil);
    return Math.abs(start.diff(end, "days"));
  };

  return (
    <Box
      my={8}
      borderRadius="3xl"
      borderLeft={`2px solid ${brandingColors.newHighlightColor}`}
      borderRight={`2px solid ${brandingColors.newHighlightColor}`}
      borderBottom={`2px solid ${brandingColors.newHighlightColor}`}
      color={brandingColors.primaryTextColor}
      boxShadow={`0px 0px 120px -70px ${brandingColors.newHighlightColor}`}
      height="100%"
      border={`3px solid ${brandingColors.newHighlightColor}`}
      py={2}
    >
      <Text
        textAlign={"center"}
        fontFamily={brandingFonts.subFont}
        my={2}
        color={brandingColors.secondaryTextColor}
        cursor="pointer"
        pb={4}
        fontSize={{ base: "xl", md: "2xl" }}
        borderBottom={`3px solid ${brandingColors.newHighlightColor}`}
      >
        TRANSACTIONS
      </Text>
      <TableContainer>
        <Table minW={`42vw`} variant={"unstyled"}>
          <Thead>
            <Tr borderBottom={`3px solid ${brandingColors.newHighlightColor}`}>
              {heading.map((h, i) => (
                <Th
                  fontFamily={brandingFonts.subFont}
                  color={brandingColors.primaryTextColor}
                  key={i}
                >
                  {h}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody border="none">
            {props.transactions.map((t, i) => (
              <Tr
                borderBottom={
                  i === props.transactions.length - 1
                    ? "none"
                    : `3px solid ${brandingColors.newHighlightColor}`
                }
              >
                <Td
                  fontFamily={brandingFonts.subFont}
                  color={brandingColors.highLightColor}
                  fontSize={"sm"}
                  fontWeight="600"
                >
                  {i + 1}
                </Td>
                <Td
                  fontFamily={brandingFonts.subFont}
                  color={brandingColors.highLightColor}
                  fontSize={"sm"}
                  fontWeight="600"
                >
                  {t.amount * e9}
                </Td>
                <Td
                  fontFamily={brandingFonts.subFont}
                  color={brandingColors.highLightColor}
                  fontSize={"sm"}
                  fontWeight="600"
                >
                  {stakedAt(t.lockedUntil, t.percent)}
                </Td>
                <Td
                  fontFamily={brandingFonts.subFont}
                  color={brandingColors.highLightColor}
                  fontSize={"sm"}
                  fontWeight="600"
                >
                  {getUntilIn(t.lockedUntil)}
                </Td>
                <Td
                  fontFamily={brandingFonts.subFont}
                  color={brandingColors.highLightColor}
                  fontSize={"sm"}
                  fontWeight="600"
                >
                  {noOfDays(t.lockedUntil, t.percent)}
                </Td>
                <Td
                  fontFamily={brandingFonts.subFont}
                  color={brandingColors.highLightColor}
                  fontSize={"sm"}
                  fontWeight="600"
                >
                  {t.percent * 10 ** 16}%
                </Td>
                <Td
                  fontFamily={brandingFonts.subFont}
                  color={brandingColors.highLightColor}
                  fontSize={"sm"}
                  fontWeight="600"
                >
                  {t.stakingOver ? "over" : "in progress"}
                </Td>
                <Td
                  fontFamily={brandingFonts.subFont}
                  color={brandingColors.highLightColor}
                  fontSize={"sm"}
                  fontWeight="600"
                  display="flex"
                  justifyContent={"center"}
                  columnGap=".5rem"
                >
                  <Button
                    isDisabled={true}
                    onClick={() => props.preClaim(i + 1)}
                    color={brandingColors.highLightColor}
                    fontSize={{ base: "xs" }}
                    size="sm"
                    bg={brandingColors.primaryButtonColor}
                    fontFamily={brandingFonts.subFont}
                    _hover={{
                      bg: brandingColors.highLightColor,
                      color: brandingColors.primaryTextColor,
                    }}
                  >
                    PRE-CLAIM
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          {props.transactions.length <= 0 ? (
            <TableCaption
              color={brandingColors.primaryTextColor}
              fontFamily={brandingFonts.subFont}
            >
              No Transcations Found
            </TableCaption>
          ) : null}
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StakeTransactions;
