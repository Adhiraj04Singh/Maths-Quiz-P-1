function adduser(){
    player1_name=document.getElementById("player_1name").value;
    player2_name=document.getElementById("player_2name").value;
    localStorage.setItem("player_1",player1_name);
    localStorage.setItem("player_2",player2_name);
    window.location="index[game].html"
}