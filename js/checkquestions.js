function sendMsg(){
        //题目数
        var singleSize = $("[name='single']").length;
        var multiSize = $("[name='multi']").length;
        var div = document.getElementById('multiquestion');
        var value = document.getElementById('changecredits');
        var changerank = document.getElementById('changerank');
        //答案数组
        var answerArr = new Array(singleSize+multiSize);
        var answer = ['A','B']
        //单选答案
        $("[name='single']").each(function(index){
            //放入答案
            var answer = $("input[name='place"+(index+1)+"']:checked").val();
            answerArr[index] = answer;
        })
        //多选答案
        $("[name='multi']").each(function(index){
            //拼接多选答案
            var multiAnswer = "";
            $("input[name='place"+(index+singleSize+1)+"']:checked").each(function(){
                if ("checked" == $(this).attr("checked")) {
                    //拼接答案
                    multiAnswer = multiAnswer+$(this).attr('value');
                }
            })
            //放入答案
            answerArr[index+singleSize] = multiAnswer;
        })
        //在调试模式下的console中查看输出
        console.log(answerArr);
        //发送答案到服务器

        if(answer[0] == answerArr[0] & answer[1] == answerArr[1]){
            value.innerText = parseInt(value.innerText) + 1
            div.style.display = "none";
            changerank.src = 'img/l7.png';
        }
        else{
            div.style.display = "none";
        }

    }