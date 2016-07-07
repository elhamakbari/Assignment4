	// STEP 1


    /*
	var Animal = Animal || {};
	Animal.Cat = function(){}
	Animal.Dog = function(){}
    */
	
	//STEP 2
	
	/*
	var Cat = {};  //literal notation
    
	var Dog = function(){};  //constructor notation
    
    */
    
	
	// STEP 3

	/*
	function Dog() {};
	var dog = new Dog();
	*/

	
	// STEP 4

	/*
	var Animal = function() {
		return "The Animal has been created";
	}
	console.log(Animal());
    
	*/
	
	// STEP 5

	/*
	var Animal = function(messages) {
		return messages;
	}
	
	console.log(Animal("The Animal has been created."));
	*/
	
	// STEP 6

	/*
	var Animal = function(type,breed,color,height,length){
		this.type = type;
		this.breed = breed;
		this.color = color;
		this.height = height;
		this.length = length;
	}
	var cat = new Animal("cat","persian","white","15 inch","20 inch");
	console.log(cat);
	*/
	
	// STEP 7

	/*
	var Animal = function(type,breed,color,height,length){
		this.type = type;
		this.breed = breed;
		this.color = color;
		this.height = height;
		this.length = length;
	}
	var cat = new Animal("cat","persian","white","15 inch","20 inch");
	
	for (var properties in cat) {
		console.log(properties);
	}
	*/
	
	// STEP 8

	/*
	var Animal = function(type,breed,color,height,length){
		this.type = type;
		this.breed = breed;
		this.color = color;
		this.height = height;
		this.length = length;
	}
	
	
	Animal.prototype.speak = function() {
		if (this.type == "cat") {
			return "The " + this.color + " cat is meowing";
		} else if (this.type =="dog") {
			return "The" + this.color + "dog is barking";
	 	}
	}
	
	var cat = new Animal("cat","persian","white","15 inch","20 inch");
	console.log(cat.speak());
	*/
	
	// STEP 9

	/*
	var Animal = function(type,breed,color,height,length){
		var type = type;
		var breed = breed;
		var color = color;
		var height = height;
		var length = length;
        
		var checkType = function() {
			if (type =="cat") {
				return "cat";
			} else {
				return "dog";
			}
		};
		this.speak = function() {
	    return "The " + checkType() + " has made a noise";
	    };	
	}
	
	var cat = new Animal("cat","persian","white","15 inch","20 inch");
	
	console.log(cat.speak());
	*/
	

	// STEP 10 	
	
/*
	
	String.prototype.findWords = function() {
		var find = " ";
		for (var i = this.length; i >=0 ; i--) {
			
			find = this.match(/is/gi);
		}
		return find.length;
	}
	
	var text = "Summer is officially here and protein shake season is in full blast. Protein is so important for you to build lean muscle, lose fat, and fuel of all your summer activities.Here is a list of my favorite shakes!";

	console.log(text.findWords());
	*/

	
	//======================= Recipe Card

	/*
    
    
	var MyRecipe = function(title, serves,ingredients) {
		this.title = title;
		this.serves = serves;
		this.ingredients = ingredients;
        
		this.printRecipe = function() {
			console.log(title + "\n" + "Serves: " + serves + "\n" + "Ingredients: \n");
            
				for (var i = 0; i < ingredients.length; i++) {
				 	console.log(" - " + ingredients[i]);
				}
			}
	}
	
	var Guacamole = new MyRecipe("Guacamole", 4, ["3 Avocados", "1 Lime", "Tomatoes", "Cilantro","Onion"]);
		
	Guacamole.printRecipe();
    
	*/
	
	
	//================Reading List


	/*
	var MyBooks = [
        
        
		
	
*/

