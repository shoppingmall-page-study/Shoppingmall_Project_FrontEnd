export const makeSpinner = () => {
    const spinner = document.createElement('div');
    const spinnerImage = document.createElement('img');
    spinner.classList.add('loading');
    spinnerImage.setAttribute('src', 'images/spinner.gif');
    spinnerImage.classList.add('spinner');
    spinner.appendChild(spinnerImage);
    return spinner;
  };
  
export const makeSkeleton = () => {
    const skeleton = document.createElement('li');
    const skeletonImage = document.createElement('div');
    const skeletonText = document.createElement('p');
    skeleton.classList.add('skeleton');
    skeletonImage.classList.add('skeleton__image');
    skeletonText.classList.add('skeleton__text');
    skeletonText.textContent = ' ';
    skeleton.appendChild(skeletonImage);
    skeleton.appendChild(skeletonText);
    return skeleton;
};

function Skeleton(){
  const list = document.querySelector('.main'); //이루 새로운 요소를 추가할 때 사용될 부모 요소입니다.
  const items = document.querySelectorAll('.card'); //현재 화면에 출력되고 있는 카드 아이템들을 담고 있는 배열입니다.
  const skeletonItems = Array.from({ length: items.length }, () => //8개의 스켈레톤 요소를 담고 있는 배열입니다.
    makeSkeleton()
  );
  const spinner = makeSpinner(); //신규 콘텐츠 로드 중 스켈레톤 UI와 합께 출력할 스피너 요소입니다.
}
export default Skeleton