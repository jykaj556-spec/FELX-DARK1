function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (!username || !password) {
    message.textContent = "اكتب اسم المستخدم وكلمة المرور";
    message.style.color = "red";
    return;
  }

  message.textContent = "تم إرسال طلب تسجيل الدخول";
  message.style.color = "#00ff66";
}
