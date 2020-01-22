# 자바스크립트로 알아보는 함수형 프로그래밍
- [강좌링크](https://www.inflearn.com/course/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/#)


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

## 함수형으로 전환하기
### 1. 회원목록 map, filter
```javascript
var users = [
{id: 1, name: 'kim', age:24},
{id: 2, name: 'Lee', age:32},
{id: 3, name: 'Park', age:31},
{id: 4, name: 'Kang', age:28},
{id: 5, name: 'Moon', age:23},
{id: 6, name: 'Han', age:25},
{id: 7, name: 'Ko', age:21},
{id: 8, name: 'Kwon', age:38}
];

//1. 명령형 코드
//1) 30세 이상인 users를 추려낸다.
var temp_users = []; //새로운 배열을 만들기
for (var i=0; i<users.length; i++){
  if(users[i].age >= 30 ){
    temp_users.push(users[i]);
  }
}

//2) 30세 이상인 users의 names를 수집한다.
var names = [];
for (var i=0; i<temp_users.length; i++){//이미 위에서 30세 이상의 user를 걸렀기 때문에 temp_users로 제한둠
  names.push(temp_users[i].name);
}

//3) 30세 미만인 users를 거른다.
var temp_users = [];
for(var i =0; i<users.length; i++) {
  if(users[i].age < 30){
    temp_users.push(users[i]);
  }
}

//4) 30세 미만인 users의 ages를 수집한다.
var ages = [];
for(var i=0; i<temp_users.length; i++){
  ages.push(temp_users[i].age);
}

// **위와 같은 코드들은 너무나 중복이 많이 발생한다. 이것을 해결하기위해 filter와 map을 사용해서 리팩토링 해보자.
// 함수형 프로그래밍에서는 중복을 제거하거나 어떤 부분을 추상화할 때 단위로 함수를 사용한다.
// 어떤 조건을 필터링할 것인가를 위임

//2. _filter, _map으로 리팩토링
//이런 필터함수를 고차함수로라고도 한다.

// filter 이용하기
function _filter(users, predi){ //2.predi라는 함수에 위임
 var new_list = [];
  for(var i =0; i<users.length; i++) {
    if(predi(users[i].age)){//1.어떤 조건일때 이 함수로 들어올 것인가.
      new_list.push(users[i]);
    }
  }
  return new_list;
}

//예1) 30세 이상 유저
console.log(
_filter(users, function(user) { return user.age >= 30; }));

//예2) 30세 미만 유저
console.log(
_filter(users, function(user) { return user.age < 30; }));

// map 이용하기
function _map(list, mapper){
  var new_list = [];
  for(var i=0; i<list.length; i++){
    new_list.push(mapper(list[i]));
  }
  return new_list;
}

var over_30 = _filter(users, function(user) { return user.age >= 30; });

//이렇게 하면 30세 이상의 유저들만 잘 필터되어서, 조건에 맞는 사람들의 이름만 리턴이 된다.
var names = _map(over_30, function(user){
  return user.name;
})

//이렇게 하면 30세 미만의 유저들만 잘 필터되어서, 조건에 맞는 사람들의 나이만 리턴이 된다.
var under_30 = _filter(users, function(user) { return user.age < 30; });
var ages = _map(under_30, function(user){
  return user.age;
})

console.log(_map(
  _filter(users, function(user) { return user.age >= 30; }),
  function(user) { return user.name; }
));

console.log(_map(
  _filter(users, function(user) { return user.age < 30; }),
  function(user) { return user.age; }
));
```
코드를 고쳐줄 부분이 최소화가 된다. 보다 안정성 높고 테스트하기 쉬운 코드로 만들 수 있다.


### 2. each
위 예제의 filter,map 사용한 부분만 가져온다.
```javascript

// filter 이용하기
function _filter(users, predi){ //2.predi라는 함수에 위임
 var new_list = [];
  for(var i =0; i<users.length; i++) {
    if(predi(users[i].age)){//1.어떤 조건일때 이 함수로 들어올 것인가.
      new_list.push(users[i]);
    }
  }
  return new_list;
}

// map 이용하기
function _map(list, mapper){
  var new_list = [];
  _each(list, function(val){ //iter함수를 실행했기 때문에 하나씩 꺼내서 사용
    new_list.push(mapper(val)); //_each함수의 인자 함수를 실행하며 하나씩 실행
  });
  for(var i=0; i<list.length; i++){
    new_list.push(mapper(list[i]));
  }
  return new_list;
}

// each 이 each를 다른 함수안에서 사용
function _each(list, iter){ //리스트를 순회하면서 해당 i번째 값들을 순회하는 함수
  for(var i=0; i<list.length; i++){
    iter(list[]);
  }
  return list; //받은 값을 리턴하는 함수
}

```
이런식으로 코드를 작성하면 안정성,정확성이 높아진다.

### 3. 다형성
filter, map, each는 자바스크립트에 이미 있는 함수이다.
정확하게는 함수가 아니라 메서드이다. 객체의 상태에 따라 결과가 달라지는 메서드.
map,filter는 array에 사용되는 메서드인데 array스러운(유사배열)객체에 map,filter를 사용하고 싶을 수도 있다.
함수형 프로그래밍에서는 함수를 먼저 만들고 함수에 맞는 데이터를 적용하는 방식으로 코딩한다.

```javascript
console.log(
 [1,2,3,4].map(function(val){
    return val * 2;
 })
); //2,4,6,8

console.log(
 [1,2,3,4].filter(function(val){
    return val % 2;
 })
); //1,3

//이 코드는 에러가 나지만.
console.log(
  document.querySelectorAll('*').map(function(node){
    return node.nodeName;
  })
)

//미리 만들었던 _map함수를 사용하면 정상 동작한다.
console.log(
  _map(document.querySelectorAll('*'), function(node){
    return node.nodeName;
  })  
);


//내부다형성
//이전에 predi, iter, mapper 함수를 만들었다.

_map([1,2,3,4], function(v){ //이렇게 두번째 인자로 오는 함수를 콜백함수라고 부르는 경향이 있는데,
//함수형 프로그래밍에서는 이 두번째 인자 함수가 어떤 역할을 하냐에 따라 다양한 이름을 갖는게 중요
  return v+10;
});


```






