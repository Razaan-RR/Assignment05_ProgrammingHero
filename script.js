let count = 0;
const heart_no = document.getElementById("heart_counter");
document.querySelectorAll(".add_hearts").forEach(function(heart){
    heart.addEventListener("click", function(e){
        e.preventDefault();
        count++;
        heart_counter.innerText = count;
    });
});


let coins = 100;
const coin_counter = document.getElementById("coin_counter");
document.querySelectorAll(".coin_deduct").forEach(function(button){
    button.addEventListener("click", function(e){
        e.preventDefault();
        if (coins >= 20) {
            coins -= 20;
            coin_counter.innerText = coins;
        } 
        else{
            alert("You do not have enough coins! Each call costs 20 coins!");
        }
    });
});
