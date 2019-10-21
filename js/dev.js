import Tooltip from 'tooltip.js';

const alerts = document.querySelector('#alerts');

const tabs = document.querySelectorAll('.tab-itm');
const tabContent = document.querySelectorAll('.tab-content');

const navMenu = document.querySelector('#nav-menu');
const menuBtn = document.querySelector('#menu-btn');
const exitMenuBtn = document.querySelector('#nav-menu-exit-btn');

InitializeEverything();

function InitializeEverything() {
  MicroModal.init();
  tabs.forEach(tab => tab.addEventListener('click', switchTab));
  menuBtn.addEventListener('click', toggleNav);
  exitMenuBtn.addEventListener('click', toggleNav);
  switchTab(1);

  // Set up tooltips

  let alertBadge = new Tooltip(alerts, {
    title: '1 New Message',
    placement: 'bottom',
    options: {
      html: true,
      delay: { show: 300, hide: 1000 }
    }
  });
}

function toggleNav() {
  navMenu.classList.toggle('active');
}

function switchTab(e) {
  let curTab;
  if (typeof e === 'number') {
    curTab = e;
  } else {
    curTab = e.target.dataset.tabIdx;
  }
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
