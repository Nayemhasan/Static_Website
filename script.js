function openTab(tabName) {
    let i;
    let tabContent;
    
    tabContent = document.getElementsByClassName("tab-content");
    
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    
    document.getElementById(tabName).style.display = "flex";
}

let designLinkEl = document.getElementById("DesignLink");
let progLinkEl = document.getElementById("ProgLink");
let musicLinkEl = document.getElementById("SupportLink");

designLinkEl.addEventListener("click", function(){openTab("Design")}, false);
progLinkEl.addEventListener("click", function(){openTab("Programming")}, false);
musicLinkEl.addEventListener("click", function(){openTab("Support")}, false);



// mouse tracker
document.addEventListener('mousemove', e => {
    const sqrs = document.querySelectorAll('.item');
  
    const mouseX = e.pageX;
    const mouseY = e.pageY;
  
    sqrs.forEach(sqr => {
      const sqrX = sqr.offsetLeft + 20;
      const sqrY = sqr.offsetTop + 20;
  
      const diffX = mouseX - sqrX;
      const diffY = mouseY - sqrY;
  
      const radians = Math.atan2(diffY, diffX);
  
      const angle = radians * 180 / Math.PI;
  
      sqr.style.transform = `rotate(${angle}deg)`;
    });
  
  });