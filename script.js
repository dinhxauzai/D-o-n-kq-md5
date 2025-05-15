
const USERS = {
  "admin": "matkhau123"
};

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorDiv = document.getElementById("error");

  if (USERS[username] && USERS[username] === password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "home.html";
  } else {
    errorDiv.textContent = "Tài khoản hoặc mật khẩu không đúng.";
  }
}

function generateResult() {
  const input = document.getElementById("linkInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!input) {
    resultDiv.textContent = "Vui lòng nhập link phiên.";
    return;
  }

  const hash = CryptoJS.MD5(input).toString();
  const lastChar = hash[hash.length - 1];
  const isTai = parseInt(lastChar, 16) % 2 === 0;

  resultDiv.textContent = isTai ? "TÀI" : "XỈU";
}
