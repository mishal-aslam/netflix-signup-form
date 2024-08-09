
// eslint-disable-next-line react/prop-types
const Button = ({ value, bgColor = '#e50914', ...props }) => {
  return (
    <input
      type="submit"
      value={value}
      className={`py-1.5 mt-3 text-center block w-full rounded hover:cursor-pointer font-semibold text-sm ${bgColor}`}
      style={{ backgroundColor: bgColor }}
      {...props}
    />
  );
};

export default Button;
