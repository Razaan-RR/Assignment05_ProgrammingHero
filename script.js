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
document.querySelectorAll(".coin_deduct").forEach(function(button){
    button.addEventListener("click", function(e){
        e.preventDefault();
        const serviceName = button.getAttribute("data-name");
        const serviceNumber = button.getAttribute("data-number");
        if (coins>=20) {
            coins -= 20;
            document.getElementById("coin_counter").innerText = coins;
            alert(`Calling ${serviceName} at ${serviceNumber}`);
        } 
        else{
            alert("You do not have enough coins! Each call costs 20 coins!");
        }
    });
});
