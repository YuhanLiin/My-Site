//Creates gallery
var galleryID = $("#project-gallery");
for (i in gallery){
    galleryID.append(projectHtml(gallery[i]));
}

//Change porject-box colour when hovered over
$(".project-box").hover(function(){
    $(this).css("background-color","#e6e6e6");
},
function(){
    $(this).css("background-color","#ffffff");
});

//Sliding animation for gallery elements
var slideTime = 1000;
var fadeTime = 300;
$(".project-box").click(function(){
    var descriptionBox = $(this).children(".project-description");
    var descriptionP = descriptionBox.children('p');
    //Slide box back in and stack the description under the box
    if ($(this).data("slideout")){
        descriptionP.css("z-index", "-1");
        descriptionP.animate({"opacity":"0"}, fadeTime);
        descriptionBox.delay(fadeTime).animate({"max-height":"0",
                                            "height": "0"}, slideTime);
        $(this).data("slideout", false);
    }
    //Slide box out and stack description on top of the box
    else{
        var height = descriptionP.height();
        descriptionBox.animate({"max-height":height.toString(),
                                "height": height.toString()}, slideTime);
        descriptionP.delay(slideTime).animate({"opacity":"1"}, fadeTime);
        $(this).data("slideout", true);
        descriptionP.css("z-index", "10");
    }
});