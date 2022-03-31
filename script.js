//使用するHTMLエレメントの宣言を一括で最初に
const config = {
    initialPage: document.getElementById(`initialPage`),
    secondPage: document.getElementById(`secondPage`),
    string: document.getElementById(`string`),
    rain: document.getElementById(`rain`),
    petal: document.getElementById(`petal`)
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
    // new Result("大凶","今が運勢の谷間です。慎重に行動し、これからの上昇に備えましょう！", "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003226.png"),
    // new Result("凶","望みかなわず。時期を待て。","https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003225-320x320.png"),
    // new Result("凶","望みかなわず。時期を待て。","https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003225-320x320.png"),
    // new Result("末吉","すべては自分次第。自分の行動で良くも悪くもなる。","https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003224-320x320.png"),
    // new Result("末吉","すべては自分次第。自分の行動で良くも悪くもなる。","https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003224-320x320.png"),
    // new Result("末吉","すべては自分次第。自分の行動で良くも悪くもなる。","https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003224-320x320.png"),
    // new Result("吉","今までやらなかったことに挑戦すれば、運気もより良い方に向かうかも。", "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003223-320x320.png"),
    // new Result("吉","今までやらなかったことに挑戦すれば、運気もより良い方に向かうかも。", "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003223-320x320.png"),
    // new Result("吉","今までやらなかったことに挑戦すれば、運気もより良い方に向かうかも。", "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003223-320x320.png"),
    // new Result("吉","今までやらなかったことに挑戦すれば、運気もより良い方に向かうかも。", "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003223-320x320.png"),
    // new Result("小吉","正しい道を進んでいます。そのまま積み重ねましょう。","https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003222-320x320.png"),
    // new Result("小吉","正しい道を進んでいます。そのまま積み重ねましょう。","https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003222-320x320.png"),
    // new Result("小吉","正しい道を進んでいます。そのまま積み重ねましょう。","https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003222-320x320.png"),
    // new Result("中吉","立身出世の可能性あり。急に運が開ける！", "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003222.png"),
    // new Result("中吉","立身出世の可能性あり。急に運が開ける！", "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003222.png"),
    new Result("大吉","人生最高の日です。すべての望みが叶う！", "https://kohacu.com/wp-content/uploads/2021/01/kohacu.com_samune_003220.png")
];
//結果のページ作成まで。表示はswitchToSecondPage()の中に格納
function getRandomResult(){
    let random = Math.floor(Math.random() * listOfResults.length);
    let randomResult = listOfResults[random];
    if(randomResult.fortune === `大吉`){
        config.secondPage.classList.add(`text-danger`)
        disPlayBlock(config.petal);
        setInterval(function(){createPetal()},300);
    }
    // 大凶時
    if(randomResult.fortune == "大凶"){
        config.secondPage.classList.add(`text-white`)
        disPlayBlock(config.rain)
    }
        config.string.innerHTML =`
        <h1 class="mt-4"><strong>${randomResult.fortune}</strong></h1>
        <img src="${randomResult.imgUrl}" width="130" height="100">
        <p class="pt-2">${randomResult.sentence}</p>`;
};

// 大凶の時に追加したrainエフェクトとsecondPageのtext-whiteを消す
function rainEffectRemove(){
    if(config.rain.classList.contains("d-none") == false){
        config.secondPage.classList.remove(`text-white`);
        displayNone(config.rain);
    }
}
//花びらを生成する関数
function createPetal(){
    const parentDiv = config.petal;
    const petalEle = document.createElement(`span`);
    petalEle.className = `petal`;
    const minSize = 10;
    const maxSize = 15;
    const size = Math.floor(Math.random() * (maxSize - minSize + 1) + minSize);
    petalEle.style = `width: ${size}px; height: ${size}px; left: ${Math.random() * 100}%;`;
    parentDiv.append(petalEle);
    setTimeout(() => {
        petalEle.remove();
    },10000);
}
function petalEffectRemove(){
    if(config.petal.classList.contains(`d-block`)){
        displayNone(config.petal);
        config.secondPage.classList.remove(`text-danger`)
    };
};
//ページを表示
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
    rainEffectRemove();
    petalEffectRemove();
};
//最初のページを非表示、おみくじ結果ページを表示する
function switchToSecondPage(){
    getRandomResult();
    displayNone(config.initialPage);
    disPlayBlock(config.secondPage);
};

