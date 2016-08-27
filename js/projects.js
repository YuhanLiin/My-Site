//Creates gallery
var galleryID = $("#project-gallery");
for (i in gallery){
    galleryID.append(projectHtml(gallery[i]));
}

//Sliding animation for gallery elements
var slideTime = 1000;
var fadeTime = 300;

$(".project-box").click(function(){
    var descriptionBox = $(this).children(".project-description");
    var descriptionP = descriptionBox.children('p');
    if ($(this).data("slideout")){
        descriptionP.animate({"opacity":"0"}, fadeTime);
        descriptionBox.delay(fadeTime).animate({"max-height":"0",
                                            "height": "0"}, slideTime);
        $(this).data("slideout", false);
    }
    else{
        var height = descriptionP.height();
        descriptionBox.animate({"max-height":height.toString(),
                                "height": height.toString()}, slideTime);
        descriptionP.delay(slideTime).animate({"opacity":"1"}, fadeTime);
        $(this).data("slideout", true);
    }
});