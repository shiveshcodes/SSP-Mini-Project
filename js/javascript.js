AOS.init();

var element = document.getElementsByClassName("chartcircles")[0];
var chartsShowed = false;
function circleprogress(i, progressi)
{
	var ctx = document.getElementsByClassName('progress')[i].getContext("2d");
var al = 0;
var start = 4.72;
var cw = ctx.canvas.width;
var ch = ctx.canvas.height; 
var diff;
function progressSim(){;
	diff = ((al/ 100) * Math.PI*2*10).toFixed(2);
	ctx.clearRect(0, 0, cw, ch);
	ctx.lineWidth = 10;
	ctx.fillStyle = '#c5c7c7';
	ctx.strokeStyle = "#f2c351";
	ctx.font = "30px Roboto"
	ctx.textAlign = 'center';
	ctx.fillText(al+'%', cw*.5, ch*.5, cw);
	ctx.beginPath();
	ctx.arc(cw*0.5, ch*0.5, 130, start, (diff/10)+start, false);
	ctx.stroke();
	if(al >= progressi){
		clearTimeout(sim);
	    // Add scripting here that will run when progress completes
	}
	al++;
}
var sim = setInterval(progressSim, 25);
}
// var progress = [71, 89, 81, 62];
// for(var i=0; i<4; i++)
// circleprogress(i, progress[i]);


let slider = tns({
	container : ".my-slider",
	"slideBy" : 1,
	"speed" : 400,
	"nav" : false,
	controlsContainer : "#controls",
	prevButton : ".previous",
	nextButton : ".next",
	responsive: {
		1600: {
			items : 4,
			gutter : 20
		},
		1024: {
			items : 3,
			gutter: 20
		},
		768: {
			items : 2,
			gutter: 20
		},
		480: {
			items : 1,
			gutter: 20
		}

	}
})



function isOnScreen(element)
{
	const rect = element.getBoundingClientRect();

	return (
        (rect.top >= 0 &&
        rect.left >= 0) ||
        (rect.bottom <= (window.innerHeight) &&
         rect.right <= (window.innerWidth))

    );
}

function displayChart(element, chartsShowed1)
{
	if(!chartsShowed1 && isOnScreen(element))
	{
	var progress = [71, 89, 81, 62];
	for(var i=0; i<4; i++) 
	{
		circleprogress(i, progress[i]);
	}
	chartsShowed = true;
	}
	// console.log("isOnScreen(element)");
}


document.addEventListener("scroll", () => {
	displayChart(element, chartsShowed);
});

