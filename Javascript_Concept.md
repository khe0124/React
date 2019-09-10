# 초보자를 위한 Javascript 200제

고재도,노지연 님이 집필하신 Javascript 200제(정보문화사)를 참고하여 정리하였습니다.
</br>

<hr>

### 1. 자료형 확인하기
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

</br>

### 2. NaN값 확인하기
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
위와 같이 NaN여부를 검증 한 후 모든 값이 정상숫자임을 확인하고 나서 산술연산한다.

</br>

### 3. 정수 확인하기
NaN으로 숫자형임을 확인한 것처럼 정수인지 아닌지 판별할 수도 있다.
- <code>Number.isInteger</code>: Number객체가 정수인지 아닌지 확인하는 메소드이다. 정수면 true, 아니면 false를 반환한다.

</br>

### 4. 배열 자료형 확인하기
배열인지 아닌지 자료형 확인할 때 사용하는 메소드이다.
- <code>Array.isArray(배열)</code>: 배열 자료형 여부를 true,false로 반환한다.
```javascript
function callRoll(students) {
    if (!Array.isArray(students)) return;
    
    students.forEach((student) => {
        console.log(`Are you here, ${student}`);
    });
}

const students = ['Jun', 'Ali', 'Murry', 'Toby'];
callRoll(students);
```
students배열안에 요소들이 있으므로 callRoll로 배열의 요소가 하나씩 반환된다.

</br>

### 5. 문자열을 정수로 변환하기
문자열을 숫자형 정수로 변환하는 메소드이다. 
- <code>parseInt(값, 진수)</code>: 문자열을 정수로 변환. 전역에서 사용할 수 있는 내장함수이다.
```javascript
console.log(parseInt('23'));
```
23이라는 문자열을 정수로 변환한 값이 로그에 찍힌다.

</br>

### 6. 실수로 변환하기
- <code>parseFloat(값)</code>: 대입된 값을 부동 소수점 숫자로 변환한다.
```javascript
console.log(parseInt(15/2)); -- 7
console.log(parseFloat(15/2)); -- 7.5
```
소수점값이 있는 실수로 반환되었다.

</br>

### 7. 문자열 양 끝의 공백 없애기
문자열의 공백을 없애주는 메소드이다.
- <code>문자열.trim()</code>: 공백, 탭, 줄바꿈등을 삭제해준다.

</br>

### 8. 문자열 자르기 Ⅰ
긴 문자열에서 일부만 잘라낼 때 사용한다.
- <code>문자열.slice(시작인덱스, 종료인덱스)</code>: 시작값과 종료값을 넣어주면 시작~종료 사이에 있는 문자열을 반환한다.
```javascript
const str ="A Whole New World";
console.log(str.slice(8,12)); 
```
이렇게 하면 로그에 New라는 문자열만 찍힌다.

</br>

### 9. 문자열 자르기 Ⅱ
String 내장객체의 substring 메소드는 인자로 시작 지점의 인덱스와 종료 지점의 인덱스를 받는다.
- <code>문자열.substring(시작인덱스, 종료인덱스)</code>: 종료인덱스는 선택사항이다. substring메소드의 실행결과 값은 새로운 문자열을 반환하고 기존의 문자열을 변경하지 않는다.
```javascript
const str ="A Whole New World";
console.log(str.substring(10));
```
종료값을 지정해주지 않아서 w World라는 결과가 나왔다.












