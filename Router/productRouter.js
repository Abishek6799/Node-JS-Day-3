import express from "express";
import { createProduct, deleteProduct, getProductByID, getproducts, updateProduct } from "../Controller/productController.js";


const router = express.Router()

router.get("/getdata",getproducts);
router.get("/getdata/:id",getProductByID);
router.post("/create",createProduct);
router.put("/update/:id",updateProduct);
router.delete("/delete/:id",deleteProduct);



export default router;