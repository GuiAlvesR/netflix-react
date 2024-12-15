import { useState } from "react";
import { toast } from "sonner";
import Button from "../Button";
import CampText from "../CampText";
import DropwdownList from "../DropdownList";
import "./Form.css";

const Form = (props) => {
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [tipo, setTipo] = useState(props.tipos[0]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isMediaListExist = props.medialists.some(
      (medialist) => medialist.name === titulo
    );

    if (isMediaListExist) {
      toast.warning("Este Filme/Série já foi adicionado.", {
        style: {
          padding: "20px 20px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        },
      });
      return;
    }

    props.toRegisteredMediaList({
      name: titulo,
      imagem,
      tipo,
    });

    setTitulo("");
    setImagem("");
    setTipo(props.tipos[0]);

    toast.success("Filme/Série criado com sucesso!", {
      style: {
        padding: "20px 20px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
      },
    });
  };
  return (
    <>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <h2>Preencha os dados para criar o card do Filme/Série</h2>
          <CampText
            mandatory={true}
            label="Titulo"
            placeholder="Digite o titulo"
            value={titulo}
            onAlter={(value) => setTitulo(value)}
          />
          <CampText
            mandatory={true}
            label="Imagem"
            placeholder="Digite o endereço da imagem"
            value={imagem}
            onAlter={(value) => setImagem(value)}
          />

          <DropwdownList
            mandatory={true}
            label="Tipo"
            tipos={props.tipos}
            value={tipo}
            onAlter={(value) => setTipo(value)}
          />
          <Button>Criar Card</Button>
        </form>
      </section>
    </>
  );
};

export default Form;
