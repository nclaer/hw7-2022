var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " +video.autoplay)
	console.log("Loop is set to " +video.loop)
	video.load();
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume *100 +"%"
	video.play()
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate *= .90;
	console.log("Video speed is " +video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= .90;
	console.log("Video speed is " +video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video Ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Video time is " +video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (document.getElementById("mute").innerHTML == "Mute") {
		console.log("Mute Video");
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute"
	}
	else {
		console.log("Unmute Video");
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Updating volume value to " + volume.value);;
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume *100 +"%"
});


document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Adding old school styling")
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Reverting to original styling")
	video.classList.remove("oldSchool")
});