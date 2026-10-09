import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";

interface ITextProps {
  titulo: string;
  subtitulo: string;
  backgrundColor: string;
  iconColorFillLeft: string;
  iconColorFillRight: string;
}
export function ButtonBox({
  titulo,
  subtitulo,
  backgrundColor,
  iconColorFillLeft,
  iconColorFillRight,
}: ITextProps) {
  return (
    <HStack
      background={backgrundColor}
      width="50%"
      height="194px"
      rounded="24px"
      p="5"
      flexDirection="column"
      alignItems="start"
      gap="5"
    >
      <HStack width="100%" justifyContent="space-between">
        <Box
          width="48px"
          height="48px"
          background={iconColorFillLeft}
          rounded="16px"
        ></Box>
        <Box
          width="48px"
          height="48px"
          background={iconColorFillRight}
          rounded="16px"
        ></Box>
      </HStack>
      <Stack>
        <Heading size="2xl">{titulo}</Heading>
        <Text textStyle="sm" fontWeight="normal" maxW="380px">
          {subtitulo}
        </Text>
      </Stack>
    </HStack>
  );
}
