import { appAPI } from "../api";

export const getMotivos = async () => {
  try {
    const response = await appAPI.get(`/motivos`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
