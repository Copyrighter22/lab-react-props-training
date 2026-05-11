import "./box-color.css";

function BoxColor({ r, g, b }) {
  function rgbToHex(r, g, b) {
    const toHex = (num) => num.toString(16).padStart(2, "0");

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  const txtColor = r + g + b > 382 ? "black" : "white";

  return (
    <div
      className="box-color"
      style={{ backgroundColor: `rgb(${r},${g},${b})`, color: txtColor }}
    >
      <h3>
        rgb({r},{g},{b})
      </h3>
      <h3>{rgbToHex(r, g, b)}</h3>
    </div>
  );
}

export default BoxColor;
