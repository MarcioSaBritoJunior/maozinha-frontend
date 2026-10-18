import { api } from "@/services/api";

// Login: recebe e armazena os tokens.
export const signin = async (email: string, password: string) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  const { accessToken, refreshToken } = response.data;

  if (!accessToken) {
    throw new Error("O backend não retornou o access token.");
  }

  sessionStorage.setItem("accessToken", accessToken);

  if (refreshToken) {
    sessionStorage.setItem("refreshToken", refreshToken);
  }

  return response.data;
};

// Valida a sessão consultando o perfil.
export const validateToken = async (): Promise<boolean> => {
  const accessToken = sessionStorage.getItem("accessToken");

  if (!accessToken) {
    return false;
  }

  try {
    await api.get("/users/me");
    return true;
  } catch {
    logout();
    return false;
  }
};

// Encerra a sessão local.
export const logout = (): void => {
  sessionStorage.removeItem("accessToken");
  sessionStorage.removeItem("refreshToken");
};

