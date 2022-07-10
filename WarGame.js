const SUITS =["♥","♦","♠","♣"]
const VALUES=["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
const REALValues = {
    "2":2,
    "3":3,
    "4":4,
    "5":5,
    "6":6,
    "7":7,
    "8":8,
    "9":9,
    "10":10,
    "J":11,
    "Q":12,
    "K":13,
    "A":14,
}

class Deck{
    constructor(cards)
    {
        this.cards=cards;
    }
}

class Card{
    constructor(suit,value){
        this.suit=suit;
        this.value=value;
    }

}
const Player1 = [];
    const Player2=[];
function FullDeck()
{
    

    let Deck=[];
    VALUES.forEach( value =>{
        SUITS.map(suit => {
            Deck.push({suit,value})
        })
    })
    while(Deck.length > 0){
        const rand1 =Math.floor(Math.random() * Deck.length);
        const getItem1= Deck.splice(rand1,1);
        const rand2= Math.floor(Math.random() * Deck.length);
        const getItem2= Deck.splice(rand2,1);
        Player1.push(getItem1);
        Player2.push(getItem2);
    }
    return [Player1.flat() ,Player2.flat()]
}
//let array;
//function Shuffle(array){
    
function RoundWinner()
{
FullDeck()
let CardOne =[];
let CardTwo = [];
CardOne=Player1.flat()
CardTwo=Player2.flat()
let CardOneCounter = 0;
let CardTwoCounter = 0;



for(let i=0; i < CardOne.length && i < CardTwo.length ; i++)
{

if ([CardOne[i].value] > [CardTwo[i].value])
{
    CardOneCounter = CardOneCounter+1;
    console.log("Player One Card is " + (CardOne[i].value) + " Player Two Card is " + (CardTwo[i].value))
    console.log("PlayerOne Won Round "+ i +  " Card Value equal  " + REALValues [CardOne[i].value])
    
    
   
}else if([CardOne[i].value] < [CardTwo[i].value])
{

    console.log("Player One Card is " + (CardOne[i].value) + " Player Two Card is " + (CardTwo[i].value))
    console.log("PlayerTwo Won Round " +i + " Card Value equal  "+ REALValues [CardTwo[i].value])
    CardTwoCounter = CardTwoCounter +1;
}
    
}

if (CardOneCounter > CardTwoCounter){
    console.log("Player One  Won with "+ CardOneCounter + " Rounds Vs " + CardTwoCounter + " For Player Two" )
}else {
    console.log("Player Two  Won with "+ CardTwoCounter + " Rounds Vs" + CardOneCounter + " For Player One" )
} 

 console.log(CardOneCounter)
 console.log(CardTwoCounter)
}

console.log(RoundWinner());