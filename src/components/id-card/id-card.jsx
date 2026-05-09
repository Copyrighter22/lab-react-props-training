import "./id-card.css";

function IdCard(props) {
  return (
    <div className="id-card">
      <img src={props.picture} />
      <div>
        <div>
          <strong>First Name:</strong>
          <span> {props.firstName}</span>
        </div>
        <div>
          <strong>Last Name:</strong>
          <span> {props.lastName}</span>
        </div>
        <div>
          <strong>Gender:</strong>
          <span> {props.gender}</span>
        </div>
        <div>
          <strong>Height:</strong>
          <span> {(props.height / 100).toFixed(2)}m</span>
        </div>
        <div>
          <strong>Birth:</strong>
          <span> {props.birth.toDateString()}</span>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
