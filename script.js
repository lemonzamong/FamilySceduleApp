// 페이지 로드 시 호출
window.onload = function() {
  const footer = document.querySelector('footer'); // 푸터 요소 선택
  footer.classList.add('hidden-footer'); // 페이지 로드 시 푸터 숨기기
  adjustMainHeight(); // 메인 높이 조정

  const header = document.querySelector('header'); // 헤더 요소 선택
  header.classList.add('fixed-header'); // 헤더를 고정

  // 초기 섹션 설정 (메인 화면으로 설정)
  showSection('main'); // 메인 화면으로 초기화
};

// 다른 함수 유지
function showSection(sectionId) {
  const sections = document.querySelectorAll('main > section');
  const links = document.querySelectorAll('nav ul li a');
  const header = document.querySelector('header'); // 헤더 요소 선택
  const footer = document.querySelector('footer'); // 푸터 요소 선택
  const body = document.body; // body 요소 선택

  // 모든 섹션 숨기기
  sections.forEach(section => {
    section.classList.add('hidden');
  });

  // 선택한 섹션 보이기
  document.getElementById(sectionId).classList.remove('hidden');

  // 메인화면일 때 스타일 조정
  if (sectionId === 'main') {
    header.classList.add('fixed-header'); // 헤더 고정
    footer.classList.add('hidden-footer'); // 푸터 숨기기
    body.classList.add('main-screen'); // 메인화면에서 body 클래스 추가
  } else {
    header.classList.remove('fixed-header'); // 기본 위치로 복귀
    footer.classList.remove('hidden-footer'); // 푸터 보이기
    body.classList.remove('main-screen'); // 다른 섹션일 때 body 클래스 제거
  }

  // 활성 링크 업데이트
  links.forEach(link => {
    link.classList.remove('active');
  });

  const activeLink = document.querySelector(`nav ul li a[href="javascript:void(0);"][onclick*="${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // 메인 섹션 높이 조정
  adjustMainHeight(); // 메인 높이 조정 함수 호출
}

// 메인 높이 조정 함수
function adjustMainHeight() {
  const mainSection = document.getElementById('main');
  const width = window.innerWidth; // 현재 화면 너비
  const height = window.innerHeight; // 16:9 비율에 따른 높이 계산
  mainSection.style.height = `${height}px`; // 높이 설정
};

// 리사이즈 시에도 호출
window.onresize = adjustMainHeight;
