window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  var player = GetPlayer();

var index = Math.floor(Math.random() * 7) + 1;
player.SetVar("ScenarioIndex_GroceryOutlet", index);

var cards = {
	1: { time: 5, water: 6, food: 5, hygiene: 4 },
	2: { time: 10, water: 5, food: 4, hygiene: 3 },
	3: { time: 15, water: 4, food: 3, hygiene: 3 },
	4: { time: 5, water: 6, food: 5, hygiene: 3 },
	5: { time: 20, water: 3, food: 2, hygiene: 2 },
	6: { time: 5, water: 6, food: 5, hygiene: 4 },
	7: { time: 5, water: 5, food: 4, hygiene: 3 }
};

var c = cards[index];

player.SetVar("Scenario_AddTime", c.time);
player.SetVar("Scenario_AddWater", c.water);
player.SetVar("Scenario_AddFood", c.food);
player.SetVar("Scenario_AddHygiene", c.hygiene);

// zero unused
player.SetVar("Scenario_AddBlankets", 0);
player.SetVar("Scenario_AddFormula", 0);
player.SetVar("Scenario_AddFirstAid", 0);
player.SetVar("Scenario_AddFlashlights", 0);

}

window.Script2 = function()
{
  // Access Storyline player
var player = GetPlayer();

// Randomly pick 1–7 for the Donation Center
var index = Math.floor(Math.random() * 7) + 1;
player.SetVar("ScenarioIndex_DonationCenter", index);

// Now define each scenario card as an object
var cards = {
	1: { time: 10, blankets: 6, food: 5, hygiene: 4 },
	2: { time: 5, blankets: 2, food: 3, hygiene: 1 },
	3: { time: 5, blankets: 5, food: 4, hygiene: 2 },
	4: { time: 15, blankets: 4, food: 0, hygiene: 3 },
	5: { time: 5, blankets: 7, food: 0, hygiene: 5 },
	6: { time: 10, blankets: 0, food: 5, hygiene: 4 },
	7: { time: 10, blankets: 8, food: 3, hygiene: 0 }
};

// Select the card based on random index
var card = cards[index];

// Push values into Storyline variables
player.SetVar("Scenario_AddTime", card.time);
player.SetVar("Scenario_AddBlankets", card.blankets);
player.SetVar("Scenario_AddFood", card.food);
player.SetVar("Scenario_AddHygiene", card.hygiene);

// Zero out categories not used in this location
player.SetVar("Scenario_AddWater", 0);
player.SetVar("Scenario_AddFormula", 0);
player.SetVar("Scenario_AddFirstAid", 0);
player.SetVar("Scenario_AddFlashlights", 0);


}

window.Script3 = function()
{
  var player = GetPlayer();

var index = Math.floor(Math.random() * 7) + 1;
player.SetVar("ScenarioIndex_GroceryStore", index);

var cards = {
	1: { time: 5, water: 6, food: 4, hygiene: 0 },
	2: { time: 5, water: 3, food: 2, hygiene: 2 },
	3: { time: 5, water: 6, food: 5, hygiene: 4 },
	4: { time: 3, water: 5, food: 4, hygiene: 0 },
	5: { time: 10, water: 4, food: 3, hygiene: 2 },
	6: { time: 5, water: 6, food: 4, hygiene: 3 },
	7: { time: 5, water: 5, food: 5, hygiene: 0 }
};

var c = cards[index];

player.SetVar("Scenario_AddTime", c.time);
player.SetVar("Scenario_AddWater", c.water);
player.SetVar("Scenario_AddFood", c.food);
player.SetVar("Scenario_AddHygiene", c.hygiene);

// Zero unused
player.SetVar("Scenario_AddBlankets", 0);
player.SetVar("Scenario_AddFormula", 0);
player.SetVar("Scenario_AddFirstAid", 0);
player.SetVar("Scenario_AddFlashlights", 0);

}

window.Script4 = function()
{
  var player = GetPlayer();

var index = Math.floor(Math.random() * 7) + 1;
player.SetVar("ScenarioIndex_CommunityWarehouse", index);

var cards = {
	1: { time: 10, water: 12, food: 5, hygiene: 4, flash: 0, blankets: 0, firstaid: 0 },
	2: { time: 20, water: 8, food: 4, flash: 3, hygiene: 0, blankets: 0, firstaid: 0 },
	3: { time: 5, water: 10, food: 6, blankets: 5, hygiene: 0, flash: 0, firstaid: 0 },
	4: { time: 15, water: 8, food: 5, hygiene: 4, flash: 0, blankets: 0, firstaid: 0 },
	5: { time: 15, water: 12, firstaid: 6, blankets: 5, flash: 4, food: 0, hygiene: 0 },
	6: { time: 20, water: 6, food: 4, flash: 3, blankets: 0, hygiene: 0, firstaid: 0 },
	7: { time: 5, water: 10, hygiene: 5, food: 4, flash: 0, blankets: 0, firstaid: 0 }
};

var c = cards[index];

player.SetVar("Scenario_AddTime", c.time);
player.SetVar("Scenario_AddWater", c.water || 0);
player.SetVar("Scenario_AddFood", c.food || 0);
player.SetVar("Scenario_AddHygiene", c.hygiene || 0);
player.SetVar("Scenario_AddFlashlights", c.flash || 0);
player.SetVar("Scenario_AddBlankets", c.blankets || 0);
player.SetVar("Scenario_AddFirstAid", c.firstaid || 0);
player.SetVar("Scenario_AddFormula", 0);


}

window.Script5 = function()
{
  var player = GetPlayer();

var index = Math.floor(Math.random() * 7) + 1;
player.SetVar("ScenarioIndex_CommunityCenter", index);

var cards = {
	1: { time: 10, flash: 3, food: 5, hygiene: 2, blankets: 3, firstaid: 0 },
	2: { time: 5, flash: 4, food: 6, hygiene: 3, blankets: 2, firstaid: 0 },
	3: { time: 15, flash: 2, hygiene: 4, firstaid: 5, blankets: 2, food: 0 },
	4: { time: 10, food: 3, hygiene: 2, firstaid: 2, blankets: 3, flash: 0 },
	5: { time: 5, flash: 4, food: 5, hygiene: 4, blankets: 4, firstaid: 0 },
	6: { time: 15, flash: 2, food: 4, hygiene: 3, blankets: 2, firstaid: 0 },
	7: { time: 5, flash: 3, food: 3, hygiene: 2, blankets: 3, firstaid: 0 }
};

var c = cards[index];

player.SetVar("Scenario_AddTime", c.time);
player.SetVar("Scenario_AddFlashlights", c.flash || 0);
player.SetVar("Scenario_AddFood", c.food || 0);
player.SetVar("Scenario_AddHygiene", c.hygiene || 0);
player.SetVar("Scenario_AddBlankets", c.blankets || 0);
player.SetVar("Scenario_AddFirstAid", c.firstaid || 0);

// Zero unused
player.SetVar("Scenario_AddWater", 0);
player.SetVar("Scenario_AddFormula", 0);

}

window.Script6 = function()
{
  var player = GetPlayer();

var index = Math.floor(Math.random() * 7) + 1;
player.SetVar("ScenarioIndex_PharmacyEast", index);

var cards = {
	1: { time: 15, firstaid: 4, formula: 3, hygiene: 2, flash: 0 },
	2: { time: 5, firstaid: 5, formula: 5, flash: 3, hygiene: 0 },
	3: { time: 10, firstaid: 2, formula: 1, hygiene: 3, flash: 0 },
	4: { time: 10, firstaid: 5, formula: 4, flash: 4, hygiene: 0 },
	5: { time: 20, firstaid: 2, formula: 3, hygiene: 2, flash: 0 },
	6: { time: 5, firstaid: 4, formula: 3, flash: 4, hygiene: 0 },
	7: { time: 15, firstaid: 3, formula: 2, hygiene: 2, flash: 0 }
};

var c = cards[index];

player.SetVar("Scenario_AddTime", c.time);
player.SetVar("Scenario_AddFirstAid", c.firstaid);
player.SetVar("Scenario_AddFormula", c.formula);
player.SetVar("Scenario_AddHygiene", c.hygiene);
player.SetVar("Scenario_AddFlashlights", c.flash);

// Zero unused
player.SetVar("Scenario_AddWater", 0);
player.SetVar("Scenario_AddFood", 0);
player.SetVar("Scenario_AddBlankets", 0);


}

window.Script7 = function()
{
  var player = GetPlayer();

var index = Math.floor(Math.random() * 7) + 1;
player.SetVar("ScenarioIndex_PharmacyNearby", index);

var cards = {
	1: { time: 5, firstaid: 5, formula: 4 },
	2: { time: 10, firstaid: 3, formula: 2 },
	3: { time: 5, firstaid: 5, formula: 5 },
	4: { time: 10, firstaid: 2, formula: 3 },
	5: { time: 3, firstaid: 4, formula: 3 },
	6: { time: 15, firstaid: 3, formula: 2 },
	7: { time: 5, firstaid: 5, formula: 3 }
};

var c = cards[index];

player.SetVar("Scenario_AddTime", c.time);
player.SetVar("Scenario_AddFirstAid", c.firstaid);
player.SetVar("Scenario_AddFormula", c.formula);

// zero unused
player.SetVar("Scenario_AddWater", 0);
player.SetVar("Scenario_AddFood", 0);
player.SetVar("Scenario_AddHygiene", 0);
player.SetVar("Scenario_AddBlankets", 0);
player.SetVar("Scenario_AddFlashlights", 0);

}

window.Script8 = function()
{
  var player = GetPlayer();

var index = Math.floor(Math.random() * 7) + 1;
player.SetVar("ScenarioIndex_GasStation", index);

var cards = {
	1: { time: 3, flash: 4, food: 3 },
	2: { time: 5, flash: 2, food: 2 },
	3: { time: 5, flash: 5, food: 4 },
	4: { time: 10, flash: 4, food: 3 },
	5: { time: 5, flash: 5, food: 3 },
	6: { time: 10, flash: 3, food: 2 },
	7: { time: 10, flash: 6, food: 4 }
};

var c = cards[index];

player.SetVar("Scenario_AddTime", c.time);
player.SetVar("Scenario_AddFlashlights", c.flash);
player.SetVar("Scenario_AddFood", c.food);

// zero unused
player.SetVar("Scenario_AddWater", 0);
player.SetVar("Scenario_AddHygiene", 0);
player.SetVar("Scenario_AddBlankets", 0);
player.SetVar("Scenario_AddFormula", 0);
player.SetVar("Scenario_AddFirstAid", 0);




}

};
