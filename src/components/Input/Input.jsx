import { InputArea, Label } from "./styles";

export default function Input({
  label,
  placeholder,
  requerid,
  value,
  onchange,
  type = 'text',
}) {
  return (
    <>
      <Label>{label}</Label>
      <InputArea
        type={type}
        placeholder={placeholder}
        required={requerid}
        value={value}
        onChange={onchange}
      />
    </>
  );
}
