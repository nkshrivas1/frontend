import { TextField } from "@mui/material"
import { useState } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
}

export const AddProduct = () => {
    const [product, setProduct] = useState<Omit<Product, "id">>({
        name: "",
        price: 0,
        category: "",
        image: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setProduct(
            {
                ...product,
                [name]: name === "price" ? Number(value) : value
            }
        )
    }

    return (
        <div>
            <h1>Add Product</h1>
            <form action="">
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
            </form>
        </div>
    )
}
