$(document).ready(function() {
// Check if href is changed
if ($("#mycontent").attr("href") != "https://www.africatophits.com") {
 window.location.href = "https://www.africatophits.com"; // Redirect destination link
};
    
// Check if tag is hidden
if ($("#mycontent").css('display') == 'none' || $("#mycontent").css("opacity") == "0" ||$("#mycontent").css("height") == "0px" || $("#mycontent").css("visibility") == "hidden"){
 window.location.href = "https://www.africatophits.com"; // Redirect destination link
}
});
