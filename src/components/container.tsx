type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto bg-white/5">
      {children}
    </div>
  );
}
export default Container;
