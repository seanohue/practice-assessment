/*You've been contracted to write inventory management software for the owner of a bicycle shop. She wants to be able to do the following:

- Track a bicycle's brand, model, color, and sale price
- Add bicycles to inventory
- Remove bicycles from inventory
- Change a bicycle's sale price
- Search for bicycles by brand, color, and sale price range (under $500, $500-$1000, $1000+)

BONUS: This store allows customers to put down a deposit and take a bike home on trial for up to 3 days. The software should let the owner check whether a bicycle is out "on trial", who is trying the bike, and what date the bike is due back in the store.*/

var sget = require('sget');
var clear = require('clear');



var store = {

	totalStock: 0,
	inventory: [],

	Bicycle: function(brand, model, color, price, id){
		var bike = {}

		bike.brand = brand;
		bike.model = model;
		bike.color = color;
		bike.price = price;
		bike.id = id;
		/*
		var show = function(){
			console.log("Bike ID# "+this.id+"\nBrand: "+this.brand+"\nModel: "+this.model+"\nColor: "+this.color+"\nPrice: "+this.price);*/
			return bike;

	},

	displayInventory: function(){
		for(i = 0; i < this.inventory.length; i++){
			console.log(this.inventory[i]);
		}
	},

	addBike: function(){
		var brand = sget("Please enter the bike's brand: ").trim();
		var model = sget("Please enter the bike's model: ").trim();
		var color = sget("Please enter the bike's color: ").trim();
		var price = parseInt(sget("Please enter the bike's price: ").trim());

		var newBike = new this.Bicycle(brand, model, color, price, this.totalStock);
		this.inventory.push(newBike);
		this.totalStock++;

		this.displayInventory();

		this.toContinue();
		this.mainMenu();


	},

	removeBike: function(){},

	search: function(){},

	menu: function(message, options){
		console.log(message+"\n");
		for (i = 0; i < options.length; i++){
			console.log((i+1)+") "+options[i]);
		}

		return this.handleInput(options.length);

	},

	mainMenu: function(){
		clear();
		var choice = parseInt(this.menu('Welcome to the bike store, holmes.', ['Add a bike to the inventory', 'Remove a bike from the inventory', 'Change the price of a bike', 'Search for a bike', 'Exit']));
		switch(choice){
			case 1:
				this.addBike();
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				this.searchMenu();
				break;
			case 5:
				process.exit()
				break;
			default:
				this.processError
		}

	},

	searchMenu: function (){
		clear();
		var choice = parseInt(this.menu('Search for a bike by...',['Brand', 'Color','Price Range', 'Back to Main Menu']));
		switch(choice){
			case 1:
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				this.mainMenu();
				break;
			default:
				this.processError();
		}
	},

	processError: function(){
		console.log("There was an error processing your request. Please try again.");
		this.toContinue();
		this.mainMenu();
	},

	handleInput: function(maxChoices){
		var input = sget("Please enter your choice: ");
		if (isNaN(input)){
			console.log("Please enter a number. ");
			return this.handleInput(maxChoices);
		}
		else if (input < 1 || input > maxChoices){
			console.log("Please enter a number between 1 and "+maxChoices);
			return this.handleInput(maxChoices);
		}
		else
			return input;
	},

	toContinue: function(){
		var wat = sget("Press enter to continue...");
	},

	init: function(){

		this.mainMenu();

	}

}

store.init();