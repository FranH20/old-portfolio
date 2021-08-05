
function openSkill(evt, skillName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("item1__container--skill");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("item1__container--tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(skillName).style.display = "block";
    evt.currentTarget.className += " active";
  }