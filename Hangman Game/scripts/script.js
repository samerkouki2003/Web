const wordDisplay=document.querySelector(".word-display") ;
const keyboardDiv=document.querySelector(".keyboard");
let currentWord;
 const getRandomWord=()=>{
  const{word,hint}=wordList[Math.floor(Math.random()*wordList.length)] ;
  currentWord=word
  console.log(word) ;
  document.querySelector(".hint-text b").innerText=hint ;
wordDisplay.innerHTML=word.split("").map(()=>`<li class="letter"></li>`).join(""); 
 }

 const initGame=(button,clickedLetter)=>{
  if(currentWord.includes(clickedLetter)){
    console.log(clickedLetter,"is exist on the word");
  }
    else{
      console.log(clickedLetter,"is not exist on the word")
    }
  }
  

 
for (let i =97 ;i<=122;i++){
  const button= document.createElement("button")
  button.innerHTML=String.fromCharCode(i);
  keyboardDiv.appendChild(button) ;
  button.addEventListener("click",e=>initGame(e.target,String.fromCharCode(i)));
}
getRandomWord();