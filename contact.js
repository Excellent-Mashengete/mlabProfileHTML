window.onload = function home() {
    
    //Footer details
    //Address
    let surbub = "Pretoria";
    let country = "South Africa";
    let Address = "<h3>Address</h3>" + "<p> " +surbub +"<br />"+ country +" </p>";

    //Contact Information
    let tel = "+27-79-553-5147";
    let Contact = "<h3>Contacts</h3>" + "<p><a href='tel:+27-79-553-5147'>"+ tel+"</a></p>";

    document.getElementById('address').innerHTML = Address;
    document.getElementById('contacts').innerHTML = Contact;
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