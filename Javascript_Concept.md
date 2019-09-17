# 초보자를 위한 Javascript 200제

고재도,노지연 님이 집필하신 Javascript 200제(정보문화사)를 참고하여 정리하였습니다.
<br>

<hr>

<br>

## 1. 자료형 확인하기
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

## 2. NaN값 확인하기
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

## 3. 정수 확인하기
NaN으로 숫자형임을 확인한 것처럼 정수인지 아닌지 판별할 수도 있다.
- <code>Number.isInteger</code>: Number객체가 정수인지 아닌지 확인하는 메소드이다. 정수면 true, 아니면 false를 반환한다.

</br>

## 4. 배열 자료형 확인하기
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

## 5. 문자열을 정수로 변환하기
문자열을 숫자형 정수로 변환하는 메소드이다. 
- <code>parseInt(값, 진수)</code>: 문자열을 정수로 변환. 전역에서 사용할 수 있는 내장함수이다.
```javascript
console.log(parseInt('23'));
```
23이라는 문자열을 정수로 변환한 값이 로그에 찍힌다.

</br>

## 6. 실수로 변환하기
- <code>parseFloat(값)</code>: 대입된 값을 부동 소수점 숫자로 변환한다.
```javascript
console.log(parseInt(15/2)); -- 7
console.log(parseFloat(15/2)); -- 7.5
```
소수점값이 있는 실수로 반환되었다.

</br>

## 7. 문자열 양 끝의 공백 없애기
문자열의 공백을 없애주는 메소드이다.
- <code>문자열.trim()</code>: 공백, 탭, 줄바꿈등을 삭제해준다.

</br>

## 8. 문자열 자르기 Ⅰ
긴 문자열에서 일부만 잘라낼 때 사용한다.
- <code>문자열.slice(시작인덱스, 종료인덱스)</code>: 시작값과 종료값을 넣어주면 시작~종료 사이에 있는 문자열을 반환한다.
```javascript
const str ="A Whole New World";
console.log(str.slice(8,12)); 
```
이렇게 하면 로그에 New라는 문자열만 찍힌다.

</br>

## 9. 문자열 자르기 Ⅱ
String 내장객체의 substring 메소드는 인자로 시작 지점의 인덱스와 종료 지점의 인덱스를 받는다.
- <code>문자열.substring(시작인덱스, 종료인덱스)</code>: 종료인덱스는 선택사항이다. substring메소드의 실행결과 값은 새로운 문자열을 반환하고 기존의 문자열을 변경하지 않는다.
```javascript
const str ="A Whole New World";
console.log(str.substring(10));
```
종료값을 지정해주지 않아서 w World라는 결과가 나왔다.

<br>

## 10. 문자열 자르기 Ⅲ
String 내장객체의 substr 메소드는 인자로 시작 지점의 인덱스와 길이를 받는다.
- <code>문자열.substr(시작인덱스, 길이)</code>: 지정된 인덱스부터 시작해서 지정된 문자수 또는 길이만큼의 새 문자열을 반환한다.
```javascript
const sentence = 'A Whole New World';
console.log(sentence.substr(8,7))
```
결과값은 New Wor

<br>

## 11. 문자열 길이 구하기
length는 String객체에 미리 정의되어 있는 기본 속성이다. 
- <code>문자열.length</code>
```javascript
const arr = ['New', 'A Whole New World'];

arr.forEach(str => {
  if (str.length < 10) console.log(str);
});
```
1. 변수 arr에 두가지 문자열을 요소로 갖고 있는 배열을 대입한다.
2. 변수 arr를 forEach로 순환하여 내부요소에 접근한다. 10보다 작은 문자열이란 조건을 걸었으므로 콘솔에 찍히는것은 New이다.

<br>

## 12. 문자열로 변환하기
자바스크립트의 모든 객체는 Object를 상속받는다. 모든 객체는 Prototype을 통해 Object의 내장 메소드 toString()에 접근하고 재정의(오버라이드)한다.
```javascript
const arr = {1, 2, 3};
console.log(arr.toString());

num.__proto__.toString = () => {
  return 'toString 덮어쓰기';
};
```
결과값: 1,2,3과 toString 덮어쓰기

<br>

## 13. 두 개의 문자열 하나로 합치기
String 내장객체 메소드 중에서 문자열 합치는 concat 메소드이다.
```javascript
const str1 = 'New';
const str2 = ', World';
console.log(str1.concat(str2));
```
결과값: New, World

<br>

## 14. 특정 위치의 문자 반환하기
String 내장객체 메소드인 charAt()는 숫자형 인자를 받는다. 안에 대입된 값은 문자열에서 인덱스를 가리키고 해당 위치 문자를 반환한다.
```javascript
const str = 'A Whole New World';
console.log(str.charAt(0));
console.log(str.charAt(4));
```
결과값: A, o

<br>

## 15. 특정 문자열 위치를 확인하기 Ⅰ
String 내장객체의 메소드 indexOf를 활용하면 문자열에서 특정 문자열이 있는다. 
```javascript
const arr =  ['A', 'Whole', 'New', 'World'];
const countE = (arr) => {
  let count = 0;
  arr.forEach((str) => {
    if(str.indexOf('e') > -1) count++;
  });
  return count;
}
console.log(`${arr}에 "e"가 있는 요소는 모두 ${countE(arr)}개 이다.`);

```
결과값: A,Whole,New,World에 "e"가 있는 요소는 모두 2개 이다.

<br>

## 16. 특정 문자열 위치 확인하기 Ⅱ
이전의 indexOf와 달리, lastIndexOf메소드는 문자열 뒤에서 부터 일치여부를 확인한다.
```javascript
const str = 'A Whole New World';
console.log(`"N"는 ${str.lastIndexOf('N')}번째 인덱스에 있다.`);
```
결과값: "N"는 8번째 인덱스에 있다.

<br>

## 17. 특정 문자열 포함 여부 확인하기
String 내장객체의 메소드 includes는 일치하는 문자열이 있는 경우 true, 없으면 false를 반환한다.
- <code>문자열.includes(문자열, 인덱스);</code>
```javascript
const str = 'A Whole New World'
console.log(str.includes('make')); //false
consold.log(str.include('New')); //true
```

<br>

## 18. 문자열 대소문자 변환하기
String 내장객체의 toLowerCase, toUpperCase를 사용하면 문자열의 대소문자를 변환할 수 있다.
```javascript
console.log('A Whole New World'.toLowerCase());
console.log('A Whole New World'.toUpperCase());
```
결과값: a whole new world, A WHOLE NEW WORLD

<br>

## 19. 배열 요소를 분할/변환하기
Array 내장객체의 메소드 from은 대입된 문자열 값을 구분자 없이 분할한다.
- <code>Array.from(배열로 변환될 값, 반환될 배열 내부 요소에 대한 callback 함수)</code>
```javascript
const str = '12345678';

const distributedArr = Array.from(str);
console.log(distributedArr);

const modifiedArr = Array.from(distributedArr, el => el * 2);
console.log(modifiedArr);
```
결과값: ['1','2','3','4','5','6','7','8'], ['2','4','6','8','10','12','14','16']

<br>

## 20. 문자열을 특정 구분자에 의해 배열로 나누기
String 내장객체의 split메소드는 문자열을 배열로 변환하여 반환한다. split인자로 받은 구분자로 문자열을 분리해 각각을 배열 요소에 넣습니다.
```javascript
const capitals = `Seoul,Korea
Copenhagen,Denmark
Tokyo,Japan`

capitals.split('\n').forEach(s =>{
  const capital = s.split(',')[0];
  const country = s.split(',')[1];
  console.log(`${capital} is in ${country}`)
});
```
결과값: Seoul is in Korea Copenhagen is in Denmark Tokyo is in Japan

<br>

## 21. 배열 뒤에 요소 추가하기
자바스크립트 배열 자료형은 Linked List 자료구조 형태를 갖고 있다. 따라서 배열 앞뒤로 요소를 추가하는 것이 가능하다. <br>
Array 내장객체 메소드 push는 배열 뒤에서 요소를 추가한다.
```javascript
const name = ['Kim'];
name.push('Ha');
name.push('Na');

name.forEach(name =>{
  console.log(name);
})
```
결과값: Kim <br>
Ha <br>
Na

<br>

## 22. 배열 앞에 요소 추가하기
Array 내장객체의 unshift메소드는 배열 맨 앞에 요소를 추가한다.
```javascript
const name = ['Kim'];
name.unshift('Ha');
name.unshift('Na');

name.forEach(name =>{
  console.log(name);
});
```
결과값: Na <br>
Ha <br>
Kim

<br>

## 23. 배열의 길이 구하기
문자열의 길이를 구하는 것처럼 length로 배열의 길이를 구할 수 있다.
```javascript
const ship = {
	max: 4,
	passengers: [],
	onBoard: function(name) {
		if (this.passengers.length === 4) {
			console.log(`This ship is full. ${name} can not board this ship.`);
		} else {
			this.passengers.push(name);
			console.log(`${name} boarded.`);
		}
	}
}

ship.onBoard('chloe');
ship.onBoard('jay');
ship.onBoard('david');
ship.onBoard('asher');
ship.onBoard('daniel');
console.log(ship.passengers);
```
결과값: <br>
chloe boarded. <br>
jay boarded. <br>
david boarded. <br>
asher boarded. <br>
This ship is full. daniel can not board this ship.
['chloe', 'jay', 'david', 'asher']

<br>

## 24. 배열 합치기
문자열과 마찬가지로 배열을 합칠 때도 concat메소드를 사용하다.
```javascript
const eng = ['a','b','c'];
const han = ['ㄱ','ㄴ','ㄷ'];
console.log(eng.concat(han));
```
결과값: ["a", "b", "c", "ㄱ", "ㄴ", "ㄷ"]

<br>

## 25. 배열에 특정 구분자 넣어서 String으로 변환하기(join)
Array객체의 메소드 join은 각 배열 요소를 병합하여 하나의 문자열로 변환한다.
```javascript
const lyrics = [
'I can show you the world',
'Shining shimmering splendid',
'Tell me princess',
'Now When did you last let your heart decide'
];

console.log(lyrics.join('.\n'));
```
결과값: <br>
I can show you the world. <br>
Shining shimmering splendid. <br>
Tell me princess. <br>
Now When did you last let your heart decide

<br>

## 26. 배열의 마지막 요소 추출하기
```javascript
const arr = [1, 2, 3];
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
```
결과값: <br>
3 <br>
2 <br>
1 <br>
undefined

<br>

## 27. 배열 맨 앞 요소 추출하기







