import "./random.css"

function Random({ min, max }) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div className="random">
      <h3>
        Random value between {min} and {max} &rArr; {randomNumber}
      </h3>
    </div>
  );
}

export default Random;
