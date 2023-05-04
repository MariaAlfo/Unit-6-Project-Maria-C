let button1= document.querySelector(".button1");
let Name=document.querySelector(".Name").value;
let one =document.querySelector(".one");

let action = ["https://sportshub.cbsistatic.com/i/2021/04/09/9f6e76c4-fa28-4fc7-864c-46e7be12dae0/ranking-fast-furious-films-thumbnail-1156329.jpg", "https://freerangeamerican.us/wp-content/uploads/2021/06/john-wick-5-posters.jpeg", "https://m.media-amazon.com/images/M/MV5BMTU2OTYzODQyMF5BMl5BanBnXkFtZTgwNjU3Njk5NTM@._V1_.jpg"];

let horror = ["https://m.media-amazon.com/images/M/MV5BMjM3NzQ5NDcxOF5BMl5BanBnXkFtZTgwNzM4MTQ5NTM@._V1_.jpg", "https://mmc.tirto.id/image/2020/09/19/poster-film-final-destination.jpg", "https://m.media-amazon.com/images/M/MV5BMTI2NTM5MjQ0Nl5BMl5BanBnXkFtZTcwNDAxNjAzMQ@@._V1_FMjpg_UX1000_.jpg"];

let drama = ["https://www.craveyoutv.com/wp-content/uploads/2020/02/greys.jpg", "https://img3.hulu.com/user/v3/artwork/c966e511-edbd-4f3b-929f-70c2fdb052f2?base_image_bucket_name=image_manager&base_image=ef02dd84-4c3c-4976-8bd6-0466b87b70cf&region=US&format=jpeg&size=952x536", "https://m.media-amazon.com/images/M/MV5BNTVkMTFiZWItOTFkOC00YTc3LWFhYzQtZTg3NzAxZjJlNTAyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"];

let result = document.querySelector(".result");


let submitButton = document.querySelector(".submit");
submitButton.onclick = function() {
    let genreInput = document.querySelector(".input1").value;
    if (genreInput === "action") {
        for (let actionMovie of action) {
            let img = "<img src=" + actionMovie + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    } else if (genreInput === "horror") {
        for (let horrorMovie of horror) {
            let img = "<img src=" + horrorMovie + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    } else if (genreInput === "drama") {
        for (let dramaMovie of drama) {
            let img = "<img src=" + dramaMovie + ">";
            result.insertAdjacentHTML("beforeend", img);
        }
    }
};
let suggestButton = document.querySelector(".suggest");

suggestButton.onclick = function() {
        let photoInput = document.querySelector(".input2").value;
        action.push(photoInput);
        horror.push(photoInput);
        drama.push(photoInput);
        let img = "<img src=" + photoInput + ">";
        result.insertAdjacentHTML("beforebegin", img + "Thank you for your suggest!");
    
};

button1.onclick = function() {
    one.style.display="block";
};