// Tab Navigation
let currentTab = 'home';

// DOM Elements
const elements = {
    tabLinks: document.querySelectorAll('.tab-link'),
    tabContents: document.querySelectorAll('.tab-content')
};

// Initialize App
function initApp() {
    // Set initial tab from hash or default to home
    const hash = window.location.hash.slice(1);
    if (hash && ['home', 'research', 'game'].includes(hash)) {
        switchTab(hash);
    } else {
        switchTab('home');
    }
    
    // Initialize game if on game tab
    if (hash === 'game' || window.location.hash === '#game') {
        initGame();
    }
    
    setupEventListeners();
}

// Switch Tab
function switchTab(tabId) {
    currentTab = tabId;
    
    // Update URL hash
    window.history.pushState(null, '', `#${tabId}`);
    
    // Update active tab link
    elements.tabLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.tab === tabId) {
            link.classList.add('active');
        }
    });
    
    // Update active tab content
    elements.tabContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === `${tabId}-content`) {
            content.classList.add('active');
        }
    });
    
    // Initialize game if switching to game tab
    if (tabId === 'game') {
        initGame();
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Setup Event Listeners
function setupEventListeners() {
    // Tab navigation
    elements.tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = link.dataset.tab;
            switchTab(tabId);
        });
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.slice(1);
        if (hash && ['home', 'research', 'game'].includes(hash)) {
            switchTab(hash);
        } else {
            switchTab('home');
        }
    });
    
    // Handle initial hash on page load
    window.addEventListener('load', () => {
        const hash = window.location.hash.slice(1);
        if (hash && ['home', 'research', 'game'].includes(hash)) {
            switchTab(hash);
        }
    });
}

// Pong Game
let game = null;

function initGame() {
    if (game) {
        // Reset game if already initialized
        if (game.cleanup) game.cleanup();
        game = null;
    }
    
    const canvas = document.getElementById('game-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const beatenCountEl = document.getElementById('beaten-count');
    
    // Game state
    let playerPaddle = {
        x: 20,
        y: canvas.height / 2 - 40,
        width: 10,
        height: 80,
        speed: 5
    };
    
    let aiPaddle = {
        x: canvas.width - 30,
        y: canvas.height / 2 - 40,
        width: 10,
        height: 80,
        speed: 4
    };
    
    let ball = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 8,
        velocityX: 4,
        velocityY: 3
    };
    
    let playerScore = 0;
    let aiScore = 0;
    let gameRunning = false;
    let animationId = null;
    let keys = {};
    
    // Get beaten counter
    let beatenCount = parseInt(localStorage.getItem('pongBeatenCount') || '0');
    beatenCountEl.textContent = beatenCount;
    
    function drawPaddle(paddle) {
        ctx.fillStyle = '#333';
        ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    }
    
    function drawBall() {
        ctx.fillStyle = '#333';
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fill();
    }
    
    function drawCenterLine() {
        ctx.strokeStyle = '#e0e0e0';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.stroke();
        ctx.setLineDash([]);
    }
    
    function updatePlayerPaddle() {
        if (keys['ArrowUp'] || keys['w'] || keys['W']) {
            playerPaddle.y = Math.max(0, playerPaddle.y - playerPaddle.speed);
        }
        if (keys['ArrowDown'] || keys['s'] || keys['S']) {
            playerPaddle.y = Math.min(canvas.height - playerPaddle.height, playerPaddle.y + playerPaddle.speed);
        }
    }
    
    function updateAIPaddle() {
        // Simple AI: follow the ball
        const paddleCenter = aiPaddle.y + aiPaddle.height / 2;
        const ballY = ball.y;
        
        if (ballY < paddleCenter - 10) {
            aiPaddle.y = Math.max(0, aiPaddle.y - aiPaddle.speed);
        } else if (ballY > paddleCenter + 10) {
            aiPaddle.y = Math.min(canvas.height - aiPaddle.height, aiPaddle.y + aiPaddle.speed);
        }
    }
    
    function updateBall() {
        ball.x += ball.velocityX;
        ball.y += ball.velocityY;
        
        // Top and bottom wall collision
        if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= canvas.height) {
            ball.velocityY = -ball.velocityY;
        }
        
        // Player paddle collision
        if (ball.x - ball.radius <= playerPaddle.x + playerPaddle.width &&
            ball.x - ball.radius >= playerPaddle.x &&
            ball.y >= playerPaddle.y &&
            ball.y <= playerPaddle.y + playerPaddle.height) {
            ball.velocityX = Math.abs(ball.velocityX);
            // Add some angle based on where ball hits paddle
            const hitPos = (ball.y - playerPaddle.y) / playerPaddle.height;
            ball.velocityY = (hitPos - 0.5) * 8;
        }
        
        // AI paddle collision
        if (ball.x + ball.radius >= aiPaddle.x &&
            ball.x + ball.radius <= aiPaddle.x + aiPaddle.width &&
            ball.y >= aiPaddle.y &&
            ball.y <= aiPaddle.y + aiPaddle.height) {
            ball.velocityX = -Math.abs(ball.velocityX);
            // Add some angle based on where ball hits paddle
            const hitPos = (ball.y - aiPaddle.y) / aiPaddle.height;
            ball.velocityY = (hitPos - 0.5) * 8;
        }
        
        // Score points
        if (ball.x < 0) {
            aiScore++;
            resetBall();
        } else if (ball.x > canvas.width) {
            playerScore++;
            // Increment beaten counter
            beatenCount++;
            beatenCountEl.textContent = beatenCount;
            localStorage.setItem('pongBeatenCount', beatenCount);
            resetBall();
        }
    }
    
    function resetBall() {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.velocityX = (Math.random() > 0.5 ? 1 : -1) * 4;
        ball.velocityY = (Math.random() > 0.5 ? 1 : -1) * 3;
    }
    
    function gameLoop() {
        if (!gameRunning) return;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update
        updatePlayerPaddle();
        updateAIPaddle();
        updateBall();
        
        // Draw
        drawCenterLine();
        drawPaddle(playerPaddle);
        drawPaddle(aiPaddle);
        drawBall();
        
        // Draw scores (hidden but still tracked)
        // Scores are tracked but not displayed
        
        animationId = requestAnimationFrame(gameLoop);
    }
    
    function startGame() {
        if (gameRunning) return;
        
        // Reset game state
        playerPaddle.y = canvas.height / 2 - 40;
        aiPaddle.y = canvas.height / 2 - 40;
        playerScore = 0;
        aiScore = 0;
        gameRunning = true;
        resetBall();
        
        gameLoop();
    }
    
    // Event listeners
    const keyDownHandler = (e) => {
        keys[e.key] = true;
    };
    
    const keyUpHandler = (e) => {
        keys[e.key] = false;
    };
    
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('keyup', keyUpHandler);
    
    // Start the game
    startGame();
    
    game = {
        canvas,
        ctx,
        cleanup: () => {
            document.removeEventListener('keydown', keyDownHandler);
            document.removeEventListener('keyup', keyUpHandler);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        }
    };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
