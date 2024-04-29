
  const images = document.querySelectorAll('.Image-1');
  let currentIndex = 0;

  function showImage(index) {
      images.forEach((image, i) => {
          if (i === index) {
              image.style.display = 'block';
          } else {
              image.style.display = 'none';
          }
      });
  }

  function showNext() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
  }

  function showPrevious() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
  }

  document.querySelector('.next-btn').addEventListener('click', showNext);
  document.querySelector('.prev-btn').addEventListener('click', showPrevious);

  showImage(currentIndex);
