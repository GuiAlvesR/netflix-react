import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Tipo from "./components/Tipo";

function App() {
  const tipos = [
    {
      name: "Filmes",
      corPrimary: "#333333",
      corSecundary: "#E50914",
    },
    {
      name: "Séries",
      corPrimary: "#333333",
      corSecundary: "#ffffff",
    },
  ];

  const [medialists, setMediaLists] = useState([]);

  const onNewAddMediaList = (medialist) => {
    setMediaLists([...medialists, medialist]);
  };
  return (
    <>
      <Banner />
      <Form
        tipos={tipos.map((tipo) => tipo.name)}
        toRegisteredMediaList={onNewAddMediaList}
        medialists={medialists}
      />

      {tipos.map((tipo) => (
        <Tipo
          key={tipo.name}
          name={tipo.name}
          corPrimary={tipo.corPrimary}
          corSecundary={tipo.corSecundary}
          medialists={medialists.filter(
            (medialist) => medialist.tipo === tipo.name
          )}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
