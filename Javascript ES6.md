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
- 1) forEach로 순회하기
```javascript
var data = [1, 2, undefined, NaN, null, ""];
data.forEach(function(value){
  console.log("value is", value);
});
```
이렇게 data라는 배열을 forEach문으로 돌리면 배열의 요소가 차례대로 로그에 찍힌다.
<br>
- 2) for in으로 순회하기
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
- 3) for of로 순회하기
```javascript
var data = [1, 2, undefined, NaN, null, ""];
for(let idx in arr){
  console.log(data[idx]);
}
```


### 2) spread operator - 배열의 복사
### 3) spread operator - 몇 가지 활용
### 4) from 메서드로 진짜 배열 만들기

<br>

## 4. Object
### 1) 간단히 객체생성하기

<br>

## 5. Destructuring
### 1) Destructuring Array
### 2) Destructuring Object
### 3) Destructuring활용 JSON파싱
### 4) Destructuring활용 Event객체 전달

<br>

## 6. Set & WeakSet
### 1) Set으로 유니크한 배열만들기
### 2) WeakSet으로 효과적으로 객체타입저장하기

<br>

## 7. Map & WeakMap
### 1) Map & WeakMap 추가정보를 담은 객체저장하기
### 2) WeakMap클래스 인스턴스 변수 보호하기

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

