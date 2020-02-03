var randomcols=randomizer(6);
var cols = document.querySelectorAll(".square");
var solution = randomzz();
var findthis =document.querySelector("p");
findthis.textContent = solution;
var prompt=document.querySelector(".prompt");
var banner=document.querySelector(".banner");
maingame();

var easy=document.querySelector(".easy");
var hard =document.querySelector(".hard");
easy.addEventListener("click",function(){randomcols=randomizer(3);
								easy.classList.add("difficulty");
								hard.classList.remove("difficulty");
								solution = randomzz();
								findthis =document.querySelector("p");
								findthis.textContent = solution;
								maingame();														  
							  });

hard.addEventListener("click",function(){randomcols=randomizer(6);
								hard.classList.add("difficulty");
								easy.classList.remove("difficulty");
								maingame();
								solution = randomzz();
								findthis =document.querySelector("p");
								findthis.textContent = solution;
							  });




// here the color of the game and its main logic is written
function maingame(){

		for (var i = 0; i < cols.length; i++) 
		{	
			// this if else condition ensures the selection of hard and easy level by 
			// turning bcg cyan in case of easy level
			if(i< randomcols.length){
			
				cols[i].style.background=randomcols[i];
			}
			else{
				// cols[i].style.display="none";----
				cols[i].style.background="cyan";
				}
				

				cols[i].addEventListener("click",function () {
				if(this.style.backgroundColor == solution){
					
					console.log("milgya sab sort hai");
					prompt.textContent = "I finally found you";
					done();
					
				}
				else{
					 
					this.style.background= "cyan";
					prompt.textContent = "Keep Looking !";
					
					}
				})
			}
			// turns all the divs and the banner into solution color
		function done(){
			for (var i = 0; i < cols.length; i++) {
					
					cols[i].style.background= solution;
					banner.style.backgroundColor=solution;

					}
				}

}	


function randomzz(){
	var random = randomcols[Math.floor(Math.random()*randomcols.length)]
	return random;
	}

function randomizer(level){

	var selectedlevel=[]; 
	for (var i = 0; i < level; i++) {
	var red =  Math.floor(Math.random()*255);
	var green =Math.floor(Math .random()*255);
	var blue =Math.floor(Math.random()*255);
    selectedlevel.push("rgb("+red+", "+green+", "+blue+")");
 	}
 	return selectedlevel;
}
