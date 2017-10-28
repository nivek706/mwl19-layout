var repMatchName = nodecg.Replicant('matchName');

repMatchName.on('change', function(oldValue, newValue){
	console.log("matchName changed from " + oldValue + " to " + newValue);
	$('#match-name').html(repMatchName.value);
});

//slideshow section
var logoImgArray = [
	"img/logo-rosewill-transparent.png",
	"img/logo-deck-transparent.png",
	"img/logo-bequiet.png",
	"img/logo-visiontek.jpg"
];

console.log("logoImgArray= " + logoImgArray);

logoIndex = 0;
setTimeout(runSlideshow, 15000);

function runSlideshow() {
	logoIndex++;
	if(logoIndex >= logoImgArray.length){
		logoIndex = 0;
	}
	document.getElementById("sponsor-logo").src = logoImgArray[logoIndex];
	setTimeout(runSlideshow, 15000);
}
