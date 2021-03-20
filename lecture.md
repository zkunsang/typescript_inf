## 타입 스크립트 설치부터 컴파일까지

설치

> `npm init`

설치

> `npm install typescript`

`npx tsc --init` 명령어는 **node_modules/.bin/tsc** 를 실행 시켜준다.

tsconfig.json

- target
- module
- strict: true

---

src폴더 생성 > 1.ts파일 작성

빌드 방법

> `npx tsc`

타입 정보는 컴파일 타임에만 사용된다.

외부 패키지 설치

> `npm install lodash`

*1.ts*에서 isEqual()을 사용하면 에러 표시가 나타나게 된다  
해당 타입에 대한 정보가 없기 때문에 발생!

> `npm install @types/lodash`

를 통해 타입 정보를 저장하면 임포트 사용 가능

---

## 타입 스크립트 실행 방법

1. node를 통한 실행 하지만 **너무 번거로워**

```terminal
$> npx tsc
$> node src/1.js
```

2. code runner 설치  
   원하는 블록을 잡고  
   window ctrl + alt + n  
   하지만 윈도우에서 안됨

---

### export {}의 의미

같은 파일에 같은 변수가 있을 때 다른 파일에 있는게 중복된걸로 판단된다.  
이름 충돌로 인한 것을 방지하기 위해 export를 하게 되었다. export를 하면 모듈로 인식하게 됨
