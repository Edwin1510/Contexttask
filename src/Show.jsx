
import { useContext } from "react";
import Countcontext from "./Countcontext";

const Show = ({ id, title, images, price, quantity, }) => {
const totalCost = quantity * price;

const {handleQuantityChange}=useContext(Countcontext)

return (
<div className="card">
<h1>{title}</h1>
{images.map((image, index) => (
<img src={image} alt={title} key={index} />
))}
<h2>{price}</h2>
<button onClick={() => handleQuantityChange(id)}>Qty: {quantity}</button>
<h1>Total Cost: {totalCost}</h1>
</div>
);
};

export default Show;

