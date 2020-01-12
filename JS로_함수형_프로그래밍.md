# 자바스크립트로 알아보는 함수형 프로그래밍
- [강좌링크] (https://www.inflearn.com/course/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/#)


## 함수형 프로그래밍 정의, 순수함수

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
이 `add2`함수가 순수함수가 되려면 `c`가 상수여야 한다.


## 

