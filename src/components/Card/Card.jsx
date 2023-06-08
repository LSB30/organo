import {
  Container,
  Header,
  Details,
  NameCollaborator,
  CargoCollaborator,
} from "./styles";

import {CiBookmarkRemove} from "react-icons/ci"


export default function Card({
  color,
  name,
  office,
  imgUrl,
  onRemoveCollaborator,
  id
}) {
  return (
    <Container>
      <Header style={{ backgroundColor: color }}>
        <img src={imgUrl} alt={name} />
        <CiBookmarkRemove size={35} onClick={() => onRemoveCollaborator(id)}/>
      </Header>
      <Details>
        <NameCollaborator>{name}</NameCollaborator>

        <CargoCollaborator>{office}</CargoCollaborator>
      </Details>
    </Container>
  );
}
