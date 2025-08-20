// Portfolio Data Structure
const PORTFOLIO_DATA = {
    home: {
        id: 'home',
        title: 'Siddhant Sood',
        description: 'Previously @ MITRE, NASA, CACI, Blue Sky Innovators, two startups, and many projects. Currently trying to build something new! Love researching and building state-of-the-art AI systems. Always happy to chat: siddhantsood@gmail.com',
        icon: '',
        gradient: ['#1db954', '#0f7f3a'],
        tracks: [
            {
                id: 'profile-summary',
                title: 'Profile Summary',
                meta: 'AI/ML Engineer with expertise in computer vision, large language models, and defense applications. Currently pursuing research in AI security and autonomy at MITRE, with a track record of winning major competitions and securing top-tier internships.',
                duration: 'Professional Overview',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'key-achievements',
                title: 'Key Achievements',
                meta: 'ISEF 2024 Grand Prize Winner (Top 25 globally), YC AI Startup School Fellow, Top Secret Security Clearance, 5+ Research Internships at leading organizations including MITRE, NASA, and CACI.',
                duration: 'Highlights',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'technical-expertise',
                title: 'Technical Expertise',
                meta: 'Machine Learning, Computer Vision, Large Language Models, AI Security, Defense Systems, Semiconductor ML, Energy Simulation, RAG Systems, Multi-Agent AI.',
                duration: 'Skills',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'current-focus',
                title: 'Current Focus',
                meta: 'Building and fine-tuning high-precision ML models for semiconductor applications, developing AI agents for defense energy simulation, and advancing AI security research.',
                duration: 'Active Work',
                highlight: '',
                type: 'standard'
            }
        ]
    },
    experiences: {
        id: 'experiences',
        title: 'Experiences 🎯',
        description: 'My work experiences',
        icon: '🎯',
        gradient: ['#1ed760', '#0f7f3a'],
        tracks: [
            {
                id: 'crimson-education',
                title: 'Crimson Education — AI Research Advisor',
                meta: 'Mentoring advanced AI research from concept to completion.',
                duration: 'Jun 2024 – Present',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'george-mason',
                title: 'George Mason University — Researcher | Teaching Assistant',
                meta: 'Research on Graphons & Network Dynamical Systems, Teaching CS310: Data Structures',
                duration: 'Aug 2025 – Present',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'mitre',
                title: 'MITRE — AI Security Research Intern (AI & Autonomy Lab)',
                meta: 'Built and fine-tuned high-precision ML models for semiconductor tile alignment and stitching; also automating defense energy simulation modeling systems using LLM agents for the Office of the Secretary of Defense (OSD).',
                duration: 'June 2025 – August 2025',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'caci',
                title: 'CACI — Software Development Internship',
                meta: 'NCAPS Program.',
                duration: 'May 2025 – June 2025',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'nasa',
                title: 'NASA — Software Development Internship',
                meta: 'NCAPS Program',
                duration: 'May 2025 – June 2025',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'blue-sky',
                title: 'Blue Sky Innovators — AI Research Intern',
                meta: 'Designed on-prem LLM architecture for 100+ people, cutting costs by 80% and improving RAG precision by 30%.',
                duration: 'May 2024 – May 2025',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'cereal-codes',
                title: 'CerealCodes — Co-Founder',
                meta: 'Founded a global coding contest with 472 teams across 77 countries. Led a 10-person operations team and secured $40,000+ in sponsorships.',
                duration: 'Feb 2023 – Feb 2024',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'y-point',
                title: 'Y Point Analytics — Machine Learning Intern',
                meta: 'Built a multi-agent search algorithm used by 700+ drivers to deliver 200,000+ meals; developed an AI therapist co-pilot that automated documentation and provided 24/7 patient support.',
                duration: 'May 2021 – Nov 2023',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'vytal',
                title: 'Vytal.ai — AI/ML Researcher (Venture-backed)',
                meta: 'Applied RNNs to recreate ECG data from PPG signals; $12M venture-backed startup.',
                duration: 'Jan 2021 – Jan 2023',
                highlight: '',
                type: 'standard'
            }
        ]
    },
    projects: {
        id: 'projects',
        title: 'Projects 🛠️',
        description: 'Cool Stuff I\'ve Worked On',
        icon: '🛠️',
        gradient: ['#3d91f4', '#1a5bb8'],
        tracks: [
            {
                id: 'cloudgen',
                title: 'CloudGen — 3D CAD Generation Using AI',
                meta: 'Developed pipeline to transform text prompts e.g. “a chair” into 3D print-ready models. Integrated OpenAI latent diffusion architecture with a bilateral filter for cleaning and designed a novel editing framework for altering 3D prints/models in a VR environment.',
                duration: 'April 2024',
                highlight: 'Highlight',
                type: 'highlight'
            },
            {
                id: 'loops',
                title: 'Loops.ai: Reddit for Professionals',
                meta: 'Invested $25K and built AI-powered infrastructure for news aggregation, including recommendatino systems, real-time scraping systems and AI podcast generation.',
                duration: 'March 2024',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'upenn-hackathon',
                title: 'TheraSpeak - AI Suicide Hotline',
                meta: 'Led a team of four to create a full-stack AI-powered suicide hotline within 36 hours using OpenAI APIs and Twilio.',
                duration: 'Sept 2023',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'mit-blueprint',
                title: 'Bites: Bias Detection App',
                meta: 'Built a search app that ranks and filters articles based on bias, readability, and complexity in just 12 hours.',
                duration: 'Jan 2023',
                highlight: 'Hackathon Project',
                type: 'standard'
            }
        ]
    },
    awards: {
        id: 'awards',
        title: 'Awards & Highlights 🏆',
        description: 'Recognition and achievements',
        icon: '🏆',
        gradient: ['#b23df4', '#6d22a6'],
        tracks: [
            {
                id: 'fellowships-events',
                title: 'Fellowships & Events',
                meta: 'Perplexity AI Business Fellowship, YC AI Startup School, YC Summer Conference 2025, @Scale: Networking 2025',
                duration: 'June 2025',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'isef-grand-award',
                title: '1st Place Grand Award – Regeneron International Science & Engineering Fair (ISEF)',
                meta: '(Top 25 Project out of 10 Million projects globally). Featured in Society for Science.',
                duration: 'May 2024',
                highlight: '🏆',
                type: 'highlight'
            },
            {
                id: 'isef-extra-awards',
                title: 'ISEF Extra Awards (Grouped)',
                meta: '1st Place ISEF Award — United States Air Force Laboratory, 1st in Robotics, Software & Embedded Systems — Virginia State Science Fair, Grand Prize — Virginia Science Fair (Top 3 projects statewide), CIA STEAM Challenge Coin — Issued by the CIA, 1st Place Special Award — Offino, Honorable Mention + Invitation — Aerospace Corporation, Sigma Xi Scientific Research Honor Society Membership Nomination',
                duration: 'April 2024',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'mit-blueprint-hackathon',
                title: '3rd Place Grand Prize - MIT Blueprint Hackathon',
                meta: 'Won 3rd Place Grand Prize at MIT Blueprint 2024. Organized by HackMIT',
                duration: 'March 2024',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'usaco-gold',
                title: 'Gold Division — USA Computing Olympiad (USACO)',
                meta: 'Achieved Gold Division standing',
                duration: 'December 2023',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'pennapps-ai',
                title: '1st Place in AI — UPenn Hackathon',
                meta: 'Won 1st Place in AI at PennApps 2023 (University of Pennsylvania Collegiate Hackathon). PennApps is the nation\'s oldest college hackathon',
                duration: 'September 2023',
                highlight: '🏆',
                type: 'standard'
            },
            {
                id: 'ieee-urtc',
                title: 'IEEE MIT Undergraduate Research Technical Conference Invitation',
                meta: 'Invited to present research at the IEEE MIT URTC 2023',
                duration: 'September 2023',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'ap-scholar',
                title: 'AP Scholar with Distinction',
                meta: 'Awarded by the College Board for outstanding AP exam performance',
                duration: 'July 2023',
                highlight: '',
                type: 'standard'
            }
        ]
    },
    contact: {
        id: 'contact',
        title: 'Contact & Profiles 📬',
        description: 'Get in touch and view profiles',
        icon: '📬',
        gradient: ['#00d4aa', '#0099cc'],
        tracks: [
            {
                id: 'email',
                title: 'Email',
                meta: 'siddhantsood@gmail.com',
                duration: 'Primary Contact',
                highlight: '',
                type: 'link',
                link: 'mailto:siddhantsood@gmail.com'
            },
            {
                id: 'linkedin',
                title: 'LinkedIn',
                meta: 'linkedin.com/in/siddhantsood1',
                duration: 'Professional Profile',
                highlight: '',
                type: 'link',
                link: 'https://www.linkedin.com/in/siddhantsood1'
            },
            {
                id: 'github',
                title: 'GitHub',
                meta: 'github.com/ssiddhantsood',
                duration: 'Code Portfolio',
                highlight: '',
                type: 'link',
                link: 'https://github.com/ssiddhantsood'
            },
            {
                id: 'website',
                title: 'Website',
                meta: 'siddhantsood.com',
                duration: 'Personal Site',
                highlight: '',
                type: 'link',
                link: 'https://siddhantsood.com'
            },
            {
                id: 'clearance',
                title: 'Clearance',
                meta: 'Top Secret',
                duration: 'Security Clearance',
                highlight: '',
                type: 'standard'
            },
            {
                id: 'classified',
                title: '?',
                meta: 'Super Secret. Do not click.',
                duration: 'Classified (duh)',
                highlight: '',
                type: 'link',
                link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            }
        ]
    }
};

// App State
let currentPlaylist = 'home';
let currentTrack = null;
let isPlaying = false;

// DOM Elements
const elements = {
    headerCover: document.getElementById('header-cover'),
    headerTitle: document.getElementById('header-title'),
    headerDesc: document.getElementById('header-desc'),
    playlistTitle: document.getElementById('playlist-title'),
    playlistDescription: document.getElementById('playlist-description'),
    tracksList: document.getElementById('tracks-list'),
    navItems: document.querySelectorAll('.nav-item'),
    searchInput: document.getElementById('search'),
    nowPlayingTitle: document.getElementById('now-playing-title'),
    nowPlayingSubtitle: document.getElementById('now-playing-subtitle'),
    progressFill: document.getElementById('progress-fill'),
    currentTime: document.getElementById('current-time'),
    totalTime: document.getElementById('total-time'),
    playBtn: document.getElementById('play-btn'),
    mainPlayBtn: document.getElementById('main-play-btn'),
    homeBtn: document.getElementById('home-btn')
};

// Initialize App
function initApp() {
    loadPlaylist(currentPlaylist);
    setupEventListeners();
    updatePlayerBar();
}

// Load Playlist
function loadPlaylist(playlistId) {
    const playlist = PORTFOLIO_DATA[playlistId];
    if (!playlist) return;

    currentPlaylist = playlistId;
    
    // Add/remove home-page class for styling
    const mainElement = document.querySelector('.main');
    if (playlistId === 'home') {
        mainElement.classList.add('home-page');
    } else {
        mainElement.classList.remove('home-page');
    }
    
    // Update header
    if (playlistId === 'home') {
        elements.headerCover.innerHTML = `
            <div class="cover-gradient" style="background: linear-gradient(135deg, ${playlist.gradient[0]}, ${playlist.gradient[1]})"></div>
            <div class="profile-pic">
                <div class="profile-initials">SS</div>
            </div>
        `;
    } else {
        elements.headerCover.innerHTML = `
            <div class="cover-gradient" style="background: linear-gradient(135deg, ${playlist.gradient[0]}, ${playlist.gradient[1]})"></div>
            <div class="cover-icon">${playlist.icon}</div>
        `;
    }
    
    elements.headerTitle.textContent = playlist.title;
    elements.headerDesc.textContent = playlist.description;
    
    // Update playlist info
    elements.playlistTitle.textContent = playlist.title;
    elements.playlistDescription.textContent = playlist.description;
    
    // Update navigation
    updateNavigation(playlistId);
    
    // Render tracks
    renderTracks(playlist.tracks);
    
    // Update search placeholder
    elements.searchInput.placeholder = 'Search...';
}

// Render Tracks
function renderTracks(tracks) {
    elements.tracksList.innerHTML = '';
    
    tracks.forEach((track, index) => {
        const trackElement = createTrackElement(track, index + 1);
        elements.tracksList.appendChild(trackElement);
    });
}

// Create Track Element
function createTrackElement(track, number) {
    const trackDiv = document.createElement('div');
    trackDiv.className = 'track-item';
    trackDiv.dataset.trackId = track.id;
    
    const highlightClass = track.type === 'highlight' ? 'track-highlight' : '';
    const highlightText = track.highlight ? ` (${track.highlight})` : '';
    
    // Handle different track types
    if (track.type === 'header') {
        trackDiv.className = 'track-item track-item--header';
        trackDiv.innerHTML = `
            <div class="track-number">●</div>
            <div class="track-title track-title--header">${track.title}</div>
            <div class="track-meta">${track.meta}</div>
            <div class="track-duration">${track.duration}</div>
        `;
    } else {
        trackDiv.innerHTML = `
            <div class="track-number">${number}</div>
            <div class="track-title ${highlightClass}">${track.title}${highlightText}</div>
            <div class="track-meta">${track.meta}</div>
            <div class="track-duration">${track.duration}</div>
        `;
    }
    
    // Add click event
    trackDiv.addEventListener('click', () => selectTrack(track));
    
    // Add special styling for different types
    if (track.type === 'highlight') {
        trackDiv.style.borderLeft = '4px solid var(--primary)';
    } else if (track.type === 'minimal') {
        trackDiv.style.opacity = '0.7';
    } else if (track.type === 'playlist-link') {
        trackDiv.style.cursor = 'pointer';
        trackDiv.style.borderLeft = '4px solid var(--gradient-secondary)';
    }
    
    return trackDiv;
}

// Select Track
function selectTrack(track) {
    currentTrack = track;
    
    // Handle different track types
    if (track.type === 'playlist-link' && track.link) {
        // Navigate to the linked playlist
        loadPlaylist(track.link);
        return;
    } else if (track.type === 'link' && track.link) {
        window.open(track.link, '_blank');
    } else if (track.type === 'download' && track.link) {
        // Simulate download
        console.log(`Downloading: ${track.title}`);
    } else if (track.type === 'header') {
        // Don't do anything for header tracks
        return;
    }
    
    // Update player bar
    elements.nowPlayingTitle.textContent = track.title;
    elements.nowPlayingSubtitle.textContent = track.meta.substring(0, 50) + (track.meta.length > 50 ? '...' : '');
    
    // Update active track in list
    document.querySelectorAll('.track-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-track-id="${track.id}"]`).classList.add('active');
    
    // Simulate playing
    isPlaying = true;
    updatePlayerBar();
    simulateProgress();
}

// Update Navigation
function updateNavigation(activeId) {
    elements.navItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.playlist === activeId) {
            item.classList.add('active');
        }
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Navigation
    elements.navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const playlistId = item.dataset.playlist;
            loadPlaylist(playlistId);
        });
    });
    
    // Search
    elements.searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        filterTracks(query);
    });
    
    // Player controls
    elements.mainPlayBtn.addEventListener('click', togglePlay);
    elements.playBtn.addEventListener('click', () => {
        if (currentTrack) {
            selectTrack(currentTrack);
        }
    });

    // Home button
    elements.homeBtn.addEventListener('click', () => {
        loadPlaylist('home');
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === '/') {
            e.preventDefault();
            elements.searchInput.focus();
        }
    });
}

// Filter Tracks
function filterTracks(query) {
    const playlist = PORTFOLIO_DATA[currentPlaylist];
    if (!playlist) return;
    
    const filteredTracks = playlist.tracks.filter(track => 
        track.title.toLowerCase().includes(query) ||
        track.meta.toLowerCase().includes(query) ||
        track.duration.toLowerCase().includes(query)
    );
    
    renderTracks(filteredTracks);
}

// Toggle Play
function togglePlay() {
    if (!currentTrack) return;
    
    isPlaying = !isPlaying;
    updatePlayerBar();
    
    if (isPlaying) {
        simulateProgress();
    }
}

// Update Player Bar
function updatePlayerBar() {
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    
    if (currentTrack) {
        if (isPlaying) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    } else {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
}

// Simulate Progress - Much slower and smoother
function simulateProgress() {
    if (!isPlaying) return;
    
    let progress = 0;
    const interval = setInterval(() => {
        if (!isPlaying) {
            clearInterval(interval);
            return;
        }
        
        progress += 0.5; // Much slower increment
        if (progress > 100) {
            progress = 0;
        }
        
        elements.progressFill.style.width = `${progress}%`;
        
        // Update time display - much slower progression
        const currentSeconds = Math.floor((progress / 100) * 300); // 5 minutes total
        const minutes = Math.floor(currentSeconds / 60);
        const seconds = currentSeconds % 60;
        elements.currentTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        elements.totalTime.textContent = '5:00';
        
    }, 200); // Slower update interval
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);