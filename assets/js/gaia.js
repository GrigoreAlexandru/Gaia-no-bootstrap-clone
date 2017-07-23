$(window).scroll(function(){
	var scrollAmount=$(this).scrollTop();
	
	//$('.header').css({
		//'transform':'translate(0px, '+scrollAmount /2 +'%)'
	//});

    if (scrollAmount>=300){
        $('.container').css({
            'background-color':'#fff' ,
            
            'height':'3.5rem',
            'border-bottom-color': '#ddd',
             'border-bottom-width':'1px',
             'border-bottom-style':'solid'
        });
        
        
        $('#nav-left,.nav-right').css({
            'top':'.7rem',
            'color':'#8A8A8A'
    
            
        })
        $('#btn-dl').css({
            'color':'.#fff'
    
            
        });
    

    }
    
    else{
        $('.container').css({
            'background-color':'' ,
            
            'height':'',
            'border-bottom-color': '',
             'border-bottom-width':'',
             'border-bottom-style':''
        });
        $('#nav-left,.nav-right').css({
            'top':'',
            'color':''
    
            
        })

    
    }
    
   
});