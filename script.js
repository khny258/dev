
$(".button").mousedown(function () {
    $(this).html("Recommended").velocity({
        backgroundColorRed: "0",
        translateY: "-1.5rem",
        rotateZ: "-10deg"
    }, 100, "easeOut").velocity({
        rotateZ: "8deg",
    }, 150).velocity({
        translateY: "0",
        rotateZ: "0"
    }, 600, "easeOutBounce");

    $("+ .shadow", this).velocity({
        scale: "1.3",
        opacity: "1"
    }, 150).velocity("reverse", 600, "easeOutBounce");

});
