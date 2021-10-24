function showDiv() {
                var div1=document.getElementById("div1");
                var div2=document.getElementById("div2");
                var btn1=document.getElementById("parti");
                var btn2=document.getElementById("chatbtn");

                if (div1.style.display==='block')
                    div1.style.display='none';
                else div1.style.display='block';
                if (div2.style.display==='block')
                    div2.style.display='none';
                else div2.style.display='block';

                if (div1.style.display==='block')
                    btn1.disabled = true;
                else btn1.disabled = false;
                if (div2.style.display==='block')
                    btn2.disabled = true;
                else btn2.disabled = false;

                if (div1.style.display==='block')
                    btn1.style.color = 'blue';
                else btn1.style.color = 'black';
                if (div2.style.display==='block')
                    btn2.style.color = 'blue';
                else btn2.style.color = 'black';

            }