/* write your script here */ 
var database = [
 {
    name:"Chimchar",
    type:["Fire"],
    generation:"4",
    evolutions:["Monferno", "Infernape"],
    moves: ["Scratch", "Ember"]
  },

  {

    name:"Turtwig",
    type:"Grass",
    generation:"4",
    evolutions:["Grotle", "Torterra"],
    moves: ["Tackle", "Vine Whip"]
  },

   {
 	name:"Piplup",
    type:["Water"],
    generation:"4",
    evolutions:["Prinplup", "Empoleon"],
    moves: ["Pound", "Water Gun"]

   },
   {
    name:"Starly",
    type:["Normal","Flying"],
    generation:"4",
    evolutions:["Staravia", "Staraptor"],
    moves: ["Tackle", "Peck"]
	},

	{
 	name:"Shinx",
    type:["Electric"],
    generation:"4",
    evolutions:["Luxio", "Luxray"],
    moves: ["Tackle", "Spark"]

];


 var searchBar = document.getElementbyId("searchBar")

 var searchButton = document.getElementbyId("searchButton")

 var autoSuggestions = document.getElementbyId("autoSuggestions")

 var display = document.getElementbyId("display") 

 searchBar.addEventListener("keypress", checkKey)

 searchButton.addEventListener("click", processInput)




