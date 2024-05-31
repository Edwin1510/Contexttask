import { useEffect, useState } from "react";

import Show from "./Show";
import './App.css';
import Countcontext from "./Countcontext";
import { GetApi } from "./Router";

const App = () => {
    const [productData, setProductData] = useState([]);
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (id) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: (prevQuantities[id] || 1) + 1,
        }));
    };

    const getApi = async () => {
        const data = await GetApi();
        setProductData(data);
        
        const initialQuantities = data.products.reduce((acc, product) => {
            acc[product.id] = 1; // Initialize each product quantity to 1
            return acc;
        }, {});
        setQuantities(initialQuantities);
    };

    useEffect(() => {
        getApi();
    }, []);

    return (
        <Countcontext.Provider value={{ handleQuantityChange }}>
            <div className="container">
                {productData.products && productData.products.map((product) => (
                    <Show
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        images={product.images}
                        price={product.price}
                        quantity={quantities[product.id] || 1}
                    />
                ))}
            </div>
        </Countcontext.Provider>
    );
};

export default App;
