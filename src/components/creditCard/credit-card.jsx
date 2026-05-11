import "./credit-card.css";

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  function bankType(type) {
    const bankImg =
      type === "Visa"
        ? "/src/assets/images/visa.png"
        : "/src/assets/images/master-card.svg";

    return bankImg;
  }
  const hiddenNum = `•••• •••• •••• ${number.slice(-4)}`;
  const expYear = (expirationYear % 100).toString().padStart(2, "0");
  return (
    <div className="credit-card" style={cardStyle}>
      <div className="card-type">
        <img src={bankType(type)} height={"25px"} width={"40px"} />
      </div>
      <div className="card-number">{hiddenNum}</div>
      <div className="card-info">
        <span>
          Expires {expirationMonth}/{expYear} {bank}
        </span>
        <span>{owner}</span>
      </div>
    </div>
  );
}

export default CreditCard;
