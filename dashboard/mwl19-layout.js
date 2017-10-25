(function() {
	'use strict';

	if (window.jQuery) {
		console.log("jQuery is loaded for mwl19-layout.js");
	}

	// We like to target our buttons and inputs with `ctrl-` class names. However, you can use whatever you want!
	var updateMatchName = document.getElementById('ctrl-matchName');
	var updateBestOf = document.getElementById('ctrl-bestOfNum');
	var updatePlayerInfo = document.getElementById('ctrl-updateAllPlayerInfo');
	var updateCasterNum = document.getElementById('ctrl-casterNumSelector');
	var updateCasterInfo = document.getElementById('ctrl-updateAllCasterInfo');
	var updateTimer = document.getElementById('ctrl-startTimer');

	var repMatchName = nodecg.Replicant('matchName');
	var repBestOfNum = nodecg.Replicant('bestOfNum');
	var repPlayerInfoArray = nodecg.Replicant('playerInfoArray');
	var repCasterNum = nodecg.Replicant('casterNum');
	var repCasterInfoArray = nodecg.Replicant('casterInfoArray');
	var repTimerEnd = nodecg.Replicant('timerEnd');

	updateMatchName.addEventListener('click', function() {
		repMatchName.value = document.getElementById('matchName').value;
	});

	updateBestOf.addEventListener('click', function() {
		repBestOfNum.value = document.getElementById('bestOfNum').value;
	});

	updatePlayerInfo.addEventListener('click', function() {

	});

	updateCasterNum.addEventListener('change', function() {
		repCasterNum.value = updateCasterNum.value;
	});

	updateCasterInfo.addEventListener('click', function() {
		//declare caster array
		var casterArray = [];

		//load info for casters and add to array
		for (var i = 1; i <= 3; i++) {
			var caster = new Caster(document.getElementById('caster' + i + 'NicknameInput').value, document.getElementById('caster' + i + 'FullNameInput').value, document.getElementById('caster' + i + 'SocialInput').value);
			casterArray.push(caster);
		}
		repCasterInfoArray.value = casterArray;
	});

	updateTimer.addEventListener('click', function() {
		//get the current time
		var currentTimestamp = Date.now();
		console.log("current time: " + currentTimestamp);


		//depending on what radio button was selected, add the countdowm time (in ms)
		//and set to repTimerEnd.value
		var countdownTime = $('input[name=radioTime]:checked').val();
		if (countdownTime == null) {
			//do nothing
			return;
		} else if (countdownTime == 'custom') {
			//set countdownTime to the value in the custom field
			countdownTime = document.getElementById('customTime').value * 60 * 1000;
		}

		repTimerEnd.value = parseFloat(currentTimestamp) + parseFloat(countdownTime);
		console.log("timer end: " + repTimerEnd.value);
		nodecg.sendMessage('startTimer');
	});

	repMatchName.on('change', function(newValue, oldValue) {
		console.log("matchName changed from " + oldValue + " to " + newValue);
		document.getElementById('matchName').value = newValue;
	});
	repBestOfNum.on('change', function(newValue, oldValue) {
		console.log("bestOfNum changed from " + oldValue + " to " + newValue);
		document.getElementById('bestOfNum').value = newValue;
	});
	repCasterNum.on('change', function(newValue, oldValue) {
		console.log("[mwl19] casterNum changed from " + oldValue + " to " + newValue);
	});
	repCasterInfoArray.on('change', function(newValue, oldValue) {
		console.log("[mwl19]CasterNames changed from " + oldValue + " to " + newValue);
		//TODO write some logic for pulling in caster info
		var casterArray = repCasterInfoArray.value;

		for (var i = 1; i<=casterArray.length; i++) {
			document.getElementById('caster'+i+'NicknameInput').value = casterArray[i-1].nickname;
			document.getElementById('caster'+i+'SocialInput').value = casterArray[i-1].social;
		}

	});
})();
