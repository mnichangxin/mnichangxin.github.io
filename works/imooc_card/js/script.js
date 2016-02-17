window.onload = function(){

	var music = document.getElementById('music');
	var audio = document.getElementsByTagName('audio')[0];

	var page1 = document.getElementById('page1');
	var page2 = document.getElementById('page2');
	var page3 = document.getElementById('page3');

	/*When touch the icon,the music ended*/
	music.addEventListener('touchstart',function(){

		if(audio.paused){

			audio.play();
			this.childNodes[1].setAttribute('class','music_disc music_play');
		}else{

			audio.pause();
			this.childNodes[1].setAttribute('class','music_disc');
		}
	},false);

	/*When music ended,the blessing also ended*/
	audio.addEventListener('ended',function(){

		music.childNodes[1].setAttribute('class','music_disc');

	},false);
		
	/*The page dump*/
	page1.addEventListener('touchstart',function(){

		this.style.display = 'none';
		page2.style.display = 'block';

		setTimeout(function(){

			page2.setAttribute('class','page fadeout');
			page3.setAttribute('class','page fadein');

		},5500);

	},false);
}