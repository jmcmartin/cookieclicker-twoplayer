$(document).ready(function() {
	console.log("Loaded");
	$("#winner").hide();
	var clicks1 = 0;
	var clicks2 = 0;

	var fbRef = new Firebase("https://glaring-inferno-7535.firebaseio.com/");

	fbRef.child('clicks1').on('value', function(snapshot) {
		console.log(snapshot.val());
		clicks1 = snapshot.val();
		$('#clicks1').text(clicks1);
		if (clicks1 > 500) {
			$("#winner").show();
			fbRef.child('winner').set(true);
		}
	});

	fbRef.child('clicks2').on('value', function(snapshot) {
		console.log(snapshot.val());
		clicks2 = snapshot.val();
		$('#clicks2').text(clicks2);
		if (clicks2 > 500) {
			$("#winner2").show();
			fbRef.child('winner').set(true);
		}
	});


	$('#cookie').click(function() {
		clicks1 = clicks1 + 1;
		$('#clicks1').text(clicks1);
		fbRef.child('clicks1').set(clicks1);
	});

	$('#cookie2').click(function() {
		clicks2 = clicks2 + 1;
		$('#clicks2').text(clicks2);
		fbRef.child('clicks2').set(clicks2);
	});

	$('#reset').click(function() {
		clicks1 = 0;
		clicks2 = 0;
		fbRef.child('clicks1').set(0);
		fbRef.child('clicks2').set(0);
		fbRef.child('winner').set(false);
		$('#clicks1').text(clicks1);
		$('#clicks2').text(clicks2);
		$("#winner").hide();
		fbRef.child('player1').set(false);
		fbRef.child('player2').set(false);
	});

	$('#1player').click(function() {
		fbRef.child('player1').set(true);
		$("#2player").hide();
		$("#1player").hide();
		$("#cookie").show();
		$("#reset").show();
		$("h1, h2").show();
		$("#winner").hide();
		$("#hi2").hide();
		$("#winner2").hide();
	});

	$('#2player').click(function() {
		fbRef.child('player2').set(true);
		$("#1player").hide();
		$("#2player").hide();
		$("#cookie2").show();
		$("#reset").show();
		$("h1, h2").show();
		$("#winner").hide();
		$("#hi1").hide();
		$("#winner2").hide();
	});

});