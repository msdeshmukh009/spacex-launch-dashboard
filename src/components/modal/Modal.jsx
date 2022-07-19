const Modal = ({ children, showModal }) => {
  return (
    <div
      className={`parent fixed inset-0 bg-[#c7c2c24a]  z-20 ${
        showModal ? "flex justify-center items-center" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export { Modal };
