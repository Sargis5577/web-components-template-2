var round = [{fill : 'aqua',stroke : 'blue'},{fill : 'aliceblue',stroke : 'antiquewhite',},{fill : 'aquamarine',stroke : 'azure',},{fill : 'beige',stroke : 'bisque',},{fill : 'black',stroke : 'yellow',},{fill : 'black ',stroke : 'blanchedalmond',},];
 
var colros = ['red','blue','yellow','orange','black','aqua'];
var arround = colros[Math.floor(Math.random() * colros.length)];
console.log(arround)
var template = document.querySelector('#template').content.querySelector('.svgContent');
var elem = template.querySelector('.svg')
var pool = document.querySelector('.content-2');
for(var i=0;i<5;i++) {
 var element = template.cloneNode(true);
 elem.style.fill = round[i].fill;
 elem.style.stroke = round[i].stroke;
 pool.appendChild(element);
}
function callEnd() {
 return colros[Math.floor(Math.random() * colros.length)]
}
var mainSvg = document.querySelector('.content');
var allSvgFile = document.querySelectorAll('.svgContent');
var allSvgcir = document.querySelectorAll('.svg');
var svgCric = document.querySelector('.svgCric');
mainSvg.addEventListener('click',function(){
 svgCric.style.fill =  colros[Math.floor(Math.random() * colros.length)];
  allSvgcir.forEach(function(element) {
    element.style.fill = callEnd()
})
})