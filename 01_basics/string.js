const name="adin"
const repoCount=50

console.log(`Hello my name is ${name} and my repo is ${repoCount}`);

const gameName= new String('adin');
console.log(gameName[0]);
console.log(gameName.__proto__);

const newString=gameName.substring(0,2);
console.log(newString);
const anotherString=gameName.slice(-2,4);
console.log(anotherString);

const newStringOne="              adin          ";
console.log(newStringOne.trim());//elimates the whitespace

const url="https://htitesh.com/hitest%20chodhuray";
console.log(url.replace('%20','-'));