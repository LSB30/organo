import { useState } from "react";
import Card from "../Card/Card";
import { Container, CardContainer, InputColor } from "./styles";
import hexToRgba from 'hex-to-rgba';

export default function Team({
  title,
  color,
  teamsCard,
  onRemoveCollaborator,
  id
}) {
  const [newColor, setnewColor] = useState(color);

  return (
    teamsCard.length > 0 && (
      <Container style={{ backgroundColor: hexToRgba(newColor, "0.6") }}>
        <InputColor
          type="color"
          value={newColor}
          onChange={(e) => setnewColor(e.target.value)}
        />

        <h3 style={{ borderColor: color }}>{title}</h3>

        <CardContainer>
          {teamsCard.map((collaborator) => {
            return (
              <Card
                key={id}
                name={collaborator.name}
                office={collaborator.office}
                imgUrl={collaborator.imgUrl}
                color={newColor}
                onRemoveCollaborator={onRemoveCollaborator}
                id={collaborator.id}
              />
            );
          })}
        </CardContainer>
      </Container>
    )
  );
}
