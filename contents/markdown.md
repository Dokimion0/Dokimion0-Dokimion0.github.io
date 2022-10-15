---
date: '2022-10-08'
title: 'Markdown 사용방법'
categories: ['Markdown']
summary: ''
thumbnail: './test.png'
---

## 마크다운 문법

---

### 1. 제목(Headers)

```
# h1
## h2
### h3
#### h4
##### h5
###### h6
```

- # h1
- ## h2
- ### h3
- #### h4
- ##### h5
- ###### h6

```
This is an H1
============

This is an H2
-------------
```

# This is an H1

## This is an H2

### 2. 강조(Emphasis)

```
*single asterisks*
_single underscores_
**double asterisks**
__double underscores__
~~cancelline~~
```

- _single asterisks_
- _single underscores_
- **double asterisks**
- **double underscores**
- ~~cancelline~~

### 3. 링크

```
[link keyword][id]
[id]: URL "Optional Title here"

Link: [Google](http://google.com)

//code
Link: [Google][googlelink]
[googlelink]: https://google.com "Go google"

- 외부링크: <http://example.com/>
- 이메일링크: <address@example.com>

```

Link: [Google](http://google.com)  
Link: [Google][googlelink]

- 외부링크: <http://example.com/>
- 이메일링크: <address@example.com>

[googlelink]: https://google.com 'Go google'

### 4. 줄바꿈

```
줄바꿈을 하기위해서는 // 두 번 띄어쓰기
두번의 띄어쓰기를  // 두 번 띄어쓰기
활용해야한다
```

줄바꿈을 하기위해서는  
두번의 띄어쓰기를  
활용해야한다

### 5. 코드강조

```
`background`혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있습니다.
```

`background`혹은 `background-image` 속성으로 요소에 배경 이미지를 삽입할 수 있습니다.

````
```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
````

```html
<a href="https://www.google.co.kr/" target="_blank">GOOGLE</a>
```

```
```css
.list > li {
  position: absolute;
  top: 40px;
}
```

```css
.list > li {
  position: absolute;
  top: 40px;
}
```


