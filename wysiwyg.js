// Create a text input in your DOM.
// Beneath that, create a container, block element in your DOM.
// Create a DOM element for each of the objects inside the container. Style your person elements however you like.
// For every even numbered element, have a light yellow background.
// For every odd numbered element, have a light blue background.
// Each element's DOM structure should be as shown below.
// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

// Create an array of objects that represents famous people (see structure below).
var peoples = [
	{
	  title: "Real Estate Agent",
	  name: "Phil Dunphy",
	  bio: "Successful real estate agent and father in the show Modern Family. Extremely corny.",
	  image: "http://d1stfe5sz9ezud.cloudfront.net/wp-content/uploads/2013/11/04124bd9f79e04594457d02e80dfdd16.gif",
	  lifespan: {
	    birth: 2009,
	    death: 2017
	  }
	},
	{
		title: "EPA",
	 	name: "Environmental Protection Agency",
	 	bio: "Government agency created to protect the enviornment and enforce regualations to keep people healthy.",
	 	image: "https://pbs.twimg.com/profile_images/632228259879628800/-gvVhzPn_400x400.png",
	 	lifespan: {
	    	birth: 1970,
	    	death: 2017
	  	}
	},
	{
		title: "US President",
	 	name: "George Washington",
	 	bio: "First president of the United States.",
	 	image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
	 	lifespan: {
	    	birth: 1732,
	    	death: 1799
	  	}	
	}
]
var dom = document.getElementById("dom");

(function domMaker(){
	dom.innerHTML = `<input type="text" name="userInput" id="userInput"><br>`
	dom.innerHTML +=`<div class="container" id="container"></div>`
})();
var container = document.getElementById("container");
var input = document.getElementById("userInput");
for (var i=0; i<peoples.length; i++){
	container.innerHTML += `<div class = "person" id = "person${i+1}"><header><h3>${peoples[i].name}</h3><br>${peoples[i].title}</header><section><img class = "picture" src="${peoples[i].image}"><br><p id="cap${i}">${peoples[i].bio}</p></section><footer>Lifespan: ${peoples[i].lifespan.birth}-${peoples[i].lifespan.death}<br></footer><br></div>`
	
}
var personList = document.getElementsByClassName("person");
var output = document.getElementsByTagName("p");
for (var j=1; j<personList.length+1; j++){
	if (j%2===0){
		personList[j-1].classList.add("yellow");
	} else {
		personList[j-1].classList.add("blue");
	}
}
function addUserInput (event){
	if(event.keyCode===13){
		input.value = "";
	}else {

		for (var n=0; n<output.length; n++){
			if (output[n].parentNode.parentNode.classList.contains("dotBorder")){
			var textIn = input.value;
			output[n].innerHTML = textIn;
			}
		}
	}	
}
function addBorder(){
	for (var k=0; k<personList.length; k++){
		personList[k].classList.remove("dotBorder");
	}
	this.classList.add("dotBorder")
	input.focus();
	input.addEventListener("keyup", addUserInput);
}
for (var y=0; y<personList.length; y++){
	personList[y].addEventListener("click", addBorder);
}
// function whatKey(event){
// input.addEventListener("keydown", whatKey)