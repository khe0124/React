# Window 객체

Window객체는 전역객체라고 할 수 있다. 이번 장에서는 Window객체의 프로퍼티와 메서드에 대해 다룬다.

<br>

### 타이머
<code>setTimeout()</code>과 <code>setInterval()</code>을 사용하면 지정한 시간이 흐른 후 한 번 이상 호출되는 함수를 등록할 수 있다.

<br>

### 브라우저의 Location과 Navigation
Window 객체의 location 프로퍼티는 현재 창에 표시된 문서의 URL을 나타내는 Location 객체와 연결되어 있음.

```javascript
window.location === document.location //항상 true
```
