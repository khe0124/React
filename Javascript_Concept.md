# 초보자를 위한 Javascript 200제

고재도,노지연 님이 집필하신 Javascript 200제(정보문화사)를 참고하여 정리하였습니다.
</br>

<hr>

### 자료형 확인하기
- <code>typeof</code>: 특정 원시 자료형 확인, 원시자료형과 객체형을 구분할 때
- <code>instanceof</code>: 객체를 확인하고 싶을때, 어떤 종류의 객체인지
위 두 가지로 자료형을 주로 확인한다.

```javascript
console.log(typeof str === 'string');
console.log(typeof notCalled === 'undefined');

console.log(str instanceof String);
console.log(notCalled instanceof undefined);
```
결과는 순서대로 true,true,true,false

### NaN값 확인하기
- <code>Number.isNaN</code>: Number객체의 isNaN메소드는 NaN을 구별한다. NaN이면 true를 반환, 아니면 false를 반환한다.

```javascript
function verifyNumber(n) {
 if (!n || Number.isNaN(n)) return 0;
 return n; 
}
const num1 = verifyNumber(15); // 15
const num2 = verifyNumber(undefined); // 0
const num3 = verifyNumber(null); // 0
const num4 = verifyNumber(NaN); // 0
console.log(num1 + num2 + num3 + num4);
```
