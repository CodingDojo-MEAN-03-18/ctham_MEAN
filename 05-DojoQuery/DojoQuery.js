function $Dojo(element) {
    var id = document.getElementById(element);

    if (id) {
        this.click = function (callback) {
            this.id.addEventListener('click', callback);
        }
    
        this.hover = function (callback1, callback2) {
            this.id.addEventListener('mouseover', callback1);
            this.id.addEventListener('mouseout', callback2);
        }
        return this;
    }
};


$Dojo("buttonClick").click(function() { console.log("The button was clicked!") });
$Dojo("buttonHover").hover(function() { console.log("The button was hovered on!") });