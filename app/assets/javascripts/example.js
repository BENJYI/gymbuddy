console.log('example.js loaded');

const daySelector = function(node) {

    $(".fa-caret-down").hide();

    node.childNodes[3].classList.add("animated", "bounceIn");
    node.childNodes[3].style.display = "";
};

//refactor this to one function// exercise view & routine view
document.getElementById("exercise_button").addEventListener("click", function() {
    document.getElementById("routine_button").className = "";
    document.getElementById("exercise_button").className = "button-primary";
    document.getElementById("routine_content").className = "animated slideOutRight";

    setTimeout(function() {
        document.getElementById("exercise_content").style.display = "block";
        document.getElementById("exercise_content").className = "animated slideInLeft";
        document.getElementById("routine_content").style.display = "none";
    }, 500);
});

document.getElementById("routine_button").addEventListener("click", function() {
    document.getElementById("exercise_button").className = "";
    document.getElementById("routine_button").className = "button-primary";
    document.getElementById("exercise_content").className = "animated slideOutLeft";

    setTimeout(function() {
        document.getElementById("exercise_content").style.display = "none";
        document.getElementById("routine_content").style.display = "block";
        document.getElementById("routine_content").className = "animated slideInRight";
    }, 500);

});
/////////////////////////////////

//week view button toggle logic
document.getElementById("week_button").addEventListener("click", function() {
    let weekList = document.getElementById("weekList");
    weekList.style.display = "block";
    weekList.className = "animated slideInLeft";

    document.getElementById("week_button").className = "button-primary";
    document.getElementById("month_button").className = "";
});

//month view button toggle logic
document.getElementById("month_button").addEventListener("click", function() {
    let weekList = document.getElementById("weekList");
    weekList.className = "animated slideOutLeft";
    setTimeout(function() { weekList.style.display = "none"; }, 600);

    document.getElementById("week_button").className = "";
    document.getElementById("month_button").className = "button-primary";
});
