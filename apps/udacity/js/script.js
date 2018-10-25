// $(document).ready(function(){
   
//   if(screen.width() < 500){
//       $(".video").parents().remove();
//   }
   
    
// });

$(window).resize(function(){
        if(window.innerWidth < 500) {
            $("div#remClass").toggleClass('.col-xs-6');

        }
        // if(window.innerWidth > 500) {
        //     $("#remClass").add('.col-xs-6');

        // }
});

