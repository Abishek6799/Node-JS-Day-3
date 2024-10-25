const products = [
    {
        "id":1,
        "name":"iphone",
        "price":250000
    },
    {
        "id":2,
        "name":"laptop",
        "price":55000
    },
    {
        "id":3,
        "name":"printer",
        "price":25030
    },
    {
        "id":4,
        "name":"mobile",
        "price":75645
    }
]

export const getproducts = (req,res)=>{
    res.status(200).json({data:products})
}

export const getProductByID = (req,res)=>{
        const productID = req.params.id;

        const productDetails = products.find(ele=>ele.id==productID);
        if(!productDetails){
           return res.status(404).json({messages:"Product Not Found"})
        }

        res.status(200).json({messages:"Product Details",data:productDetails})
}


export const createProduct = (req,res)=>{
    const {name,price} = req.body;
    const newProduct = {
        "id":products.length+1,
        "name":name,
        "price":price
    }
    products.push(newProduct);
    res.status(200).json({messages:"product created",data:newProduct});

}


export const updateProduct = (req,res)=>{
    const productID = req.params.id;
    const {name,price} = req.body;
    const index = products.findIndex((ele)=>ele.id==productID);
    if(index===-1){
        return res.status(404).json({messages:"Product Not Found"});
    }
    products[index].name = name;
    products[index].price = price;
    res.status(200).json({messages:"product updated",data:products[index]});
};

export const deleteProduct = (req,res)=>{
    const productID = req.params.id;
    const index = products.findIndex((ele)=>ele.id==productID);
    if(index===-1){
        return res.status(404).json({messages:"Product Not Found"});
    }
    products.splice(index,1)
    res.status(200).json({messages:"product deleted"});
}