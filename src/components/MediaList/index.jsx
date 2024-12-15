import "./MediaList.css";

const MediaList = ({ name, imagem }) => {
  return (
    <>
      <div className="media-list">
        <div className="header">
          <img src={imagem} alt={name} />
        </div>
        <div className="footer">
          <h4>{name}</h4>
        </div>
      </div>
    </>
  );
};

export default MediaList;
