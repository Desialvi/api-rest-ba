import * as productService from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json({message: "Lista de Productos", payload: products, status_code: 200});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    console.log(req.params.id)
    const product = await productService.getProductById(req.params.id);
    console.log("product",product)
    if (!product) return res.status(404).json({ error: 'Producto no encontrado', status_code: 404});
    res.status(200).json({message: "Producto encontrado", product, status_code: 200});
  } catch (err) {
    res.status(500).json({ error: err.message, status_code: 500 });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await productService.create(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await productService.remove(req.params.id);
    res.json({ mensaje: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
