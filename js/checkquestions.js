function sendMsg(){

        var singleSize = $("[name='single']").length;
        var multiSize = $("[name='multi']").length;
        var div = document.getElementById('multiquestion');
        var value = document.getElementById('changecredits');
        var changerank = document.getElementById('changerank');

        var answerArr = new Array(singleSize+multiSize);
        var answer = ['A','B']

        $("[name='single']").each(function(index){

            var answer = $("input[name='place"+(index+1)+"']:checked").val();
            answerArr[index] = answer;
        })

        $("[name='multi']").each(function(index){

            var multiAnswer = "";
            $("input[name='place"+(index+singleSize+1)+"']:checked").each(function(){
                if ("checked" == $(this).attr("checked")) {

                    multiAnswer = multiAnswer+$(this).attr('value');
                }
            })

            answerArr[index+singleSize] = multiAnswer;
        })

        console.log(answerArr);


        if(answer[0] == answerArr[0] & answer[1] == answerArr[1]){
            value.innerText = parseInt(value.innerText) + 1
            div.style.display = "none";
            changerank.src = 'img/l7.png';
        }
        else{
            div.style.display = "none";
        }

    }