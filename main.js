
// 쿠키를 설정하는 함수
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // 유효 기간 계산
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/;domain=${window.location.hostname}`; // 쿠키 저장
}

// 쿠키를 가져오는 함수
function getCookie(name) {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';'); // 쿠키 문자열을 세미콜론으로 분리
    for (const cookie of cookies) {
        let c = cookie.trim(); // 공백 제거
        if (c.startsWith(nameEQ)) {
            return decodeURIComponent(c.substring(nameEQ.length)); // 쿠키 값 반환
        }
    }
    return null; // 쿠키가 없으면 null 반환
}

// 쿠키의 값을 삭제하는 함수
function clearCookieValue(name) {
    // 현재 경로와 도메인을 쿠키 삭제에 사용
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
}

// 기본값으로 사용할 ID
const defaultID = "ectmovertest";

// 쿠키에서 테스트몰 아이디를 가져옵니다
let testID = getCookie("testID");

// 쿠키에 ID가 없으면 사용자에게 입력받습니다
if (!testID) {
    testID = prompt("테스트몰 아이디를 입력해주세요", defaultID);
    if (testID) {
        setCookie("testID", testID, 30); // 쿠키에 ID를 저장합니다. 30일 동안 유효합니다.
    }
}

// 링크들의 기본 URL
const baseURL = `https://${encodeURIComponent(testID)}.cafe24.com`;

// 링크들에 대한 정보
const links = [
    { id: 'link1', path: '/admin/php/shop1/c/member_admin_l.php' },
    { id: 'link2', path: '/admin/php/shop1/b/board_admin_l.php' },
    { id: 'link3', path: '/disp/admin/shop1/shop/frame?menu=1599' },
    { id: 'link4', path: '/admin/php/shop1/c/member_admin_f.php' },
    { id: 'link5', path: '/category/%EB%8C%80%EB%B6%84%EB%A5%98-outerwear/42/' },
    { id: 'link6', path: '/disp/admin/shop1/product/productmanage' },
    { id: 'link7', path: '/disp/admin/shop1/shop/multishopList' }
];

// 각 링크에 대해 href 속성을 설정
links.forEach(link => {
    const hrefValue = baseURL + link.path;
    document.getElementById(link.id).setAttribute('href', hrefValue);
});

// "테스트몰 아이디 재입력" 링크에 대한 기능 추가
// document.querySelector('.cancel a').addEventListener('click', function(event) {
//     event.preventDefault(); // 링크 기본 동작 방지
//     clearCookieValue("testID"); // 쿠키 값 삭제
//     location.reload(); // 페이지 새로고침
// });



