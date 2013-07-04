$(document).ready(function() {
// index setter
  function onAwesomenessClick(e) {
    var setValue = $(this).attr('data-heading')
    console.log(e.target === this);
    $('#awesomeness_holder').text(setValue);
  }
  $('.awesomeness_teller').on('click', onAwesomenessClick);
  // skill setter
    function onSkillClick(e) {
    $('#skill_holder').text(pathname);
  }
  // skill pathname parse
  var pathname = window.location.pathname.replace('/skills/','');
  $('.skill_teller').on('click', onSkillClick);

  $('.meal_teller').on('click', function(){
    $('#meal_holder').text(sampleMeal);
  });
  // What other events do you need to bind to make the other pages work?
});
