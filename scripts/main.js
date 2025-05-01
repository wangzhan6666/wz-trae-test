// 消息展示区域的DOM元素
const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');

// 自动调整文本框高度
messageInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

// 处理消息发送
chatForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const message = messageInput.value.trim();
    if (!message) return;
    
    // 添加用户消息到聊天界面
    addMessage(message, 'user');
    
    // 清空输入框并重置高度
    messageInput.value = '';
    messageInput.style.height = 'auto';
    
    // 模拟AI响应
    simulateAIResponse();
});

// 添加消息到聊天界面
function addMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = text;
    
    chatMessages.appendChild(messageElement);
    
    // 滚动到最新消息
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 模拟AI响应
function simulateAIResponse() {
    // 添加加载状态
    const loadingMessage = document.createElement('div');
    loadingMessage.classList.add('message', 'ai');
    loadingMessage.textContent = '正在思考...';
    chatMessages.appendChild(loadingMessage);
    
    // 模拟延迟响应
    setTimeout(() => {
        // 移除加载状态
        chatMessages.removeChild(loadingMessage);
        
        // 添加AI响应
        const responses = [
            '我理解您的问题，让我为您解答。',
            '这是一个很好的问题！',
            '我可以帮您解决这个问题。',
            '让我们一起探讨这个话题。'
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addMessage(randomResponse, 'ai');
    }, 1000);
}

// 初始欢迎消息
addMessage('你好！我是AI助手，很高兴为您服务。', 'ai');
