var screen=document.createElement('iframe');screen.style.display="none";screen.frameborder="0";screen.style.position="fixed";screen.style.top="10%";screen.style.left="33%";screen.style.height="100%";screen.style.width="100%";
screen.style.border="0px #ffffff none";screen.src="https://pertinentminiapplicationframework.unzor.repl.co/";var automaticStop=false;function load(){document.body.appendChild(screen);}function startLoadScreen(){var elements = document.querySelectorAll('body *');Array.from(elements).forEach(function(element) {element.style.display = "none";});screen.style.display="block"; }function stopLoad(){var elements = document.querySelectorAll('body *');Array.from(elements).forEach(function(element) {element.style.display = "block";
});screen.style.display="none";} 


//for automatic stop: 
//if (automaticStop=true) {setTimeout(stopLoad, 8000);}
