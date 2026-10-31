import { api } from "./api";

export const getReviewsUser = async (id: number) => {
  const response = await api.get(`users/${id}/reviews`);
  return response.data;
};
