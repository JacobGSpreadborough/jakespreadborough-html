//--------------------------------------------------------------|After this you gotta do a line break
const fortunes=[
"Life is just like an egg.",
"Life is hard...<br></br> &emsp; &emsp; &emsp; &emsp;...so am I.",
"You will live happy.",
"I'm So Meta, Even This Acronym...",
"I care, I just throw my hands in the air as if I don't.",
"He deserves paradise who makes his companions laugh.",
"Fame is the spur and - Ouch!",
"Maybe I'm just a bizarre little person who walks back and forth.",
"To pregame: perchance to game.",
"Pick up a brush, pick up a pen,<br>I can't hear you if you don't. -Rajendro Dutta</br>",
"<a href='https://www.youtube.com/watch?v=Ub-Vn66Y2Rk' target='blank'>Have a self-reflexive dinner with friends.</a>"
];
//stackoverflow random number function
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var arraySize = fortunes.length-1;
var lastFortune = null;//prevents the same fortune twice, except on reload
function newFortune(){
    var index = getRandomInt(0,arraySize);
    if(index === lastFortune){
        index===arraySize ? index--:index++;
    }
    lastFortune = index;
    document.getElementById('output').innerHTML = fortunes[index];
}