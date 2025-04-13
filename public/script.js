document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const messageEl = document.getElementById('message');
    
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username })
        });
        
        const data = await response.json();
        if (response.ok) {
            messageEl.textContent = `欢迎 ${data.username}！登录时间已记录`;
            messageEl.style.color = '#5cb85c';
        } else {
            throw new Error(data.error || '登录失败');
        }
    } catch (error) {
        messageEl.textContent = error.message;
        messageEl.style.color = '#d9534f';
    }
});