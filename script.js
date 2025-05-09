// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Video mute/unmute
const muteButton = document.getElementById('muteButton');
const introVideo = document.getElementById('introVideo');

muteButton.addEventListener('click', () => {
    introVideo.muted = !introVideo.muted;
    muteButton.textContent = introVideo.muted ? '🔇' : '🔊';
});

// Effetto scomparsa video durante lo scroll
window.addEventListener('scroll', () => {
    const videoSection = document.querySelector('.video-section');
    const opacity = Math.max(0, 1 - window.scrollY / 300);
    videoSection.style.opacity = opacity;
});

const video = document.getElementById('background-video');
const toggleSound = document.getElementById('toggle-sound');

toggleSound.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        toggleSound.innerHTML = '🔈 Silenzioso';
    } else {
        video.muted = true;
        toggleSound.innerHTML = '🔊 Volume';
    }
});