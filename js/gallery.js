var gallery =
[
{
    name:'Turf Wars Online', image: 'images/tfonline.png', link:'https://fast-earth-97553.herokuapp.com/',
    description: 'The Turf Wars game ported to NodeJS with multiplayer support. Includes a simple 2-player lobby system'
                    + ' and a browser client that renders game graphics using with FabricJS. The networking was implemented'
                    + ' with Socket.io and Redis.'
},

{
    name:'Regex engine + LL/LR', image: 'images/regex.png', github: 'https://github.com/YuhanLiin/Parsing',
    description: 'C++ implementations of a simple non-backtracking NFA Regex recognizer engine as well as the LR and LL parsing algorithms.'
                    + ' The parsers is able to match input as well as pause when a reduction takes place, allowing custom'
                    + ' semantic actions to happen.'
},

{name:"Mini-Chat", image:"images/minichat.png", link:"http://mini-chat-140720.appspot.com",
description:"A simple chat application developed with Python, featuring server-pushed updates via Google App Engine's "
            + "Channel API in addition to clientside AJAX via jQuery. Users can pick their names and join the chat without "
            + "any signup and receive real time updates whenever the server receives a message. "},

{name:"Chemistry Solver", image:"images/chem.png", github:"https://github.com/YuhanLiin/Chemistry-Software-Python",
    description:"A set of Python programs built to answer common Gr. 11 Chemistry problems. "
            + "The program computes solutions using data models of chemical compounds and "
            + "the periodic table, which are both stored as Python dictionaries. "
            + "Target problem types include mole/mass conversions, "
            + "mole and mass ratios between compounds, and many others."},

{name:"Turf Wars", image:"images/turfwars.png", github:"https://github.com/YuhanLiin/Turf-Wars",
description:"This is the game I conceptualized and created for the final project of my Gr. 12 Computer Science class. "
            + "It is a 2-player game set in an overhead view. Each player takes control of his/her circular "
            + "avatar, which can move and attack the other player in real time in order to claim victory. "
            + "The project was written in Java using the AWT Applets interface."},

{name:"Polynomial Processor", image:"images/polynomial.jpeg", github:"https://github.com/YuhanLiin/Equation-Solver-Python",
description:"This is a program that solves the rational roots of polynomial expressions. The input is parsed into a "
            + "computational model of algebraic terms and fractions, which is then solved for all rational roots. "
            + "The parsing is handled by my Lexer and Parser framework, which processes the input using a custom grammar."},

{name:"Lexer and Parser", image:"images/parser.png", github:"https://github.com/YuhanLiin/Lexer-and-Parser-Python",
description:"Implementing Earley's parsing algorithm, this framework splits input text"
            + "into tokens and turns the tokens into a syntax tree based on the specifications of any "
            + "context-free-grammar. This allows subsequent programs to generate complex custom parsers that can "
            + "interpret any input."},

{name:"Personal Site", image:"images/site.png", link:"/front.html", github:"https://github.com/YuhanLiin/My-Site",
description:"The site you are browsing right now was entirely built and developed by myself, serving as my first "
            + "complete frontend project. While the visual layout and styling were built upon the Bootstrap framework, "
            + "the DOM manipulation and animations were mainly powered by jQuery. The site is hosted on Github, where "
            + "the source code is also available."}];

//Function which creates the markup for a project box with project json as input
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
