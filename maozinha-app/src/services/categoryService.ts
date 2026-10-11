import type { ElementType } from "react";
import {
  MdHome,
  MdComputer,
  MdGrass,
  MdCleaningServices,
  MdBuild,
  MdLocalShipping,
  MdPets,
  MdEvent,
} from "react-icons/md";

export interface IServiceCategory {
  id: number;
  name: string;
  icon?: ElementType;
}

const mockCategorias: IServiceCategory[] = [
  { id: 1, name: "Casa e montagem", icon: MdHome },
  { id: 2, name: "Tecnologia", icon: MdComputer },
  { id: 3, name: "Jardinagem", icon: MdGrass },
  { id: 4, name: "Limpeza", icon: MdCleaningServices },
  { id: 5, name: "Pequenos reparos", icon: MdBuild },
  { id: 6, name: "Mudanças", icon: MdLocalShipping },
  { id: 7, name: "Cuidados com animais", icon: MdPets },
  { id: 8, name: "Eventos e fotografia", icon: MdEvent },
];

export const categoryService = {
  getCategories: async (): Promise<IServiceCategory[]> => {
    return mockCategorias;
  },
};
