
var btn = document.getElementById('rank');
var div = document.getElementById('background');
var close = document.getElementById('close-button');
var question =document.getElementById('multiquestion');
var btnq = document.getElementById('answerquestions');
// var btnsubmit = document.getElementById('submitq');

btnq.onclick = function showq(){
    question.style.display = "block";
}

btn.onclick = function show() {
	div.style.display = "block";
}

close.onclick = function close() {
	div.style.display = "none";
}

window.onclick = function close(e) {
    if (e.target == div) {
        div.style.display = "none";
    }
    if (e.target == question) {
        question.style.display = "none";
    }
}