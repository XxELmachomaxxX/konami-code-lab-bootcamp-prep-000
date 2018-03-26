

const konamiCode = [65, 66, 67];
let index = 0;
function onKeyDownHandler(e) {
  const key = parseInt(e.detail || e.which);
  if (key === konamiCode[index]) {
    index++;
    if (index === konamiCode.length) {
      alert("Hurray!");
      
      index = 0;
    
    } else {
      index = 0;
      alert("wrong a second time!")
    }
  }
}




