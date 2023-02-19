export default function Kdawekda() {

    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
    var sticky = navbar.offsetTop;  

    function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      }

    return (
        <>
            <div id="navbar">
                <a href="#">Home</a>
                <a href="#">News</a>
                <a href="#">Contact</a>
            </div>
        </>
    )

}