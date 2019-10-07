var points = 0;
var cardsInPlay = [];
var cards =[
{
	rank: "Queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"},

{
	rank: "Queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "King",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"

},
{
	rank: "King",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	
}];

var flipCard = function() {

	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src",cards[cardId].cardImage );
	checkForMatch();
	console.log(cards[cardId].cardImage) ;
	console.log(cards[cardId].suit);
}

var reset = function() {
	console.log("clicked");
	var nodes = document.getElementById('game-board').childNodes;
	for(var i=0; i<nodes.length; i++) {
  		 nodes[i].setAttribute("src", 'images/back.png');
     }
	cardsInPlay.length=0;
}

var checkForMatch = function(){

	
	if(cardsInPlay.length===2)
	{if(cardsInPlay[0]===cardsInPlay[1]){
	alert("You found a match!");
	points +=1;
	alert("You have " + points + " points!");
	}
	else{alert("Sorry, try again.");
	}}}
var createBoard = function(){
	for( var i=0; i< cards.length; i++)
	{
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src", 'images/back.png');
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener('click', flipCard);

		document.getElementById('game-board').appendChild(cardElement); 

		document.getElementById('Reset').addEventListener("click", reset);
	}

}

createBoard();

