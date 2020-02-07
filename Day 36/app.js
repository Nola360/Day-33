// Basic Structure

// MODULE PATTERN

// IIFE - immediate invoked function expression

// (function () {
//   // Declare private vars and functions



//   return {
//     // Declare public var and functions


//   }
// })();


// MODULE PATTERN EXAMPLE 1

const UICtrl = (function () {
  let text = 'Hello World!';

  const changeText = function () {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function () {
      changeText();
      console.log(text);
    }
  }
})();

UICtrl.callChangeText();

