
function sliderMenu() {
                this.red = document.getElementsByClassName("red")[0];
                this.blue = document.getElementsByClassName("blue")[0];              
                this.redValue = window.getComputedStyle(this.red, null).getPropertyValue("left");
                this.blueValue = window.getComputedStyle(this.blue, null).getPropertyValue("left");     
                this.redBtn = document.getElementById("red");
                this.blueBtn = document.getElementById("blue");
               
            
                 this.showRed = function() {                  
                        if (this.redValue > "1px") {                               
                                if (this.blueValue === "0px") {
                                        // event for blue
                                        this.blue.style.animation = "zero-hundred .5s";
                                        this.blue.style.webkitAnimation = "zero-hundred .5s";
                                        this.blue.style.left = "-100%";

                                        this.red.style.animation = "hundredzero .5s";
                                        this.red.style.webkitAnimation = "hundredzero .5s";
                                        this.red.style.left = "0px";
                                }
                        }

                        if (this.redValue < "1px") {                                
                                if (this.blueValue === "0px") {
                                        // event for blue
                                        this.blue.style.animation = "zerohundred .5s";
                                        this.blue.style.webkitAnimation = "zerohundred .5s";
                                        this.blue.style.left = "100%";

                                        this.red.style.animation = "hundred-zero .5s";
                                        this.red.style.webkitAnimation = "hundred-zero .5s";
                                        this.red.style.left = "0px";
                                }
                        }

                         this.redBtn.style.backgroundColor = "rgba(0, 0, 0, .4)";
                        this.blueBtn.style.backgroundColor = "transparent";                       
                }

                this.showBlue = function() {                       
                        if (this.blueValue > "1px") {
                                if (this.redValue === "0px") {
                                        // event for red
                                        this.red.style.animation = "zero-hundred .5s";
                                        this.red.style.webkitAnimation = "zero-hundred .5s";
                                        this.red.style.left = "-100%";

                                        this.blue.style.animation = "hundredzero .5s";
                                        this.blue.style.webkitAnimation = "hundredzero .5s";
                                        this.blue.style.left = "0px";
                                }
                        }

                        if (this.blueValue < "1") {                                
                                if (this.redValue === "0px") {
                                        // event for red
                                        this.red.style.animation = "zerohundred .5s";
                                        this.red.style.webkitAnimation = "zerohundred .5s";
                                        this.red.style.left = "100%";

                                        this.blue.style.animation = "hundred-zero .5s";
                                        this.blue.style.webkitAnimation = "hundred-zero .5s";
                                        this.blue.style.left = "0px";
                                }
                        }

                         this.blueBtn.style.backgroundColor = "rgba(0, 0, 0, .4)";
                        this.redBtn.style.backgroundColor = "transparent";                       
                }

            }

           