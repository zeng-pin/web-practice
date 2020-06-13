function activemove(){
	var active=document.querySelector(".active");
	console.log(active)
	var unactive=document.querySelectorAll(".unactive");
for(var i=0;i<unactive.length;i++){
	
	unactive[i].onclick=function(){
		unactive[i].className="active";
		active.className="unactive";
	}
	
}

}