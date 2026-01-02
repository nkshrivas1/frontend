// import { Paper } from "@mui/material"
// import type { GridColDef } from "@mui/x-data-grid";
// import { DataGrid } from '@mui/x-data-grid';

import { Link } from "react-router-dom";
import type Product from "./interface/product";
import { Button } from "@mui/material";
import { useState } from "react";

// const Products = () => {
// const paginationModel = { page: 0, pageSize: 5 };

// const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'name', headerName: 'Name', width: 130 },
//   { field: 'price', headerName: 'Price', width: 130 },
//   { field: 'category', headerName: 'Category', width: 130 },
//   { field: 'image', headerName: 'Image', width: 130 },

// ];

// const products = JSON.parse(localStorage.getItem('products') || '[]');

//   return (
//     <Paper sx={{ height: 400, width: '100%' }}>
//       <DataGrid
//         products={products}
//         columns={columns}
//         initialState={{ pagination: { paginationModel } }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//         sx={{ border: 0 }}
//       />
//     </Paper>
//   )
// }

// export default Products



const Products = () => {
  const [products,setProducts] = useState<Product[]>(JSON.parse(localStorage.getItem('products') || '[]'))
 
  const deleteProduct=(id:number)=>{
    const updatedProducts = products.filter(p=>p.id!=id)
    setProducts(updatedProducts);
    localStorage.setItem("products",JSON.stringify(updatedProducts))
  }
  return (
    <div>
      {
        products.map((product) => (
          <div key={product.id}>
            <div>
              <img src={product.image} alt={product.name} />
              {product.name}
              {product.price}
              {product.category}
              <Link to={`/edit-product/${product.id}`}>Edit</Link>
              <Button
                onClick={()=>deleteProduct(product.id)}
                variant="contained"
                >Delete</Button>
                
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default Products;
