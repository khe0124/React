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
#### URL파싱
- Window객체의 location 프로퍼티는 Location객체를 가리킨다. 
- Location객체는 창에 표시되고 있는 현재 문서의 URL이다. 
- Location객체의 href 프로퍼티에는 완전한 URL 문자열이 저장되어있다.
- toString() 메서드로 href 프로퍼티의 값을 리턴.
- protocol과 host, hostname, port, pathname, search, hash 등의 프로퍼티는 URL 다양한 특성이다.

```javascript
*이 함수는 URL의 쿼리스트링으로부터  '&'로 구분된 인자인 이름=값 쌍을 해석한다.
*이름=값 쌍을 객체 프로퍼티로 저장 후 해당 객체 리턴.
var args = urlArgs();
var q = args.q || "";
var n = args.n ? parseInt(args.n) : 10;

functio urlArgs() {
  var args = {};
  var query = location.search.substring(1);
  var pairs = query.split("&");
  for(var i = 0; i<pairs.length; i++){
    var pos = pairs[i].indexOf('=');
    if (pos == -1) continue;
    var name = pairs[i].substring(0,pos);
    var value = pairs[i].substring(pos+1);
    value = decodeURIComponent(value);
    args[name] = value;
  }
  return args
}
 
```
<br>

### 브라우징 히스토리
Window객체의 history프로퍼티는 History객체를 말한다. History객체 모델은 브라우징 히스토리를 문서와 문서 상태 목록으로 저장한다.
History객체의 length프로퍼티는 브라우징 히스토리목록의 갯수를 나타낸다.
- back()과 forward()메서드가 있다. 브라우저의 뒤로가기 앞으로가기
- go()메서드는 정수를 인자로 받아 히스토리 목록의 몇 단계씩을 앞으로(양수) 또는 뒤로(음수) 이동한다.
- history.back()을 메인 창에서 호출하면 자식 창 중 하나가 이전 문서를 보여주려 뒤로 이동하지만 히스토리의 현재 상태는 메인창을 유지한다.

<br>

### 브라우저와 화면정보
#### Navigator 객체
Window객체의 navigator프로퍼티는 브라우저 제조사와 버전 정보를 포함하고 있는 Navigator 객체를 말한다.
과거에는 일반적으로 스크립트가 실행되는 브라우저가 IE인지 넷스케이프인지 구분하는데 Navigator객체를 사용했다.
요즘에는 스니핑(UserAgent 문자열을 가지고 브라우저를 판별하는 방식)은 새로운 브라우저나 기존 브라우저의 <br>
새버전이 발표되어도 변함없이 동작해야 하기 때문에 약간의 문제가 있다.
오늘날에는 기능테스팅을 더 선호하지만 여전히 브라우저 스니핑은 특정브라우저의 특정버전에서 발생하는 버그에 대처해야하는 상황에 여전히 쓸만하다.<br>Navigator객체는 실행중인 프라우저에 대한 4가지의 프로퍼티를 제공하고 이를 브라우저 스니핑에 활용할 수 있다.

- appName: 웹브라우저의 전체 이름. 이 프로퍼티는 IE에서 Microsoft Internet Explorer이고 파이어폭스에선 Netscape이다.
- appVersion: 이 프로퍼티는 보통 숫자로 시작하며, 브라우저 제조사와 버전 정보등을 포함한 문자열이 따른다.
- userAgent: 브라우저가 USER-AGENT HTTP헤더로 보낸 문자열이다. 이 프로퍼티는 보통 appVersion에 있는 모든정보와 부가적으로 상세정보를 포함한다.
- platform: 브라우저를 실행하고 있는 OS를 식별하는 문자열이다.

<br>

#### Screen 객체
Window객체의 screen프로퍼티는 사용자의 디스플레이와 사용 가능한 색상수에 관련된 정보를 제공하는 Screen객체를 가리킨다.
- width, height: 디스플레이의 픽셀크기
- availWidth, availHeight: 실제 사용 가능한 영역의 디스플레이 크기
- colorDepth:화면의 픽셀 당 표시 가능 비트 수를 나타낸다.

<br>

### 대화상자
Window객체는 사용자에게 간단한 대화상자를 보여주는 세 개의 메서드를 제공한다.
- alert(): 알림 확인
- confirm():boolean 확인/취소
- prompt():메시지 보여준 후 사용자 입력 -> 해당 문자열 리턴.
<code>confirm()</code>과 <code>prompt()</code>메서드는 브라우저를 중단시킨다. 사용자가 처리 하기 전까지 결과를 리턴하지 않음.
좀 더 복잡한 메서드로는 <code>showModalDialog</code>도 있다.

<br>

### 오류 처리
Window 객체의 onerror프로퍼티는 처리되지 않은 예외가 발생했을 때 호출스택까지의 모든 경로와 <br>
브라우저의 자바스트립트 콘솔에 출력되는 오류 메시지가 전달되는 이벤트 핸들러다. try/catch문 참조

<br>

### Window 프로퍼티의 문서 요소
HTML문서상의 어떤 요소에 id속성을 부여했고 Window객체에 같은 이름의 프로퍼티가 이미 존재하지 않는다면, 이 요소의 id속성을 이름으로 하고 해당 요소를 나타내는 HTMLElement 객체를 값으로 가지는 비열거형 프로퍼티가 Winodw객체에 제공된다. 
- HTML요소에 id값을 부여하고(이 id값으로 예약어는 사용할 수 없음) document.getElementById("id값");으로 부름
- HTML요소에 name이 부여될 때도 id값과 같이 전역변수로 취급된다.
- 두 요소의 id가 같을 수 없으며, 한 id는 문서상에서 유일해야한다. 
- 그러나 name 속성은 여러개 사용할 수 있다.
- name속성과 id속성이 같으면 해당 name속성을 암묵적으로 존재하는 전역변수에 유사 배열 형태로 저장한다.

<br>

### 다중 창과 프레임
각 탭은 브라우저 문맥상 독립적이다. 한 탭은 저마다 다른 탭과는 단절된 독립적인 Window객체를 가진다.
<code><iframe></code>, <code><frameset></code> , <code><frame></code> 요소 또한 중첩된 내부 브라우징 문맥 생성한다.
- Window.open(): 지정한 URL을 새 창 혹은 현재 창에 불러오고 해당 Window객체 리턴
- HTML target속성: "_blank","_parent","_top"과 같은 값을 사용할 수 있다.
- Window.close(): 이 메서드는 창을 닫는다.

<br>

