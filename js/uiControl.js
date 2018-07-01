//prevent window squish
var facebookPluginPort = document.getElementById("facebookPluginPort");
var postContentFacebook = document.getElementById("postContentFacebook");
window.onload = function () {
    facebookPluginPort.width = postContentFacebook.clientWidth*0.9 + "px";
}
window.onresize = function () {
    facebookPluginPort.width = postContentFacebook.clientWidth*0.9 + "px";
}
