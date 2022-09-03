/* eslint-disable prefer-arrow-callback */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

// Nav
var btnOpenNav = document.querySelector('.navbar .navbar__btn-open-nav');
var btnCloseNav = document.querySelector('.nav .nav__btn-close-nav');
var nav = document.querySelector('nav');

var openNav = function() {
  nav.classList.add('show-nav');
};

var closeNav = function() {
  nav.classList.remove('show-nav');
};

btnOpenNav.addEventListener('click', openNav);
btnCloseNav.addEventListener('click', closeNav);
nav.addEventListener('click', e => {
  if(e.target.tagName === 'A') {
    closeNav();
  }
});
window.addEventListener('resize', closeNav);

// Members List
var btnMembers = document.querySelectorAll('.session-card__btn-members');
var membersList = document.querySelectorAll('.members-list');
var btnClose = document.querySelectorAll('.members-list .members-list__btn-close');

var membersListToggle = function(id) {
  for(var i = 0; i < membersList.length; i++) {
    if(membersList[i].dataset.id === id) {
      membersList[i].classList.toggle('members-list_active');
    } else {
      membersList[i].classList.remove('members-list_active');
    }
  }
};

var membersListClose = function(id) {
  for(var i = 0; i < membersList.length; i++) {
    if(membersList[i].dataset.id === id) {
      membersList[i].classList.remove('members-list_active');
    }
  }
};

for(var i = 0; i < btnMembers.length; i++) {
  btnMembers[i].addEventListener('click', function(e) {
    membersListToggle(e.target.dataset.id);
  });
}

for(var j = 0; j < btnClose.length; j++) {
  btnClose[j].addEventListener('click', function(e) {
    membersListClose(e.target.closest('button').dataset.id);
  });
}

// Members List Search
var inputSearch = document.querySelectorAll('[data-members-list-search]');
var membersListsWrapper = document.querySelectorAll('[data-members-list]');
var memberLists = [];

for(var t = 0; t < membersListsWrapper.length; t++) {
  var l = membersListsWrapper[t].querySelectorAll('.members-list__member');

  memberLists.push(l);
}

var findMembers = function(e, list) {
  for(var f = 0; f < list.length; f++) {
    if(list[f].innerText.trim().toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1) {
      list[f].style.display = 'flex';
    } else {
      list[f].style.display = 'none';
    }
  }
};

for(var s = 0; s < inputSearch.length; s++) {
  // eslint-disable-next-line no-loop-func
  inputSearch[s].addEventListener('input', function(e) {
    findMembers(e, memberLists[e.target.dataset.membersListSearch - 1]);
  });
}
