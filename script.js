const joke_container = document.querySelector(".gift");
const btn = document.querySelector(".btn");
const url =
  "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,sexist";

console.log(joke_container);
console.log(btn);
const getgift = () => {
  fetch(url)
    .then((data) => {
      if (!data.ok) throw new Error("something is wrong");
      return data.json();
    })
    .then((item) => {
      if (item.type === "twopart") {
        const result = `${item.setup} ${item.delivery}`;
        joke_container.textContent = `${result}`;
      } else {
        console.log(item.joke);
        joke_container.textContent = `${item.joke}`;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

btn.addEventListener("click", getgift);

// getgift(
