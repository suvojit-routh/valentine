$(document).ready(function() {
    function moveButton() {
        let newX = Math.random() * ($(window).width() - $(".move").outerWidth());
        let newY = Math.random() * ($(window).height() - $(".move").outerHeight());

        $(".move").css({
            position: "absolute",
            left: newX + "px",
            top: newY + "px"
        });
    }


    $(".move").hover(moveButton);


    $(".move").on("touchstart", function(e) {
        e.preventDefault(); 
        moveButton();
    });
});
