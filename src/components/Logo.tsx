import { HStack, Heading } from "@chakra-ui/react";
import { IconTile } from "./IconTile";
import { MdFrontHand } from "react-icons/md";

export function Logo() {
  return (
    <HStack gap="10px">
      <IconTile
        icone={MdFrontHand}
        backgroundColor="#1F7A50"
        iconColor="#fff"
        size="40px"
        borderRadius="12px"
      />
      <Heading fontWeight="bold" size="xl">
        mãozinha
      </Heading>
    </HStack>
  );
}
