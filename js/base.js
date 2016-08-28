//Important html generation functions

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

function projectHtml(project){
    var html = '<div class="col-md-4 project-shell"><div class="round-box project-box">'
                + '<h3 class="text-dark">%name%</h3>'
                + '<div class="img-box project-img center-block">'
                + '<img class="img-responsive" src="%image%" alt="Project Image"></div>'
                + '<div class="project-description text-black center-block"> <p>%description%</p> </div>';
    if (project.link){
        html += '<a class="btn btn-default" href="%link%" role="button">To the App!</a>';
    }
    if (project.github){
        html += '<a class="btn btn-default" href="%github%" role="button">To Github!</a>';
    }
    html += '</div></div>';
    return renderHtml(html, project);
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

