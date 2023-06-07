import Card from "../Card/Card";
import { Container, CardContainer } from "./styles";

export default function Team({
  title,
  primaryColor,
  secondaryColor,
  teamsCard,
}) {
  return teamsCard.length > 0 ? (
    <Container style={{ background: secondaryColor }}>
      <h3 style={{ borderColor: primaryColor }}>{title}</h3>
      <CardContainer>
        {teamsCard.map((collaborator) => (
          <Card
            key={collaborator.name}
            name={collaborator.name}
            office={collaborator.office}
            imgUrl={collaborator.imgUrl}
            primaryColor={primaryColor}
          />
        ))}
      </CardContainer>
    </Container>
  ) : (
    ""  
  );
}
