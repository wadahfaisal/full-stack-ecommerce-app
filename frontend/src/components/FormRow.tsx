import { FormRowProps as Props } from "../types/propsTypes";

const FormRow = ({ type, name, value, handleChange, labelText }: Props) => {
  return (
    <div className="form-row">
      <label className="form-label" htmlFor={name}>
        {labelText || name}
      </label>
      <input
        className="form-input"
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default FormRow;
