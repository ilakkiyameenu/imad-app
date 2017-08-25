//counter code
var button=document.getElementById('counter');
button.onclick=function (){
    //create arequest variable
    var request= new XMLHttpRequest();
    
    //get the response and store it in a varible
    request.onreadystatechange =function(){
      if(request.readyState==XMLHttpRequest.DONE)
      //take some action
      if(request.status==200)
      {
          var counter=request.responseText;
          var span=document.getElementById('count');
          span.innerHTML=counter.toString();
          
      }
    };
    
    //make a request
    request.open('GET','http://ilakkiyameenu1997.imad.hasura-app.io/counter',true);
    request.send(null);

};