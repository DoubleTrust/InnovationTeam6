// This part is for question highlight in teacher's side

function changeVisibility_with_question()
{
    document.getElementById("highlighted_questions").style.visibility="hidden";
    document.getElementById("example_question").style.background="#72D6A0";
    document.getElementById("example_rate1").style.visibility="hidden";
    
    // TBD  in case
    localStorage.setItem("answer","yes"); // if not working, change the key or clear
    localStorage.clear();
}

// Monitor highlight from students change
window.addEventListener("storage",function(e){
    var question = localStorage.getItem("question");
    if (question != null){
        document.getElementById("highlighted_questions").style.visibility = "visible";
        document.getElementById("example_rate1").innerHTML = "+5";

    }

});