import "../styles/Card.css";

interface CardProps {
  title: string;
  text: string;
  preOrder: boolean;
  imageLink: string;
  price: number;
  width: number;
  height: number;
}

function Card(props: CardProps) {
  return (
    <div className="card">
      <img
        src={props.imageLink}
        alt={props.title}
        style={{ width: props.width + "px", height: props.height + "px" }}
      />
      <div className="card-head">
        <h3 className="card-title">{props.title}</h3>
        <h4 className="card-price">${props.price}</h4>
      </div>
      <h5 className="card-text">{props.text}</h5>
    </div>
  );
}

export default Card;
