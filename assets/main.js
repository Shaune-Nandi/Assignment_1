function hello() {
  var paragraph = document.getElementById("paragraph");
  var fisrt_name = document.getElementById("fisrt_name").value;

  paragraph.innerHTML = 'Hello ' + fisrt_name + ', welcome to the bootcamp';
}
