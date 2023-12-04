import "../styles/main.scss"

// QUERY SELECTOR FOR WORDSEARCH GRID
const wordsearchGrid = document.querySelector<HTMLElement>("#wordsearch-grid")

// ELEMENT VALIDATION
if(!wordsearchGrid){
  throw new Error("Issue with the query selector")
}

// DEFININING WORD LIST FOR WORDSEARCH
const wordsToFindList: string[] = ["BAUBLE", "CHRISTMAS", "CRACKER", "ELF", "PRESENT", 
"SANTA", "REINDEER", "SNOW", "TINSEL", "CAROLS"];

// FIGURING OUT HOW MANY RANDOM LETTERS I NEED
const totalListCharacters: number = wordsToFindList.join("").length;
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

// 

