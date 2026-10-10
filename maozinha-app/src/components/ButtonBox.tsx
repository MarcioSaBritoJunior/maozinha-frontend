import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import type { ElementType } from "react";

interface ITextProps {
  titulo: string;
  subtitulo: string;
  backgrundColor: string;
  iconColorFillLeft: string;
  iconColorFillRight: string;
  iconLeft?: ElementType;
  iconRight?: ElementType;
  iconSize: string;
}
export function ButtonBox({
  titulo,
  subtitulo,
  backgrundColor,
  iconColorFillLeft,
  iconColorFillRight,
  iconLeft: IconeEsq,
  iconRight: IconeDir,
  iconSize,
}: ITextProps) {
  return (
    <HStack
      as="button"
      onClick={() => ""}
      cursor="pointer"
      textAlign="left"
      border="none"
      background={backgrundColor}
      width="100%"
      height="194px"
      rounded="24px"
      p="5"
      flexDirection="column"
      alignItems="start"
      gap="5"
      _hover={{ opacity: 0.89, filter: "brightness(0.98)" }}
      _active={{ transform: "scale(0.99)" }}
    >
      <HStack width="100%" justifyContent="space-between">
        <Box
          width="48px"
          height="48px"
          background={iconColorFillLeft}
          rounded="16px"
          justifyItems="center"
          alignContent="center"
        >
          {IconeEsq && <IconeEsq size={iconSize} color={iconColorFillRight} />}
        </Box>
        <Box
          width="48px"
          height="48px"
          background={iconColorFillRight}
          rounded="16px"
          justifyItems="center"
          alignContent="center"
        >
          {IconeDir && <IconeDir size={iconSize} color={iconColorFillLeft} />}
        </Box>
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
