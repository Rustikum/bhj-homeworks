const editor = document.getElementById("editor");

editor.value = localStorage.getItem("text");

editor.oninput = () => {
    localStorage.setItem("text", editor.value);
};

const card = document.querySelector(".card");
const clearButton = document.createElement("button");
clearButton.textContent = "Очистить содержимое";
card.appendChild(clearButton);

clearButton.onclick = () => {
    editor.value = "";
    localStorage.removeItem("text");
};