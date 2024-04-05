import { request, response } from "express";
import { Orden } from "../Models/Orden";
import dataSource from "../dataSource";

export const getListOrden = async (req = request, res = response) => {
  try {
    const { body, query, params } = req;
    const data = await dataSource.manager.find(Orden);
    return res.json(data);
  } catch (e) {
    return res.status(500).json({});
  }
};

export const updateTodo = async (req = request, res = response) => {
  try {
    const { body, query, params } = req;
    body.list.forEach(async (e: any) => {
      const register = await dataSource
        .getRepository(Orden)
        .findBy({ cod_ord: e.cod_ord });
      if (!register) {
        return res.status(404).json({});
      }
      register[0].estado = "inprocess";
      await dataSource.manager.save(register);
    });
  } catch (e) {
    return res.status(500).json({});
  }
};

export const updateProcess = async (req = request, res = response) => {
  try {
    const { body, query, params } = req;
    body.list.forEach(async (e: any) => {
      const register = await dataSource
        .getRepository(Orden)
        .findBy({ cod_ord: e.cod_ord });
      if (!register) {
        return res.status(404).json({});
      }
      register[0].estado = "done";
      await dataSource.manager.save(register);
    });
  } catch (e) {
    return res.status(500).json({});
  }
};
