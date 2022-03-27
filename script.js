let random = Math.floor(Math.random() * 7);

const result = ["大凶", "凶", "末吉", "吉", "小吉", "中吉", "大吉"];

const resultSentence = {
    "大凶": "ex: 今が谷間です。今年は慎重にすごし、来年からの上昇に備えましょう。",
    "凶": "",
    "末吉": "",
    "吉": "",
    "小吉": "",
    "中吉": "",
    "大吉": "",
}

const sentence = document.getElementById("sentence");
function getRandomResult(){
    let fortune = result.indexOf(random);
    let str = "";

    str +=`
        <h1>${fortune}</h1>
        <p>${resultSentence[fortune]}
        `
    sentence.innerHTML = str;
}