



// An Arrow Function to Open Sidebar
openSidebar = () => {
    var sb = document.getElementById('sidebar')
    sb.style.opacity = "1"
    sb.style.zIndex = 1000;
    var tb = document.querySelector(".threebars")
    tb.style.display = "none"
}
// An Arrow Function to Close Sidebar
closeSidebar = () => {
    var sb = document.getElementById('sidebar')
    sb.style.opacity = "0";
    sb.style.zIndex = 1;
    var tb = document.querySelector(".threebars")
    tb.style.display = "flex"
}
// A Smooth Mouse and Cursor Background
// mouseMove = (event) => {
//     var x = document.getElementsByClassName("mouseParent")[0];
//     x.style.top = event.clientY+"px";
//     x.style.left = event.clientX+"px";
// }

// Browse more Courses
// window.matchMedia("(max-width: 700px)").matches

if (matchMedia("(max-width: 2500px)").matches){
    browseMore = () =>{
        var browseText = document.getElementById('browseText').innerHTML;
        var fourth = document.getElementById('fourth');
        var courses = document.getElementById('courses')
        var a = document.getElementById('cc1');
        var b = document.getElementById('cc2');
        var c = document.getElementById('cc3');
        var d = document.getElementById('cc4');
        if (browseText === "Browse more Courses..."){
            document.getElementById('browseText').innerHTML = "Minimise all Courses!"
            fourth.style.height = '160svh';
            courses.style.height = '120svh';
            a.style.opacity = '1'
            a.style.transition = 'all 1s ease'
            b.style.opacity = '1'
            b.style.transition = 'all 1s ease'
            c.style.opacity = '1'
            c.style.transition = 'all 1s ease'
            d.style.opacity = '1'
            d.style.transition = 'all 1s ease'
        }
        else{
            document.getElementById('browseText').innerHTML = "Browse more Courses.."
            fourth.style.height = '100svh';
            courses.style.height = '52svh';
            a.style.opacity = '0';
            a.style.transition = 'all 1s ease';
            b.style.opacity = '0';
            b.style.transition = 'all 1s ease';
            c.style.opacity = '0';
            c.style.transition = 'all 1s ease';
            d.style.opacity = '0';
            d.style.transition = 'all 1s ease';
        }
    }
}


if (matchMedia("(max-width: 1377px)").matches){
    var fourth = document.getElementById("fourth");
    var courses = document.getElementById('courses')
    fourth.style.height = '160svh';
    courses.style.height = '160svh';
    browseMore = () =>{
        var browseText = document.getElementById('browseText').innerHTML;
        var fourth = document.getElementById('fourth');
        var courses = document.getElementById('courses')
        var a = document.getElementById('cc1');
        var b = document.getElementById('cc2');
        var c = document.getElementById('cc3');
        var d = document.getElementById('cc4');
        if (browseText === "Browse more Courses..."){
            document.getElementById('browseText').innerHTML = "Minimise all Courses!"
            fourth.style.height = '220svh';
            courses.style.height = '200svh';
            a.style.opacity = '1'
            a.style.transition = 'all 1s ease'
            b.style.opacity = '1'
            b.style.transition = 'all 1s ease'
            c.style.opacity = '1'
            c.style.transition = 'all 1s ease'
            d.style.opacity = '1'
            d.style.transition = 'all 1s ease'
        }
        else{
            document.getElementById('browseText').innerHTML = "Browse more Courses.."
            fourth.style.height = '160svh';
            courses.style.height = '150svh';
            a.style.opacity = '0';
            a.style.transition = 'all 1s ease';
            b.style.opacity = '0';
            b.style.transition = 'all 1s ease';
            c.style.opacity = '0';
            c.style.transition = 'all 1s ease';
            d.style.opacity = '0';
            d.style.transition = 'all 1s ease';
        }
    }
}

if (matchMedia("(max-width: 1025px)").matches){
    var fourth = document.getElementById("fourth");
    var courses = document.getElementById('courses')
    fourth.style.height = '170svh';
    courses.style.height = '170svh';
    courses.style.gap = '40px'
    browseMore = () =>{
        var browseText = document.getElementById('browseText').innerHTML;
        var fourth = document.getElementById('fourth');
        var courses = document.getElementById('courses')
        var a = document.getElementById('cc1');
        var b = document.getElementById('cc2');
        var c = document.getElementById('cc3');
        var d = document.getElementById('cc4');
        if (browseText === "Browse more Courses..."){
            document.getElementById('browseText').innerHTML = "Minimise all Courses!"
            fourth.style.height = '300svh';
            courses.style.height = '300svh';
            a.style.opacity = '1'
            a.style.transition = 'all 1s ease'
            b.style.opacity = '1'
            b.style.transition = 'all 1s ease'
            c.style.opacity = '1'
            c.style.transition = 'all 1s ease'
            d.style.opacity = '1'
            d.style.transition = 'all 1s ease'
        }
        else{
            document.getElementById('browseText').innerHTML = "Browse more Courses.."
            fourth.style.height = '170svh';
            courses.style.height = '170svh';
            a.style.opacity = '0';
            a.style.transition = 'all 1s ease';
            b.style.opacity = '0';
            b.style.transition = 'all 1s ease';
            c.style.opacity = '0';
            c.style.transition = 'all 1s ease';
            d.style.opacity = '0';
            d.style.transition = 'all 1s ease';
        }
    }
}

if (matchMedia("(max-width: 471px)").matches){
    var fourth = document.getElementById("fourth");
    var courses = document.getElementById('courses')
    fourth.style.height = '230svh';
    courses.style.height = '230svh';
    courses.style.gap = '40px'
    browseMore = () =>{
        var browseText = document.getElementById('browseText').innerHTML;
        var fourth = document.getElementById('fourth');
        var courses = document.getElementById('courses')
        var a = document.getElementById('cc1');
        var b = document.getElementById('cc2');
        var c = document.getElementById('cc3');
        var d = document.getElementById('cc4');
        if (browseText === "Browse more Courses..."){
            document.getElementById('browseText').innerHTML = "Minimise all Courses!"
            fourth.style.height = '420svh';
            courses.style.height = '420svh';
            a.style.opacity = '1'
            a.style.transition = 'all 1s ease'
            b.style.opacity = '1'
            b.style.transition = 'all 1s ease'
            c.style.opacity = '1'
            c.style.transition = 'all 1s ease'
            d.style.opacity = '1'
            d.style.transition = 'all 1s ease'
        }
        else{
            document.getElementById('browseText').innerHTML = "Browse more Courses.."
            fourth.style.height = '230svh';
            courses.style.height = '230svh';
            a.style.opacity = '0';
            a.style.transition = 'all 1s ease';
            b.style.opacity = '0';
            b.style.transition = 'all 1s ease';
            c.style.opacity = '0';
            c.style.transition = 'all 1s ease';
            d.style.opacity = '0';
            d.style.transition = 'all 1s ease';
        }
    }
}


