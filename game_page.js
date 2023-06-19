player1_name = localStorage.getItem("Player1");
player2_name = localStorage.getItem("Player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
document.getElementById("P1_name").innerHTML = player1_name + ": ";
document.getElementById("P2_name").innerHTML = player2_name + ": ";
document.getElementById("P1_Score").innerHTML = player1_score;
document.getElementById("P2_Score").innerHTML = player2_score;
var number1 
var number2

function sendWord(){
    number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value
    question = number1 + "*" + number2;
    answer = number1 * number2;
    question_word = "<h4 id='word_display'>Question: " + question + "</h4>";
    input_box = "<br> answer: <input type='text' id='input_checkBox'>";
    check_button = "<br><br><button class='btn btn-info' onclick='checkWord()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
}
var question_turn = "player1";
var answer_turn = "player2";
function checkWord() {
    get_answer = document.getElementById("input_checkBox").value;
    real_answer = Number(get_answer)
    answer = Number(number1) * Number(number2);
    console.log("The answer in lowercase is " + answer);
    if(real_answer== answer){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("P1_Score").innerHTML = player1_score;
        } 
        else{
            player2_score = player2_score + 1;
            document.getElementById("P2_Score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}