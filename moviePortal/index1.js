$(document).ready(function(){
    $.ajax({
        type: "GET",
        data: json ,
        contentType : "application/json",
        url: 'https://api.themoviedb.org/3/movie/popular?api_key=7520477c96fad381a44633a2b7596a01&language=en-US&page=1',
        success: function(res){
            var resData = JSON.stringify(res);
            console.log(resData);
        }
    });
})