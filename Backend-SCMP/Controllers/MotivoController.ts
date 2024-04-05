import { request, response } from "express";
import { Orden } from "../Models/Orden";
import dataSource from "../dataSource";
import { MotivosPar } from "../Models/Motivos_par";

export const getListMotivos = async (req = request, res = response) => {
  try {
    const { body, query, params } = req;
    const data = await dataSource.manager.find(MotivosPar);
    return res.json(data);
  } catch (e) {
    return res.status(500).json({});
  }
};
