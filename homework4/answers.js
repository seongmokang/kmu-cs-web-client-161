function answer_1() {
  document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";
}

function answer_2(){
	document.getElementById("q2-answer").innerHTML = "<ul><li> javascript can change HTMl by accessing DOM. </li><li> javascript can add or remove existing elements and attributes</li></ul>";
}

var x = document.getElementsByClassName("q34-answer");

function answer_3(){
	x[0].innerHTML = "<ul><li>parent - directly above a node</li><li>child - one level directly below</li><li>sibling - at the same level</li><li>descendant - a set of nodes any number of levels below another node</li><li>ancestor - a set of nodes above a node in a tree</li></ul>";
}

function answer_4(){
	x[1].innerHTML = "<ul><li>document.getElementById() - returns an element with a given id_name. it can return only one element..</li><li>document.getElementsByClassName() - get a list of elements based on the class name. it can return many elements..</li><li>document.getElementsByName() - get a list of elements based on the name it can return many elements..</li><li>document.getElementsByTagName() - get a list of elements with the input tag name. it can return many elements..</li></ul>";
}

$("a").click(function(){
	out = "Answer5";
    $(this).text(out);
})
$(".item").click(function(){
	$(this).attr('style','font-size:3em;')
})
$("div.demo").dblclick(function(){
	$(this).attr('style','color:blue;')
})
