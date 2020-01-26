// function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 console.log(allText);
//             }
//         }
//     };
//     rawFile.send(null);
// }


var cities = ['Manchester','Dubai','Los Angeles', 'Paris', 'New York', 'Zurich', 'Kolkata', 'Istanbul', 'Hong Kong', 'Prague', 'Sydney','Edinburgh','Amsterdam','London','Miami'];
var temp = ['rainy','sunny','sunny','cold','rainy','snow','cloudy','rainy','cold','sunny','cold','cold','cold','sunny','sunny'];
function findCity(city){
    for(var i = 0; i < cities.length; i++){
        if(cities[i] == city){
            return temp[i];
        }
    }
}
    
function gotoTemp(city){
    var temp = findCity(city);
    getPlaylist(temp);
}


function getPlaylist(temp)
{
    if(temp == 'rainy'){
        location.href = "rainy.html";
    }

    if(temp == 'sunny'){
        location.href = "sunny.html";
    }

    if(temp == 'cold'){
        location.href = "cold.html";
    }

    if(temp == 'cloudy'){
        location.href = "cloudy.html";
    }
    if(temp == 'snow'){
        location.href = "snow.html";
    }


}