// Konfiguracja czasów zmiany kolorów
const config = {
    redTime: 3000,
    yellowTime: 1000,
    greenTime: 3000,
  };
  
  const lights = document.querySelectorAll(".light");
  let currentIndex = 0;
  
  // Funkcja zmieniająca kolor świateł
  function changeColor(index) {
    lights.forEach((light) => light.classList.remove("red", "yellow", "green"));
    lights[index].classList.add(getColorClass(index));
  }
  
  // Funkcja zwracająca klasę koloru dla danego indeksu światła
  function getColorClass(index) {
    if (index === 0) return "red";
    if (index === 1) return "yellow";
    if (index === 2) return "green";
  }
  
  // Funkcja automatycznie zmieniająca kolor świateł w odpowiedniej sekwencji czasu
  function autoChangeColor() {
    setInterval(() => {
      changeColor(currentIndex);
      currentIndex = (currentIndex + 1) % 3;
    }, getDelay(currentIndex));
  }
  
  // Funkcja zwracająca opóźnienie dla danego indeksu światła
  function getDelay(index) {
    if (index === 0) return config.redTime;
    if (index === 1) return config.yellowTime;
    if (index === 2) return config.greenTime;
  }
  
  // Inicjalizacja
  changeColor(currentIndex);
  autoChangeColor();