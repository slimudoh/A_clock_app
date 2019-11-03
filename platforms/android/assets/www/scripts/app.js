
        "use strict";
 	document.getElementById("red").addEventListener("click", function() {
                    var x =  new sliderMenu();
                    x.showRed();
                    //x.showBtn(event);
            });

            document.getElementById("blue").addEventListener("click", function() {
                    var x =  new sliderMenu();
                    x.showBlue();
            });          


            function init() {
                var x =  new appTime();
                x.startTime();
            } ;

            document.getElementById("start").addEventListener("click", function() {
                    var x =  new stopWatch();
                    x.startStopWatch();               
            });

             document.getElementById("stop").addEventListener("click", function() {
                    var x =  new stopWatch();
                    x.stop();   
            });

              document.getElementById("reset").addEventListener("click", function() {
                    var x =  new stopWatch();
                    x.resetWatch();               
            });

             