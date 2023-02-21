window.onload = function home() {
    let name = "Excellent Nhlanhla";
    let surnmane = "Mashengete";
    let about = " I am an IT specialist with a focus on software development. I pride myself as hard-working that is not intimidatd by learning new technologies which will be beneficial when the company uses technologies that I'm familiar with apart from coding, some other activities that I love to do!"
    let experince = "I have experince in using the following tools";
    let list = ["Angular2+","NodeJS (ExpressJS)", "Django", "NestJS","Version Control", "PostgresSQL", "Mongo", "Typescript", "C++"]
    let programmes = experince + "<ul>"
        list.forEach((element) => {
            programmes += "<li>" + element + "</li>";
        });
        programmes += "</ul>";


    let imageUrl = "./Assets/working-removebg-preview.png";
    let second = "<img src='"+imageUrl+"' alt='' />";

    //Footer details
    //Address
    let surbub = "Pretoria";
    let country = "South Africa";
    let Address = "<h3>Address</h3>" + "<p> " +surbub +"<br />"+ country +" </p>";


    document.getElementById('name').innerHTML = name + " " +surnmane;
    document.getElementById('about').innerHTML = about;
    document.getElementById('experince').innerHTML = programmes;
    document.getElementById('second').innerHTML = second;
    document.getElementById('address').innerHTML = Address;
}

function homePage() {
    window.location.href = './'
}

function aboutPage() {
    window.location.href = './about.html';
    window.onload = home();

}

function contactPage() {
    window.location.href = './contact.html'
}