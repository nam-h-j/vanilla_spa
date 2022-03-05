// 6. 네비게이션으로 페이지 이동시 리프레시 방지 처리
// html에 작성된 data-link 프로퍼티를 통해서 네비를 클릭했을때
// href가 아닌 navigateTo를 실행하고 페이지를 바꾸는 처리를 추가
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

// 5. router를 만들어준다
const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("viewing dashboard") },
    { path: "/posts", view: () => console.log("viewing posts") },
    { path: "/settings", view: () => console.log("viewing settings") },
    { path: "/error", view: () => console.log("viewing 404") },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch:
        //호출된 페이지의 root 패스가 에러 페이지일 때 match를 true 로 반환
        route.path === "/error" ? true : location.pathname === route.path,
    };
  });
  //** find(array => condition) condition이 true 인 array 요소를 반환
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  // 404 not found 처리
  if (!match) {
    match = potentialMatches.find(
      (potentialMatch) => potentialMatch.route.path === "/error"
    );
  }
  match.route.view();
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    // 7. e.target 이 data-nav 프로퍼티를 가지고 있을때 navigateTo()를 실행
    if (e.target.matches("[data-nav]")) {
      e.preventDefault(); //클릭 이벤트에서 가지고 있는 기본 액션을 무효화 (href를 무효화)
      navigateTo(e.target.href);
    }
  });
  router();
});
