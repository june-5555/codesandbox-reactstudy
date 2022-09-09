/**
 * Const/let
 */
// var vall = "var変数";
// console.log(vall);

// // var変数上書き可能
// vall = "var変数上書き";
// console.log(vall);

// // var変数は再宣言可能
// var vall = "再宣言";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let再宣言";

// const val3 = "const変数";
// console.log(val3);

// // // constは上書き不可能
// // val3 = "const変数を上書き";

// const val3 = "再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "aaa",
//   age: 28,
// }
// val4.name = "bbb";
// console.log(val4);

// //constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけえ";
// const age = "28";
// //「わたしの名前はじゃけえです。年齢は28歳です。」

// //従来の方法
// const message1 = "わたしの名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレ文字列
// const message2 = `わたしの名前は${name}です。年齢は${age}歳です`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }

// console.log(func1("kim"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };

// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(func3(1,10));

/**
 * 分割代入
 */
// const myprofile ={
//   name: "じゃけえ",
//   age: 28,
// }
// const message1 = `名前は${myprofile.name}です。年齢は${myprofile.age}です。`;
// console.log(message1);

// const { name, age} = myprofile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myprofile = ['じゃけえ', 28];
// const message3 = `名前は${myprofile[0]}です。年齢は${myprofile[1]}です。`
// console.log(message3);

// const [name,age] = myprofile;
// const message4 = `名前は${name}です。年齢は${age}です。`
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "kim") => console.log(`こんにちは！${name}さん。`);
// sayHello("sana");

/**
 * スプレッド構文
 */
