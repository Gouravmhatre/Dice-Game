count=0,player1=0,player2=0;
function convert(){
    var dice=Math.floor(Math.random()*6)+1
    document.getElementById('dice-value').value=dice
    if(count%2===0){
        player2+=dice
        count+=1
    }
    else{
        player1+=dice
        count+=1
    }
    document.getElementById('p1').value=player1
    document.getElementById('p2').value=player2
    if(player1>=30){
        document.getElementById('result').innerHTML="Player 1 wins !!"
    }
    else if(player2>=30){
        document.getElementById('result').innerHTML="Player 2 wins !!"

    }
}