/**
* Scripts for {NguyenRayvenS244247Assignment1B : http://rnguyen.spinetail.cdu.edu.au/RNguyen%20Living%20Style%20Guide/}
*
* author: {Rayven}
* email: {rayven_nguyen@hotmail.com}
* website: {NguyenRayvenS244247Assignment1B}
*/

/** this removes the javascript error of "unexpected ++" */
/*jslint plusplus: true */
/*jslint vars: true */

/** ------------------------------- JavaScript for font changing ----------------------------*/

/** --------- Both these functions and variables were used from Jason's bithub examples, i've only just implemented my own coding into it to make it suite my needs for the webpage. ---------*/

(function(){
	var button = document.querySelector('#toggle_font48');
    
	var paragraph = document.querySelector('#Toggleable');


	if(Element.prototype.addEventListener){
		addToggleFunctionality();
	} else {
		removeButton();
	}

	function removeButton(){
		button.remove();
	}


	function addToggleFunctionality(){

        
		var toggleFontSize = function(event){
			event.preventDefault();
			paragraph.classList.toggle('toggle_largefont48px');
		}
        
		button.addEventListener('click', toggleFontSize);
	}

})();



(function(){
    var button = document.querySelector('#toggle_font32');

	var paragraph = document.querySelector('#Toggleable');


	if(Element.prototype.addEventListener){
		addToggleFunctionality();
	} else {
		removeButton();
	}

	function removeButton(){
		button.remove();
	}


	function addToggleFunctionality(){
        
        var toggleFontSize = function(event){
			event.preventDefault();
			paragraph.classList.toggle('toggle_largefont32px');
		}

        
		button.addEventListener('click', toggleFontSize);
	}

})();

