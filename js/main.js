let adviceElement = document.getElementsByClassName("advice-content").item(0);
let adviceIdElement = document.getElementsByClassName("advice-number").item(0);
const getQuotes = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  console.log("", data.slip);
  adviceElement.innerHTML = `<q>${data.slip.advice}</q>`;
  adviceIdElement.innerHTML = `advice #${data.slip.id}`;
};

// const quote = getQuotes()
//   .then((data) => data.slip)
//   .catch((err) => console.log(err));
const timeToFetch = setTimeout(async () => {
  getQuotes();
}, 3000);
