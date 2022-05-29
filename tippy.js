
    document.addEventListener('mouseover', () => { 

    if(window.getSelection().toString().length){
       var exactText = window.getSelection().getRangeAt(0);
       var selectedText = exactText.extractContents();
       var span= document.createElement("span");
       span.appendChild(selectedText);
       exactText.insertNode(span);
       var span2 = span.textContent;}

       var apiUrl = `https://api.mymemory.translated.net/get?q=${span2}&langpair=en|ar`;
       
      fetch(apiUrl).then(res => res.json()).then(data => {
        
         var strong = data.responseData.translatedText;
          
          tippy(span,{
              content:function(){
                  return strong;
              },
           placement:'top',
           theme:'lamia',
            });
       });   
});

 
    
    
    
    
    
   
      