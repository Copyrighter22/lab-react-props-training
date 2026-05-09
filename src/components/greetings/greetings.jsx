import "./greetings.css";

function Greetings({ lang, children }) {
  const greetingMap = {
    es: "Hola ",
    en: "Hello ",
    de: "Hallo ",
    fr: "Bonjour ",
  };

  const greeting = greetingMap[lang] || "Hello";
  //let greeting = "";

  //if (lang === "es") {
    //greeting = "Hola ";
  //} else if (lang === "de") {
    //greeting = "Hallo ";
  //} else if (lang === "fr") {
    //greeting = "Bonjour ";
  //} else if (lang === "en") {
    //greeting = "Hello ";
  //}

  return (
    <div className="greeting">
      <h3>
        {greeting}
        {children}
      </h3>
    </div>
  );
}

export default Greetings;
