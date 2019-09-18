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
배열의 맨 앞 요소를 추출하는 메서드이다.
```javascript
const arr = [1, 2, 3];
console.log(arr.shifr());
console.log(arr.shifr());
console.log(arr.shifr());
console.log(arr.shifr());
```
결과값: <br>
1 <br>
2 <br>
3 <br>
undefined

<br>

## 28. 배열 특정 위치의 요소 추출하기
Array 객체의 메소드 spilce는 인덱스의 시작과 끝을 지정하여 배열 요소를 추출한다
- <code>배열.slice(시작인덱스, 끝인덱스)</code>
```javascript
const arr = ['a','b','c','ㄱ','d','e'];
console.log(`알파벳이 아닌 문자는 ${arr.slice(3, 4)}이다.`);
```
결과값: 알파벳이 아닌 문자는 ㄱ이다.

<br>

## 29. 배열의 특정 요소 위치 확인하기
Array 객체의 메소드 indexOf()는 대입된 값(1번째 인자)을 내부에서 검색한 후 값이 일치한다면 해당 인덱스를 반환한다.
- <code>배열.indexOf(검색할 값, 시작 인덱스)</code>
```javascript
const arr = ['car', 'cat', 'chair', 'chimebell', 'corn'];
console.log(`'cat' is in this index ${arr.indexOf('cat')}`);
```
결과값: 'cat' is in this index 1

<br>

## 30. 배열 순환하기 
Array 객체의 forEach메소드는 배열 내부 요소를 순환하고 각 요소에 대해 callback 함수를 실행한다.
- <code>배열.forEach(callback, 함수)</code>
```javascript
const arr = [
    { id: 0, name: '혁', age: 16 }, 
    { id: 1, name: '산호', age: 23 }, 
    { id: 2, name: '민우', age: 35 }, 
    { id: 3, name: '예지', age: 22 }
];

arr.forEach((el) => {
    console.log(el.name);
});
```
배열 arr의 forEach를 호출하고 배열의 내부요소는 callback함수의 변수 el로 전달된다.
배열 arr의 요소들은 객체자료형으로 통일되어 있다. 객체 el의 속성 name을 콘솔로 출력한다.
결과값: <br>
혁 <br>
산호 <br>
민우 <br>
예지 <br>

<br>

## 31. 배열 정렬하기
Array객체의 sort메소드는 인자로 비교함수를 대입해 배열요소들을 정렬한다. 이 때, 비교 함수에서 return으로 반환되는 비교값에 따라 순서가 정해진다.
- 비교값 > 0 : a가 b보다 작은 숫자의 인덱스, 즉 a가 b보다 앞에 위치한다.
- 비교값 < 0 : b가 a보다 작은 숫자의 인덱스, 위와 반대로 b가 a보다 앞에 위치한다.
- 비교값 = 0 : a와 b의 위치를 변경하지 않는다.
```javascript
const numArr1 = [2, 0, 3, 4, 1];
const numArr2 = [2, 0, 3, 4, 1];
const objArr = [
    { id: 2, name: 'Leo' }, 
    { id: 0, name: 'Daniel' }, 
    { id: 3, name: 'Asher' },
    { id: 4, name: 'Chloe' },
    { id: 1, name: 'Chloe' } 
];

numArr1.sort(function(a, b) { return a - b; });
numArr2.sort(function(a, b) { return b - a; });
objArr.sort(function(a, b) {
    if (a.name > b.name) return 1;
    else if (b.name > a.name) return -1;
    else return 0;
})

console.log(`오름차순 : ${numArr1}`);
console.log(`내림차순 : ${numArr2}`);
console.log(objArr);
```
결과값: <br>
오름차순 : 0,1,2,3,4 <br>
내림차순 : 4,3,2,1,0 <br>
0: {id: 3, name: "Asher"} <br>
1: {id: 4, name: "Chloe"} <br>
2: {id: 1, name: "Chloe"} <br>
3: {id: 0, name: "Daniel"} <br>
4: {id: 2, name: "Leo"} <br>

<br>

## 32. 배열의 순서를 반대로 나열하기
Array객체의 reverse 메소드는 배열 순서를 반대로 나열한다.
```javascript
const str = 'abcde';
const arr = str.split('');
arr.reverse();

console.log(arr.join(''));
```
결과값: edcba

<br>

## 33. 배열 요소가 특정 조건을 만족하는지 확인하기
Array 객체의 some메소드는 callback함수의 return값이 true를 반환할 때까지만 배열 요소를 순환한다. true를 반환하는 요소의 다음 요소들에 대해서는
더 이상 처리하지 않습니다.
```javascript
const arr = [
 {id: 0, name:'Tim', age: 14},
 {id: 1, name:'Jenny', age: 32},
 {id: 2, name:'Sarah', age: 50},
 {id: 3, name:'Thomas', age: 11},
 {id: 4, name:'Chris', age: 24}
];

const david = arr.some(el => el.name == 'david');
const minor = arr.some(el => el.age < 19);

console.log(david);
console.log(minor);
```
결과값: <br>
false (name이 david라는 객체가 없으므로)<br>
true (age가 19보다 작은 객체가 있으므로)

<br>

## 34. 모든 배열 요소가 특정 조건을 만족하는지 확인하기
Array 객체의 every메소드는 배열의 모든 요소가 callback 함수 조건을 만족하는지 확인한다. <br>
한 번이라도 조건을 만족하지 않으면 false, 모두 조건을 만족할 때만 true 
```javascript
const arr = [
 {id: 0, name:'Tim', age: 14},
 {id: 1, name:'Jenny', age: 32},
 {id: 2, name:'Sarah', age: 50},
 {id: 3, name:'Thomas', age: 11},
 {id: 4, name:'Chris', age: 24}
];

const Tim = arr.every(el => el.name == 'Tim');
const minor = arr.every(el => el.age < 19);

console.log(Tim);
console.log(minor);
```
결과값: <br>
false <br>
false

<br>

## 35. 배열의 특정 조건을 기준으로 필터링하기
Array 객체의 filter메소드는 인자로 대입된 callback함수를 통해 배열 내부를 순환하며, 요소 각각이 특정 조건을 만족하는지 확인한다.
```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredTwo = arr.filter(a => {    
    return a % 2 == 0;
});
console.log(filteredTwo);

const filteredThree = arr.filter(a => a % 3 == 0);
console.log(filteredThree);
```
결과값: <br>
[ 2, 4, 6, 8, 10 ] <br>
[ 3, 6, 9 ]


<br>

## 36. 배열의 특정 조건을 충족하는 요소 찾기
Array 객체의 find메소드는 인자로 대입된 callback함수를 통해 배열 내부를 순환하며, 특정 조건을 만족하는 첫 번째 요소를 반환한다.
```javascript
const arr = [
 {id: 0, name:'Tim', age: 14},
 {id: 1, name:'Jenny', age: 32},
 {id: 2, name:'Sarah', age: 50},
 {id: 3, name:'Thomas', age: 11},
 {id: 4, name:'Chris', age: 24}
];

const kid = arr.find(a => a.age === 11);
console.log(kid);
```
결과값: {id: 3, name: "Thomas", age: 11}

<br>

## 37. 배열요소 일괄 변경하기
배열의 요소를 일괄 변경해야할 때 Array객체의 map메소드를 활용한다. callback함수를 인자로 받아, callback함수의 return으로 반환되는 값들을 <br>
재조합하여 새로운 배열에 만든다.
```javascript
const arr = [
 {id: 0, name:'Tim', age: 14},
 {id: 1, name:'Jenny', age: 32},
 {id: 2, name:'Sarah', age: 50},
 {id: 3, name:'Thomas', age: 11},
 {id: 4, name:'Chris', age: 24}
];

const arr2 = arr.map(a => {
 a.age = a.age + 1;
 return a;
});

const arr3 = arr.map(a => a.name);

console.log(arr2);
console.log(arr3);
```
결과값: <br>
0: {id: 0, name: "Tim", age: 15} <br>
1: {id: 1, name: "Jenny", age: 33} <br>
2: {id: 2, name: "Sarah", age: 51} <br>
3: {id: 3, name: "Thomas", age: 12} <br>
4: {id: 4, name: "Chris", age: 25} <br>
["Tim", "Jenny", "Sarah", "Thomas", "Chris"]

<br>

## 38. 배열 내 값을 누적시키기
Array객체의 메소드 reduce는 배열 요소를 순환하며 정의된 callback함수에 의해 단일 값으로 누적시킨다.
- <code>배열.reduce((누적된값, 현재요소값, 현재인덱스, 원본배열) => {return 누적값으로 반환되는 값}, 초기값);</code>
```javascript
const arr = [1, 2, 3, 4, 5];

const res = arr.reduce((acc, a) => {
  return acc + a
}, 0);

console.log(res);
```
결과값: 15

<br>

## 39. 중첩된 배열을 단일하게 만들기
reduce메소드의 다른 활용 예제이다.
```javascript
const arr = [1, [1, 2], [4, 5, 6], ['a','b'], 'New'];

const res = arr.reduce((acc, a) => {
  return acc.concat(a);
}, []);

console.log(res);
```
결과값: [1, 1, 2, 4, 5, 6, "a", "b", "New"]

<br>

## 40. 객체에서 키만 추출하기
Object객체의 메소드 Keys를 활용해 객체의 키를 추출할 수 있다. 추출된 키는 배열로 반환된다.
```javascript
const object1 = {
  book: 'bible',
  music: 'ccm',
  style: 'modern',
  price: 11000
};

const arr = Object.keys(object1);
console.log(arr);
```
결과값: ["book", "music", "style", "price"]

<br>

## 41. 객체에서 값만 추출하기
Object객체의 values메소드를 이용하여 객체의 속성값만 추출할 수 있고 역시 배열로 반환된다.
```javascript
const arr = Object.values(객체);
```

<br>

## 42. 객체를 배열로 변환하기
entries메소드는 객체를 배열로 변경한다.
```javascript
const arr = Object.entries(객체);
```

<br>

## 43. 객체에 변경되지 않도록 하기
객체를 동결해서 다른 속성을 추가제거 못하게 막는다.
```javascript
Object.freeze(객체);
```

<br>

## 44. 객체에 속성 추가 못하게 하기
객체를 밀봉해서 다른 속성을 추가제거 못하게 막는다. 단 기존 속성은 변경하능하다.
```javascript
Object.seal(객체);
```

<br>

## 45. 객체 병합 확장하기
assign메소드는 인자로 대입된 객체들을 첫번째 인자인 객체를 기준으로 하나로 병합한다. 
```javascript
Object.assign(반환될 객체, ... 병합될 다른 객체들);
```

<br>

## 46. 진수 변환
toString()을 이용해서 진법변환을 한다.
```javascript
const num = 123;
const bin = num.toString(2);
const oct = num.toString(8);
const hex = num.toString(16);

console.log(bin);
console.log(oct);
console.log(hex);
```
결과값: <br>
1111011 <br>
173 <br>
7b <br>

<br>

## 47. 10진수 아닌 진법을 다른 진법으로 변환
parseInt함수를 이용해 숫자의 진법변환
```javascript
const bin = 1000010011;
const oct = 1023;
const hex = 213;

const dexByBin = parseInt(bin, 2);
const dexByOct = parseInt(oct, 8);
const dexByhex = parseInt(hex, 16);
const hexByOct = parseInt(oct, 8).toString(16);

console.log(dexByBin);
console.log(dexByOct);
console.log(dexByhex);
console.log(hexByOct);
```
결과값: <br>
531 <br>
531 <br>
531 <br>
213

<br>

## 48. 랜덤값 구하기
random 메소드로 난수값 구하기
```javascript
const genRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

for(let i =0; i<5; i++){
  console.log(genRandom(1, 10));
}
```
결과값: 결과값은 1~10사이에서 랜덤으로 정수값을 출력한다.

<br>

## 49. 특정 자리수에서 반올림
반올림하기
```javascript
const val = 482.193;
console.log(Math.round(val));
console.log(Math.round(val * 10) / 10);
console.log(Math.round(val * 100) / 100);

```
결과값: <br>
482 <br>
482.2 <br>
482.19

<br>

## 50. 특정 자리수에서 올림
올림하기
```javascript
Math.ceil(매개변수)
```

<br>

## 51. 특정 자리수에서 내림
내림하기
```javascript
Math.floor(매개변수)
```

<br>

## 52. 현재 시간을 원하는 포맷으로 출력
현재 시간을 출력해주는 메소드
```javascript
Date.prototype.yyyymmdd = function() {
    const yyyy = this.getFullYear();
    const mm = this.getMonth() < 9 ? 
                `0${this.getMonth() + 1}` : this.getMonth() + 1;
    const dd = this.getDate() < 10 ? 
                `0${this.getDate()}` : this.getDate();
    return '' + yyyy + mm + dd;
}

const date = new Date();
console.log(date.yyyymmdd());
```
결과값: 20190918

<br>

## 53. UTC기준 날짜 출력하기
세계 협정표준시를 기준으로 날짜를 출력해주는 메소드
```javascript
const date = new Date();
const dateUTC = Date.UTC(
	date.getUTCFullYear()
	, date.getUTCMonth()
	, date.getUTCDate()
	, date.getUTCHours()
	, date.getUTCMinutes()
	, date.getUTCSeconds()
);

console.log(new Date(dateUTC));
```
결과값: Wed Sep 18 2019 13:53:16 GMT+0900 (한국 표준시)

<br>

## 54. 두 개의 날짜 사이의 경과시간 계산
내용
```javascript

```

<br>

## 55. JSON을 문자열로 변환
내용
```javascript

```

<br>

## 56. JSON문자열을 JSON으로 변환
내용
```javascript

```

<br>

## 57. 정규표현식으로 대응되는 문자열 위치 확인
내용
```javascript

```

<br>

## 58. 정규표현식으로 문자열 확인
내용
```javascript

```

<br>

## 59. 정규표현식으로 특정문자의 포함 여부 확인
내용
```javascript

```

<br>

## 60. 정규표현식으로 문자열 변환
내용
```javascript

```

<br>

## 61. 정규표현식으로 문자열 치환
내용
```javascript

```

<br>

## 62. 반복가능한 객체와 반복자 이해
내용
```javascript

```

<br>

## 63. 문자열 순환
내용
```javascript

```

<br>

## 64. 배열 순환
내용
```javascript

```

<br>

## 65. Map객체에 요소 추가,삭제,확인
내용
```javascript

```

<br>

## 66. Map객체 크기 확인
내용
```javascript

```

<br>

## 67. Map객체 요소 나열
내용
```javascript

```

<br>

## 68. Map객체 순환 Ⅰ
내용
```javascript

```

<br>

## 69. Map객체 순환 Ⅱ
내용
```javascript

```

<br>
