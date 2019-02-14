/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["DDU-DU-DDU-DU","all the kids are depressed","Suncity","Consequences"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links = ["https://i.ytimg.com/vi/IHNzOHi8sJs/maxresdefault.jpg","https://images.genius.com/ad0d2ed48dee96d6e3bb79e56b69ad85.1000x1000x1.jpg","https://images.genius.com/48ca10fe4ca2ae201fa0b0437c13d72c.1000x1000x1.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Consequences_%28orchestra%29.jpg/220px-Consequences_%28orchestra%29.jpg"];
var artists = ["BLACKPINK","Jeremy Zucker","Khalid","Camila Cabello"];
var song_lengths = ["3:30","2:50","3:10","3:02"];
var songs_links = ["https://www.youtube.com/watch?v=IHNzOHi8sJs","https://www.youtube.com/watch?v=uKxWP56VStM","https://www.youtube.com/watch?v=iI2f8eA8x4Q","https://www.youtube.com/watch?v=k73EBmeJ950"];


    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
  
 function displayList(){   
songs.forEach(function(element){
    $("#songs").append("<p>"+element+"</p>")
    
});
images_links.forEach(function(element2){
    $("#images").append("<img src="+ element2+">")
    
});
artists.forEach(function(element3){
    $("#artists").append("<p>"+element3+"</p>")
    
});
song_lengths.forEach(function(element4){
    $("#lengths").append("<p>"+element4+"</p>")
    
});
songs_links.forEach(function(element5){
    $("#links").append("<a href="+element5+">"+"Play Now"+"</a")
    
});
};
function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var userInput = $("#song").val();
         songs.push(userInput);
    var userInput2 = $("#artist").val();
         artists.push(userInput2);
    var userInput3 = $("#length").val();
         song_lengths.push(userInput3);
    var userInput4 = $("#image").val();
         images_links.push(userInput4);
    var userInput5 = $("#link").val();
         songs_links.push(userInput5);

}

$("#add").click(function() {
    emptySongInfo();
    
    addSongInfo();
    console.log(songs[0])
    //displaySongInfo();
   displayList();
});

displayList();

//displaySongInfo();
