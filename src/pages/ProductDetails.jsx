import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();

  return (
    <div>
      <p>ProductDetails Page</p>

      {productId && <p>Product param: {productId}</p>}
    </div>
  );
}

export default ProductDetails;
