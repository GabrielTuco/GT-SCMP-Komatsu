import { useState } from "react";
import { actionEnd, actionStart, getOSList } from "../services/OS.service";
import { useNavigate } from "react-router-dom";
import { getMotivos } from "../services/Motivo.service";

export const useOS = () => {
  const [listOs, setlistOs] = useState([]);
  const [motivos, SetMotivos] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const data = await getOSList();
      setlistOs(data);
    } catch (error) {}
  };

  const getListMotivos = async () => {
    try {
      const data = await getMotivos();
      SetMotivos(data);
    } catch (error) {}
  };

  const handleStart = async (list = []) => {
    try {
      if (list.length != 0) {
        const temp = listOs.filter((e) => e.estado == "todo");
        const body = list.map((e) => temp[e - 1]);
        await actionStart(body);
        navigate("/Work-panel");
      }
    } catch (error) {}
  };

  const handleEnd = async (list = []) => {
    try {
      const temp = listOs.filter((e) => e.estado == "inprocess");
      const body = list.map((e) => temp[e - 1]);
    } catch (error) {}
  };

  return {
    getData,
    handleStart,
    handleEnd,
    listOs,
    getListMotivos,
    motivos,
  };
};
