function reflex_agent(location, state) {
	if (state == "DIRTY") return "CLEAN";
	else if (location == "A") return "RIGHT";
	else if (location == "B") return "LEFT";
}

function test(states) {
	CheckState();
	var location = states[0];
	var state = "";
	if (states[0] == "A") {
		state = states[1];
	} else {
		state = states[2];
	}
	var action_result = reflex_agent(location, state);
	document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | A: ").concat(states[1]).concat(" B: ").concat(states[2]).concat(" | Action: ").concat(action_result);
	Dirty();
	if (action_result == "CLEAN") {
		if (location == "A") {
			states[1] = "CLEAN";
		}
		else if (location == "B") {
			states[2] = "CLEAN";
		}
	}
	else if (action_result == "RIGHT") {
		states[0] = "B";
	}
	else if (action_result == "LEFT") {
		states[0] = "A";
	}
	if (contador1 <2 || contador2 < 2 || contador3 < 2 || contador4 < 2 || contador5 < 2 || contador6 < 2 || contador7 < 2 || contador8 < 2) {

		setTimeout(function () { test(states); }, 2000);
	}
}

function Dirty() {
	if (states[1] == "CLEAN" && states[2] == "CLEAN") {
		var aleatorio = Math.floor(Math.random() * (4 - 1)) + 1;

		if (aleatorio == 1) {
			states[1] = "DIRTY";
		} else if (aleatorio == 2) {
			states[2] = "DIRTY";
		} else if (aleatorio == 3) {
			states[1] = "DIRTY";
			states[2] = "DIRTY";
		}
	}
}


function CheckState() {
	if (states[0] == "A" && states[1] == "DIRTY" && states[2] == "DIRTY") {
		contador1 += 1;
  	
		document.getElementById("log").innerHTML += "<br>Estado 1 visitado: ".concat(contador1);
	}
	else if (states[0] == "A" && states[1] == "DIRTY" && states[2] == "CLEAN") {
		contador2 += 1;
              
		document.getElementById("log").innerHTML += "<br>Estado 2 visitado: ".concat(contador2);
	}
	else if (states[0] == "A" && states[1] == "CLEAN" && states[2] == "DIRTY") {
		contador3 += 1;
		
		document.getElementById("log").innerHTML += "<br>Estado 3 visitado: ".concat(contador3);
	}
	else if (states[0] == "A" && states[1] == "CLEAN" && states[2] == "CLEAN") {
		contador4 += 1;
		
		document.getElementById("log").innerHTML += "<br>Estado 4 visitado: ".concat(contador4);
	}
	else if (states[0] == "B" && states[1] == "DIRTY" && states[2] == "DIRTY") {
		contador5 += 1;
		
		document.getElementById("log").innerHTML += "<br>Estado 5 visitado: ".concat(contador5);
	}
	else if (states[0] == "B" && states[1] == "DIRTY" && states[2] == "CLEAN") {
		contador6 += 1;
		
		document.getElementById("log").innerHTML += "<br>Estado 6 visitado: ".concat(contador6);
	}
	else if (states[0] == "B" && states[1] == "CLEAN" && states[2] == "DIRTY") {
		contador7 += 1;
		
		document.getElementById("log").innerHTML += "<br>Estado 7 visitado: ".concat(contador7);
	}
	else if (states[0] == "B" && states[1] == "CLEAN" && states[2] == "CLEAN") {
		contador8 += 1;
		
		document.getElementById("log").innerHTML += "<br>Estado 8 visitado: ".concat(contador8);
	}

}


var contador1 = 0;
var contador2 = 0;
var contador3 = 0;
var contador4 = 0;
var contador5 = 0;
var contador6 = 0;
var contador7 = 0;
var contador8 = 0;
var states = ["A", "DIRTY", "DIRTY"];
test(states);