

function appTime() {
	"use strict";

	this.hour = document.getElementById("hour");
	this.minute = document.getElementById("minute");
	this.period = document.getElementsByClassName("small-time")[0];
	this.month =  document.getElementsByClassName("mon-date")[0];
	this.day =  document.getElementsByClassName("day-date")[0];
	this.year =  document.getElementsByClassName("year-date")[0];
	this.today = new Date();
	var $this = this;
	var i, hr;

	this.monthName = ["January", "Febuary", "MArch", "April", 
	"May", "June", "July", "August", "September", "October", "November", "December"];
	
	this.time = function() {		

		if (new Date().getHours() > 12) {
			this.hour.innerHTML = new Date().getHours() - 12;
		} else {
			this.hour.innerHTML = new Date().getHours();
		}

		this.getMinute = new Date().getMinutes();			
		this.minute.innerHTML = $this.checkTime(this.getMinute);

		$this.year.innerHTML = new Date().getUTCFullYear();
		$this.day.innerHTML = new Date().getUTCDate();
		$this.month.innerHTML = $this.monthName[new Date().getMonth()];

		if ( new Date().getHours() < 12) {
			$this.period.innerHTML = "AM";
		} else {
			$this.period.innerHTML = "PM";
		}

	}	

	this.checkTime = function(i) {		
		if (i < 10 ) {
			i = "0" + i;
			return i;
		} else {
			return i;
		}
	}


	this.startTime = function() {
		this.time();
		var interval = setInterval(this.time, 1000);        
        		return this;
	}
}


function stopWatch() {
	this.start = function() {	
		var bigClock = document.getElementsByClassName("big-clock")[0];
		var smallClock = document.getElementsByClassName("small-clock")[0];
		var seconds = parseInt(bigClock.innerHTML);
		var tens = parseInt(smallClock.innerHTML);
		tens++;

		if (tens <= 9) {
			smallClock.innerHTML = "0" + tens;
		} else {
			smallClock.innerHTML = tens;
		}

		if (smallClock.innerHTML > 99) {
			seconds++;
			bigClock.innerHTML = seconds;
			tens = 0;
			smallClock.innerHTML = "0" + 0;			
		}

		if (bigClock.innerHTML > 9) {
			bigClock.innerHTML = seconds;
		}  
  
	}

	this.stop = function() {
		clearInterval(interval);
	}

	this.resetWatch = function() {
		var bigClock = document.getElementsByClassName("big-clock")[0];
		var smallClock = document.getElementsByClassName("small-clock")[0];
		var seconds = "0";
		var tens = "00";
		bigClock.innerHTML = seconds;
		smallClock.innerHTML = tens;
	}


	this.startStopWatch = function() {		
  		interval = setInterval(this.start, 10);
	}
}



function time(e) {
	this.hOne = document.getElementById("hone");
	this.hTwo = document.getElementById("htwo");
	this.mOne = document.getElementById("mone");
	this.mTwo = document.getElementById("mtwo");
	this.sOne = document.getElementById("sone");
	this.sTwo = document.getElementById("stwo");

	this.tbButton = document.getElementsByClassName("btn-value");

	this.getValue = function() {

		for (var i = 0; i < this.tbButton.length; i++) {
			if (e.target === this.tbButton[i]) {
				if (this.hOne.innerHTML === "0" && localStorage.hone != "zero") {
					if (this.tbButton[i].innerHTML === "0") {
						this.hOne.innerHTML = "0";
						localStorage.setItem("hone", "zero");
					} else {
						this.hOne.innerHTML = this.tbButton[i].innerHTML;
					};
				} else if (this.hTwo.innerHTML === "0" && localStorage.htwo != "zero") {
					if (this.tbButton[i].innerHTML === "0") {
						this.hTwo.innerHTML = "0";
						localStorage.setItem("htwo", "zero");
					} else {
						this.hTwo.innerHTML = this.tbButton[i].innerHTML;
					};
				} else  if (this.mOne.innerHTML === "0" && localStorage.mone != "zero") {
					if (this.tbButton[i].innerHTML === "0") {
						this.mOne.innerHTML = "0";
						localStorage.setItem("mone", "zero");
					} else {
						this.mOne.innerHTML = this.tbButton[i].innerHTML;
					};
				}  else if (this.mTwo.innerHTML === "0" && localStorage.mtwo != "zero") {
					if (this.tbButton[i].innerHTML === "0") {
						this.mTwo.innerHTML = "0";
						localStorage.setItem("mtwo", "zero");
					} else {
						this.mTwo.innerHTML = this.tbButton[i].innerHTML;
					};
				} else  if (this.sOne.innerHTML === "0" && localStorage.sone != "zero") {
					if (this.tbButton[i].innerHTML === "0") {
						this.sOne.innerHTML = "0";
						localStorage.setItem("sone", "zero");
					} else {
						this.sOne.innerHTML = this.tbButton[i].innerHTML;
					};
				} else if (this.sTwo.innerHTML === "0" && localStorage.stwo != "zero") {
					if (this.tbButton[i].innerHTML === "0") {
						this.sTwo.innerHTML = "0";
						localStorage.setItem("stwo", "zero");
					} else {
						this.sTwo.innerHTML = this.tbButton[i].innerHTML;
					};					
				};					
			}
		}
	}	

}