//counter code
var button=document.getElementById('counter');
button.onclick=function (){
    //create arequest variable
    var request= new XMLHttpRequest();
    
    //get the response and store it in a varible
    request.onreadystatechange =function(){
      if(request.readyState===XMLHttpRequest.DONE)
      //take some action
      if(request.status===200)
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

var submit=document.getElementById('submit_btn');
submit.onclick=function(){
      //make arequest to the server and send the name
      var request= new XMLHttpRequest();
    
    //get the response and store it in a varible
    request.onreadystatechange =function(){
      if(request.readyState===XMLHttpRequest.DONE)
      //take some action
      if(request.status===200)
    {
      //capture a list of names and render it
      var names=request.responseText;
      var list='';
      for( var i=0;i<names.length;i++){
          list+='<li>'+names[i]+'</li>';
      }
      var ul=document.getElementById('unordered');
      ul.innerHTML=list;

      }
    };
var nameInput=document.getElementById('name');
var name=nameInput.value;
    //make a request
    
    request.open('GET','http://ilakkiyameenu1997.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
       };
