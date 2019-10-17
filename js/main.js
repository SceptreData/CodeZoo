const tabs = document.querySelectorAll('.tab-itm');
const tabContent = document.querySelectorAll('.tab-content');

InitializeEverything();

function switchTab(e) {
  const curTab = e.target.dataset.tabIdx;
  clearTabs();
  setActiveTab(curTab);
}

function clearTabs() {
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
    tabContent[i].classList.add('hidden');
  }
}

function setActiveTab(idx) {
  tabContent[idx].classList.remove('hidden');
  tabs[idx].classList.add('active');
}

function hide(elt) {
  elt.classList.add('hidden');
}

function InitializeEverything() {
  MicroModal.init();
  tabs.forEach(tab => tab.addEventListener('click', switchTab));
}
