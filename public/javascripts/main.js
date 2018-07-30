var regex = new RegExp("(.*?)\.(csv)$");

function acceptCSV(data) {
  if (!(regex.test(data.value.toLowerCase()))) {
    data.value = '';
    alert('Perdón, tiene que ser un documento de formato CSV');
  }
}

$(document).ready(function () {
  $('#loading').hide();
  $('form').submit(function () {
    $('#loading').show();
  });
});