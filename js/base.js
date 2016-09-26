//Important html generation functions plus the rendering of the navbar and the contact list, which are present on all pages

function renderHtml(html, object){
    for (key in object){
        html = html.replace('%'+key+'%', object[key]);
    }
    return html;
}

function buttonHtml(button){
    var active = "";
    if (button.path === location.pathname.split('/').slice(-1)[0]){
        active = ' class="active"';
    }
    var html = '<li' + active + '><a href="%path%"> %name% </a></li>';
    return renderHtml(html, button);
}

function contactHtml(contact){
    var html = '<div class="col-md-6 contact-info"><h5>%type%: ';
    if (contact.link){
        html += '<a href="%link%">%content%</a>';
    }
    else{
        html += contact.content;
    }
    html += '</div><h5>';
    return renderHtml(html, contact);
}

/////////////////////////////////////////////////////////////////////////////////////////////
//DOM modification

var navbuttons = [{name:"Home", path:"index.html"},
                    {name:"Projects", path:"projects.html"},
                    {name: "Résumé", path:"resume.html"}]

var contactInfo = [{type:"Facebook", link:"https://www.facebook.com/yuhan.lin.75", content:"facebook.com/yuhan.lin.75"},
                    {type:"Github", link:"https://github.com/YuhanLiin", content:"github.com/YuhanLiin"},
                    {type:"Outlook", content:"linyuhan0315@hotmail.com"},
                    {type:"Cell Number", content:"416-271-1095"}];

var navID = $("#nav");
for (i in navbuttons){
    navID.append(buttonHtml(navbuttons[i]));
}

var contactID = $("#contact");
for (i in contactInfo){
    contactID.append(contactHtml(contactInfo[i]));
}

////////////////////////////////////////////////////////////////////////////////////////////

