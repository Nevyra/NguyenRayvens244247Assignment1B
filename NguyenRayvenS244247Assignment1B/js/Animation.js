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

/** ------------------------------- JavaScript for transition animations ---------------------------*/


(function(){

	if(Element.prototype.addEventListener){
		var items = document.querySelectorAll('.animation');
		addToggleFunctionality(items);
	}

	function addToggleFunctionality(items){
		
		for (var i = 0; i < items.length; i++) {
			
			var parent = items[i].parentElement;

		
			var container = document.createElement('div');
			container.classList.add('animation_setting');

			
			parent.insertBefore(container, items[i]);

			container.appendChild(items[i]);


			container.style.height = '0px';
			

			var button = createButton("Read more");
			button.addEventListener('click', clickListener);

			parent.insertBefore(button, container);
		}
	}
    
    

	function clickListener(event){

		event.preventDefault();

		button = event.target;

		container = button.nextSibling;

		paragraph = container.querySelector('.animation');

		if(container.style.height !== '0px'){

			container.style.height = '0px';
		} else {

			var height = paragraph.scrollHeight
			container.style.height = height + 'px';
		}

	}

	function createButton(label){


		var button = document.createElement('button');

		button.textContent = label;

		return button;
	}

})();