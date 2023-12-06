import "../styles/main.scss"

// QUERY SELECTOR FOR WORDSEARCH GRID
const wordsearchGrid = document.querySelector<HTMLTableElement>("#wordsearch-grid") ?? document.createElement("table")
const wordsearchCell = document.querySelectorAll<HTMLTableCellElement>(".wordsearch-grid__cell")
const wordsearchList = document.querySelector<HTMLUListElement>(".wordsearch-list")
const wordsearchListItem = document.querySelectorAll<HTMLLIElement>(".wordsearch-list__item")

// ELEMENT VALIDATION
if(!wordsearchGrid || !wordsearchList){
  throw new Error("Issue with the query selector")
}

if(wordsearchCell.length === 0 || wordsearchListItem.length === 0){
  throw new Error("Issue with the query selector all")
}

// DEFININING WORD LIST FOR WORDSEARCH
const listOfWordsToFind: string[] = ["BAUBLE", "CHRISTMAS", "CRACKER", "ELF", "PRESENT", 
"SANTA", "REINDEER", "SNOW", "TINSEL", "CAROLS"];

//BREAKING THE ARRAY INTO NESTED ARRAYS
//const listOfLetters: string[][] = listOfWordsToFind.map(word => word.split(""));

//console.log(listOfLetters[1])

// FIGURING OUT HOW MANY RANDOM LETTERS I NEED
const totalListCharacters: number = listOfWordsToFind.join("").length;
console.log(totalListCharacters)

// GENERATING THE RANDOM LETTERS
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const generateRandomString = (length:number) => {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++){
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const changeColorOfWord = (word: string) =>{
  wordsearchCell.forEach(cell =>{
    const cellWord = cell.innerText.trim();
    if (cellWord === word) {
      cell.style.color = "green"
    }
  });
};

const addStrikethrough = (word: string) =>{
  const listItem = Array.from(wordsearchListItem).find(li => li.dataset.word === word);
  if (listItem) {
    listItem.style.textDecoration = "line-through"
  }
}

// FILLING THE WORDSEARCH 
const fillWordsearch = () => {
  wordsearchCell.forEach(cell => {
    if (!cell.innerText.trim()) {
      cell.innerText = generateRandomString(1);
    }
  });
};

document.addEventListener("DOMContentLoaded", fillWordsearch);

/*

else {
      const word = cell.innerText.trim();
      if (listOfWordsToFind.includes(word)){
        cell.style.color = "green";
        const listItem = Array.from(wordsearchListItem).find(li => li.dataset.word === word);
        if (listItem){
          listItem.style.textDecoration = "line-through";
        }
      }
    }



// DIMENSIONS OF THE WORDSEARCH
const rows = 12
const columns = 12

const horizontal = Math.random() < 0.8;

// SETTING THE ROWS AND COLUMNS FOR THE GRID
function isInBounds(startX, startY, word){
  return startX + word.length <= columns && startY + word.length <= rows;
}

function initializeWordsearch() {
  for (let i = 0; i < listOfWordsToFind.length; i++) {
    let startX, startY;
    
    do{
      startX = Math.floor(Math.random() * columns);
      startY = Math.floor(Math.random() * rows);
    } while (!isInBounds(startX, startY, listOfLetters[i]))

    placeWord(startX, startY, listOfLetters[i])

    for (let j = 0; j < 5; j++){
      fillRandomCell();
    }
  }

  while(moreCellsToFill()){
    fillRandomCell();
  }
}

function placeWord(x, y, word){
  word.forEach((letter, index) => {

    const cell = document.createElement("div");
    cell.innerText = letter;
    cell.style.top = `${y + index}px`;
    cell.style.left = `${x + index}px`;
    wordsearchGrid.appendChild(cell);
  });
};

function fillRandomCell(){
}

initializeWordsearch()

/*  wordsearchGrid.style.setProperty("__rows", `${rows}`);
  wordsearchGrid.style.setProperty("__columns", `${columns}`);
  wordsearchGrid.innerHTML = "";

  listOfLetters.forEach((word, wordIndex) => {
    const startX = Math.floor(Math.random() * columns - word.length + 1);
    const startY = Math.floor(Math.random() * rows - word.length + 1);

    

    word.forEach((letter, letterIndex) =>{
      const cell = document.createElement("div");
      const x = horizontal ? startX + letterIndex : startX;
      const y = horizontal ? startY : startY + letterIndex;

      if (x < columns && y < rows) {
        cell.innerText = letter;
        wordsearchGrid.appendChild(cell);
      }
    });
  });

  // FOR LOOP TO CREATE A NEW DIV AND SETS THE TEXT CONTENT
  for (let i = listOfWordsToFind.join("").length; i < rows * columns; i++){
    const cell = document.createElement("div");
    cell.innerText = generateRandomString(1);
    wordsearchGrid.appendChild(cell)
  }
}

initializeWordsearch()

*/



/* ADDING THE WORDSTOFIND ARRAY TO THE WORDSEARCH GRID
let word = 1
let individualWords = listOfWordsToFind.slice(0, word);
console.log(individualWords)

wordsearchGrid.innerHTML = 
*/
