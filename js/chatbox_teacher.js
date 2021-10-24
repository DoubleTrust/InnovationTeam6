// Chat-box code for teachers

window.onload = function(){
    var Words = document.getElementById("words");
    var Who = "You (Green) ";
    var TalkWords = document.getElementById("talkwords");
    var TalkSub = document.getElementById("talksub");
    
    
    TalkSub.onclick = function(){
        //定义空字符串
        var str = "";
        if(TalkWords.value == ""){
             // 消息为空时弹窗
            alert("消息不能为空");
            return;
        }
        str = '<div class="cleft cmsg"><span class="name">' + Who + '</span><span class="content">'+ TalkWords.value + '</span><span id="example_rate" class="content">+1</span></div>'

        Words.innerHTML = Words.innerHTML + str;
        document.getElementById("talkwords").value="";

    }
}


// Monitor chatbox change
window.addEventListener("storage",function(e){
    // save to local storage
    var value = localStorage.getItem("Alan"); // if not working, change the key or clear
    
    if (value != null){
        str = '<div class="cleft cmsg"><span class="name">' + 'Alan' + '</span><span class="content">'+ value + '</span><span id="example_rate" class="content">+1</span></div>'
        var Words = document.getElementById("words");
        Words.innerHTML = Words.innerHTML + str;
        
        if (value.indexOf("?") != -1){
            // Add to question list
            question_str = '<tr><td>Alan</td><td>'+ value + '</td><td>1</td></tr>'
            var question_list = document.getElementById("question_list");
            question_list.innerHTML = question_list.innerHTML + question_str;
        }
    } 

    var p3 = localStorage.getItem("p3"); // if not working, change the key or clear
    if (p3 != null){
        document.getElementById("example_rate2").innerHTML = p3;
    } 

    localStorage.clear();
});