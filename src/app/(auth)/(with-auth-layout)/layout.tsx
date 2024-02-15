interface ChildrenProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <h2>Inner layout</h2>
      {children}
    </>
  );
};

export default AuthLayout;
