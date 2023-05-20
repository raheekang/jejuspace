# JejuSpace

<aside>
💡 기획의도

</aside>

제주도를 단순한 여행이 아닌 캠핑or차박을 목표로 가보신 경험이 있는분들은 소수에 불과하다고 생각합니다.
때문에 그 장벽을 허물고 다양한 경험을 추천드리고자 사이트를 제작하게 되었습니다.

<aside>
✔️ Free Design

</aside>

반응형 , 적응형에 규제 받지 않고 자유로운 디자인과 다양한 퍼포먼스를 통해 화면을 구현하였습니다. 또한 국내 페이지에선 잘 사용하지 않는 기능 위주로 코드를 작성했습니다.  가로스크롤, 마우스 커서 변경 등이 그 예시입니다. 

<aside>
✔️ Team project

</aside>

JejuSpace 페이지는 4명이 한 팀을 이루어 제작하였으며, 디자인 담당을 제외한 3명은 서로 다른 방법으로 화면을 구현하고, 매일 코드리뷰를 진행하였습니다. 때문에 디자인을 제외한 코드는 100% 구현했습니다.

<aside>
📌 유튜브 링크 및 이미지

</aside>

[https://youtu.be/qyyOpOR5OkQ](https://youtu.be/qyyOpOR5OkQ)


<img width="1791" alt="image" src="https://github.com/raheekang/eyebreath/assets/134080499/966e791a-6e36-4030-8072-99cbea24bfdf">


- createElement로 div를 삽입해 grayLayer를 적용해주었으며, 전역변수로 ismenuopen값을 false로줘 처음 메인 화면을 구동했을땐 메뉴가 열리지 않게 하였습니다. 또한 버튼 클릭 시 body값에 overflow hidden을 걸어 스크롤을 막았습니다. ease값을 exop효과를 통해 상단끝에서 하단끝으로 계단 형식으로 내려오게끔 설정하였습니다. 마지막으로 selected 가상요소를 넣어 classList를 추가하여 매개변수 값에 remove와 add로 컬러가 바뀌게 했습니다.


<img width="1791" alt="image" src="https://github.com/raheekang/eyebreath/assets/134080499/1552af62-a038-4f2a-a805-23e6cffad572">

- 제주도의 비주얼을 표현하기 위해 단조로운 세로스크롤보다 가로스크롤을 택하여 구현하였습니다.화면과 같이 backgroundcolor, titlecolor, images의 속도가 다 다르다는 것을 확인 할 수 있습니다. 초기값으로 visual wrap 높이를 20800로 설정하였고, 각각의 wrap의 window.innerWidth값과 Hight값을 구했습니다. 이후 window.addevent값으로 가로스크롤이 가능하게 하였습니다. 또한 스크롤 높이에 따른 컬러, 이미지의 값을 gsap.to로 애니메이션 효과를 주었습니다.


<img width="1791" alt="image" src="https://github.com/raheekang/eyebreath/assets/134080499/b66c118f-5784-48c8-a3f4-f61d44972277">


- 캠핑지 추천 contents 입니다. init으로 이미지의 초기값을 gsap.set 값으로 설정 후 각 이미지지의 스크롤 값을 구하여 gsap.to을 활용해 애니메이션을 주었습니다. 

<img width="1787" alt="image" src="https://github.com/raheekang/eyebreath/assets/134080499/380a6fa5-3a38-4365-8617-cc43bac0c72b">


- select menu contents 입니다. initEvent로 mouseenter event 함수로 좌우 이미지에 실행해주었으며 마찬가지로 mouseleave 함수 실행 시 이미지에서 마우스 비활성화 했을 시 실행시켜주었습니다. width 값은 일정한 % 수치로 계산하여 gsap.to를 활용하였습니다.

<img width="1782" alt="image" src="https://github.com/raheekang/eyebreath/assets/134080499/761e7f6a-a034-4ad8-b40c-2cfcf0e99408">


- 한라봉 마우스 커서 contents 입니다. 마우스 커서의 위치의 값을 positionX,Y로 전역함수 선언해준 후 이벤트를 실행시켜주었습니다. 이후 전체 마우스 커서 wrap에 또 하나의 다른 mousemove 이벤트를 실행시켜 clientX,Y /2 한 값에 커서를 위치시켜 이동이 부드럽고 용이하게 하였습니다.

<img width="1786" alt="image" src="https://github.com/raheekang/eyebreath/assets/134080499/343c1faf-d6b3-424c-bf8e-4ea0f4ea3e5b">


- 제주도 지역 추천 contents 입니다. 모든 이미지가 보이지 않게 하기 위해 초기값으로 gsap.set값을 적용시켜주었습니다. mouseenter, mouseleave를 통하여 이미지를 this 매개변수로 받아 gsap.to값으로 previousElementSibling 함수를 활용해 애니메이션 값을 지정해주었습니다.

