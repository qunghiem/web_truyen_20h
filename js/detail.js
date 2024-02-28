const queryParams = new URLSearchParams(window.location.search);

import { getQueryParams } from "./Const.js";
async function getChapterByNovelID() {
  try {
    const listChapter = await fetchApi(
        "http://18.136.196.199:4000/novels/get-chapter-in-novel",
        "GET",
        { novelCode: item.novelCode }
    );
    console.log(listChapter);
    // Handle the response
} catch (error) {
    console.error('Error fetching chapters:', error);
    // Handle the error
}

  return listChapter;
}
console.log(getChapterByNovelID());
const item = getQueryParams();
console.log(item);

let detail = document.querySelector("#detail");
let html = `
<div class="detail-top">
  <img scroll="no" overflow="hidden" class="detail-image" scrolling="no"
    src="${item.descriptionImage}"
    width="176px" height="270" allow="autoplay" title=overflow="hidden"></img>
  <div class="detail-content">
    <h3 class="detail-title">${item.name}</h3>
    <p class="detail-author">Tác giả: <a href="">${item.author}</a></p>
    <p class="detail-view">Luợt xem: <span>${item.view}</span></p>

    <button class="read" onclick="location.href='./read.html?description=${item.descriptionURL}'">Đọc truyện</button>


    <div class="rate">
            <a>
              <i class="fa-solid fa-hand-holding-dollar"></i>
              <p>Ủng hộ</p>
            </a>
            <a>
              <i class="fa-solid fa-star"></i>
              <p>Đánh giá</p>
            </a>
            <a>
              <i class="fa-solid fa-calendar-check"></i>
              <p>Đề cử</p>
            </a>
    </div>


 


  </div>
</div>
<div class="detail-bottom">
  <ul>
    <li class="desc dont-need"><a>GIỚI THIỆU</a></li>
    <li class="list-chapter-1 need" onclick="hamNone()"><a>DANH SÁCH CHƯƠNG</a>
    </li>
    <li class="cmt need"><a>BÌNH LUẬN</a></li>
  </ul>

    <ul id="list-chapter">
        <li><a href="">Chương 1</a></li>
        <li><a href="">Chương 2</a></li>
        <li><a href="">Chương 3</a></li>
        <li><a href="">Chương 4</a></li>
    </ul>




  <h3>${item.name}</h3>

  <div class="iframe"> 
    <iframe scroll="no" overflow="hidden" class="detail-image" scrolling="no"
        src="${item.description}"
        width="100%" height="1000px" allow="autoplay" title=overflow="hidden"></iframe>
  </div>
  
</div>

`;

detail.innerHTML = html;
console.log(html);
