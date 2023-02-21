window.onload = function home() {
    //Index Details
    let background = "./Assets/20221125_091810.jpg";
    let backgroundUrl = "<img src='"+background+"' alt='' />";

    let image = "./Assets/99171357-removebg-preview.png";
    let userImageurl = "<img src='"+image+"' alt='' />"
    let name = "Excellent Nhlanhla";
    let surnmane = "Mashengete";

    let intro = "Hi Everyone, I am Excellent Nhlanhla Mashengte a full-stack developer from South Africa";
    let about = " I am an IT specialist with a focus on software development. I pride myself as hard-working that is not intimidatd by learning new technologies which will be beneficial when the company uses technologies that I'm familiar with apart from coding, some other activities that I love to do!"

    let hobbieList =["Playing Games", "Reading"]
    let hobbie = "<ul>"
        hobbieList.forEach((element) => {
            hobbie += "<li>" + element + "</li>";
        });
        hobbie += "</ul>";

    //Footer details
    //Address
    let surbub = "Pretoria";
    let country = "South Africa";
    let Address = "<h3>Address</h3>" + "<p> " +surbub +"<br />"+ country +" </p>";
    
    document.getElementById('bg_image').innerHTML = backgroundUrl;
    document.getElementById('image').innerHTML = userImageurl;
    document.getElementById('name').innerHTML = name + " " +surnmane;
    document.getElementById('intro').innerHTML = intro;
    document.getElementById('intro_about').innerHTML = about;
    document.getElementById('hobbie').innerHTML = hobbie;
    document.getElementById('address').innerHTML = Address;
}


function homePage() {
    window.location.href = './'
}

function aboutPage() {
    window.location.href = './about.html';
}

function contactPage() {
    window.location.href = './contact.html'
}