import "./product.scss";
import productData from "./productData";
const Product = () => {
  return (
    <div className="Product" id="Product">
      <div className="Title">Some of our discounted products:</div>
      <div className="Items">
        {productData.map((product) => {
          return (
            <div className="Item-container" key={product.id}>
              <div className="Product-image">
                <img
                  src={product.img}
                  alt={product.alt}
                  height="70%"
                  width="80%"
                />
              </div>
              <div className="Product-info">
                <div className="Product-name">{product.name}</div>
                <div className="Product-price">{product.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Product;
