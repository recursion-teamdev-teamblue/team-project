//使用するHTMLエレメントの宣言を一括で最初に
const config = {
    initialPage: document.getElementById(`initialPage`),
    secondPage: document.getElementById(`secondPage`),
    string: document.getElementById(`string`)
};
//resultをオブジェクトとして定義付け
class Result {
    constructor(fortune,sentence,imgUrl){
        this.fortune = fortune;
        this.sentence = sentence;
        this.imgUrl = imgUrl;
    }
}
//resultのリスト
listOfresults = [
    new Result("大凶","hiohihhi", "https://illust8.com/wp-content/uploads/2020/01/omikuji_daikitchi_6574.png"),
    new Result("凶","sentence","img"),
    new Result("末吉","sentence","img"),
    new Result("吉","sentence", "img"),
    new Result("小吉","sentence","img"),
    new Result("中吉","sentence","img"),
    new Result("大吉","sentence","img")
];
//結果のページ作成まで。表示はswitchToSecondPage()の中に格納
function getRandomResult(){
    let random = Math.floor(Math.random() * 7);
    let randomResult = listOfresults[random];
    config.string.innerHTML =`
    <h1><strong>${randomResult.fortune}</strong></h1>
    <img src="${randomResult.imgUrl}" width="130" height="100">
    <p>${randomResult.sentence}</p>`;
};
//ページを表示する関数
function disPlayBlock(ele){
    ele.classList.remove(`d-none`);
    ele.classList.add(`d-block`);
};
//ページを非表示にする関数
function displayNone(ele){
    ele.classList.remove(`d-block`);
    ele.classList.add(`d-none`);
};

//おみくじ結果ページを非表示、リセットして最初のページを表示する
function backToInitialPage(){
    displayNone(config.secondPage);
    disPlayBlock(config.initialPage);
};
//最初のページを非表示、おみくじ結果ページを表示する
function switchToSecondPage(){
    getRandomResult();
    displayNone(config.initialPage);
    disPlayBlock(config.secondPage);
};

