import { Container, FormContainer } from "./styles";
import Input from "../Input/Input";
import ListTimes from "../ListTimes/ListTimes";
import Button from "../Button/Button";
import { useState } from "react";

export default function Form({ onCreateCollaborator, teams }) {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [imgUrl, setImgUrla] = useState("");
  const [time, setTime] = useState("");

  return (
    <Container>
      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          onCreateCollaborator({
            name,
            office,
            imgUrl,
            time,
          });
          setName("");
          setOffice("");
          setImgUrla("");
          setTime("");
        }}
      >
        <h2>Preencha os dados para criar o card do colaborador.</h2>

        <Input
          requerid={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onchange={(e) => setName(e.target.value)}
        />
        <Input
          requerid={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={office}
          onchange={(e) => setOffice(e.target.value)}
        />
        <Input
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={imgUrl}
          onchange={(e) => setImgUrla(e.target.value)}
        />
        <ListTimes
          requerid={true}
          label="Time"
          itens={teams}
          value={time}
          onchange={(e) => setTime(e.target.value)}
        />

        <Button>
          <p>Criar Card</p>
        </Button>
      </FormContainer>
    </Container>
  );
}
