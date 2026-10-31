export type User = {
  id: number;
  name: string;
  email?: string;
  whatsapp: string;
  city: string;
  neighborhood: string;
  role: string;
  status: string;
  averageRating: number;
  totalReviews: number;
  skills: string[];
  createdAt: string | Date;
  updatedAt: string | Date;
};
