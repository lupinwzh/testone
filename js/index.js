onload=function(){
	var width;
	var height;
	if(navigator.userAgent.indexOf("MSIE")!=-1){
		width=document.body.clientWidth;
		height=document.body.clientHeight;
	}else{
		width=innerWidth;
		height=innerHeight;
	}
	window.onresize=function(){
		width=innerWidth;
		height=innerHeight;
		for(var i=0;i<li.length;i++){
			li[i].style.transition="auto";
        	li[i].style.height=height/2+"px";
        	li[i].style.width=width/2+"px";
    	}
	}
	var main=document.getElementById("main");
    var li=document.getElementsByTagName("li");
    for(var i=0;i<li.length;i++){
        li[i].style.height=height/2+"px";
        mouseenter(i);
		mouseout();
    }
    function mouseenter(i){
        li[i].onmouseenter=function(){
        	for(var j=0;j<li.length;j++){
        		li[j].style.transition="all 1s"
        	}
       		this.style.height=height*3/5+"px";
        	this.style.width=width*3/5+"px";
        	switch(i){
        		case 0:
        			li[1].style.height=height*3/5+"px";
        			li[1].style.width=width*2/5+"px";
        			li[2].style.width=width*3/5+"px";
        			li[3].style.width=width*2/5+"px";
        			break;
        		case 1:
        			li[0].style.height=height*3/5+"px";
        			li[0].style.width=width*2/5+"px";
        			li[3].style.width=width*3/5+"px";
        			li[2].style.width=width*2/5+"px";
        			break;
        		case 2:
        			li[3].style.height=height*3/5+"px";
        			li[0].style.height=height*2/5+"px";
        			li[1].style.height=height*2/5+"px";
        			li[3].style.width=width*2/5+"px";
        			li[0].style.width=width*3/5+"px";
        			li[1].style.width=width*2/5+"px";
        			break;
        		case 3:
        			li[2].style.height=height*3/5+"px";
        			li[0].style.height=height*2/5+"px";
        			li[1].style.height=height*2/5+"px";
        			li[0].style.width=width*2/5+"px";
        			li[1].style.width=width*3/5+"px";
        			li[2].style.width=width*2/5+"px";
        			break;
        		default: break;     		
        	}
        }
    }
    function mouseout (){
    	li[i].onmouseout=function(){
			for(var j=0;j<li.length;j++){
        		li[j].style.height=height/2+"px";
        		li[j].style.width=width/2+"px";
        	}	
		}
    }
};
