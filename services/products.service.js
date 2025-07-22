import * as db from '../models/products.model.js';

export const getAll = async () => await db.getAllProducts();
export const getById = (id) => db.getById(id);
export const create = (data) => db.create(data);
export const remove = (id) => db.remove(id);
