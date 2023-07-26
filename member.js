function skillsMember() {
  console.log('skillsMember');
  var member = document.querySelector('.member');
  var memberTop = member.offsetTop;
  var memberHeight = member.offsetHeight;
  var memberBottom = memberTop + memberHeight;
  var scrollTop = window.pageYOffset;
  var scrollBottom = scrollTop + window.innerHeight;
  var skill = document.querySelectorAll('.skill');
  var skillTop = [];
  var skillHeight = [];
  var skillBottom = [];
  var skillLength = skill.length;
  var i;
  for (i = 0; i < skillLength; i++) {
    skillTop[i] = skill[i].offsetTop;
    skillHeight[i] = skill[i].offsetHeight;
    skillBottom[i] = skillTop[i] + skillHeight[i];
    if (scrollTop <= skillBottom[i] && scrollBottom >= skillTop[i]) {
      skill[i].classList.add('active');
    } else {
      skill[i].classList.remove('active');
    }
  }
}