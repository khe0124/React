# 자바스크립트로 알아보는 함수형 프로그래밍
- [강좌링크] (https://www.inflearn.com/course/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/#)


## 함수형 프로그래밍 정의, 순수함수
### 순수함수
```javascript
function add(a, b) {
  return a + b;
}
console.log(add(3,4)); //7
```
`add함수`는 순수함수이다. <br>
1. 왜냐하면 항상 동일한 인자를 주면 항상 동일한 결과를 리턴하기 때문에.
2. 부수효과가 없는 함수이기 때문에.


반면에 상황에 따라 다른 결과를 리턴하는 함수는?
```javascript
var c = 10;
function add2(a, b){
  return a + b + c;
}
```
c에 무엇이 할당되냐에 따라 a,b인자에 값을 넣었을 때 동일한 인자값이라고 하더라도 결과가 달라진다.
1. 위와 같은 함수를 부수효과가 있는 함수라고 한다.

이 `add2`함수가 순수함수가 되려면 `c`가 상수여야 한다.

```javascript
var c = 20;
function add3(a, b){
  c = b;
  return a + b + c;
}
```
위 `add3`함수는 동일한 인자를 넣으면 결과는 늘 동일하지만 함수 실행전의 `c`값과 실행후의 `c`값이 달라지기 때문에 부수효과가 발생한다. 따라서 순수함수라고 할 수 없다.

```javascript
var obj1 = { val: 10 };
function add4(obj, b) {
  obj.val += b;
}
console.log(obj1.val); //10
add4(obj1, 20); //이 함수를 실행하고 나니 obj1.val 값이 변경되었다.
console.log(obj1.val); //30
```
이 함수도 순수함수가 아니다.


```javascript
//다시 순수 함수
var obj1 = { val:10 };
function add5(obj1, b) {
  var obj2 = add5(obj1, 20);
  return { val: obj.val + b }
}
```
함수형 프로그래밍에서는 값을 변형해나가거나, 값을 다룰때 원래 초기화했던 값을 건드리지 않고, 외부의 상태를 변화시키지 않으면서
인자로 받은 값을 직접 변경시키지 않으면서 값을 다뤄나가는 프로그래밍 방식이다.

### 일급합수
함수를 값으로 다룰 수 있다. 변수에 담을 수 있다. 
```javascript
var f1 = function(a) {return a*a;}; //이렇게 함수를 변수에 담을 수 있다.



```

## ddd

