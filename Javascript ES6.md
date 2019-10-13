# Javascript ES6
ES6 공부를 위한 문서입니다.</br>
<br>

<hr>

<br>

## 1. Scope
### 1) let
let은 
```javascript
var test = "global var";

function main(){
var mainvar = "mainvar";
  for(var i=0; i<100; i++){
  }
  console.log(i);
}
main();
```
이렇게 코드를 작성했을 때 var의 경우는 전역으로 범위가 작용하기 때문에 로그가 100까지 찍힌다.
그러나 for문안의 var를 let으로 변경하였을 경우
```javascript
for(let i=0; i<100; i++)
```
는 에러가 뜨면서 실행되지 않는다. 왜냐하면 let i가 for문 안에서만 작용하기 때문이다.
let은 블록단위의 스코프를 가진다. 예를 들면 if문안의 블럭 for문안의 블럭 이렇게.


### 2) let과 closure
네 개의 리스트가 있는 html문서의 li에 이벤트리스너를 아래와 같이 등록했을 때 결과는
```javascript
var list = document.querySelectorAll("li");
for(var i =0; i<list.length; i++){
  list[i].addEventListener("click", function(){
    console.log(i + "번째 리스트입니다.")
  })
}
```
어떤 목록을 클릭해도 결과가 "4번째 리스트입니다" 라고 뜬다. 그 이유는 클로저라는 속성 때문이다.
전역공간의 i값을 계속 공유하기 때문에, function안의 i값은 그 밖에 있는 i값을 참조를 유지하고 있음.
계속 변경되는 i값중 마지막 4를 계속 공유한다. 이 문제를 해결하기 위해 그 전에는 지역변수를 따로 설정해주거나 했지만 let을 사용해서 간단히 해결할 수 있다.

```javascript
for(let i = 0; i<list.legnth; i++)
```
이렇게 변경해주면 해당 리스트가 가진 순서대로 n번째 리스트입니다 라고 출력된다. 

### 3) const - 선언된 변수 지키기
const키워드는 한번 선언된 변수를 그대로 지키는 특성을 가지고 있다.
```javascript
function main() {
  var mainname = "my main";
  hamename = "your house";
  console.log(mainname);
}
```
변경되면 안되는 상수변수들을 선언할 때 그 전에는 var MAIN_NAME 이런식의 대문자 표기법으로 구분하여 재할당을 회피했다. const를 사용하면 변수 재할당이 불가하기 때문에 간단히 상수변수를 선언할 수 있다.
<code>var mainname</code>을 <code>const mainname</code>로 사용하면 된다.
```javascript
function main() {
  const arr = [1,2,3,4,5];
  arr = ["1","2","3"];
  console.log(arr);
}
```
위 코드역시 실행해보면 에러가 뜬다. const 배열도 마찬가지로 재할당이 불가능하다.


### 4) const특성과 immutable array
```javascript
function main() {
  const vehicle = ["car","bus","airplane","bike"];
  vehicle.push("ship"); //이 경우는 어떻게 될까?
```
const에는 값을 재할당하는 것이 불가하다고 했다. 그런데 const로 선언된 배열에 push해서 값을 넣는 것은 결과가 어떻게 될까?
코드를 실행해보면 마지막 배열요소로 ship이 추가가 된 것을 확인할 수 있다.

#### immutable array를 만드는 방법?
```javascript
const vehicle = ["car","bus","airplane","bike"];
vehicle2 = [].concat(vehicle, "ship");
console.log(vehicle, vehicle2);
```
결과값:<br>
["car", "bus", "airplane", "bike"] 
["car", "bus", "airplane", "bike", "ship"]<br>
이렇게 다른 배열이 된다.
원래 배열은 보존하고 새로운 배열을 만드는 것은 됨.

<br>

## 2. String
### 1) ES2015 String에 새로운 메서드들
```javascript
let str = "hello world!";
let constr = "hello";
console.log(str.startsWith(constr)); //true
console.log(str.endsWith(constr)); //false
console.log(str.includes(constr)) //true
```
- <code>문자열.startsWith(문자열)</code> :문자열과 시작이 일치하는지 확인하는 문자열메소드이다.
- <code>문자열.endsWith(문자열)</code> :문자열과 끝이 일치하는지 확인하는 문자열메소드이다.
- <code>문자열.includes(문자열)</code> :문자열이 포함되는지 확인하는 문자열메소드이다.

<br>

## 3. Array
### 1) for of - 순회하기
1) forEach로 순회하기
```javascript
var data = [1, 2, undefined, NaN, null, ""];
data.forEach(function(value){
  console.log("value is", value);
});
```
이렇게 data라는 배열을 forEach문으로 돌리면 배열의 요소가 차례대로 로그에 찍힌다.
<br>
2) for in으로 순회하기
```javascript
var data = [1, 2, undefined, NaN, null, ""];
for(let idx in arr){
  console.log(data[idx]);
}
```
이렇게 for in으로 돌리면 data배열의 요소가 차례대로 로그에 찍힌다.
for in은 object를 순회할 때 사용한다. 그렇기 때문에
```javascript
var data = [1, 2, undefined, NaN, null, ""];
Array.prototype.getIndex = function(){}; //이걸 추가했을때
for(let idx in arr){
  console.log(data[idx]);
}
```
배열요소 외에도 function(){}까지 같이 추가가되어 나타내주는 문제가 있다.
그래서 for in 배열요소에서 잘 안쓴다. 
<br>
3) for of로 순회하기
```javascript
var data = [1, 2, undefined, NaN, null, ""];
for(let value of arr){
  console.log(value);
}
```
이렇게 하면 for in과 다르게 배열요소들만 로그에 찍힌다.
이렇게 for of를 사용해서 배열을 순회한다.
```javascript
var str = "A Whole New World";
for(let value of str){
  console.log(value);
}
```
이렇게하면 str안의 문자열이 문자단위로(공백도) 하나하나 차례로 순회하면서 로그에 찍힌다. for of로 배열 뿐만 아니라 문자열도
순회할 수 있다.
<br>

### 2) spread operator - 배열의 복사
//spread operator , 펼침연산자.
```javascript
let pre = ["beer", "cup" ,35];
let newData = [...pre]; //여기의 ...이 펼침연산자!
console.log(pre, newData);
console.log(pre === newData); //false
```
이러한 코드를 실행하였을 때 결과는 pre와 newData가 같아보이는 배열이 출력된다.
그러나 같은 값인지 === 연산자를 이용해 확인해보면 false라는 결과가 뜨는데 이는 이 둘이 다른 데이터라는 것을 의미한다.

### 3) spread operator - 몇 가지 활용
```javascript
let pre = [100, 200, "hello", null];
let newData = [0,1,2,3, ...pre,4];
console.log(newData);
```
결과값: [0, 1, 2, 3, 100, 200, "hello", null, 4]
...(펼침연산자)를 통해서 배열을 배열사이에 끼워넣기 아주 편리해졌다.
<br>
```javascript
function sum(a,b,c){
  return a+b+c;
}
let arr = [100, 200, 300];

console.log(sum.apply(null, arr)); //예전방식
console.log(sum(...arr)); //펼침연산자를 통해 쉽게 요소를 펼칠 수 있다.
```

### 4) from 메서드로 진짜 배열 만들기
```javascript
function addMark() {
  let newData = [];
  for(let i=0; i<arguments.length; i++){ //인자값을 정해주지 않아도 지역변수, arguments와 같은 값을 이용해서 인자값들을 배열과 비슷한 형태로 arguments로 들어간다.
    newData.push(arguments[i] + "!");
  }
  console.log(newData);
}
addMark(1,2,3,4,5);
```
결과값: ["1!", "2!", "3!", "4!", "5!"]
```javascript
function addMark() {
  let newData = arguments.map(function(value){
    return value+"!";
  })
  console.log(newData);
}
addMark(1,2,3,4,5);
```
이렇게 작성해주어도 위와 같은 결과가 나온다.
<br>
```javascript
function addMark() {
  let newArray = Array.from(arguments);
  let newData = newArray.map(function(value){
    return value+"!";
  })
  console.log(newData);
}
addMark(1,2,3,4,5);
```
이렇게 하면 arguments로 부터 새로운 배열을 만들어 줄 수 있다.
<br>
## 실습예제 1
```javascript
function print(){
  let arr = document.querySelectorAll("li");
  let list = Array.from(arr);
  let listArray = list.filter(function(value){
    return value.innerText.includes("e");
  });
  return listArray;
}
print();
```
<br>

## 4. Object<br>
### 1) 간단히 객체생성하기<br>

```javascript
function getObj(){
  const name = "kim";
  
  const getName = function() {
    return name;
  }
  const setName = function(newname) {
    return newname;
  }
  
  const printName = function() {
    console.log(name);
  }
  return{getName, setName, name}
}
var obj =getObj();
console.log(obj);
```

<br>

## 5. Destructuring
### 1) Destructuring Array
```javascript
let data = ["car","ship","bike","bus"];
let benz = data[0];
let honda = data[2];
let [benz,,honda] = data; //위 두 코드를 이렇게 쓸수 있다.
console.log(benz, honda); //car, bike
```
destructuring array는 이렇게 사용한다.

### 2) Destructuring Object
```javascript
let obj = {
  name : "cartman",
  address : "South Park",
  age : 10
}
let {name, age} = obj;
console.log(name, age); // cartman, 10

let {name:myName, age:myAge} = obj; //이렇게 할당할 수도 있다.
console.log(myName, myAge); // cartman, 10
```
### 3) Destructuring활용 JSON파싱
```javascript
var search = [
{ 
  "title" : "naver",
  "url" : "https://www.naver.com",
  "contentlist" : [
      "이메일",
      "블로그",
      "까페",
      "뉴스"
  ]
},
{ 
  "title" : "daum",
  "url" : "https://www.daum.net",
  "contentlist" : [
      "이메일",
      "까페",
      "쇼핑",
      "뉴스"
  ]
}
];

let [,naver] = search;
let [title, url] = naver;
console.log(title, url); //결과: naver, https://www.naver.com

let [, {title, url}] = search;
console.log(url) //결과: https://www.naver.com
```
Destructuring을 이용해서 필요한 변수값을 뽑아다 쓸 수 있다.

### 4) Destructuring활용 Event객체 전달
function을 활용해서도 할 수 있다.
```javascript
function getContentList([,{contentlist}]) {
  console.log(contentlist);
}
getContentList(search); //결과값: daum의 ["이메일", "까페", "쇼핑", "뉴스"] 가 로그에 찍힘.
```
이벤트등록해서 실행할 때도 Destructuring사용이 가능하다.
```javascript
document.querySelector("div").addEventListener("click", function(target){
  console.log(target.tagName); //결과값: "DIV"
  console.log(target.innerText); //결과값: div안에 있는 텍스트
}); 
```
이렇게 사용할 수도 있다.

<br>

## 6. Set & WeakSet
### 1) Set으로 유니크한 배열만들기
Set: 중복없이 유일한 값을 저장하려고 할 때. 이미 존재하는 지 체크할 때 유용.
```javascript
let mySet = new Set();
console.log(toString.call(mySet));

mySet.add("harry");
mySet.add("Sally");
mySet.add("harry");

mySet.forEach(function(value) {
  console.log(value); // 결과값: "harry", "Sally" harry를 한번 더 넣어줬지만 중복이므로 두 가지만 저장된다.
});
console.log(mySet.legnth);
```
- <code>set.has()</code>: Set에 해당 값이 있는지 확인
- <code>set.delete()</code>: Set에 해당 값이 있으면 지우기

### 2) WeakSet으로 효과적으로 객체타입저장하기
Weakset은 참조를 가지고 있는 객체만 저장이 가능하다.
객체형태를 중복없이 저장하려고 할 때 유용하다.
```javascript
let arr = [1,2,3,4];
let ws = new WeakSet();

ws.add(arr); //제대로 나온다.
ws.add(111); //Invalid
ws.add("111");//Invalid
ws.add(null);//Invalid
ws.add(function(){}); //제대로 나온다.
```
<br>

## 7. Map & WeakMap
### 1) Map & WeakMap 추가정보를 담은 객체저장하기
Array를 개선한 자료구조 -> Set,WeakSet
Object를 개선한 자료구조 -> Map,WeakMap
Map은 Key, Value구조 이다.
```javascript
let wm = new WeapMap();
let myfun = function(){};
//이 함수가 얼마나 실행됐는지?를 알려고 할때.

wm.set(myfun,0);
console.log(wm);

let count = 0;
for(let i=0; i<10; i++){
  count = wm.get(myfun);
  count++;
  wm.set(myfun, count);
}
console.log(wm.get(myfun))//10

```
### 2) WeakMap클래스 인스턴스 변수 보호하기
WeakMap 활용
```javascript
const wm = new WeakMap();

function Area(height, width){
  wm.set(this, {height, width});
}

Area.prototype.getArea = function(){
  const {height,width} = wm.get(this);
  return height * width;
}

let myarea = new Area(10,20);
console.log(myarea.getArea());
console.log(myarea.height);
```
<br>

## 8. Template
### 1) Template처리
### 2) Tagged Template Literals

<br>

## 9. function
### 1) Arrow function 활용
### 2) Arrow function의 this context
### 3) function default parameters
### 4) rest parameters

<br>

## 10. 객체
### 1) class를 통학 객체생성
### 2) Object assign으로 JS객체만들기
### 3) Object assign으로 Immutable 객체만들기
### 4) Object setPrototypeOf로 객체만들기
### 5) Object setPrototypeOf로 객체간 prototype chain 생성하기

<br>

## 11. Module
### 1) module(export & import)의 이해
### 2) module(export & import)기반 서비스코드 구현방법

<br>

## 12. Proxy
### 1) Proxy로 interception기능구현

