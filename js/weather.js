

var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
var meal = "breakfast";

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(position.coords.latitude+','+position.coords.longitude);
    });
} else{
    loadWeather("Bangalore,IN","");
}

$(document).ready(function(){
    setInterval(getWeather,10000);
});

function loadWeather(location, woeid){
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'C',
        success: function(weather){
            city = weather.city;
            temp = weather.temp + '&deg;';
            wcode = '<img class="weathericon" src="images/weathericons/'+weather.code+'.svg">';
            wind = '<p>'+weather.wind.speed+'</p><p>'+weather.units.speed+'</p>';
            humidity = weather.humidity+' %';
            $(".location").text(city);
            $(".temperature").html(temp);
            $(".climate_bg").html(wcode);
            $(".windspeed").html(wind);
            $(".humidity").text(humidity);

            var dt = new Date();
            var time = dt.getHours();


            if (time >= 0  && time < 10)
            {
                meal = "breakfast"; 
            }
            else if  (time >= 10  && time < 15)
            {
                meal = "lunch"; 
            }
         
            else
            {
                meal = "dinner"
            }

            $('.example').prepend('<h3>With this '+weather.currently+' weather you might want to try one of these options for '+ meal +': </h3>');
                    



             
        if (navigator.platform === "MacIntel") 
        {



         $('.adMobile').prepend('<h2>Today only 15% off for Mac users</h2>');
         
        }
        else if (navigator.platform === "iPhone")
        {
            $('.adMobile').prepend('<h2>Today 15% off for iPhone users</h2>');
        }
        else if (navigator.platform === "android")
        {
            $('.adMobile').prepend('<h2>Today 15% off for Android users</h2>');
        }



            // if(weather.temp > 5) {
            //     $(".example").html('<p>it is really hot</p>');
            // }

            

            // Breakfast time
            if (time >= 0  && time < 10)
            {
                // freezing
                if(weather.temp < 0 ) {
                    $('.ad1h').prepend('<h2>Pancakes</h2>');
                    $('.ad1').prepend('<img class="img-circle" src="img/breakfast/freezing/ad1.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad1p').prepend('<p>Pancakes, eggs, Bacon and potatos.</p>');
                   
                    $('.ad2h').prepend('<h2>Burrito</h2>');
                    $('.ad2').prepend('<img class="img-circle" src="img/breakfast/freezing/ad2.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad2p').prepend('<p>Egg and avocado burrito. </p>');    

                    $('.ad3h').prepend('<h2>Hot chocolate</h2>');
                    $('.ad3').prepend('<img class="img-circle" src="img/breakfast/freezing/ad3.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad3p').prepend('<p>Belgium chocolate with honey and extra sugar. </p>');    

                } 
                // cold
                else if (weather.temp >= 0 && weather.temp < 15)
                {
                
                    $('.ad1h').prepend('<h2>Bread and butter pudding</h2>');
                    $('.ad1').prepend('<img class="img-circle" src="img/breakfast/cold/ad1.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad1p').prepend('<p>Condensed milk on bread wholemeal with sugar and honey. </p>');
                   
                    $('.ad2h').prepend('<h2>Dark chocolate bread</h2>');
                    $('.ad2').prepend('<img class="img-circle" src="img/breakfast/cold/ad2.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad2p').prepend('<p>Pure swiss Toblerone chocololate as toppings. </p>');    

                    $('.ad3h').prepend('<h2>Double expresso</h2>');
                    $('.ad3').prepend('<img class="img-circle" src="img/breakfast/cold/ad3.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad3p').prepend('<p>Wake up with this extra shot coffee. </p>');    

                }
                // warm
                else if (weather.temp >= 15 && weather.temp < 20)
                {
                      $('.ad1h').prepend('<h2>Fruit Salad</h2>');
                    $('.ad1').prepend('<img class="img-circle" src="img/breakfast/warm/ad1.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad1p').prepend('<p>Served on a watermelon. </p>');
                   
                    $('.ad2h').prepend('<h2>Fruit plate</h2>');
                    $('.ad2').prepend('<img class="img-circle" src="img/breakfast/warm/ad2.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad2p').prepend('<p>Anti oxidant healthy option. </p>');    

                    $('.ad3h').prepend('<h2>Yogourt with strawberries</h2>');
                    $('.ad3').prepend('<img class="img-circle" src="img/breakfast/warm/ad3.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad3p').prepend('<p>With peach and mango. </p>');  
                } 
                // hot
                else if (weather.temp >= 20 && weather.temp < 30)
                {
                    $('.ad1h').prepend('<h2>Fruit Salad</h2>');
                    $('.ad1').prepend('<img class="img-circle" src="img/breakfast/hot/ad1.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad1p').prepend('<p>Served on a watermelon. </p>');
                   
                    $('.ad2h').prepend('<h2>Fruit plate</h2>');
                    $('.ad2').prepend('<img class="img-circle" src="img/breakfast/hot/ad2.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad2p').prepend('<p>Anti oxidant healthy option. </p>');    

                    $('.ad3h').prepend('<h2>Yogourt with strawberries</h2>');
                    $('.ad3').prepend('<img class="img-circle" src="img/breakfast/hot/ad3.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad3p').prepend('<p>With peach and mango. </p>');  
                }
                //very hot
                else
                {
                      $('.ad1h').prepend('<h2>Fruit Salad</h2>');
                    $('.ad1').prepend('<img class="img-circle" src="img/breakfast/melting/ad1.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad1p').prepend('<p>Served on a watermelon. </p>');
                   
                    $('.ad2h').prepend('<h2>Fruit plate</h2>');
                    $('.ad2').prepend('<img class="img-circle" src="img/breakfast/melting/ad2.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad2p').prepend('<p>Anti oxidant healthy option. </p>');    

                    $('.ad3h').prepend('<h2>Yogourt with strawberries</h2>');
                    $('.ad3').prepend('<img class="img-circle" src="img/breakfast/melting/ad3.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad3p').prepend('<p>With peach and mango. </p>');  
                }

            }
            // Lunch time 
            else if  (time >= 10  && time < 15)
            {
                // freezing
                if(weather.temp < 0 ) {
                     $('.ad1h').prepend('<h2>Pancakes</h2>');
                    $('.ad1').prepend('<img class="img-circle" src="img/lunch/freezing/ad1.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad1p').prepend('<p>Pancakes, eggs, Bacon and potatos.</p>');
                   
                    $('.ad2h').prepend('<h2>Burrito</h2>');
                    $('.ad2').prepend('<img class="img-circle" src="img/lunch/freezing/ad2.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad2p').prepend('<p>Egg and avocado burrito. </p>');    

                    $('.ad3h').prepend('<h2>Hot chocolate</h2>');
                    $('.ad3').prepend('<img class="img-circle" src="img/lunch/freezing/ad3.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad3p').prepend('<p>Belgium chocolate with honey and extra sugar. </p>');    

                } 
                // cold
                else if (weather.temp >= 0 && weather.temp < 15)
                {
                    $('.ad1h').prepend('<h2>Lasagna</h2>');
                    $('.ad1').prepend('<img class="img-circle" src="img/lunch/cold/ad1.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad1p').prepend('<p>Super delicious lasagna with extra cheese. </p>');
                   
                    $('.ad2h').prepend('<h2>Pasta</h2>');
                    $('.ad2').prepend('<img class="img-circle" src="img/lunch/cold/ad2.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad2p').prepend('<p>Home made pasta. </p>');    

                    $('.ad3h').prepend('<h2>English style</h2>');
                    $('.ad3').prepend('<img class="img-circle" src="img/lunch/cold/ad3.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad3p').prepend('<p>Warm up with this scrumptious brunch option. </p>');    

                }
                // warm
                else if (weather.temp >= 15 && weather.temp < 20)
                {
                    $('.ad1h').prepend('<h2>Fruit Salad</h2>');
                    $('.ad1').prepend('<img class="img-circle" src="img/lunch/warm/ad1.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad1p').prepend('<p>Served on a watermelon. </p>');
                   
                    $('.ad2h').prepend('<h2>Fruit plate</h2>');
                    $('.ad2').prepend('<img class="img-circle" src="img/lunch/warm/ad2.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad2p').prepend('<p>Anti oxidant healthy option. </p>');    

                    $('.ad3h').prepend('<h2>Yogourt with strawberries</h2>');
                    $('.ad3').prepend('<img class="img-circle" src="img/lunch/warm/ad3.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad3p').prepend('<p>With peach and mango. </p>');  
                } 
                // hot
                else if (weather.temp >= 20 && weather.temp < 30)
                {
                     $('.ad1h').prepend('<h2>Fruit Salad</h2>');
                    $('.ad1').prepend('<img class="img-circle" src="img/lunch/hot/ad1.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad1p').prepend('<p>Served on a watermelon. </p>');
                   
                    $('.ad2h').prepend('<h2>Fruit plate</h2>');
                    $('.ad2').prepend('<img class="img-circle" src="img/lunch/hot/ad2.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad2p').prepend('<p>Anti oxidant healthy option. </p>');    

                    $('.ad3h').prepend('<h2>Yogourt with strawberries</h2>');
                    $('.ad3').prepend('<img class="img-circle" src="img/lunch/hot/ad3.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad3p').prepend('<p>With peach and mango. </p>');    
                }
                //very hot
                else
                {
                     $('.ad1h').prepend('<h2>Fruit Salad</h2>');
                    $('.ad1').prepend('<img class="img-circle" src="img/lunch/melting/ad1.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad1p').prepend('<p>Served on a watermelon. </p>');
                   
                    $('.ad2h').prepend('<h2>Fruit plate</h2>');
                    $('.ad2').prepend('<img class="img-circle" src="img/lunch/melting/ad2.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad2p').prepend('<p>Anti oxidant healthy option. </p>');    

                    $('.ad3h').prepend('<h2>Yogourt with strawberries</h2>');
                    $('.ad3').prepend('<img class="img-circle" src="img/lunch/melting/ad3.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad3p').prepend('<p>With peach and mango. </p>');  
                }
            }
            
            //dinner time
            else 
            {
                // freezing
                if(weather.temp < 0 ) {
                   $('.ad1h').prepend('<h2>Pancakes</h2>');
                    $('.ad1').prepend('<img class="img-circle" src="img/dinner/freezing/ad1.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad1p').prepend('<p>Pancakes, eggs, Bacon and potatos.</p>');
                   
                    $('.ad2h').prepend('<h2>Burrito</h2>');
                    $('.ad2').prepend('<img class="img-circle" src="img/dinner/freezing/ad2.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad2p').prepend('<p>Egg and avocado burrito. </p>');    

                    $('.ad3h').prepend('<h2>Hot chocolate</h2>');
                    $('.ad3').prepend('<img class="img-circle" src="img/dinner/freezing/ad3.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad3p').prepend('<p>Belgium chocolate with honey and extra sugar. </p>');    
 
                } 
                // cold
                else if (weather.temp >= 0 && weather.temp < 15)
                {
                    $('.ad1h').prepend('<h2>Bread and butter pudding</h2>');
                    $('.ad1').prepend('<img class="img-circle" src="img/dinner/cold/ad1.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad1p').prepend('<p>Condensed milk on bread wholemeal with sugar and honey. </p>');
                   
                    $('.ad2h').prepend('<h2>Dark chocolate bread</h2>');
                    $('.ad2').prepend('<img class="img-circle" src="img/dinner/cold/ad2.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad2p').prepend('<p>Pure swiss Toblerone chocololate as toppings. </p>');    

                    $('.ad3h').prepend('<h2>Double expresso</h2>');
                    $('.ad3').prepend('<img class="img-circle" src="img/dinner/cold/ad3.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad3p').prepend('<p>Wake up with this extra shot coffee. </p>');    
                }
                // warm
                else if (weather.temp >= 15 && weather.temp < 20)
                {
                     $('.ad1h').prepend('<h2>Fruit Salad</h2>');
                    $('.ad1').prepend('<img class="img-circle" src="img/dinner/warm/ad1.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad1p').prepend('<p>Served on a watermelon. </p>');
                   
                    $('.ad2h').prepend('<h2>Fruit plate</h2>');
                    $('.ad2').prepend('<img class="img-circle" src="img/dinner/warm/ad2.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad2p').prepend('<p>Anti oxidant healthy option. </p>');    

                    $('.ad3h').prepend('<h2>Yogourt with strawberries</h2>');
                    $('.ad3').prepend('<img class="img-circle" src="img/dinner/warm/ad3.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad3p').prepend('<p>With peach and mango. </p>');  
                } 
                // hot
                else if (weather.temp >= 20 && weather.temp < 30)
                {
                    $('.ad1h').prepend('<h2>Fruit Salad</h2>');
                    $('.ad1').prepend('<img class="img-circle" src="img/dinner/hot/ad1.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad1p').prepend('<p>Served on a watermelon. </p>');
                   
                    $('.ad2h').prepend('<h2>Fruit plate</h2>');
                    $('.ad2').prepend('<img class="img-circle" src="img/dinner/hot/ad2.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad2p').prepend('<p>Anti oxidant healthy option. </p>');    

                    $('.ad3h').prepend('<h2>Yogourt with strawberries</h2>');
                    $('.ad3').prepend('<img class="img-circle" src="img/dinner/hot/ad3.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad3p').prepend('<p>With peach and mango. </p>');    
                }
                //very hot
                else
                {
                     $('.ad1h').prepend('<h2>Fruit Salad</h2>');
                    $('.ad1').prepend('<img class="img-circle" src="img/dinner/melting/ad1.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad1p').prepend('<p>Served on a watermelon. </p>');
                   
                    $('.ad2h').prepend('<h2>Fruit plate</h2>');
                    $('.ad2').prepend('<img class="img-circle" src="img/dinner/melting/ad2.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad2p').prepend('<p>Anti oxidant healthy option. </p>');    

                    $('.ad3h').prepend('<h2>Yogourt with strawberries</h2>');
                    $('.ad3').prepend('<img class="img-circle" src="img/dinner/melting/ad3.jpg" alt="Generic placeholder image" width="140" height="140">');
                    $('.ad3p').prepend('<p>With peach and mango. </p>'); 
                }
            }



        },
        error: function(error){
            $(".error").html('<p>'+error+'</p>');
        }
        
    });
}
