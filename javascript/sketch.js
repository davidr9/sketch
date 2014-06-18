/*Javascript file used for Etch-a-Sketch*/
//rows = prompt("Enter number of rows", 20);
//cols = prompt("Enter number of columns", 20);
var rows = 20;
var cols = 20;

$(document).ready(function()
{
    createGrid();
    $(".box").hover(
    function() {
        $(this).css('background-color', 'red')
    });
});

function createGrid()
{
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
        $('tr').append('<td class="box"></td>');
    }
};
