const Input = ({ label, type = "text", placeholder, onchange, ...props }) => {
  const id = label.toLowerCase().replace(" ", "-");
  return (
    <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        onChange={onchange}
        {...props}
      />
    </div>
  );
};

export default Input;
