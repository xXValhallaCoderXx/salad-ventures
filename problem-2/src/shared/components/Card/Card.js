const Card = ({ children, className }) => {
  return (
    <div className={`rounded overflow-hidden bg-white shadow-lg pixel-border ${className}`}>
      <div className="p-8">{children}</div>
    </div>
  );
};

export default Card;
