var repCasterNum = nodecg.Replicant('casterNum');
var repCasterInfoArray = nodecg.Replicant('casterInfoArray');

repCasterNum.on('change', function(newValue, oldValue) {
	console.log("casterNum changed from " + oldValue + " to " + newValue);

	var caster3Box = document.getElementById("caster3Box");

	if (repCasterNum.value < 3) {
		caster3Box.className = "casterBoxCenter nameplate hidden";
	}
	else {
		caster3Box.className = "casterBoxCenter nameplate";
	}
});

repCasterInfoArray.on('change', function(newValue, oldValue) {
	console.log("casterNames changed from " + oldValue + " to " + newValue);

	var casterArray = repCasterInfoArray.value;
	var caster1 = casterArray[0];
	if (caster1 != null) {
		$('#caster1Text')
			.animate({
				opacity: 0
			}, 500, function() {
				$('#caster1Nickname').html(caster1.nickname);
				$('#caster1Social').html(caster1.social);
			}).delay(200);
		$('#caster1Text')
			.animate({
				opacity: 1
			}, 500);
	}

	var caster2 = casterArray[1];
	if (caster2 != null) {
		$('#caster2Text')
			.animate({
				opacity: 0
			}, 500, function() {
				$('#caster2Nickname').html(caster2.nickname);
				$('#caster2Social').html(caster2.social);
			}).delay(200);
		$('#caster2Text')
			.animate({
				opacity: 1
			}, 500);
	}

	var caster3 = casterArray[2];
	if (caster3 != null) {
		$('#caster3Text')
			.animate({
				opacity: 0
			}, 500, function() {
				$('#caster3Nickname').html(caster3.nickname);
				$('#caster3Social').html(caster3.social);
			}).delay(200);
		$('#caster3Text')
			.animate({
				opacity: 1
			}, 500);
	}

});
