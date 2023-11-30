function Input({ placeholder, label, id, type, required, ...props }: any) {
  return (
    <div className="input-wrapper w-full">
      {label && (
        <label className="block mb-0.5 text-sm" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="relative w-full">
        <div className="absolute inset-0 start-0 flex items-center ps-2 pointer-events-none text-charcoal-green">
          {props.icon && <props.icon className="h-4 w-4" />}
        </div>
        <input
          ref={null}
          required={required}
          id={id}
          className={`w-full rounded-sm text-sm ${
            props.icon && "ps-8"
          } ps-2 py-1 outline-none ring-2 ring-charcoal-green
          focus-visible:ring-primary pe-2`}
          type={type}
          placeholder={placeholder}
          {...props.register}
        ></input>
      </div>
    </div>
  );
}
export default Input;
