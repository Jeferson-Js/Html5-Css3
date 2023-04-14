
      const num1 = document.getElementById("num1");
      const num2 = document.getElementById("num2");
      const result = document.getElementById("result");

      document.getElementById("add").addEventListener("click", function () {
        result.value = parseInt(num1.value) + parseInt(num2.value);
      });

      document
        .getElementById("subtract")
        .addEventListener("click", function () {
          result.value = parseInt(num1.value) - parseInt(num2.value);
        });

      document
        .getElementById("multiply")
        .addEventListener("click", function () {
          result.value = parseInt(num1.value) * parseInt(num2.value);
        });

      document.getElementById("divide").addEventListener("click", function () {
        result.value = parseInt(num1.value) / parseInt(num2.value);
      });
