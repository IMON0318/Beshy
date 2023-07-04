$(document).ready(function() {
    $('.input').on('input', function() {
      var value = $(this).val().replace(/ /g, "🤸");
      $('#modified-value').text(value);
    });
  });
  
// Copy button click event handler
$('#copy').click(function() {
    var modifiedValue = $('#modified-value').text();
    if (modifiedValue.length > 0) {
        var tempElement = $('<textarea>');
        $('body').append(tempElement);
        tempElement.val(modifiedValue).select();
        document.execCommand('copy');
        tempElement.remove();

        // Provide visual feedback to the user

    }
});

// Watch for changes in the text input field
$('.input').on('input', function() {
    var inputText = $(this).val();
    $('#modified-value').text(inputText);
    
    // Show/hide the copy button based on text presence
    if (inputText.length > 0) {
        $('#copy').show();
    } else {
        $('#copy').hide();
    }
});
