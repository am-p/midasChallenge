import { Products } from "../models/Product.js";
import { Op } from "sequelize";

export const createProduct = async (req, res) => {
  const { name, price, category } = req.body;
  try {
    const newProduct = await Products.create({
      name,
      price,
      category,
    });
    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const { name, priceRange, category, sortBy, sortOrder } = req.query;

    /* Setting default for page and pageSize */
    const page = parseInt(req.query.page, 10) || 1;
    const pageSize = parseInt(req.query.pageSize, 10) || 10;
    const filters = {};

    if (name) {
      filters.name = name;
    }
    if (category) {
      filters.category = category;
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split("-");
      filters.price = {
        [Op.between]: [minPrice, maxPrice],
      };
    }

    /* Setting default order */
    const order = sortBy ? [[sortBy, sortOrder || "ASC"]] : [];
    const offset = (page - 1) * pageSize;
    const limit = pageSize;

    const products = await Products.findAll({
      where: filters,
      order,
      offset,
      limit,
    });
    res.json({
      products,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, category } = req.body;
  try {
    const product = await Products.findByPk(id);
    product.name = name;
    product.price = price;
    product.category = category;
    await product.save();
    res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Products.destroy({
      where: {
        id,
      },
    });
    res.json({ message: "Product delete" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
