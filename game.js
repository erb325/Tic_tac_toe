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
var canvas;
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




