import Button from "../Elements/Button";

const CardProducts = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs border bg-gray-800  border-gray-700 rounded-lg shadow my-2 mx-3 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-m text-white">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        Rp{" "}
        {price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
      </span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add to Cart
      </Button>
    </div>
  );
};

const Headers = (props) => {
  const { images } = props;
  return (
    <a href="#">
      <img src={images} alt="products" className="p-8 rounded-t-lg" />
    </a>
  );
};

CardProducts.Body = Body;
CardProducts.Footer = Footer;
CardProducts.Headers = Headers;

export default CardProducts;
