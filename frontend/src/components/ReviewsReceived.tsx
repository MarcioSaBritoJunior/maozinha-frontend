import { AuthContext } from "@/contexts/Auth/AuthContext";
import { getReviewsUser } from "@/services/reviewService";
import type { User } from "@/types/User";
import {
  Heading,
  HStack,
  Flex,
  VStack,
  Text,
  RatingGroup,
  Separator,
  Avatar,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Loading } from "./Loading";
import { LuStarOff } from "react-icons/lu";

interface IReviewsReceivedProps {
  title: string;
}

interface Review {
  id: number;
  reviewerName: User;
  rating: number;
  reviwed: User;
  dateReview: Date;
  comment: string;
}

export const ReviewsReceived = ({ title }: IReviewsReceivedProps) => {
  const auth = useContext(AuthContext);
  const userId = Number(auth.user?.id);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    async function fetchReview() {
      try {
        setLoading(true);
        const data = await getReviewsUser(userId);
        setReviews(data);
      } catch (error) {
        console.error("Erro ao buscar avaliações:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchReview();
  }, [userId]);

  if (loading) {
    return <Loading />;
  }

  if (reviews.length === 0) {
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
        <VStack textAlign="center" fontWeight="medium">
          <LuStarOff />
          Sem avaliações ainda.
        </VStack>
      </Flex>
    );
  }

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

      <Separator />

      <HStack w="full" justify="flex-start" gap={3} align="flex-start">
        <Avatar.Root
          shape="rounded"
          size="md"
          outlineColor="#fff"
          outlineStyle="solid"
          rounded="10px"
          outlineWidth="2px"
          background="#F6D8C5"
          boxSize="34px"
          boxShadow="lg"
        >
          <Avatar.Fallback
            name={auth.user?.name}
            fontWeight="bold"
            fontSize="12px"
          />
          <Avatar.Image src="" />
        </Avatar.Root>

        {reviews.map((review) => (
          <VStack
            justify="space-between"
            align="space-between"
            gap={1}
            w="full"
          >
            <HStack justify="space-between" gap={3}>
              <Heading size="xs" fontWeight="extrabold">
                {review.reviewerName.name}
              </Heading>
              <Text fontSize={10}>
                {new Date(review.dateReview).toLocaleDateString("pt-BR")}
              </Text>
            </HStack>

            <RatingGroup.Root
              count={5}
              readOnly
              defaultValue={review.rating}
              size="xs"
              disabled
              colorPalette="orange"
            >
              <RatingGroup.Control />
              <RatingGroup.HiddenInput />
            </RatingGroup.Root>

            <Text fontSize={10} fontWeight="light">
              {review.comment}
            </Text>
          </VStack>
        ))}
      </HStack>
    </Flex>
  );
};
