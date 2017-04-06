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

/** ------------------------------- JavaScript for the LocalDataBase ----------------------------*/

/** Setting up variables for the javascript to run */
var input = document.getElementById('userInput');
var NameInput = document.getElementById('name');
var MailInput = document.getElementById('mail');


var output = document.getElementById('output');
var NameOutput = document.getElementById('receiverName');
var MailOutput = document.getElementById('receiverMail');


var enterBtn = document.getElementById('write');
var readBtn = document.getElementById('read');
var resetBtn = document.getElementById('reset');

var storageIndex = 0;


/** functions that are being called to the listeners, allowing the buttons to respond to the local database storage */
function storeTextHandler(event) {
	console.log('storeTextHandler fired');
    var userInput = input.value;
    var Name = NameInput.value;
    var Mail = MailInput.value;
    var symbols = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    if (userInput) {

        localStorage.setItem(storageIndex++, JSON.stringify(Name));
        localStorage.setItem(storageIndex++, JSON.stringify(Mail));
        localStorage.setItem(storageIndex++, JSON.stringify(userInput));
        
    }
    
    NameInput.value = '';
    NameInput.focus();
    
    
    MailInput.value = '';
    MailInput.focus();
    
    
    input.value = '';
    input.focus();
    output.textContent = '';
    
    
}


/** this function loops through the localstorage database and adds all the elements together into a string so that it can output the string in correct order into the paragraph element (p) on the webpage */

function readDBHandler(event) {
  console.log('readDBHandler fired');
    var returnText = '';
    if (localStorage.length === 0) {
        returnText = 'The database is empty';
        output.textContent = returnText;
    } else {
			
        var i;
        for (i = 0; i < localStorage.length; i++) {
            returnText += i + ": " + localStorage.getItem(i) + "\n";
		}
    output.textContent = returnText;
   
	}
    console.log(localStorage);
}


/** this function clears the localstorage with any strings left in the paragraph element (p) the database counter is then reset to zero */

function resetDBHandler(event) {
    console.log('resetDBHandler fired');
    localStorage.clear();
    output.textContent = 'Database cleared';
    

		/* reset our index */
    storageIndex = 0;
}

/** Creating listeners to the buttons so they respond correctly */

enterBtn.addEventListener('click', storeTextHandler);
readBtn.addEventListener('click', readDBHandler);
resetBtn.addEventListener('click', resetDBHandler);