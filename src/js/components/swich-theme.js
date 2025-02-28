// function windowLoad() {
  // HTML
  // const htmlBlock = document.documentElement;

  // Отримуємо збережену тему
  // const saveUserTheme = localStorage.getItem("user-theme");

  // Робота з системними налаштуваннями
  // let userTheme;
  // if (window.matchMedia) {
  //   userTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  //     ? "dark"
  //     : "light";
  // }
  // window
  //   .matchMedia("(prefers-color-scheme: dark)")
  //   .addEventListener("change", (e) => {
  //     !saveUserTheme ? changeTheme() : null;
  //   });

  // Зміна теми по кліку
  // const themeButton = document.querySelector(".page__theme");
  // const resetButton = document.querySelector(".page__reset");
  // if (themeButton) {
  //   themeButton.addEventListener("click", function (e) {
  //     resetButton.classList.add("active");
  //     changeTheme(true);
  //   });
  // }

  // if (resetButton) {
  //   resetButton.addEventListener("click", function (e) {
  //     resetButton.classList.remove("active");
  //     localStorage.setItem("user-theme", "");
  //     setThemeClass();
  //   });
  // }

  // Функція додавання класу теми
  // function setThemeClass() {
  //   if (saveUserTheme) {
  //     htmlBlock.classList.add(saveUserTheme);
  //     resetButton.classList.add("active");
  //   } else {
  //     htmlBlock.classList.add(userTheme);
  //   }
  // }
  // Додаємо клас теми
  // setThemeClass();

  // Функція зміни теми
//   function changeTheme(saveTheme = false) {
//     let currentTheme = htmlBlock.classList.contains("light") ? "light" : "dark";
//     let newTheme;

//     if (currentTheme === "light") {
//       newTheme = "dark";
//     } else if (currentTheme === "dark") {
//       newTheme = "light";
//     }
//     htmlBlock.classList.remove(currentTheme);
//     htmlBlock.classList.add(newTheme);
//     saveTheme ? localStorage.setItem("user-theme", newTheme) : null;
//   }
// }

// windowLoad();


// =====================================================================

function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

function toggleTheme() {
  if (localStorage.getItem('theme') === 'dark-theme') {
    setTheme('light-theme');
  } else {
    setTheme('dark-theme');
  }
}

setTheme(localStorage.getItem('theme') || 'light-theme');

document.querySelector('.switch-theme').addEventListener('click', (e) => {
  toggleTheme();
});