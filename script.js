document.getElementById('apiForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const apiUrl = document.getElementById('apiUrl').value; // ดึง URL จากฟอร์ม
    fetch(apiUrl)
        .then(response => response.json()) // แปลงข้อมูลที่ได้รับมาเป็น JSON
        .then(data => {
            // แสดงผลลัพธ์ที่ได้รับจาก API
            document.getElementById('response').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            // ถ้ามีข้อผิดพลาด
            document.getElementById('response').innerText = 'Error: ' + error;
        });
});
