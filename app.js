let text = "Test taic tae jhgjhg. jgtjhg jhgjg. khkjhkjh";
let words = 0;
let voy = 0

function algo(str) {
    const textWithSplit = str.split(" ");
    const textWithChar = str.split("");
    for (let i = 0; textWithChar[i]; i++) {
        if (textWithChar[i] == 'e' || textWithChar[i] == 'a' || textWithChar[i] == 'o' || textWithChar[i] == 'i' ||  textWithChar[i] == 'u' || textWithChar[i] == 'y') {
            voy = voy + 1;
        }
    }
    words = textWithSplit.length;
    
    console.log("Words = ", words)
    console.log("Voy = ", voy)

}

algo(text)
