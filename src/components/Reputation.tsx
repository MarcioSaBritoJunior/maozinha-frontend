import { AuthContext } from "@/contexts/Auth/AuthContext";
import {
  Heading,
  HStack,
  Flex,
  VStack,
  Text,
  RatingGroup,
} from "@chakra-ui/react";
import { useContext } from "react";
import { RatingDistribution } from "./RatingDistribuition";

interface IReputationProps {
  title: string;
}

export const Reputation = ({ title }: IReputationProps) => {
  const auth = useContext(AuthContext);

  return (
    <Flex
      flex={1}
      boxSize={100}
      bg="#fff"
      w="full"
      rounded={28}
      h={90}
      p={6}
      align="space-between"
      justify="center"
      direction="column"
      gap={3}
    >
      <HStack justify="space-between" w="full">
        <Heading as="h3" size="md" fontWeight="bold">
          {title}
        </Heading>
      </HStack>
      <HStack w="full" justify="space-between" gap="6%">
        <VStack>
          <Heading size="2xl" fontWeight="extrabold">
            {auth.user?.averageRating}
          </Heading>

          <RatingGroup.Root
            count={5}
            defaultValue={auth.user?.averageRating}
            readOnly
            size="md"
            colorPalette="orange"
          >
            <RatingGroup.Control />
            <RatingGroup.HiddenInput />
          </RatingGroup.Root>

          <Text fontSize={10} fontWeight="light">
            {auth.user?.totalReviews ? auth.user?.totalReviews : ""}{" "}
            {auth.user?.totalReviews ? "avaliações" : "Sem avaliação"}
          </Text>
        </VStack>
        <RatingDistribution />
      </HStack>
    </Flex>
  );
};
