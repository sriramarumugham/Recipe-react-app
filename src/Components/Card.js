import Styles from "../Styles/card.module.css";
const Card = ({ props }) => {
  console.log(props);
  function handleClick() {
    window.open(props.url);
    // console.log("got ot nwew page", props.url);
  }
  return (
    <div className={Styles.card}>
      <div className={Styles.badge}>
        <img className={Styles.img} src={props.image} alt={props.title} />
      </div>
      <div>
        <h2>{props.label}</h2>

        <button onClick={handleClick} className={Styles.btn}>
          See More...
        </button>
      </div>
    </div>
  );
};

export default Card;
