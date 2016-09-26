var descriptionID = $("#my-description");
for (i in description){
    descriptionID.append('<p>'+description[i]+'</p>');
}

var showcaseID = $("#showcase");
for (i=0; i<3; i++){
    showcaseID.append(projectHtml(gallery[i]));
}

///////////////////////////////////////////////////////////////////////
//Animations
animatedTitle = [];
animatedTitle.push($("#animated-title > span:first-of-type"))
animatedTitle.push($("#animated-title > span:nth-of-type(2)"))
animatedTitle.push($("#animated-title > span:nth-of-type(3)"))

$(document).ready(function(){
    for (i in animatedTitle){
        animatedTitle[i].delay(1500*i).animate({opacity:'1'}, 1500);
    }
});
