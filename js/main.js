const tabs = document.querySelectorAll('.tab-itm');
const tabContent = document.querySelectorAll('.tab-content');

tabs.forEach(tab => tab.addEventListener('click', switchTab));

function switchTab(e) {
  const curTab = e.target.dataset.tabIdx;
  clearTabContent();
  tabContent[curTab].classList.remove('hidden');
}

function clearTabContent() {
  for (let tab of tabContent) {
    tab.classList.add('hidden');
  }
}

const activePoppers = [];

const deleteBtn = document.querySelector('.delete-btn');
const deleteMsgPop = document.querySelector('.delete-msg-popper');
const closePop = document.querySelector('.close-popper-btn');

const popInstance = new Popper(deleteBtn, deleteMsgPop, {
  placement: 'left',
  modifiers: {
    computeStyle: {
      enabled: true,
      fn(data) {
        data.styles = {
          ...data.styles,
          position: 'fixed',
          left: `${(window.innerWidth - data.popper.width) / 2}px`,
          top: '50%',
          transform: 'translateY(-50%)',
          height: '25%'
        };
        return data;
      }
    }
  }
});

deleteBtn.addEventListener('click', e => {
  if (deleteMsgPop.classList.contains('hidden')) {
    deleteMsgPop.classList.remove('hidden');
    forceUpdate(popInstance);
    activePoppers.push(deleteMsgPop);
  } else {
    removePoppers();
  }
});

closePop.addEventListener('click', e => {
  hide(deleteMsgPop);
});

function removePoppers() {
  for (let popper of activePoppers) {
    popper.classList.add('hidden');
  }
  activePoppers.length = 0;
}

// window.addEventListener('click', e => {
//   const target = e.target;
//   console.log(target);
//   console.log(deleteMsgPop);
//   if (target === deleteMsgPop) return;
//   hide(deleteMsgPop);
// });

function hide(elt) {
  elt.classList.add('hidden');
}

//  I have absolutely no idea why this works.
//  The Popper window won't be initially positioned correctly without it.
//   Why 4 calls to update? Because three just wasn't enough!
function forceUpdate(popper) {
  popper.scheduleUpdate();
  popper.scheduleUpdate();
  popper.scheduleUpdate();
  popper.scheduleUpdate();
}
