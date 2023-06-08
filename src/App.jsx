import { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#57C278",
    },

    {
      id: uuidv4(),
      name: "Front-End",
      color: "#82CFFA",
    },

    {
      id: uuidv4(),
      name: "Data Science",
      color: "#A6D157",
    },

    {
      id: uuidv4(),
      name: "Devops",
      color: "#E06B69",
    },

    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#DB6EBF",
    },

    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FFBA05",
    },

    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ]);

  const [collaborators, setCollaborator] = useState([]);

  const createCollaborator = (collaborator) => {
    setCollaborator([...collaborators, collaborator]);
  };

  const createTeam = (newteam) => {
    setTeams([
      ...teams,
      {
        ...newteam,
        id: uuidv4(),
      },
    ]);
  };

  const removeCollaborator = (id) => {
    const newCollaborator = collaborators.filter((people) => people.id !== id);
    setCollaborator(newCollaborator);
  };
  return (
    <>
      <Header />
      <Form
        teams={teams.map((team) => team.name)}
        onCreateCollaborator={(collaborator) =>
          createCollaborator(collaborator)
        }
        onCreateTeams={createTeam}
      />
      {teams.map((team) => (
        <Team
          title={team.name}
          teamsCard={collaborators.filter(
            (collaborator) => collaborator.time === team.name
          )}
          color={team.color}
          key={team.id}
          onRemoveCollaborator={removeCollaborator}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;
