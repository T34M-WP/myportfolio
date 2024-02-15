let slideIndex = 0;
let slideTimer;
let isCurrentSlideCalled = false; // ประกาศตัวแปรนี้ภายนอกฟังก์ชัน
let isGoonSlides = false; // ประกาศตัวแปรนี้ภายนอกฟังก์ชัน

document.addEventListener("DOMContentLoaded", startSlideShow);

function startSlideShow() {
    showSlides();
    startAutoSlide(); // เริ่มการเลื่อนสไลด์โดยอัตโนมัติ
}

function startAutoSlide() {
    slideTimer = setInterval(function () {
        plusSlides(1);
    }, 2000);
}

function stopAutoSlide() {
    clearInterval(slideTimer);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
    isGoonSlides = false; // รีเซ็ตค่าเมื่อทำการสไลด์ใหม่
    isCurrentSlideCalled = false; // รีเซ็ตค่าเมื่อทำการสไลด์ใหม่
}

function goonSlides(n) {
    showSlides(slideIndex += n);

    if (!isGoonSlides) {
        functionOne();
        isGoonSlides = true;
    }
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1);

    if (!isCurrentSlideCalled) {
        functionOne();
        isCurrentSlideCalled = true;
    }
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (slideIndex >= slides.length) { slideIndex = 0; } // กลับไปที่สไลด์แรกเมื่อถึงสไลด์สุดท้าย
    if (slideIndex < 0) { slideIndex = slides.length - 1; } // ไปที่สไลด์สุดท้ายเมื่อถึงสไลด์แรก
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

let functionIndex = 0; // เริ่มต้นด้วยฟังก์ชันที่ 0

function toggleFunctions() {
    if (functionIndex === 0) {
        functionOne(); // เรียกใช้งานฟังก์ชันแรก
        functionIndex = 1; // เปลี่ยนค่า index เป็น 1
    } else {
        functionTwo(); // เรียกใช้งานฟังก์ชันที่สอง
        functionIndex = 0; // เปลี่ยนค่า index เป็น 0
    }
}

function functionOne() {
    document.getElementById("autoSlideButton").innerHTML = "<i class='fa-solid fa-play'></i>"; // เปลี่ยนข้อความบนปุ่ม Auto Slide

    stopAutoSlide();
}

function functionTwo() {
    document.getElementById("autoSlideButton").innerHTML = "<i class='fa-solid fa-pause'></i>"; // เปลี่ยนข้อความบนปุ่ม Auto Slide
    startAutoSlide()
    isCurrentSlideCalled = false;
    isGoonSlides = false;
}
