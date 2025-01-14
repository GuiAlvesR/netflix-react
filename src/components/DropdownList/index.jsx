import "./DropdownList.css";

const DropwdownList = (props) => {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.onAlter(event.target.value)}
        required={props.required}
        value={props.value}
      >
        <option value=""></option>
        {props.tipos.map((tipo) => (
          <option key={tipo} value={tipo}>
            {tipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropwdownList;
