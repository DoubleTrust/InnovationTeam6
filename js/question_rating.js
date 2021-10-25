// This part is for question rating function (student)

document.getElementById('example_rate1').addEventListener('click', highlight, false);
function highlight() {
    document.getElementById("example_rate1").innerHTML = "+5";
    localStorage.setItem("question","What does the VPC mean?"); // if not working, change the key or clear
    //localStorage.clear();
};

$("#example_rate2").click(function(){
    document.getElementById("example_rate2").innerHTML = "+3";
    localStorage.setItem("p3","+3"); // if not working, change the key or clear
    //localStorage.clear();
});

// Pass information to teacher side and construct chatbox
function pass_info(){
    var Words = document.getElementById("words");
    var Who = "You (Alan) ";
    var TalkWords = document.getElementById("talkwords");
    var TalkSub = document.getElementById("talksub");

    var str = "";
    if(TalkWords.value == ""){
        alert("Sorry, cannot be empty.");
        return;
    }
    str = '<div class="cleft cmsg"><span class="name">' + Who + '</span><span class="content">'
         + TalkWords.value + '</span><span class="content">+1</span></div>'
    
    Words.innerHTML = Words.innerHTML + str;

    // save to local storage
    localStorage.setItem("Alan",TalkWords.value); // if not working, change the key or clear
    //localStorage.clear();
    document.getElementById("talkwords").value="";
}

// Monitor whether teacher answered highlighted questions
window.addEventListener("storage",function(e){
    var answer =localStorage.getItem("answer");
    if (answer != null){

        document.getElementById("example_question").style.background="#72D6A0";
        document.getElementById("example_rate1").style.visibility="hidden";
    }

});


function openwin() {
    window.open ("rankpage.html", "height=100, width=400, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no")
}