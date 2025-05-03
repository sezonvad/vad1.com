// Функции для открытия и закрытия модальных окон
function openModal(id) {
    document.getElementById(id).style.display = "block";
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }
  
  // Закрытие модального окна при клике вне области окна
  window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
      if (event.target === modals[i]) {
        modals[i].style.display = "none";
      }
    }
  }
  
  function hideIntro() {
    const intro = document.getElementById("intro-screen");
    intro.style.animation = "fadeOut 1s ease forwards";
  
    // Удаляем элемент после анимации
    setTimeout(() => {
      intro.remove();
    }, 1000);
  }
  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove("hide");
      modal.classList.add("show");
      modal.style.display = "block";
    }
  }
  
  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.classList.remove("show");
      modal.classList.add("hide");
      // Скрываем после завершения анимации
      setTimeout(() => {
        modal.style.display = "none";
      }, 400);
    }
  }
  
  // Клик вне окна — закрытие
  window.onclick = function (event) {
    const modals = document.getElementsByClassName("modal");
    for (let modal of modals) {
      if (event.target === modal) {
        closeModal(modal.id);
      }
    }
  };
  
  // Закрытие по Esc
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      const modals = document.getElementsByClassName("modal");
      for (let modal of modals) {
        closeModal(modal.id);
      }
    }
  });
  
  // Анимация исчезновения интро-экрана
  function hideIntro() {
    const intro = document.getElementById("intro-screen");
    if (intro) {
      intro.style.animation = "fadeOut 1s ease forwards";
      setTimeout(() => {
        intro.remove();
      }, 1000);
    }
  }
  
  // Автоматическое скрытие интро-экрана через 5 секунд
  window.addEventListener("load", () => {
    setTimeout(hideIntro, 5000);
  });

  
// --- Функция рисования ---
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;

canvas.addEventListener('mousedown', function(e) {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', function(e) {
  if (isDrawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = "#fff8dc";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.stroke();
  }
});

canvas.addEventListener('mouseup', function() {
  isDrawing = false;
});

canvas.addEventListener('mouseleave', function() {
  isDrawing = false;
});

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
