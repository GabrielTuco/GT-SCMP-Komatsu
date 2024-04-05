import { request, response } from "express";
import { Orden } from "../Models/Orden";
import dataSource from "../dataSource";
import { Cliente } from "../Models/Cliente";

export const testController = async (req = request, res = response) => {
  try {
    const { body, query, params } = req;
    const data = await dataSource.manager.find(Cliente);
    return res.json(data);
  } catch (e) {
    return res.status(500).json({});
  }
};
