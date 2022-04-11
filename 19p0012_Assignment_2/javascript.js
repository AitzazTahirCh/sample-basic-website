function ValidateEmail(inputText) //function for email validation
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.email.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.email.focus();
return false;
}
}

function lengthRange(inputtxt) //function to validate length of name
{  	
    var minlength = 4;
    var maxlength = 100;
    var userInput = inputtxt.value;  
    if(userInput.length >= minlength && userInput.length <= maxlength)
    {  	
        return true;  	
    }
    else
    {  	
	    alert("Please input name between " +minlength+ " and " +maxlength+ " characters");  		
        return false;  	
    }  
}

function wordCount(text) //function to validate number of words in messgae
{
    var wordCount = text.value.split(/\s+/).length;
    if( wordCount < 3 ) {
        alert("minimum 3 words required in message")
        return false;
    }
    else
    {
        return true;
    }
}

