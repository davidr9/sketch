/*Javascript file used for Etch-a-Sketch*/
var rows = prompt("Enter number of rows", 20);
var cols = prompt("Enter number of columns", 20);

$(document).ready(function(){
    createGrid();
});

function createGrid(){
    /*gives default value if user does not enter anything*/
    if (rows === null) {
        rows = 10;
    }
    if (cols === null) {
        cols = 10; 
    }

   /*creates rows*/
   for(var i=0; i<rows; i++)
    {
        $('tbody').append('<tr></tr>');
    }
    /*adds correct number or elements to each row*/
    for(i=0; i<cols; i++)
    {
        $('tr').append('<td></td>');
    }
}; 