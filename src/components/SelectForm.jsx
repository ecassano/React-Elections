export default function SelectForm({
  label = 'Escolha',
  cities = '',
  onSelectChange = null,
  value = 'Cidade',
}) {
  function handleChange(event) {
    onSelectChange(event.currentTarget.value);
  }

  return (
    <div className="flex flex-col">
      <label htmlFor="selectForm">{label}</label>
      <select
        className="outline outline-slate-200 rounded my-1 focus:outline-slate-400"
        onChange={handleChange}
        value={value}
      >
        {cities.map(({ id, name }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
