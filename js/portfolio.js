$(function(){


 $(".box").mflip();

 $('.lightboxTrigger').on('click', function(e){

  e.preventDefault();
  var img_href= $(this).attr("image-link");

  // if #lightbox exists
    if ($('#lightbox').length > 0) { 
          
          //insert img tag with clicked link's href as src value
          $('#content').html('<img src="' + img_href + '" />');
            
          //show lightbox window - you can use a transition here if you want, i.e. .show('fast')
          $('#lightbox').show();
      } //if

      else { //#lightbox does not exist 
        
        //create HTML markup for lightbox window
        var lightbox = 
        '<div id="lightbox">' +
          '<p>Close X</p>' +
          '<div id="content">' + //insert clicked link's href into img src
            '<img src="' + img_href +'" />' +
          '</div>' +  
        '</div>';
          
        //insert lightbox HTML into page
        $('body').append(lightbox);
      } //else

      $('#lightbox').on('click', function() {
        $('#lightbox').hide();
      }); //onclick

 }) // LighboxTrigger


});

