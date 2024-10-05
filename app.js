//1. Написать функцию, внутри функции сделать запрос fetch, передать в headers значение ARI-KEY
//2. Получить ответ json
//3. Определить переменную для блока movies
//4. Создать элемент div
//5. Создать список из div в блоке movies
//6. Добавить вертску в полученный элемент через innerHTML, удалить верстку из index.html
//7. В верстке прописать переменные из API posterUrlPreview nameRu description
//
//Документация API https://kinopoiskapiunofficial.tech/documentation/api/

const API_KEY = "2b815b33-2426-41f3-a0cf-35d938bcbb00";
const API_URL_TOP_POPULAR_MOVIES =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1";

const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");

const movieList = document.querySelector(".movie-list");

arrowRight.addEventListener("click", () => {
  movieList.style.transform = "translateX(-300px)";
});

arrowLeft.addEventListener("click", () => {
  movieList.style.transform = "translateX(+13px)";
});
