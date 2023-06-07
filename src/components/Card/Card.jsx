import {
  Container,
  Header,
  Details,
  NameCollaborator,
  CargoCollaborator,
} from "./styles";

export default function Card({ primaryColor,name, office, imgUrl}) {
  return (
    <Container>
      <Header style={{ backgroundColor: primaryColor }}>
        <img src={imgUrl} alt={name} />
      </Header>
      <Details>
      <NameCollaborator>{name}</NameCollaborator>

        <CargoCollaborator>
          {office}
        </CargoCollaborator>
      </Details>
    </Container>
  );
}
