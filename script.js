let img = document.querySelectorAll('.img');
let shadow = document.querySelector('.shadow');
let shadow_center = document.querySelector('.shadow-center');
let shadow_movie_img = document.querySelector('.shadow-movie .img');
let shadow_movie = document.querySelector('.shadow-movie');
let content = document.querySelector('.content');
let movies = document.querySelector('.movies');
let movie;

// (() => {
// 		shadow.style.display = "block";
// 		// shadow_center.style.display = "block";
// 		content.style.filter = "saturate(0%)";
// 		shadow_movie.innerHTML = "<div class='aviso'><span>Atenção site em desenvolvimento</span</span>"
// })();

function clicks() {
	for(let i = 0; i < movie.length; i++){
		movie[i].addEventListener("click", (elem) => {
		shadow.style.display = "block";
		let x = elem.srcElement.style.background;
		shadow_movie_img.style.background = x;
		shadow_center.style.display = "block";
		content.style.filter = "saturate(0%)";
	});
	}
}

window.onload = () => {
	fetch('http://kirk.lcc.ufcg.edu.br:8080/').then(response => {
		return response.json();
	}).then(data => {
		let filmes = "";

		for(let i = 0; i < data.length; i++){
			filmes += `<div class="movie">
					<div class="img"></div>
					<div class="info-movie">
						<div class="ty-movie">
							<span class="title-movie">${data[i].titulo}</span>
							<span class="year-movie">(${data[i].ano})</span>
						</div>
						<span class="rating-movie">${data[i].nota}</span>
					</div>
				</div>`;
		}
		movies.innerHTML = filmes;
		return data;
	}).then((data) => {
			movie = document.querySelectorAll('.movie');
			for(let i = 0; i < data.length; i++){
				let img = movie[i].querySelector(".img");
				img.style.background=`url("img/${data[i].post}") 0 ${data[i].img}px no-repeat`;
			}
			clicks();
		}
	);
}


let shadowF = () => {
	shadow.style.display = "none";
	shadow_center.style.display = "none";
	content.style.filter = "saturate(100%)";
}
