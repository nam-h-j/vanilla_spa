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
        //루트 패스가 에러인 페이지가 호출 될 때는 무조건 true 로 반환 하기
        route.path === "/error" ? true : location.pathname === route.path,
    };
  });
  //** find(array => condition) condition이 true 인 array 요소를 반환
  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  // 6. 404 not found 처리
  if (!match) {
    match = potentialMatches.find(
      (potentialMatch) => potentialMatch.route.path === "/error"
    );
  }

  console.log(potentialMatches);
  console.log(match);
};

document.addEventListener("DOMContentLoaded", () => {
  router();
});
