var get_p_1 = localStorage.getItem("player_1");
var get_p_2 = localStorage.getItem("player_2");
var p_1_score = 0;
var p_2_score = 0;
document.getElementById("questioner").innerHTML = get_p_1 + " : ";
document.getElementById("answerner").innerHTML = get_p_2 + " : ";
document.getElementById("score_1").innerHTML = p_1_score;
document.getElementById("score_2").innerHTML = p_2_score;
document.getElementById("questioner").innerHTML = "Question Turn - " + get_p_1;
document.getElementById("answerner").innerHTML = "Answer Turn - " + get_p_2;

function send() {

}
ques_turn = "player1";
ans_turn = "player2";

function check() {
    get_answer = document.getElementById("a").value;
    answer = get_answer.toLowerCase(); // coverting answer to lowercase for comparison 
    console.log("answer in lower case - " + answer);
    if (answer == word) {
        if (answer_turn == "player1") {
            player_1_score = player_1_score + 1;
            document.getElementById("player_1_score").innerHTML = player_1_score;
        } else {
            player_2_score = player_2_score + 1;
            document.getElementById("player_2_score").innerHTML = player_2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2" //give turn to next player 
        document.getElementById("questioner").innerHTML = "Question Turn - " + player_2_name;
    } else {
        question_turn = "player1" // if question_turn == "player2" give turn to player1 
        document.getElementById("questioner").innerHTML = "Question Turn - " + player_1_name;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("answerner").innerHTML = "Answer Turn - " + player_2_name;
    } else {
        answer_turn = "player1";
        document.getElementById("answerner").innerHTML = "Answer Turn - " + player_1_name;
    }
    document.getElementById("output").innerHTML = ""; //make word box empty 
}