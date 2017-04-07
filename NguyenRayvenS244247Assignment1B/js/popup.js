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

/** -------------------------- JavaScript for the pop ups in the webbrowser --------------------------*/

/** --------------This code was sourced and aqquired from http://t4t5.github.io/sweetalert/

I then added my own custom code so that it suited the needs of my pop ups in the website

--------------*/

/**-----  this fuction allows creates a pop up box when the submit button is pressed   ------*/
$('.Pup').click(function(event) {
    event.preventDefault();
    alert('Pop up Allert testing! This should appear if the javascript is working!');
});
 
/**-----  this fuction allows creates a sweet alert pop up box when the button is pressed   ------*/
function sweet(){
    
    swal("Good job!", "You clicked the button!", "success") 
    
}
/**-----  this fuction allows creates a sweet alert pop up box when the submit button is pressed   ------*/
function sweet1(){
    
   alert('The message has been sent! Thank you for your thoughts!')
    
}

/** ---- this function here was the edge case for solving the issue of inputting an incorrect email address inside the email address text box, making sure each user is correctly inputing the right data----*/
function CorrectEmail(CEmail){
        var symbols = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (symbols.test(CEmail.value) == false) 
        {
            swal("Oh Uh... Invalid Email :(", "An Error Has Appeared! Please enter a correct Email Address!!", "error");
            return false;
        }

        return true;

}

