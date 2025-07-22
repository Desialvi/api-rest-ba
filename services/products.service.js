import * as db from '../models/products.model.js';

export const getAllProducts = async () => await db.getAllProducts();
export const getProductById = (id) => db.getProductById(id);
export const create = (data) => db.create(data);
export const remove = (id) => db.remove(id);
