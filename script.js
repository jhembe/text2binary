$(document).ready(function() {
  $('#convertToBinaryBtn').click(function() {
    var inputText = $('#inputText').val();
    var outputText = $('#outputText');
    
    var binaryString = '';
    if (isBinary(inputText)) {
      binaryString = binaryToText(inputText);
    } else {
      binaryString = textToBinary(inputText);
    }
    
    outputText.text(binaryString);
  });
  
  $('#convertToTextBtn').click(function() {
    var inputText = $('#inputText').val();
    var outputText = $('#outputText');
    
    var textString = '';
    if (isBinary(inputText)) {
      textString = binaryToText(inputText);
    } else {
      textString = textToBinary(inputText);
    }
    
    outputText.text(textString);
  });
});

function isBinary(input) {
  return /^[01\s]+$/.test(input);
}

function textToBinary(input) {
  return input.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}

function binaryToText(input) {
  return input.split(' ').map(binary => String.fromCharCode(parseInt(binary, 2))).join('');
                             }
