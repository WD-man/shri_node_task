const fileTab = document.body.querySelector(`.first`);
const branchTab = document.body.querySelector(`.second`);

const fileList = document.body.querySelector(`.file`);
// const branchList = document.body.querySelector(`.repository__branch-list`);

fileList.classList.remove(`section_visibility_invisible`);
fileTab.classList.add(`section_border-color_red`);
fileTab.classList.remove(`text_view_ghost`);
fileTab.classList.add(`repository__tab-item_state_current`);
// branchList.classList.add(`repository__list_status_invisible`);

fileTab.addEventListener(`click`, () => {
  fileList.classList.remove(`section_visibility_invisible`);
  fileTab.classList.add(`section_border-color_red`);
  fileTab.classList.remove(`text_view_ghost`);
  fileTab.classList.add(`repository__tab-item_state_current`);

  // branchList.classList.remove(`section_visibility_invisible`);
  branchTab.classList.remove(`section_border-color_red`);
  branchTab.classList.add(`text_view_ghost`);
  branchTab.classList.remove(`repository__tab-item_state_current`);
});

branchTab.addEventListener(`click`, () => {
  // branchList.classList.remove(`repository__list_status_invisible`);
  branchTab.classList.add(`section_border-color_red`);
  branchTab.classList.remove(`text_view_ghost`);
  branchTab.classList.add(`repository__tab-item_state_current`);

  fileList.classList.add(`section_visibility_invisible`);
  fileTab.classList.remove(`section_border-color_red`);
  fileTab.classList.add(`text_view_ghost`);
  fileTab.classList.remove(`repository__tab-item_state_current`);
});
