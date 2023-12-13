function colorChange() {
  let color1 = document.getElementById("color1").value;
  let color2 = document.getElementById("color2").value;

  document.getElementById("circle").innerHTML = `<style>@keyframes changeColor {
    from {
      background-color: ${color1};
    }
    to {
      background-color: ${color2};
    }
  }</style>`;
  document.getElementById("rope").innerHTML = `<style>@keyframes changeColor {
    from {
      background-color: ${color1};
    }
    to {
      background-color: ${color2};
    }
  }</style>`;
}
