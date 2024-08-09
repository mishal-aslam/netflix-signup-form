
// eslint-disable-next-line react/prop-types
const CheckboxWithLabel = ({ id, label, ...props }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        className="rounded checked:bg-gray-500 focus:ring-none  mt-4"
        {...props}
      />
      <label htmlFor={id} className="ml-3 text-white">
        {label}
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
