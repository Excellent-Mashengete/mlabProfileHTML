window.onload = function() {
    //Index Details
    let background = "./Assets/20221125_091810.jpg";
    let backgroundUrl = "<img src='"+background+"' alt='' />";
    
    let intro = "Hi Everyone, I am Excellent Nhlanhla Mashengte a full-stack developer from South Africa";
    
    let image = "./Assets/99171357-removebg-preview.png";
    let userImageurl = "<img src='"+image+"' alt='' />";

    let hobbieList =["Playing Games", "Reading"]
    let hobbie = "<ul>"
        hobbieList.forEach((element) => {
            hobbie += "<li>" + element + "</li>";
        });
        hobbie += "</ul>";

    document.getElementById('bg_image').innerHTML = backgroundUrl;
    document.getElementById('image').innerHTML = userImageurl;
    document.getElementById('intro').innerHTML = intro;
    document.getElementById('hobbie').innerHTML = hobbie;
}