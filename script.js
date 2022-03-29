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
listOfResults = [
    new Result("大凶","今が運勢の谷間です。慎重に行動し、これからの上昇に備えましょう！", "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003226.png"),
    new Result("凶","望みかなわず。時期を待て。","https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003225-320x320.png"),
    new Result("凶","望みかなわず。時期を待て。","https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003225-320x320.png"),
    new Result("末吉","すべては自分次第。自分の行動で良くも悪くもなる。","https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003224-320x320.png"),
    new Result("末吉","すべては自分次第。自分の行動で良くも悪くもなる。","https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003224-320x320.png"),
    new Result("末吉","すべては自分次第。自分の行動で良くも悪くもなる。","https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003224-320x320.png"),
    new Result("吉","今までやらなかったことに挑戦すれば、運気もより良い方に向かうかも。", "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003223-320x320.png"),
    new Result("吉","今までやらなかったことに挑戦すれば、運気もより良い方に向かうかも。", "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003223-320x320.png"),
    new Result("吉","今までやらなかったことに挑戦すれば、運気もより良い方に向かうかも。", "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003223-320x320.png"),
    new Result("吉","今までやらなかったことに挑戦すれば、運気もより良い方に向かうかも。", "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003223-320x320.png"),
    new Result("小吉","正しい道を進んでいます。そのまま積み重ねましょう。","https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003222-320x320.png"),
    new Result("小吉","正しい道を進んでいます。そのまま積み重ねましょう。","https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003222-320x320.png"),
    new Result("小吉","正しい道を進んでいます。そのまま積み重ねましょう。","https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003222-320x320.png"),
    new Result("中吉","立身出世の可能性あり。急に運が開ける！", "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003222.png"),
    new Result("中吉","立身出世の可能性あり。急に運が開ける！", "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003222.png"),
    new Result("大吉","人生最高の日です。すべての望みが叶う！", "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003220.png")
];
//結果のページ作成まで。表示はswitchToSecondPage()の中に格納
function getRandomResult(){
    let random = Math.floor(Math.random() * 16);
    let randomResult = listOfResults[random];
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

