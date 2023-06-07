import { InputArea, Label } from "./styles";

export default function Input({
  label,
  placeholder,
  requerid,
  value,
  onchange,
}) {
  return (
    <>
      <Label>{label}</Label>
      <InputArea
        placeholder={placeholder}
        required={requerid}
        value={value}
        onChange={onchange}
      />
    </>
  );
}
