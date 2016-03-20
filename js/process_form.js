//JavaScript document

function validateData(event){

	var target = event.target.id;
	
	console.log("target id is: " + target);


	var fname = document.mySurvey.fname.value,
		lname = document.mySurvey.lname.value,
		phone = document.mySurvey.phone.value,
		email = document.mySurvey.email.value;

	var fnameDiv = document.getElementById("fnameDiv"),
		lnameDiv = document.getElementById("lnameDiv"),
		phoneDiv = document.getElementById("phoneDiv"),
		emailDiv = document.getElementById("emailDiv");

		
	if(target === "fname"){

		while( fnameDiv.hasChildNodes() ){
			fnameDiv.removeChild(fnameDiv.lastChild);
		}

		var regExResult = fname.match(nameRegEx);

		if(regExResult){
			
			var checkmark = makeCheckmark();
			fnameDiv.appendChild(checkmark);

		}
		else{

			var errorPic = makeErrorPic();
			var error = makeError("Name may only contain characters and dashes");

			fnameDiv.appendChild(errorPic);
			fnameDiv.appendChild(error);

		};

	};
	if(target === "lname"){

		while( lnameDiv.hasChildNodes() ){
			lnameDiv.removeChild(lnameDiv.lastChild);
		}

		var regExResult = lname.match(nameRegEx);

		if(regExResult){
			
			var checkmark = makeCheckmark();
			lnameDiv.appendChild(checkmark);

		}
		else{
			
			var errorPic = makeErrorPic();
			var error = makeError("Name may only contain characters and dashes");

			lnameDiv.appendChild(errorPic);
			lnameDiv.appendChild(error);

		};

	};
	if(target === "phone"){

		while( phoneDiv.hasChildNodes() ){
			phoneDiv.removeChild(phoneDiv.lastChild);
		}

		var regExResult = phone.match(phoneRegEx);

		if(regExResult){
			
			var checkmark = makeCheckmark();
			phoneDiv.appendChild(checkmark);

		}
		else{
			
			var errorPic = makeErrorPic();
			var error = makeError("Phone number is invalid");

			phoneDiv.appendChild(errorPic);
			phoneDiv.appendChild(error);

		};

	};
	if(target === "email"){

		while( emailDiv.hasChildNodes() ){
			emailDiv.removeChild(emailDiv.lastChild);
		}

		var regExResult = email.match(emailRegEx);

		if(regExResult){
			
			var checkmark = makeCheckmark();
			emailDiv.appendChild(checkmark);

		}
		else{
			
			var errorPic = makeErrorPic();
			var error = makeError("Email address is invalid");

			emailDiv.appendChild(errorPic);
			emailDiv.appendChild(error);

		};

	};	
}


function makeCheckmark(){
	var checkmarkPic = document.createElement('img');
		checkmarkPic.setAttribute('src', 'img/checkboxcheck.svg');
		checkmarkPic.setAttribute('alt', 'Green check mark');
		checkmarkPic.setAttribute('height', '29');
		checkmarkPic.setAttribute('width', '29');

	return checkmarkPic;
}

function makeError(errorText){
	var validation = document.createElement('p');
	var validationText = document.createTextNode(errorText);
		validation.appendChild(validationText);
		validation.setAttribute('style', 'color: #aa0000');

	return validation;
}

function makeErrorPic(){
	var errorPic = document.createElement('img');
		errorPic.setAttribute('src', 'img/checkboxbad.svg');
		errorPic.setAttribute('alt', "Red 'X' mark");
		errorPic.setAttribute('height', '29');
		errorPic.setAttribute('width', '29');

	return errorPic;
}


function makeHint(hintText){
	var hint = document.createElement('p');
	var hintText = document.createTextNode(hintText);
		hint.appendChild(hintText);

	return hint;
}


function inputHint(event){

	var target = event.target.id;

	var fnameDiv = document.getElementById("fnameDiv"),
		lnameDiv = document.getElementById("lnameDiv"),
		phoneDiv = document.getElementById("phoneDiv"),
		emailDiv = document.getElementById("emailDiv");


	if(target === "fname"){

		while( fnameDiv.hasChildNodes() ){
			fnameDiv.removeChild(fnameDiv.lastChild);
		}
		
		var hint = makeHint("Please enter only characters (may contain dashes)");
		fnameDiv.appendChild(hint);

	};
	if(target === "lname"){

		while( lnameDiv.hasChildNodes() ){
			lnameDiv.removeChild(lnameDiv.lastChild);
		}

		var hint = makeHint("Please enter only characters (may contain dashes)");
		lnameDiv.appendChild(hint);

	};
	if(target === "phone"){

		while( phoneDiv.hasChildNodes() ){
			phoneDiv.removeChild(phoneDiv.lastChild);
		}

		var hint = makeHint("Please enter a valid phone number: ###-###-####");
		phoneDiv.appendChild(hint);

	};
	if(target === "email"){

		while( emailDiv.hasChildNodes() ){
			emailDiv.removeChild(emailDiv.lastChild);
		}

		var hint = makeHint("Please enter a valid email address (e.g. name@email.com)");
		emailDiv.appendChild(hint);

	};
}


function anonymousInput(){

	var fnameInput = document.getElementById("fname"),
		lnameInput = document.getElementById("lname"),
		phoneInput = document.getElementById("phone"),
		emailInput = document.getElementById("email");

	if(document.mySurvey.elements['anonymous'].checked){

		fnameInput.setAttribute('disabled', '');
		lnameInput.setAttribute('disabled', '');
		phoneInput.setAttribute('disabled', '');
		emailInput.setAttribute('disabled', '');

		console.log("Checkbox is checked");

	};

	if(document.mySurvey.elements['anonymous'].checked === false){

		fnameInput.removeAttribute('disabled');
		lnameInput.removeAttribute('disabled');
		phoneInput.removeAttribute('disabled');
		emailInput.removeAttribute('disabled');

		console.log("Checkbox is NOT checked");

	};
}

function makeResults(){
	var mainContent = document.getElementById('mainContent');
	mainContent.removeChild(mainContent.lastChild);

	var results = document.createElement('div');
	results.setAttribute('id', 'results');

	mainContent.appendChild(results);


	var resultsHeader = document.createElement('h2');
	var resultsHeaderText = document.createTextNode("Results");
	resultsHeader.appendChild(resultsHeaderText);

	results.appendChild(resultsHeader);

	return results;
}

function makeAnimal(animal,x){
	var animalElement = document.createElement('h4');
	var animalText = document.createTextNode("Your spirit animal is:");
		animalElement.appendChild(animalText);

		results.appendChild(animalElement);

	var animalName = document.createElement('h3');
	var animalNameText = document.createTextNode("A " + animal + "!");
		animalName.appendChild(animalNameText);

		results.appendChild(animalName);

	var badgeFigure = document.createElement('figure');

	var badgeImage = document.createElement('img');
		badgeImage.setAttribute('src', badges[x]);
		badgeImage.setAttribute('alt', animal + ' badge');
		badgeImage.setAttribute('height', '176');
		badgeImage.setAttribute('width', '200');

		badgeFigure.appendChild(badgeImage);

		results.appendChild(badgeFigure);
}


function submitData(event){

	event.preventDefault();
	

	if(document.mySurvey.elements['anonymous'].checked){

		makeResults();

		var anonymousElement = document.createElement('p');
		var anonymousText = document.createTextNode("Anonymous User");
		anonymousElement.appendChild(anonymousText);

		results.appendChild(anonymousElement);

	}
	else{

		var fname = document.mySurvey.fname.value,
			lname = document.mySurvey.lname.value,
			phone = document.mySurvey.phone.value,
			email = document.mySurvey.email.value;

		var fnameResult = fname.match(nameRegEx),
			lnameResult = lname.match(nameRegEx),
			phoneResult = phone.match(phoneRegEx),
			emailResult = email.match(emailRegEx);


		if(fnameResult && lnameResult && phoneResult && emailResult){

			makeResults();

			var fnameElement = document.createElement('p');
			var fnameText = document.createTextNode("First Name: " + fname);
			fnameElement.appendChild(fnameText);

			results.appendChild(fnameElement);

			var lnameElement = document.createElement('p');
			var lnameText = document.createTextNode("Last Name: " + lname);
			lnameElement.appendChild(lnameText);

			results.appendChild(lnameElement);

			var phoneElement = document.createElement('p');
			var phoneText = document.createTextNode("Phone Number: " + phone);
			phoneElement.appendChild(phoneText);

			results.appendChild(phoneElement);

			var emailElement = document.createElement('p');
			var emailText = document.createTextNode("Email Address: " + email);
			emailElement.appendChild(emailText);

			results.appendChild(emailElement);

		}

		else{ 

			var fnameInput = document.getElementById("fname"),
				lnameInput = document.getElementById("lname"),
				phoneInput = document.getElementById("phone"),
				emailInput = document.getElementById("email");

			if( !fnameResult  ){ fnameInput.focus(); return;  }
			if( !lnameResult  ){ lnameInput.focus(); return;  }
			if( !phoneResult  ){ phoneInput.focus(); return;  }
			if( !emailResult  ){ emailInput.focus(); return;  }

		}

	}

	var hrule = document.createElement('hr');
	results.appendChild(hrule);


	// The radio buttons

	var food = document.mySurvey.elements['food'],
		movie = document.mySurvey.elements['movie'],
		live = document.mySurvey.elements['live'],
		music = document.mySurvey.elements['music'],
		sport = document.mySurvey.elements['sport'],
		people = document.mySurvey.elements['people'];

	var foodChosen,
		movieChosen,
		liveChosen,
		musicChosen,
		sportChosen,
		peopleChosen;


	// This will determine the survey result and the badge that is shown
	// Each answer will add a different amount to animalNumber

	var animalNumber = 0;

	if(food[0].checked){ animalNumber+=6; }
	if(food[1].checked){ animalNumber+=3; }
	if(food[2].checked){ animalNumber+=4; }
	if(food[3].checked){ animalNumber+=5; }
	if(food[4].checked){ animalNumber+=2; }
	if(food[5].checked){ animalNumber+=1; }

	if(movie[0].checked){ animalNumber+=5; }
	if(movie[1].checked){ animalNumber+=4; }
	if(movie[2].checked){ animalNumber+=6; }
	if(movie[3].checked){ animalNumber+=2; }
	if(movie[4].checked){ animalNumber+=3; }
	if(movie[5].checked){ animalNumber+=1; }

	if(live[0].checked){ animalNumber+=6; }
	if(live[1].checked){ animalNumber+=2; }
	if(live[2].checked){ animalNumber+=1; }
	if(live[3].checked){ animalNumber+=4; }
	if(live[4].checked){ animalNumber+=5; }
	if(live[5].checked){ animalNumber+=3; }

	if(music[0].checked){ animalNumber+=6; }
	if(music[1].checked){ animalNumber+=1; }
	if(music[2].checked){ animalNumber+=3; }
	if(music[3].checked){ animalNumber+=5; }
	if(music[4].checked){ animalNumber+=4; }
	if(music[5].checked){ animalNumber+=2; }

	if(sport[0].checked){ animalNumber+=6; }
	if(sport[1].checked){ animalNumber+=4; }
	if(sport[2].checked){ animalNumber+=3; }
	if(sport[3].checked){ animalNumber+=2; }
	if(sport[4].checked){ animalNumber+=1; }
	if(sport[5].checked){ animalNumber+=5; }

	if(people[0].checked){ animalNumber+=6; }
	if(people[1].checked){ animalNumber+=3; }
	if(people[2].checked){ animalNumber+=1; }
	if(people[3].checked){ animalNumber+=2; }
	if(people[4].checked){ animalNumber+=4; }
	if(people[5].checked){ animalNumber+=5; }


	// This determines which item was selected for each of the survey questions

	var i;

	for (i = 0; i<food.length; i++) {

		if(food[i].checked){ foodChosen = food[i].value; }
	};

	for (i = 0; i<movie.length; i++) {

		if(movie[i].checked){ movieChosen = movie[i].value; }
	};

	for (i = 0; i<live.length; i++) {

		if(live[i].checked){ liveChosen = live[i].value; }
	};

	for (i = 0; i<music.length; i++) {

		if(music[i].checked){ musicChosen = music[i].value; }
	};

	for (i = 0; i<sport.length; i++) {

		if(sport[i].checked){ sportChosen = sport[i].value; }
	};

	for (i = 0; i<people.length; i++) {

		if(people[i].checked){ peopleChosen = people[i].value; }
	};


	// This is picking an animal depending on the answers that were selected
	// The animal chosen depends on the range of the value of animalNumber

	if(6 <= animalNumber && animalNumber <= 12){

		makeAnimal("Turtle",0);
		console.log("turtle"); 
		console.log(animalNumber); 
	}

	else if(13 <= animalNumber && animalNumber <= 18){

		makeAnimal("Kitten",1);
		console.log("kitten"); 
		console.log(animalNumber); 
	}

	else if(19 <= animalNumber && animalNumber <= 24){

		makeAnimal("Hawk",2);
		console.log("hawk"); 
		console.log(animalNumber); 
	}

	else if(25 <= animalNumber && animalNumber <= 30){

		makeAnimal("Bear",3);
		console.log("bear"); 
		console.log(animalNumber); 
	}

	else{ 

		makeAnimal("Lion",4);
		console.log("lion");
		console.log(animalNumber); 
	}


	//This is displaying the answers the user chose

	var surveyResultDiv = document.createElement('div');
	surveyResultDiv.setAttribute('id', 'surveyResult');

	results.appendChild(surveyResultDiv);

	var surveyResult = document.createElement('p');
	var surveyResultText = document.createTextNode("You would like to live " + liveChosen + 
													" where you can eat " + foodChosen + 
													" and listen to " + musicChosen + " music. " + 
													"While there, you would enjoy watching " + movieChosen + 
													" movies and " + sportChosen + " while spending time with " + 
													peopleChosen + ".");
	surveyResult.appendChild(surveyResultText);

	surveyResultDiv.appendChild(surveyResult);


	results.scrollIntoView();
}



function init(){

	var fnameInput = document.getElementById("fname");
	fnameInput.addEventListener('blur', validateData, false);
	fnameInput.addEventListener('focus', inputHint, false);

	var lnameInput = document.getElementById("lname");
	lnameInput.addEventListener('blur', validateData, false);
	lnameInput.addEventListener('focus', inputHint, false);

	var phoneInput = document.getElementById("phone");
	phoneInput.addEventListener('blur', validateData, false);
	phoneInput.addEventListener('focus', inputHint, false);

	var emailInput = document.getElementById("email");
	emailInput.addEventListener('blur', validateData, false);
	emailInput.addEventListener('focus', inputHint, false);

	var anonymousCheck = document.getElementById("anonymous");
	anonymousCheck.addEventListener('change', anonymousInput, false);

	var survey = document.getElementById("mySurvey");
	survey.addEventListener('submit', submitData, false);

}

window.addEventListener('load', init, false);


var nameRegEx = /^[a-z]+-*[a-z\-]*$/gi,

	phoneRegEx = /^\d\d\d-\d\d\d-\d\d\d\d$/,

	emailRegEx = /^[a-z0-9\.\_]+\@[a-z0-9\.]+\.(com|net|org|gov|edu)$/gi;


var badges = [
	'img/turtlebadge.png',
	'img/kittenbadge.png',
	'img/hawkbadge.png',
	'img/bearbadge.png',
	'img/lionbadge.png'
];