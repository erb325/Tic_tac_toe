/**
 * Created with JetBrains RubyMine.
 * User: emberbaker
 * Date: 4/6/13
 * Time: 9:06 AM
 * To change this template use File | Settings | File Templates.
 */

var marked;
var content;
var combinations;
var turn=0;
var box;
var squaresFilled;


window.onload=function(){

    marked = new Array();

    content = new Array();

    combinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    for(var i = 0; i <= 8; i++){

        marked[i] = false;

        content[i]='';
    }

}
function boxClicked(boxNumber){
    box = "box"+boxNumber;
    var b = document.getElementById(box);
    var draw = b.getContext("2d");

    if (marked[boxNumber-1] == false){
        if (turn%2==0){
            draw.beginPath();
            draw.moveTo(10,10);
            draw.lineTo(40,40);
            draw.moveTo(40,10);
            draw.lineTo(10,40);
            draw.stroke();
            draw.closePath();
            content[boxNumber-1] = 'X';

        }
        else
        {
            draw.beginPath();
            draw.arc(25,25,20,0, Math.PI*2, true);
            draw.stroke();
            draw.closePath();
            content[boxNumber -1] = 'O';

        }
        turn++;

        marked [boxNumber-1] = true;
        squaresFilled++;
        checkWinners (content[boxNumber-1]);

        if (squaresFilled==9){
            alert("The Game is Over!");
            location.reload(true);
        }
        else
        {
            alert ("That space is alread occupied");

        }
    }
}

function checkWinners(symbol){
    for (i = 0; i < combinations.length; i++){
        if (content[combinations[i][0]]==symbol && content [combinations [i][1]]== symbol &&
            content[combination[i][2]]==symbol){
            alert (symbol + " Won!!");
            playAgain();
        }
    }
}

function playAgain(){
    var again = confirm ("Do you want to play again?");
    if (again == true) {
        alert("Ok ^^/>")  ;
        location.reload(true);

      }
    else
    {
        alert(":(");

    }
}



