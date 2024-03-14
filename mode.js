// เมื่อคลิกที่ปุ่มเปลี่ยนโหมด
document.getElementById("mode-toggle").addEventListener("click", function() {
    // เปลี่ยน body class จาก light-mode เป็น dark-mode หรือ ngượcกัน
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    
    // บันทึกการเปลี่ยนโหมดไว้ใน local storage เพื่อเก็บค่าโหมดที่ผู้ใช้เลือกไว้
    var mode = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("mode", mode);
    
    // เปลี่ยนไอคอนบนปุ่มตามโหมดที่ถูกเลือก
    var iconClass = mode === "dark" ? "fas fa-moon" : "fas fa-sun";
    document.getElementById("mode-toggle").innerHTML = '<i class="' + iconClass + '"></i>';

    // เรียกใช้งานฟังก์ชันเพื่อเปลี่ยนภาพพื้นหลัง
    changeBackgroundImage(mode);
});

// ตรวจสอบว่ามีการบันทึกโหมดไว้ใน local storage หรือไม่
var savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
    // ถ้ามีให้ใช้ dark mode
    document.body.classList.add("dark-mode");
    changeBackgroundImage("dark");
    document.getElementById("mode-toggle").innerHTML = '<i class="fas fa-moon "></i>';
} else {
    // ถ้าไม่มีให้ใช้ light mode (default)
    document.body.classList.add("light-mode");
    changeBackgroundImage("light");
    document.getElementById("mode-toggle").innerHTML = '<i class="fas fa-sun"></i>';
}

// ฟังก์ชันเปลี่ยนภาพพื้นหลัง
function changeBackgroundImage(mode) {
    var container = document.getElementById('container');
    var imageUrl = mode === 'dark' ? 'c14aa9bca73f5cef7328a1d704a2d24c.jpg' : 'ad548eef2b6d4cba36be6ca5a2c8b716.jpg';
    container.style.backgroundImage = "url('" + imageUrl + "')";
}