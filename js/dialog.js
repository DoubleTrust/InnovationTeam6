/**
 * Created by Administrator on 2017/3/1.
 */
function showDialog(DATA){
    //将弹出框作为一个对象定义一个对象
    //data为传入的数据
    function PopBox(data){
        //初始化数据
        this._init(data);
        //创建一个空对象，用来保存创建的弹出框对象
        this.dom = null;
    }
    PopBox.prototype = {
        //初始化数据
        _init : function(data){
            //弹出框的标题
            this.title = data.title;
            //弹出框的宽度
            this.w = data.w;
            //弹出框的高度
            this.h = data.h;
            //弹出框的位置
            this.loc = data.location;
        },
        //创建弹出框html
        creatDom : function(){
            this.dom = document.createElement('div');
            this.dom.id= 'login';
            var str = '';
             str += '<div class="title">';
             str += '<span class="left">'+this.title+'</span>';
             str += '<span class="right">x</span>';
             str += '</div>';
             str += '<div class="content"></div>';
             str += '<div class="end">';
             str += '<span class="left">确定</span>';
             str += '<span class="right">结束</span>';
             str += '</div>';
            this.dom.innerHTML = str;
           document.body.appendChild(this.dom);

        },
        //弹出框样式设置(样式中的相关的宽高可以自己根据相应的百分比来设定)
        style : function(){
            with(document.getElementsByTagName('body')[0].style){
                width = '100%';
                height = '100%';
                backgroundColor = '#ccc'
            };
            with(this.dom.style){
                height = this.h+'px';
                width = this.w+'px';
                backgroundColor = '#fff';
                border='1px solid #00FF00';
            };
            with(getEle('title').style){
                width = '100%';
                height = '30px';
                backgroundColor = '#5ad2ff';
            };
            with(getEle('content').style){
                width ='100%';
                height = '60px';
            };
            with(getEle('end').style){
                width = '100%';
                height = '30px';
                backgroundColor = '#5ad2ff';
            };
            with(getEle('title').getElementsByClassName('left')[0].style){
                display = 'inline-block';
                width = '90%';
                height = '100%';
                lineHeight = '30px';
                paddingLeft =  '5px';
            };
            with(getEle('title').getElementsByClassName('right')[0].style){
                display =  'inline-block';
                width =  '5%';
                height =  '96%';
                textAlign =  'center';
                lineHeight = '30px';
                border = '1px solid #ccc';
            };
            with(getEle('end').getElementsByClassName('left')[0].style){
                float =  'left';
                width =  '60px';
                height: '90%';
                lineHeight = '30px';
                marginLeft = '110px';
                textAlign =  'center';
                marginTop =  '1px';
                border = '1px solid #fff';
            };
            with(getEle('end').getElementsByClassName('right')[0].style){
                float =  'left';
                width =  '60px';
                height =  '90%';
                textAlign  =  'center';
                lineHeight = '30px';
                marginTop =  '1px';
                marginLeft = '20px';
                border = '1px solid #fff';
            };
            function getEle(str){
                return document.getElementsByClassName(str)[0];
            }
        },

        //确定弹出框的位置
        location : function(){
            this.dom.style.position = 'absolute';
            if(this.loc){
                if(this.loc == 'center'){
                    this.dom.style.left = (viewWidth() - this.dom.offsetWidth)/2 + 'px';
                    this.dom.style.top = (viewHeight() - this.dom.offsetHeight)/2 + 'px';
                }else if(this.loc == 'left'){
                    this.dom.style.left = 0;
                    this.dom.style.top = (viewHeight() - this.dom.offsetHeight)/2 + 'px';
                }else if(this.loc == 'right'){
                    this.dom.style.left = (viewWidth() - this.dom.offsetWidth) + 'px';
                    this.dom.style.top = (viewHeight() - this.dom.offsetHeight)/2 + 'px';
                }
            }else{
                this.dom.style.left = (viewWidth() - this.dom.offsetWidth)/2 + 'px';
                this.dom.style.top = (viewHeight() - this.dom.offsetHeight)/2 + 'px';
            }
            //获取屏幕的宽度
            function viewWidth(){
                return document.documentElement.clientWidth;
            }
            //获取屏幕高度
            function viewHeight(){
                return document.documentElement.clientHeight;
            }
        },
        //绑定事件
    }

    //初始化弹出框
    var popBox = new PopBox(DATA);
    popBox.creatDom();
    popBox.style();
    popBox.location();

}