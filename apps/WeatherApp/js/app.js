
$(document).ready(function(){
  

  
  if("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(function(position){
      var longlati = position.coords.latitude+','+position.coords.longitude;
      loadWeather(longlati);
      
    });
  }else{
    $(".error").html("permision denied!");
  }
  
  
  function loadWeather(position){
    
    $.simpleWeather({
    
    location: position,
    woeid: '',
    unit: 'c',
    success: function(weather){
       temp = '<i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;';
      city = weather.city;
      current = '<span>'+weather.currently+'</span>';
      tomor = '<h2>'+weather.text+'</h2>';
      title = weather.title;
      highTemp= weather.high+'&deg;';
      lowTemp =  weather.low+'&deg;';
      humidity = weather.humidity;
      windspeed = weather.wind.speed;
      winddir = weather.wind.direction;
      image = '<img src="http://l.yimg.com/a/i/us/we/52/'+weather.code+'.gif"/>';
     
      
      $(".title").html(title);
      $(".temp").html(temp);
      $(".city").html(city);
      $(".current").html(current);
      $(".tomor").html(tomor);
      $(".highTemp").html(highTemp);
      $(".lowTemp").html(lowTemp);
      $(".humidity").html("&nbsp;"+humidity+"%");
      $(".wind").html(windspeed);
      $(".winddir").html("WIND:&nbsp;"+winddir);
      $(".thumbnail").html(image);
     
      
    },
     error: function(error) {
      $("#error").html('<p>'+error+'</p>');
    }
    
  });
    
  }
  
  

  
  var m_names = ["Jan", "Feb", "Mar", 
"Apr", "May", "Jun", "Jul", "Aug", "Sep", 
"Oct", "Nov", "Dec"];

var d_names = ["Sun","Mon", "Tue", "Wed", 
"Thur", "Fri", "Sat"];

var myDate = new Date();
myDate.setDate(myDate.getDate());
var curr_date = myDate.getDate();
var curr_month = myDate.getMonth();
var curr_day  = myDate.getDay();
document.getElementById("day").innerHTML=(d_names[curr_day] + ",&nbsp;" +curr_date+" "+ m_names[curr_month]);
  
  
  
});


function showTime(){
      var time = new Date();
      var hour= time.getHours();

      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
        var completeTime = hour+":"+minutes+":"+seconds;
      document.getElementById("timer").innerHTML = completeTime;

    }
  setInterval("showTime()",1000);
