
// eslint-disable-next-line react/prop-types
const Input = ({ type = 'text', placeholder, ...props }) => {
  return (
    <input
      type={type}
      className="block w-full py-2.5 md:pr-28 pr-0 px-5 bg-transparent focus:bg-transparent rounded focus:outline-none focus:ring-0 border border-gray-600 placeholder-white my-5"
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
