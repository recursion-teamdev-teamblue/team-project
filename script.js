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
        config.secondPage.innerHTML = ``;
        disPlayBlock(config.initialPage);
    };
    //最初のページを非表示、おみくじ結果ページを表示する
    switchToSecondPage(){
        displayNone(config.initialPage);
        disPlayBlock(config.secondPage);
    }
}
