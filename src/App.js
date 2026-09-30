export default function App() {

  /* JavaScript hier: */

  console.log("Hallo Test");

  // const -> für Variablen, kann nicht neu zugewiesen werden (empfohlen)
  // let   -> Variable kann neu zugewiesen werden (sinnvoll, wenn sich der Wert ändert, z. B. Zähler)
  // var   -> veraltet, wird nicht mehr gebraucht

  const a = "Fisch";

  // Datentypen:
  // - String = "Name"
  // - Boolean = true, false
  // - Number = 1, 6.7
  // - undefined = nicht definiert
  // - null = Platzhalter
  // --> "primitive Datentypen"

  // Array
  // Object
  // Function
  // --> "Objekttypen"

  // Kontrollstrukturen:
  // Verzweigung --> if (Bedingung) { Output } else { Output 2 }
  // Schleifen   --> for, while

  if (a === "Fisch") {
    console.log("a ist gleich Fisch");
  } else {
    console.log("a ist nicht Fisch");
  }

  // Übung 1: IF-Statement
  const b = 67;
  if (typeof b === "string") {
    console.log("b ist Typ: String");
  } else if (typeof b === "boolean") {
    console.log("b ist Typ: Boolean");
  } else if (b === null) {
    console.log("b ist Typ: NULL");
  } else if (typeof b === "number") {
    console.log("b ist Typ: Number");
  }

  // Ternärer Operator:
  // Kurzform von if/else, gibt direkt einen Wert zurück
  // --> Bedingung ? Wert wenn wahr : Wert wenn falsch
  // --> const x = a === "Fisch" ? "ja" : "nein";
  const role = "Admin"; // z. B. aus dem Login-Zustand
  const userRole = role === "Admin" ? "isAdmin" : "isNotAdmin";

  // Übung 2: Ternärer Operator im HTML-Teil
  const isTheTruth = false;
  // Ändern von true / false bewirkt Farbänderung im html-teil


  // Übung 3: Funktionen A - Funktionsdeklaration
  function multiply(x, y = 2) {
    if (typeof x !== "number" || typeof y !== "number") {
      console.log("Fehler: Beide Parameter müssen Zahlen sein");
    } else {
      console.log(x * y);
    }
    return;
  }

  multiply(5);       // 10
  multiply(5, 3);    // 15
  multiply("a", 3);  // Fehlermeldung
  // solange die Funktion einen Wert (String oder Number) generiert, kann sie abenfalls im HTML benutzt werden (aber besser nicht)


  // Übung 4: Funktionen B - Pfeilfunktionen / "Arrow functions"
  // 4.1 Leerzeichen einfügen
  const joinWithSpace = (first, second) => `${first} ${second}`;
  console.log(joinWithSpace("Hallo", "Figg di Mami"));
  // in console.log () wird Funktion "joinWithSpace" ausgeführt und kominiert die beide Worte zu einem Text
  

  // 4.2 Kleiner, größer oder gleich 0
  const checkNumber = (num) => {
    if (num < 0) {
      return "kleiner als 0";
    } else if (num > 0) {
      return "größer als 0";
    } else {
      return "gleich 0";
    }
  };
  console.log(checkNumber(-5));
  console.log(checkNumber(7));
  console.log(checkNumber(0));
  // Warum man bei Arrow-Functions const nimmt:
  // Die Pfeil-Syntax (x, y) => ... erzeugt nur die Funktion selbst, ohne Namen. Damit du sie später aufrufen kannst, brauchst du einen Namen, also speicherst du sie in einer Variablen.

  // 4.3 Max
  const max = (x, y) => (x > y ? x : y);
  console.log(max(3, 9));
  console.log(max(10, 4));

  // 4.4 Min
  const min = (x, y) => (x < y ? x : y);
  console.log(min(3, 9));
  console.log(min(10, 4));


  // Übung 5: Array-Methoden
  const numbers = [1, 2, 3, 4, 5];

  // 5.1 map()
  const tripled = numbers.map((num) => num * 3);
  console.log(tripled);   // [3, 6, 9, 12, 15]

  const multipliedByIndex = numbers.map((num, index) => num * index);
  console.log(multipliedByIndex); // [0, 2, 6, 12, 20]

  // 5.2 filter()
  const userNames = ["Matteo", "Dario", "Florin", "Loius", "Mike"];

  const namesWithA = userNames.filter((username) => username.includes("a"));
  console.log(namesWithA); // ["Matteo", "Dario"]


  return (
    /* HTML hier: + JavaScript in {} möglich */


    // Übung 2: Ternärer Operator im HTML-Teil
    <div>
      <p style={{ color: isTheTruth ? "green" : "red" }}>
        Das ist ein Beispielsatz.
      </p>


      <div>Hallo Snickers {a}</div>
      <div>{userRole}</div>
      <div style={{ backgroundColor: role === "Admin" ? "lightblue" : "red" }}>Usergroup</div>
    </div>
  );
}