const typed = new Typed(".multiple-texts", {
  strings: [
    "Backend Developer",
    "Frontend Developer",
    "Brand Identity Designer",
    "UI/UX Designer",
    "Cinematographer",
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

const indicate = document.querySelector(".indicator")

frntEnd = () => {
  frontEnd.style.transform = "translateX(0)"
  backEnd.style.transform = "translateX(100%)" 
  brand.style.transform = "translateX(0%)"

  indicate.style.transform = "translateX(90px)"


}

bckEnd = () => {
  frontEnd.style.transform = "translateX(-100%)"
  backEnd.style.transform = "translateX(0%)" 
  brand.style.transform = "translateX(-100%)"

  indicate.style.transform = "translateX(200px)"
}

brnd = () => {
  frontEnd.style.transform = "translateX(-100%)"
  backEnd.style.transform = "translateX(100%)" 
  brand.style.transform = "translateX(0%)"

  indicate.style.transform = "translateX(350px)"
}
