$(document).ready(function(){
const parent = $(".main");
const child = $("#descrition-product")
var parentHeight = parent.height() * (parent.children().length - 1).toString() + "px"
console.log(parentHeight);
child.css("height", parentHeight)
});