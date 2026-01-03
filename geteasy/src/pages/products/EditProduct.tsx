import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import type Product from "./interface/product";
import { Button, TextField } from "@mui/material";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>({
    id: Number(id),
    name: "",
    price: 0,
    category: "",
    image: ""
  })
  const fetchProduct = () => {
    const exisistingProducts = JSON.parse(
      localStorage.getItem('products') || '[]');
    const p = exisistingProducts.find(
      (data: Product) => data.id === Number(id));
    setProduct(p);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProduct(
      {
        ...product,
        [name]: name === "price" ? Number(value) : value
      }
    )
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const exisistingProducts: Product[] =
      JSON.parse(localStorage.getItem('products') || "[]");
    const updatedProducts =
      exisistingProducts.map(pro =>
        pro.id === Number(id) ? product : pro)
    localStorage.setItem('products', JSON.stringify(
      updatedProducts
    ))


  }

  useEffect(() => {
    // first
    console.log('on mounted');
    fetchProduct()
    return () => {
      // second
      console.log('on unmounted');

    }
  }, [id])

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Product Name</label>
          <TextField
            label="Product Name"
            name='name'
            value={product.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <label htmlFor="">Product Price</label>
          <TextField
            label="Product Price"
            name='price'
            value={product.price}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <label htmlFor="">Product Category</label>
          <TextField
            label="Product Category"
            name='category'
            value={product.category}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <div>
          <label htmlFor="">Product Image</label>
          <TextField
            label="Product Image"
            name='image'
            value={product.image}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          fullWidth
        >
          Add Product
        </Button>
      </form>
    </div>
  )
}

export default EditProduct