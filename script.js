let count = 0;
const heart_no = document.getElementById("heart_counter");
document.querySelectorAll(".add_hearts").forEach(function(heart){
    heart.addEventListener("click", function(e){
        e.preventDefault();
        count++;
        heart_counter.innerText = count;
    });
});
