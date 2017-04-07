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

/** ------------------------------- JavaScript for color changing ---------------------------*/

/** -----------parts of this function was used from Jason's bithub, they had some personal codes added to suite the needs of my website.----------*/

(function(){
	var paragraph = document.querySelector('#color_change');


	if(Element.prototype.addEventListener){
		addToggleFunctionality();
	}


    
/** ------------ these functions pretty much just creates the buttons that and enables them to do the given functions when they are 'clicked' --------------*/
	function addToggleFunctionality(){
	
		var button = document.createElement('button');

		button.textContent = "Toggle font colour";

	
		button.addEventListener('click', function(event){
			event.preventDefault();
			paragraph.classList.toggle('color_scheme');
		});

		
		var parentRow = paragraph.parentElement;
		parentRow.appendChild(button);
	}

})();