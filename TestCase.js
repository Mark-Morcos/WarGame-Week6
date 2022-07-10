var expect = chai.expect
// function doSomething(x,y) {
//   if (typeof x !== "string") throw new Error("x must be a string");
//   return x + y;
// }
// //  function getsum(a,b){
//     return a+b;
// }

// describl('getsum',() => {
// it('should return the sum of the two inputs ,() =>{
// const sum= getsum(5,4);
// expect(sum).to.equal(9);
// })
// })

// function FullDeck()
// {
    

//     let Deck=[];

//     VALUES.forEach( value =>{
//         SUITS.map(suit => {
//             Deck.push({suit,value})
//         })
//     })
//     while(Deck.length > 0){
//         const rand1 =Math.floor(Math.random() * Deck.length);
//         const getItem1= Deck.splice(rand1,1);
//         const rand2= Math.floor(Math.random() * Deck.length);
//         const getItem2= Deck.splice(rand2,1);
//         Player1.push(getItem1);
//         Player2.push(getItem2);
//     }
//     return [Player1.flat() ,Player2.flat()]
// }


//describe("myFunctions", () => {
    //   describe("#doSomething", () => {

    describe ("myFunction" ,() => {
        describe("#FullDeck", () => {
            it('Should shuffle the whole Cards into 26 cards to each player ', () => {
                const game = FullDeck()
                expect (Player1 != Player2)
        })
    });
});
    
