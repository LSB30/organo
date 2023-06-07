import { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },

    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },

    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },

    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },

    {
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },

    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },

    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [collaborators, setCollaborator] = useState([]);

  const createCollaborator = (collaborator) => {
    setCollaborator([...collaborators, collaborator]);
  };
  return (
    <>
      <Header />
      <Form
        teams={teams.map((team) => team.name)}
        onCreateCollaborator={(collaborator) =>
          createCollaborator(collaborator)
        }
      />
      {teams.map((team) => (
        <Team
          title={team.name}
          teamsCard={collaborators.filter(
            (collaborator) => collaborator.time === team.name
          )}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          key={team.name}
        />
      ))}

      <Footer></Footer>
    </>
  );
}

export default App;
