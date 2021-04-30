## Javascript를 HTML에 링크할때 효율적인 방법

1. head 태그 안
   ```html
   <head>
        <script src="링크할 스크립트 주소">
        </script>
   </head>
   ```
   - 스크립트 파일이 다운로드, 실행될 동안 html의 다운을 중지하기 때문에 페이지의 속도가 느려진다.

1. body 태그 맨 아래
    ```html
    <body>
        <script src="링크할 스크립트 주소">
        </script>
    </body>
    ```
    - html을 전부 다운로드한 후 script를 받기 때문에 유저가 빠르게 정보를 수집할 수 있지만 웹페이지가 script에 많이 의존적이라면 전부 다운로드 될 때까지 결국 기다려야 한다.

1. head 태그 안에서 script 태그의 asyn 사용
    ```html
    <head>
        <script asyn src="링크할 스크립트 주소1.js">
        </script>
        <script asyn src="링크할 스크립트 주소2.js">
        </script>
        <script asyn src="링크할 스크립트 주소3.js">
        </script>
   </head>
    ```
    - html과 script 파일을 동시에 다운로드 하다가 script파일의 다운로드가 끝나면 잠시 html 다운을 멈추고 script를 실행시킨 후 마저 html 파일을 다운로드 한다.
        - 이 경우 다운로드 받는 시간을 절약 할 수 있지만 html의 뒤의 내용과 script가 연결되어 있다면 조금 위험할 수 있다고 한다.

    - 여러가지 script 파일이 링크 되었을 경우 먼저 다운로드가 끝난 순서대로 실행되기 때문에 순서가 중요한 파일을 다운로드 할 때는 적합한 방법이 아니다.

1. head 태그 안에 script태그의 defer 속성 사용
    ```html
    <head>
        <script defer src="링크할 스크립트 주소1.js">
        </script>
        <script defer src="링크할 스크립트 주소2.js">
        </script>
        <script defer src="링크할 스크립트 주소3.js">
        </script>
   </head>
    ```
    - html과 script파일을 동시에 다운로드 하며 두 파일 모두 다운로드된 후에 script 파일을 실행한다.
        - script 파일을 실행하는 순서는 위의 코드에 적힌 순서대로 실행한다.


## p.s : 'use strict';

```js
`use strict';
```
- 순수 javascript 를 작성하기 전에 앵간하면 적어주자!!
    - 자바스크립트는 굉장히 유연한 언어임으로 편리하기도 하지만 위험하기 때문에(ex: 선언하지도 않은 변수에 같은 할당 할 수 있는 경우가 있음) 위 명령어를 작성하여 이런 비상식적인 경우를 없애주도록 하자.