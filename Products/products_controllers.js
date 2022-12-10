const {
    createProduct,
    updateProduct,
    deleteProduct,
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

async function createProductHandler(req, res){
    const {code, title, type, category, desc, descripcion, price, medidas, material, garantia, armado, recomendaciones, imagen} = req.body;
    try{
        const Products = await createProduct({code, title, type, category, desc, descripcion, price, medidas, material, garantia, armado, recomendaciones, imagen});
        return res.status(200).json(Products);
    }catch(error) {
        console.error(error);
        return res.status(500).json({ error});
    }
}

async function deleteProductHandler(req, res) {
    const { id } = req.params;
  
    try {
      await deleteProduct(id);
      console.log(`Product ${id} eliminated`);
      return res.status(200).json({ message: "Product eliminated" });
    } catch (error) {
      console.error(`[ERROR]: ${error}`);
      return res.status(500).json({ error });
    }
  }

  async function updateProductHandler(req, res) {
    const productUpdate=req.body;
    const {id}=req.params;
    console.log("Ta bien por aqui",id,productUpdate);
    try {
      await updateProduct(id, productUpdate);
      return res.status(200).json({ message: "Product updated"});
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
    createProductHandler,
    deleteProductHandler,
    updateProductHandler,
    getProductByCodeHandler
};