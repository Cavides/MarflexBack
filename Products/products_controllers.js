const {
    createProducts,
    updateProducts,
    deleteProducts,
    getProduct,
    getAllProducts,
    getProductByCode,
} = require("./products_services");

async function getAllProductsHandler(req,res) {
    const Products = await getAllProducts();
    return res.status(200).json(Products);
}

async function getProductHandler(req, res){
    const {id} = req.params;
    try {
        const Products = await getProduct(id);;
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
    const { id } = req.params;
  
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
    const productsUpdate=req.body;
    const {id}=req.params;
    try {
      await updateProducts(id, productsUpdate);
      console.log("Product ${id} Data updated:");
      return res
        .status(200)
        .json({ message: "Product updated"});
    } catch (error) {
      console.error(`[ERROR]: ${error}`);
      return res.status(500).json({ message: "Error updating product", error });
    }
  }

  async function getProductByCodeHandler(req, res) {
    const { code } = req.params;
    try {
      const product = await getProductByCode(code);
  
      if (!product) {
        console.log('Code not found');
        return res.status(404).json({ message: 'Email not found' });
      }
      console.log('Showing product', product);
      return res.json(product);
    } catch (error) {
      console.error(`[ERROR]: ${error}`);
      return res.status(500).json({message:"No está funcionando" });
    }
  }

module.exports = {
    getAllProductsHandler,
    getProductHandler,
    createProductsHandler,
    deleteProductsHandler,
    updateProductsHandler,
    getProductByCodeHandler
};