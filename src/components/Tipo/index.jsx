import MediaList from "../MediaList";
import "./Tipo.css";

const Time = (props) => {
  const background = { backgroundColor: props.corPrimary };
  const borderAndColor = {
    borderColor: props.corSecundary,
    color: props.corSecundary,
  };

  return (
    <>
      {props.medialists.length > 0 ? (
        <section className="tipo" style={background}>
          <h3 style={borderAndColor}>{props.name}</h3>

          <div className="media-lists">
            {props.medialists.map((medialist) => (
              <MediaList
                key={medialist.name}
                name={medialist.name}
                imagem={medialist.imagem}
              />
            ))}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Time;
