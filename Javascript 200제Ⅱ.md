# 초보자를 위한 Javascript 200제

고재도,노지연 님이 집필하신 Javascript 200제(정보문화사)를 참고하여 정리하였습니다.
<br>

<hr>

<br>

## 1. DOM
DOM은 HTML과 XML을 위한 프로그래밍 인터페이스이다.
DOM은 자바스크립트를 통해 사용할 수 있고 DOM을 통해 문서의 구조, 스타일 그리고 내용을 변경할 수 있다.
HTML문서를 브라우저가 읽으면 그 문서에 해당하는 DOM이 만들어진다. 

</br>

## 2. DOM 이해하기
DOM은 인터페이스이고 크롬, 인터넷 익스플로러, 파폭과 같은 브라우저에서 해당 인터페이스를 구현한다.

<br>

## 3. DOM 탐색하기
DOM은 노드의 트리구조를 가진다. 그렇기 때문에 노드들은 서로 부모, 자식, 형제 등의 관계를 형성한다.

<br>

## 4. DOM속성과 태그속성 이해하기
Tag Attribute와 DOM의 Property의 차이점을 알아야한다.

<br>

## 5. DOM생성과 수정, 삭제

<br>

## 6. 이벤트 처리하기
모든 요소는 이벤트를 발생하는데 addEventListner를 통하여 해당 요소에서 발생하는 이벤트를 듣고 원하는 로직을 수행할 수 있다.
예를 들어 클릭 이벤트에 대해 리스너 함수를 정의하면 실제 사용자가 클릭 시 해당 리스너 함수가 호출된다.

<br>

## 7. 이벤트의 흐름
트리형태로 구성되는 DOM은 이벤트가 발생하면, 이벤트가 부모에서 자식으로 또는 자식에서 부모로 흘러간다.
이렇게 이벤트가 전파되는 방향에 따라 이벤트버블링과 이벤트캡처링으로 구분한다.
- 캡처링: 내려오는것
- 버블링: 올라가는것

<br>

## 8. 이벤트 전파 제어하기

<br>

## 9. 이벤트 위임 처리하기

<br>

## 10. 사용자 이벤트 생성하기

<br>

## 11. HTML폼 활용하기
폼요소는 사용자로부터 정보를 입력받는다. 그렇기 때문에 정보를 보여주기만 하는 다른 요소들과 다르게 정보의 흐름이 반대로 형성된다.

<br>

## 12. 스크롤 처리하기
스크롤 시 화면의 특정 영역을 고정하는 방법
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>DOM 네비게이션 예제</title>
  <link rel="stylesheet" href="./css/scroll.css">
</head>
<body>
  <section class="hero">
    <h1>스크롤을 아래로 내려보세요.</h1>
  </section>
  <nav>
    <a href="https://javascript-200.com">자바스크립트 200제</a>
  </nav>
  <section class="articles">
  </section>
  <script>
    const nav = document.querySelector('nav');
    const navTopOffset = nav.offsetTop;
    window.addEventListener('scroll', e => {
      if (window.pageYOffset >= navTopOffset) {
        nav.style.position = 'fixed';
        nav.style.top = 0;
        nav.style.left = 0;
        nav.style.right = 0;
      } else {
        nav.style.position = '';
        nav.style.top = '';
      }
    });
  </script>
</body>
</html>
```

<br>

## 13. 문서이동
location객체를 이용하여 링크된 문서로 이동시킨다.
```javascript
document.getElementById("location").innerHTML =
`
현재문서 URL: ${location.href}
현재문서 도메인명: ${location.hostname}
현재문서 경로명: ${location.pathname}
현재문서 프로토콜: ${location.protocol}
;`

document.getElementById("btn")
  .addEventListener('click', e => {
    location.assign('https://site.com');
  })
```

<br>

## 14. 브라우저 히스토리 이해
history객체 이용하기

<br>

## 15. 브라우저 로컬 스토리지 사용하기

<br>

## 16. 로컬 파일을 브라우저에서 읽기

<br>

## 17. iframe 조작하기

<br>

## 18. iframe과 메시지 교환하기

<br>

## 19. XMLHttpRequest로 비동기 통신처리

<br>

## 20. Fetch API를 활용한 비동기 통신처리

<br>



















