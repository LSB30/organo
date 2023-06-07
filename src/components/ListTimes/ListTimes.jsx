import { Container, Label, Select } from "./styles";

export default function ListTimes({ label, itens , required, value, onchange}) {
  return (
    <Container>
      <Label>{label}</Label>
      <Select required={required} value={value} onChange={onchange}>
      <option value=""></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </Select>
    </Container>
  );
}
