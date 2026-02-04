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

// Snake Game – 10x10, smooth like Google Snake
let game = null;

function initGame() {
    if (game) {
        if (game.cleanup) game.cleanup();
        game = null;
    }
    
    const canvas = document.getElementById('game-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const highScoreEl = document.getElementById('high-score');
    
    const tileCount = 10;
    const gridSize = canvas.width / tileCount;
    const tickMs = 120;
    
    let snake = [{ x: 5, y: 5 }];
    let prevSnake = null;
    let food = { x: 7, y: 7 };
    let dx = 0;
    let dy = 0;
    let score = 0;
    let highScore = parseInt(localStorage.getItem('snakeHighScore') || '0');
    let gameRunning = false;
    let nextDir = { dx: 0, dy: 0 };
    let progress = 1;
    let lastStepTime = 0;
    let rafId = null;
    
    highScoreEl.textContent = highScore;
    
    function placeFood() {
        let ok = false;
        do {
            food.x = Math.floor(Math.random() * tileCount);
            food.y = Math.floor(Math.random() * tileCount);
            ok = !snake.some(seg => seg.x === food.x && seg.y === food.y);
        } while (!ok);
    }
    
    function roundRect(x, y, w, h, r) {
        r = Math.min(r, w / 2, h / 2);
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
    }
    
    function lerp(a, b, t) {
        return a + (b - a) * t;
    }
    
    function draw(interpolate) {
        const pad = 1.5;
        const cell = gridSize - pad;
        
        ctx.fillStyle = '#f8f9fa';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.strokeStyle = '#e9ecef';
        ctx.lineWidth = 1;
        for (let i = 1; i < tileCount; i++) {
            ctx.beginPath();
            ctx.moveTo(i * gridSize, 0);
            ctx.lineTo(i * gridSize, canvas.height);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, i * gridSize);
            ctx.lineTo(canvas.width, i * gridSize);
            ctx.stroke();
        }
        
        const drawSeg = (seg, isHead) => {
            const x = seg.x * gridSize + pad / 2;
            const y = seg.y * gridSize + pad / 2;
            roundRect(x, y, cell, cell, 4);
            ctx.fillStyle = isHead ? '#2d5a3d' : '#4a7c59';
            ctx.fill();
            ctx.strokeStyle = 'rgba(0,0,0,0.06)';
            ctx.lineWidth = 1;
            ctx.stroke();
        };
        
        if (interpolate && prevSnake && prevSnake.length === snake.length) {
            snake.forEach((seg, i) => {
                const prev = prevSnake[i];
                const sx = lerp(prev.x, seg.x, progress) * gridSize + pad / 2;
                const sy = lerp(prev.y, seg.y, progress) * gridSize + pad / 2;
                roundRect(sx, sy, cell, cell, 4);
                ctx.fillStyle = i === 0 ? '#2d5a3d' : '#4a7c59';
                ctx.fill();
                ctx.strokeStyle = 'rgba(0,0,0,0.06)';
                ctx.lineWidth = 1;
                ctx.stroke();
            });
        } else {
            snake.forEach((seg, i) => drawSeg(seg, i === 0));
        }
        
        const fx = food.x * gridSize + pad;
        const fy = food.y * gridSize + pad;
        const fw = gridSize - pad * 2;
        ctx.fillStyle = '#c45c4a';
        roundRect(fx, fy, fw, fw, 5);
        ctx.fill();
        ctx.strokeStyle = 'rgba(0,0,0,0.06)';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    
    function doStep() {
        dx = nextDir.dx;
        dy = nextDir.dy;
        
        if (dx === 0 && dy === 0) return;
        
        prevSnake = snake.map(s => ({ x: s.x, y: s.y }));
        
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };
        
        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
            gameOver();
            return;
        }
        
        if (snake.some(seg => seg.x === head.x && seg.y === head.y)) {
            gameOver();
            return;
        }
        
        snake.unshift(head);
        
        if (head.x === food.x && head.y === food.y) {
            score++;
            if (score > highScore) {
                highScore = score;
                highScoreEl.textContent = highScore;
                localStorage.setItem('snakeHighScore', highScore);
            }
            placeFood();
        } else {
            snake.pop();
        }
        
        progress = 0;
    }
    
    function gameLoop(now) {
        if (!gameRunning) return;
        
        rafId = requestAnimationFrame(gameLoop);
        
        if (!lastStepTime) lastStepTime = now;
        const elapsed = now - lastStepTime;
        lastStepTime = now;
        
        const moving = nextDir.dx !== 0 || nextDir.dy !== 0;
        
        if (moving) {
            progress += elapsed / tickMs;
            if (progress >= 1) {
                doStep();
                if (!gameRunning) return;
                lastStepTime = now;
            }
        }
        
        draw(moving && prevSnake && progress < 1);
    }
    
    function gameOver() {
        gameRunning = false;
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#333';
        ctx.font = '20px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2 - 14);
        ctx.font = '13px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.fillStyle = '#555';
        ctx.fillText('Score: ' + score, canvas.width / 2, canvas.height / 2 + 16);
        ctx.fillText('Press SPACE to restart', canvas.width / 2, canvas.height / 2 + 40);
        
        const restart = (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                document.removeEventListener('keydown', restart);
                startGame();
            }
        };
        document.addEventListener('keydown', restart);
    }
    
    function startGame() {
        snake = [{ x: 5, y: 5 }];
        prevSnake = null;
        dx = 0;
        dy = 0;
        nextDir = { dx: 0, dy: 0 };
        score = 0;
        progress = 1;
        lastStepTime = 0;
        gameRunning = true;
        placeFood();
        draw(false);
        
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#666';
        ctx.font = '14px -apple-system, BlinkMacSystemFont, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Press an arrow key to start', canvas.width / 2, canvas.height / 2);
        
        const keyHandler = (e) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) !== -1) {
                e.preventDefault();
                document.removeEventListener('keydown', keyHandler);
                if (e.code === 'ArrowUp' && nextDir.dy !== 1) nextDir = { dx: 0, dy: -1 };
                if (e.code === 'ArrowDown' && nextDir.dy !== -1) nextDir = { dx: 0, dy: 1 };
                if (e.code === 'ArrowLeft' && nextDir.dx !== 1) nextDir = { dx: -1, dy: 0 };
                if (e.code === 'ArrowRight' && nextDir.dx !== -1) nextDir = { dx: 1, dy: 0 };
                lastStepTime = performance.now();
                rafId = requestAnimationFrame(gameLoop);
            }
        };
        document.addEventListener('keydown', keyHandler);
    }
    
    const keyDownHandler = (e) => {
        if (!gameRunning) return;
        if (e.code === 'ArrowUp' && nextDir.dy !== 1) nextDir = { dx: 0, dy: -1 };
        if (e.code === 'ArrowDown' && nextDir.dy !== -1) nextDir = { dx: 0, dy: 1 };
        if (e.code === 'ArrowLeft' && nextDir.dx !== 1) nextDir = { dx: -1, dy: 0 };
        if (e.code === 'ArrowRight' && nextDir.dx !== -1) nextDir = { dx: 1, dy: 0 };
    };
    
    document.addEventListener('keydown', keyDownHandler);
    
    startGame();
    
    game = {
        canvas,
        ctx,
        cleanup: () => {
            document.removeEventListener('keydown', keyDownHandler);
            if (rafId) cancelAnimationFrame(rafId);
        }
    };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
