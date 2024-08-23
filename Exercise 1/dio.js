// Function to change background color on button click
document.getElementById("button").addEventListener("click",function(){
    document.body.style.backgroundColor = "#ccccff";

});

//function to hide image on button double click
document.getElementById("button").addEventListener("dblclick", function(){
    document.getElementById("image").style.display = "none";
});

//Function to display alert message on list item hover
var listItems = document.getElementById("list").getElementsByTagName("li");
for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("mouseover", function() {
        alert("You hovered over" + this.textContent);
    });
}