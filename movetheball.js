var ball=document.getElementById('ball');
var main=document.getElementById('main');

ball.style.top=ball.offsetTop+"px";
ball.style.left=ball.offsetLeft+"px";

ball.style.height=ball.offsetHeight+"px";
var height=parseInt(ball.style.height);


function val(value){ // i have used it to change the value to value in px..
  return value + "px"; 
}



document.body.addEventListener("keypress",(event) =>{
    
    var top=parseInt(ball.style.top);
    var left=parseInt(ball.style.left);
    
    var x=event.key;
    
    if(x==='w'||x==='W'){

        ball.style.transitionDuration="0.1s";
        ball.style.transitionTimingFunction="linear";
        ball.style.backgroundColor="pink";

        if(top-5>=main.offsetTop+2){
            ball.style.top=val(top-5);
        }
        else if(top-1>=main.offsetTop+2){
            ball.style.top=val(top-1);
        }
       

    }
    else if(x==='s'||x=='S'){
        
        
        ball.style.transitionDuration="0.1s";
        ball.style.transitionTimingFunction="linear";
        ball.style.backgroundColor="#29AB84";
        if(top-main.offsetTop-2+height+5<=main.offsetHeight-2){
            ball.style.top=val(top+5);

        }
        else if(top-main.offsetTop-2+height+1<main.offsetHeight-2){
            ball.style.top=val(top+1);

        }
       
    
        
    }
    else if(x==='a'||x==='A'){

        ball.style.transitionDuration="0.1s";
        ball.style.transitionTimingFunction="linear";
        ball.style.backgroundColor="darkslategrey";
        if(left-main.offsetLeft-5>=2){
            ball.style.left=val(left-5);
        }
        else if(left-main.offsetLeft-1>=2){
            ball.style.left=val(left-1);
        }


    }
    else if(x==='d'||x==='D'){
        ball.style.transitionDuration="0.1s";
        ball.style.transitionTimingFunction="linear";
        ball.style.backgroundColor="#29AB84";
        if(left+ball.offsetWidth-main.offsetLeft+5<=main.offsetWidth){
            ball.style.left=val(left+5);
        }
        else if(left+ball.offsetWidth-main.offsetLeft+1<main.offsetWidth){
            ball.style.left=val(left+1);
        }

    }
    
    
    



});





