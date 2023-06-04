let board = document.getElementById("gameBoard");
let letters = " ABCDEFGH";

let code = "";
for (let i = 0; i < 9; i++) {
    code += `<tr>`;
    for (let j = 0; j < 9; j++) {
        code += `<td class = "${(i + j) % 2 ? "black" : "white"}">${
                    i == 0 ? letters[j] : 
                    j == 0 ? i : ''
                }</td>`;
    }
    code += "</tr>";
}

board.innerHTML = code;
