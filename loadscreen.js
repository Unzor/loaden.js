var screen=document.createElement('iframe');screen.style.display="none";screen.frameborder="0";screen.style.position="fixed";screen.style.top="10%";screen.style.left="33%";screen.style.height="100%";screen.style.width="100%";
screen.style.border="0px #ffffff none";screen.src="https://pertinentminiapplicationframework.unzor.repl.co/";
var text=document.createElement('text');
text.style.display="none";
text.style.position="fixed";
text.style.fontFamily="Arial, Helvetica, sans-serif";
text.style.top="34%";
text.style.left="48%";
text.innerHTML="Loading..."
document.body.appendChild(text);
function load(){document.body.appendChild(screen);}function startLoadScreen(){var elements = document.querySelectorAll('body *');Array.from(elements).forEach(function(element) {element.style.display = "none"; setTimeout(stopLoad, 8000);});screen.style.display="block";  text.style.display="block";}function stopLoad(){var elements = document.querySelectorAll('body *');Array.from(elements).forEach(function(element) {element.style.display = "block";
});screen.style.display="none"; text.style.display="none";} 
