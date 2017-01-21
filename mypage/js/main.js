$(document).ready(function(){
 
  
    
    // On load add plus btn
    var $showBtn = $(".show-project");
    var $hideBtn = $(".hide-project");
    var $projectHidden = $('.project-hidden');
    
    $projectHidden.hide();
    
    // var $plusBtn = "<i class='fa fa-plus-circle'></i>";
    // var $crossBtn = "<i class='fa fa-times-circle'></i>";
    // $showBtn.append($plusBtn);
    // $hideBtn.append($crossBtn);
    
   $showBtn.on('click', function(){
       $projectHidden.fadeIn().delay(500).show();
       $showBtn.hide();
       
   });
   
   $hideBtn.on('click', function(){
       $projectHidden.fadeOut(1000).delay(500).hide();
       $showBtn.show();
   })
   
   
    
    
    
    
     
     
     
    
});
