const typed = new Typed(".multiple-texts", {
  strings: [
    "Backend Developer",
    "Frontend Developer",
    "Brand Identity Designer",
    "UI/UX Designer",
  ],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const downloadButton = document.getElementById("downloadButton");
downloadButton.addEventListener("click", function () {
  const cvFileUrl ='files/Glory cv.pdf';
  const fileName = "Glory_cv";

  
  const link = document.createElement("a");
  link.href = cvFileUrl;
  link.download = fileName;

  
  link.click();
});

const downloadWorks = document.getElementById("downloadWorks");
downloadWorks.addEventListener("click", function () {
  const cvFileUrl ='https://docs.google.com/document/d/11yNjmkRpG-0oE2DWt5VpS1Uhwd5rooL2ErDyV7ALWUk/edit?usp=sharing';
  const fileName = "Glory_Works";

  
  const link = document.createElement("a");
  link.href = cvFileUrl;
  link.download = fileName;

  
  link.click();
});


const frontEnd = document.querySelector("#frontend")
const backEnd = document.querySelector("#backend")
const brand = document.querySelector("#brand")
const design = document.querySelector("#design")
const grapher = document.querySelector("#grapher")


const indicate = document.querySelector(".indicator")

frntEnd = () => {
  frontEnd.style.transform = "translateX(0)"
  frontEnd.style.display = "flex"

  backEnd.style.transform = "translateX(100%)" 
  backEnd.style.display = "none" 

  brand.style.transform = "translateX(100%)"
  brand.style.display = "none"

  design.style.transform = "translateX(100%)"
  design.style.display = "none"

  grapher.style.transform = "translateX(100%)"
  grapher.style.display = "none"

  indicate.style.transform = "translateX(60px)"


}

bckEnd = () => {
  frontEnd.style.transform = "translateX(100%)"
  frontEnd.style.display = "none"

  backEnd.style.transform = "translateX(0%)"
  backEnd.style.display = "flex"
 
  brand.style.transform = "translateX(100%)"
  brand.style.display = "none"

  design.style.transform = "translateX(100%)"
  design.style.display = "none"

  grapher.style.transform = "translateX(100%)"
  grapher.style.display = "none"

  indicate.style.transform = "translateX(200px)"
}

brnd = () => {
  frontEnd.style.transform = "translateX(100%)"
  frontEnd.style.display = "none"

  backEnd.style.transform = "translateX(100%)"
  backEnd.style.display = "none"

  brand.style.transform = "translateX(0%)"
  brand.style.display = "flex"

  design.style.transform = "translateX(100%)"
  design.style.display = "none"

  grapher.style.transform = "translateX(100%)"
  grapher.style.display = "none"

  indicate.style.transform = "translateX(370px)"
}

dsgnr = () => {
  frontEnd.style.transform = "translateX(100%)"
  frontEnd.style.display = "none"

  backEnd.style.transform = "translateX(100%)"
  backEnd.style.display = "none"

  brand.style.transform = "translateX(100%)"
  brand.style.display = "none"

  design.style.transform = "translateX(0%)"
  design.style.display = "flex"

  grapher.style.transform = "translateX(100%)"
  grapher.style.display = "none"


  indicate.style.transform = "translateX(550px)"
}

cin = () => {
  frontEnd.style.transform = "translateX(100%)"
  frontEnd.style.display = "none"

  backEnd.style.transform = "translateX(100%)"
  backEnd.style.display = "none"

  brand.style.transform = "translateX(100%)"
  brand.style.display = "none"

  design.style.transform = "translateX(100%)"
  design.style.display = "none"

  grapher.style.transform = "translateX(0%)"
  grapher.style.display = "flex"


  indicate.style.transform = "translateX(730px)"
}
