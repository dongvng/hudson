var goTop = document.getElementsByClassName("go-to-top")[0];
var gotoTop = document.getElementById("top");
window.onscroll = function(){
	if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
		goTop.style.display = "block";
	}else{
		goTop.style.display = "none";
	}
};
goTop.addEventListener("click", function(){
	gotoTop.scrollIntoView({behavior: "smooth", block: "start", inline : "start"});
});

