const inpText = document.querySelector('textarea');
const stat = document.querySelector('#stat');
const ckBox = document.querySelector('#ckBox');

inpText.addEventListener('keyup', (e) => {
    update();
});

ckBox.addEventListener('click', () => {
    update();
});

let update = function() {
    let [wordCount, characterCount] = getStat(inpText.value, ckBox.checked);
    changeStat(wordCount, characterCount);
}

let getStat = function(str, wspaces) {
    let matches = str.match(/\S+/g);
    let spaces = str.match(/[^\S+]/g);
    let enters = str.match(/\n/g);
    spaces = (spaces && !wspaces ? spaces.length : 0);
    matches = (matches ? matches.length : 0);
    enters = (enters ? enters.length : 0);
    return [matches, str.length - spaces - enters];
}

let changeStat = function(word, character) {
    let newStat = `You've written ${word} `;
    if (word > 0) newStat += '<b>words</b>'; 
    else newStat += '<b>word</b>';

    newStat += ` and ${character} `;
    if (character > 0) newStat += '<b>characters</b>';
    else newStat += '<b>character</b>'
    stat.innerHTML = newStat;
}