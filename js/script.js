document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('.bg-video');
  let currentIndex = 0;

  function switchVideo() {
    const currentVideo = videos[currentIndex];
    const nextIndex = (currentIndex + 1) % videos.length;
    const nextVideo = videos[nextIndex];

    currentVideo.classList.remove('active');
    nextVideo.classList.add('active');

    nextVideo.currentTime = 0;
    nextVideo.play().catch(() => {});

    currentIndex = nextIndex;
  }

  // Начальное состояние
  videos.forEach((video, index) => {
    if (index === 0) {
      video.classList.add('active');
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });

  setInterval(switchVideo, 5000);
});
