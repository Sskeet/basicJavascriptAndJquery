$.ajax({
        type: "GET",
        data: "json",
        contentType : "application/json",
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=7520477c96fad381a44633a2b7596a01&language=en-US&page=1',
        success: function (result) { 
          var dataSet = JSON.stringify(result);
          console.log(dataSet);
          for(let i=0;i<=5;i++){
              con
          }
        }
    });


// for(i=0;i<5;i++){
//     PopularHtml +="<div class='card col-12 col-md-2 ml-2'><div class='imgcls text-center'><img class='card-img-top' src='https://image.tmdb.org/t/p/w500/"+Popularlist[i].poster_path +"' alt='Card image cap'></div><div class=card-body> <p class='card-text'>+ Popularlist[i].title +"</p></div></div>";
//     } 
    // document.getElementsByClassName("cardcust")[0].innerHTML += PopularHtml; 
// $.ajax({
//     type: "GET",
//     data: "json",
//     contentType : "application/json",
//     url: 'https://api.themoviedb.org/3/movie/popular?api_key=7520477c96fad381a44633a2b7596a01&language=en-US&page=1',
//     success: function getData(result) { 
//       var dataSet = JSON.stringify(result);
//     //   console.log("1");
//     //   console.log(dataSet);
//     return dataSet;
//     }
// });

// console.log(getData);


// $(document).ready(function(){
//     $.ajax({
//         type: "GET",
//         data: json ,
//         contentType : "application/json",
//         url: 'https://api.themoviedb.org/3/movie/popular?api_key=7520477c96fad381a44633a2b7596a01&language=en-US&page=1',
//         success: function(res){
//             var resData = JSON.stringify(res);
//             //var parseData = jQuery.parseJSON(res);
//             //console.log(resData);
//             //console.log(resData);
//             return resData;
//         },
//     });
// })

// var htmlText = '';

// for ( var key in resData ) {
//     htmlText += '<div class="div-conatiner">';
//     htmlText += '<p class="p-name"> page: ' + resData[key].results.title + '</p>';
//     htmlText += '<p class="p-loc"> Location: ' + resData[key].results.overview + '</p>';
//     // htmlText += '<p class="p-desc"> Description: ' + resData[key].description + '</p>';
//     // htmlText += '<p class="p-created"> Created by: ' + resData[key].created_by + '</p>';
//     // htmlText += '<p class="p-uname"> Username: ' + resData[key].users_name + '</p>';
//     htmlText += '</div>';
// }
// var htmlText = '';
// $('body').append(htmlText);

