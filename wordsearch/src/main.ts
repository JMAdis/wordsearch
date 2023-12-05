import "../styles/main.scss"

// QUERY SELECTOR FOR WORDSEARCH GRID
const wordsearchGrid = document.querySelector<HTMLElement>("#wordsearch-grid") ?? document.createElement("div")

// ELEMENT VALIDATION
if(!wordsearchGrid){
  throw new Error("Issue with the query selector")
}

// DEFININING WORD LIST FOR WORDSEARCH
const listOfWordsToFind: string[] = ["BAUBLE", "CHRISTMAS", "CRACKER", "ELF", "PRESENT", 
"SANTA", "REINDEER", "SNOW", "TINSEL", "CAROLS"];

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

console.log(generateRandomString(83));

// DIMENSIONS OF THE WORDSEARCH
const rows = 12
const columns = 12

// SETTING THE ROWS AND COLUMNS FOR THE GRID
function initializeWordsearch() {
  wordsearchGrid.style.setProperty("__rows", `${rows}`);
  wordsearchGrid.style.setProperty("__columns", `${columns}`);

  // FOR LOOP TO CREATE A NEW DIV AND SETS THE TEXT CONTENT
  for (let i = 0; i < rows * columns; i++){
    const cell = document.createElement("div");
    cell.innerText = generateRandomString(1);
    wordsearchGrid.appendChild(cell)
  }
}

console.log(initializeWordsearch())


/* ADDING THE WORDS TO FIND ARRAY TO THE WORDSEARCH GRID
let word = 1
let individualWords = listOfWordsToFind.slice(0, word);
console.log(individualWords)

wordsearchGrid.innerHTML = generateRandomString(1);
*/
