import "../styles/main.scss"

// QUERY SELECTOR FOR WORDSEARCH GRID
const wordsearchGrid = document.querySelector<HTMLTableElement>("#wordsearch-grid") ?? document.createElement("table")
const wordsearchCell = document.querySelectorAll<HTMLElement>(".wordsearch-grid__cell")
const wordsearchList = document.querySelector<HTMLUListElement>(".wordsearch-list")
const wordsearchListItem = document.querySelectorAll<HTMLLIElement>(".wordsearch-list__item")

// ELEMENT VALIDATION
if(!wordsearchGrid || !wordsearchList){
  throw new Error("Issue with the query selector")
}

if(/*wordsearchCell.length === 0 ||*/ wordsearchListItem.length === 0){
  throw new Error("Issue with the query selector all")
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

const changeColorOfWord = (cell: HTMLElement) => {
  cell.style.color = "green"; 
};

const addStrikethrough = (word: string) => {
  const listItem = Array.from(wordsearchListItem).find(li => li.dataset.word === word);
  if (listItem) {
    listItem.style.textDecoration = "line-through";
  }
}

let selectedWord: string = "";


// FILLING THE WORDSEARCH 
const fillWordsearch = () => {
  const wordsearchCell = document.querySelectorAll<HTMLTableCellElement>(".wordsearch-grid__cell");
  wordsearchCell.forEach(cell => {
    if (!cell.innerText.trim()) {
      cell.innerText = generateRandomString(1);
    }
  });
};

fillWordsearch()

console.log("word selected")
  console.log(selectedWord)
  console.log(listOfWordsToFind)
  
const wordIsSelected = (event: Event) =>{
  const target = event.target as HTMLElement;

  console.log("word selected")
  console.log(selectedWord)
  console.log(listOfWordsToFind)

  const cell = target.tagName.toLowerCase() === "td" ? target : target.closest("td");

  if(cell && cell.innerText.trim()){
    const word = cell.innerText.trim();

    if(listOfWordsToFind.includes(selectedWord)) {
        changeColorOfWord(cell);
        addStrikethrough(selectedWord)
        
        selectedWord = "";
    }
  }
}

wordsearchGrid.addEventListener("click", wordIsSelected);