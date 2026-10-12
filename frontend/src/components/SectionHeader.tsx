import { Link, HStack, Heading, Text } from "@chakra-ui/react";

interface ISectionHeaderProps {
  titulo: string;
  itemsLabel?: string;
  itemsCount?: number;
  linkIsOn?: boolean;
}

export function SectionHeader({
  titulo,
  itemsLabel,
  itemsCount,
  linkIsOn = false,
}: ISectionHeaderProps) {
  return (
    <HStack justifyContent="space-between" boxSize="100%">
      <HStack>
        <Heading>{titulo} </Heading>
        <Text fontSize="sm">
          {itemsCount} {itemsLabel}
        </Text>
      </HStack>

      <Link href="#" color="#1F7A50" hidden={!linkIsOn}>
        Ver todos
      </Link>
    </HStack>
  );
}
