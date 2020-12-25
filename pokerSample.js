const Suit = {
    SPADE: '♠️',
    CLUB: '♣️',
    DIAMOND: '♦️',
    HEART: '♥️'
};

const suitList = [
    Suit.SPADE,
    Suit.CLUB,
    Suit.DIAMOND,
    Suit.HEART
];

const cardList = [
    { rank: 2, label: '2' },
    { rank: 3, label: '3' },
    { rank: 4, label: '4' },
    { rank: 5, label: '5' },
    { rank: 6, label: '6' },
    { rank: 7, label: '7' },
    { rank: 8, label: '8' },
    { rank: 9, label: '9' },
    { rank: 10, label: '10' },
    { rank: 11, label: 'J' },
    { rank: 12, label: 'Q' },
    { rank: 13, label: 'K' },
    { rank: 14, label: 'A' }
];
// 各スートごとに2からAまで作成する
const deckBase =
    suitList
        .map((suit) => cardList.map((card) => ({ suit, ...card })))//「map」は配列データに使うメソッドであり、各要素1つずつに対して「コールバック関数」を実行し、その結果を新しい配列として返すことが出来るようになっています。
        .flat()　//多階層の配列を一階層にするメソッド。
        .map(Object.freeze);//オブジェクトを凍結する。他のコードがプロパティを削除したり変更したりすることができなくなる。

console.log(deckBase);

let deckBase3 = [];
for (let i = 0; i < cardList.length; i++) {
    let count = 0
    for (let j = 0; j < suitList.length; j++) {
        deckBase3[count] = suitList[j] + cardList[i];
        count++;
    }
}
console.log(deckBase3);

const deckBase2 =
    suitList.map(function (suit) { return suit }).cardList.map(function (card) { return card });




console.log(deckBase2);

let getTriangle = (base, height) => {
    return base * height / 2;
};
console.log('三角形の面積は' + getTriangle());//三角形の面積は10