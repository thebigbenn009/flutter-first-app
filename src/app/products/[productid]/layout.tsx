interface ChildrenProps {
  children: React.ReactNode;
}

const ProductDetailsLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      {children}
      <h2>Featured Products</h2>
    </>
  );
};

export default ProductDetailsLayout;
