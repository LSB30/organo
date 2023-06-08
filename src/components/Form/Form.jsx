import { Container, FormContainer, SubTitle, DivH2, Div } from "./styles";
import Input from "../Input/Input";
import ListTimes from "../ListTimes/ListTimes";
import Button from "../Button/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({ onCreateCollaborator, teams, onCreateTeams }) {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [imgUrl, setImgUrla] = useState("");
  const [time, setTime] = useState("");

  const [createTime, setcreateTime] = useState("");
  const [color, setColor] = useState("#000");

  const submitForm = (e) => {
    e.preventDefault();
    onCreateCollaborator({
      name,
      office,
      imgUrl,
      time,
      id: uuidv4(),
      favorite: false,
    });

    setName("");
    setOffice("");
    setImgUrla("");
    setTime("");
  };

  return (
    <>
      <Div>
        <Container>
          <FormContainer onSubmit={submitForm}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>

            <Input
              requerid
              label="Nome"
              placeholder="Digite seu nome"
              value={name}
              onchange={(e) => setName(e.target.value)}
            />
            <Input
              requerid
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
              requerid
              label="Time"
              options={teams}
              value={time}
              onchange={(e) => setTime(e.target.value)}
            />
            <Button>
              <p>Criar Card</p>
            </Button>
          </FormContainer>
        </Container>

        <Container>
          <FormContainer
            onSubmit={(e) => {
              e.preventDefault();
              onCreateTeams({
                id: uuidv4(),
                name: createTime,
                color,
              });
              setcreateTime("");
              setColor("#000");
            }}
          >
            <h2>Preencha os dados para criar um novo time.</h2>

            <Input
              requerid
              label="Criar Time"
              placeholder="Digite o nome do time"
              value={createTime}
              onchange={(e) => setcreateTime(e.target.value)}
            />
            <Input
              requerid
              type="color"
              label="Cor"
              placeholder="Digite uma cor: #fff "
              value={color}
              onchange={(e) => setColor(e.target.value)}
            />

            <Button>
              <p>Criar Time</p>
            </Button>
          </FormContainer>
        </Container>
      </Div>
      <DivH2>
        <SubTitle>Minha Organização</SubTitle>
      </DivH2>
    </>
  );
}
