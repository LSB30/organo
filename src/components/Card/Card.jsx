import {
  Container,
  Header,
  Details,
  NameCollaborator,
  CargoCollaborator,
} from "./styles";

import { CiBookmarkRemove } from "react-icons/ci";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Card({
  color,
  name,
  office,
  imgUrl,
  onRemoveCollaborator,
  favorite,
  id,
  onFavorite,
}) {
  return (
    <Container>
      <Header style={{ backgroundColor: color }}>
        <img src={imgUrl} alt={name} />
        <CiBookmarkRemove size={35} onClick={() => onRemoveCollaborator(id)} />
      </Header>
      <Details>
        <NameCollaborator>{name}</NameCollaborator>

        <CargoCollaborator>{office}</CargoCollaborator>

        {favorite ? (
          <AiFillHeart color="red" size={20} onClick={() => onFavorite(id)} />
        ) : (
          <AiOutlineHeart size={20} onClick={() => onFavorite(id)} />
        )}
      </Details>
    </Container>
  );
}
