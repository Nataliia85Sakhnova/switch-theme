switch (color) {
  case 'black':
      console.log(color.value)
      document.getElementById("black-theme").classList.toggle('black');
      break;

  case 'pink':
    console.log(color.value)
    document.getElementById("pink-theme").classList.toggle('pink');
    break;

  case 'white':
    console.log(color.value)
    document.getElementById("white-theme").classList.toggle('white');
    break;

  case "blue":
    document.getElementById("white-theme").classList.toggle('white');
    console.log(color.value)
    break;
}
