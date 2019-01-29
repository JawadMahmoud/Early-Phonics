function Resizing() // class
{
    this.onResize = function () {
        var width = this.aspectDiv.clientWidth;
        this.oneEm = width / 50;
        this.aspectDiv.style.fontSize = (this.oneEm) + "px";
    };
    // constructor for Doorway
    this.aspectDiv = document.getElementById("dwAspectDiv");
    if (this.aspectDiv) {
        window.addEventListener("resize", this.onResize.bind(this));
        this.onResize("no-event");
    } else {
    }
}
