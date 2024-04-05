import { appAPI } from "../api";

export const getOSList = async () => {
  try {
    const response = await appAPI.get(`/orden`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const actionStart = async (list = []) => {
  try {
    const response = await appAPI.patch(`/orden/todo`, {
      list,
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const actionEnd = async (list = []) => {
  try {
    const response = await appAPI.patch(`/orden/process`, {
      list,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
