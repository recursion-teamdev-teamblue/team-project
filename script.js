class Result {
    constructor(sentence, imgUrl){
        this.sentence = sentence;
        this.imgUrl = imgUrl;
    }
}

let random = Math.floor(Math.random());

const result = ["大凶", "凶", "末吉", "吉", "小吉", "中吉", "大吉"];

const results = {
    "大凶": new Result("hiohihhi", "https://illust8.com/wp-content/uploads/2020/01/omikuji_daikitchi_6574.png"),
    // "凶": new Result(sentence, img),
    // "末吉": new Result(sentence, img),
    // "吉": new Result(sentence, img),
    // "小吉": new Result(sentence, img),
    // "中吉": new Result(sentence, img),
    // "大吉": new Result(sentence, img),
}

const string = document.getElementById("string");
function getRandomResult(){
    let fortune = result[random];
    let str = "";

    str +=`
    <h1><strong>${fortune}</strong></h1>
    <img src="${results[fortune].imgUrl}" width="130" height="100">
    <p>${results[fortune].sentence}</p>
        `
    string.innerHTML = ""
    string.innerHTML = str;
};

const config = {
    initialPage: document.getElementById(`initialPage`),
    secondPage: document.getElementById(`secondPage`)
};

//ページを表示する
function disPlayBlock(ele){
    ele.classList.remove(`d-none`);
    ele.classList.add(`d-block`);
};
//ページを非表示にする
function displayNone(ele){
    ele.classList.remove(`d-block`);
    ele.classList.add(`d-none`);
};

class Controller{
    //おみくじ結果ページを非表示、リセットして最初のページを表示する
    backToInitialPage(){
        displayNone(config.secondPage);
        disPlayBlock(config.initialPage);
    };
    //最初のページを非表示、おみくじ結果ページを表示する
    switchToSecondPage(){
        displayNone(config.initialPage);
        disPlayBlock(config.secondPage);
    }
}
let controller = new Controller;

const omikuji = document.getElementById("omikuji");
omikuji.addEventListener("click", function(){
    controller.switchToSecondPage();
    getRandomResult();
})

const reset = document.getElementById("reset");
reset.addEventListener("click", function(){
    controller.backToInitialPage()
})

