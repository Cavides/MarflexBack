const {
    createProducts,
    updateProducts,
    deleteProducts,
    getProducts,
    getAllProducts,
} = require("./Products_services");

async function getAllProductsHandler(req,res) {
    const Products = await getAllProducts();
    return res.status(200).json(Products);
}

async function getProductsHandler(req, res){
    const {id} = req.params;
    try {
        const Products = await getProducts(id);;
        return res.status(200).json(Products);
    }catch(error) {
        console.error(error);
        return res.status(500).json({ message: "Error product not found" });
    }
}

async function createProductsHandler(req, res){
    const {code, title, type, category, desc, descripcion, price, medidas, material, garantia, armado, recomendaciones, imagen} = req.body;
    try{
        const Products = await createProducts({code, title, type, category, desc, descripcion, price, medidas, material, garantia, armado, recomendaciones, imagen});
        return res.status(200).json(Products);
    }catch(error) {
        console.error(error);
        return res.status(500).json({ error});
    }
}

async function deleteProductsHandler(req, res) {
    const { id } = req.product;
  
    try {
      await deleteProducts(id);
      console.log(`Product ${id} eliminated`);
      return res.status(200).json({ message: "Product eliminated" });
    } catch (error) {
      console.error(`[ERROR]: ${error}`);
      return res.status(500).json({ error });
    }
  }

  async function updateProductsHandler(req, res) {
    const ProductsUpdate = req.body;
    const { id } = req.product;
  
    try {
      await updateProducts(id, ProductsUpdate);
      const Products = await findOne(id);
      console.log("Product id:", _id, "Data updated:", ProductsUpdate);
      return res
        .status(200)
        .json({ message: "Product updated", profile: Products.profile });
    } catch (error) {
      console.error(`[ERROR]: ${error}`);
      return res.status(500).json({ message: "Error updating product", error });
    }
  }

module.exports = {
    getAllProductsHandler,
    getProductsHandler,
    createProductsHandler,
    deleteProductsHandler,
    updateProductsHandler,
};