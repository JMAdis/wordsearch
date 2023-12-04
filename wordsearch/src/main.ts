import "../styles/main.scss"

// DEFININING WORD LIST FOR WORDSEARCH
const wordList: string = ["bauble", "christmas", "cracker", "elf", "present", 
"santa", "reindeer", "snow", "tinsel", "carols"];

// FIGURING OUT HOW MANY RANDOM LETTERS I NEED
const totalListCharacters: number = wordList.join("").length;
console.log(totalListCharacters)

// GENERATING THE RANDOM LETTERS
const characters = "abcdefghijklmnopqrstuvwxyz";

const generateRandomString = (length:number) => {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++){
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

console.log(generateRandomString(83));


