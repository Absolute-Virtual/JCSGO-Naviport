function handleLogin(event) {
    event.preventDefault(); 

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const messageElement = document.getElementById('message');
    
    const correctUsername = "skibidiohiosigma";
    const correctPassword = "69420911";

    

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        
        messageElement.textContent = "✅ Login successful! Redirecting...";
        messageElement.style.backgroundColor = "green"; 
        messageElement.style.animation = "message 5s";
        
        setTimeout(() => {
            window.location.href = "STUDENTPORTAL.html";
        }, 1500);
        
    } else {
        
        messageElement.textContent = "❌ Invalid username or password. Please try again.";
        messageElement.style.backgroundColor = "red";
        messageElement.style.animation = "message 5s";

        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
}