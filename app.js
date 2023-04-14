const typed = new Typed(".multiple-texts", {
    strings: [
        "Frontend Developer",
        "Graphics Designer",
        "Video Editor",
        "UI/UX Designer",
        "Cinematographer"
    ],
    typeSpeed: 50, 
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})



const menu = () => {
    document.querySelector(".navbar").classList.toggle("active")
}
