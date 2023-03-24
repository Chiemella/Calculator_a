function add() {
      var input1 = parseFloat(document.getElementById("input1").value);
      var input2 = parseFloat(document.getElementById("input2").value);
      var result = input1 + input2;
      document.getElementById("result").value = result;
    }

    function subtract() {
      var input1 = parseFloat(document.getElementById("input1").value);
      var input2 = parseFloat(document.getElementById("input2").value);
      var result = input1 - input2;
      document.getElementById("result").value = result;
    }

    function multiply() {
      var input1 = parseFloat(document.getElementById("input1").value);
      var input2 = parseFloat(document.getElementById("input2").value);
      var result = input1 * input2;
      document.getElementById("result").value = result;
    }

    function divide() {
      var input1 = parseFloat(document.getElementById("input1").value);
      var input2 = parseFloat(document.getElementById("input2").value);
      var result = input1 / input2;
      document.getElementById("result").value = result;
    }