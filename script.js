//your JS code here. If required.

	const btn= document.getElementById("btn");

btn.addEventListener("click", delt);

function delt(){
	let color= document.getElementById("colorSelect");

	let delcolor=document.getElementById(color.value);
	delcolor.remove();
	
}