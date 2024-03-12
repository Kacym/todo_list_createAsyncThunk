export const Input = ({ value, onChange, placeholder, type }) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
};
