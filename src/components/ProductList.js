import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
const [product, setProducts] = useState([]);
useEffect(() => {
    fetchData();
}, []);
const fetchData = async() => {
    const response = await fetch('http://localhost:8080/products');
    const data = await response.json();
    setProducts(data);
}
  return (
    <div>
        <table className="table is-striped">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {product.map((product, index) => (
                <tr key={product.id}>
                    <td>{ index + 1 }</td>
                    <td>{ product.title }</td>
                    <td>{ product.price }</td>
                    <td>
                        <Link to={`/edit/${product.id}`} className="button is-small is-info">Edit</Link>
                        <button className="button is-small is-danger">Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ProductList