let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {  img : 'https://i.scdn.co/image/ab6761610000e5ebc3818203c1917d198f251756',
       name : 'Doce pecado',
       artist : 'Forró',
       music : 'music/doce-pecado.mp3'
    },
    {  img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYxQcdPHYckagYIc0lATLIC0RQ5Rld6ZY3sAgyvrlmMmZHqegrJRPU4MJ9yXBwDV4m1Vg&usqp=CAU',
       name : 'Meio dia',
       artist : 'Matruz',
       music : 'music/title (13).mp3',
    },
    {  img : 'https://yt3.googleusercontent.com/hHf3w2RQbDau6a8VMU-2EUIKZrk_Bff2YrPfHpoY_nF6xMWvQ2201yRiHVbpmBEo3K0f69TemA=s176-c-k-c0x00ffffff-no-rj',
       name : 'Diversas',
       artist : 'Salles',
       music : 'music/salles show piseiro vaneirão repertório novo outubro 2022.mp3'
    },
    {  img : './images/al.jpeg',
       name : 'Vila Mix',
       artist : 'ALOK',
       music : 'music/alok-villa-mix-brasilia-2017-melhores-musicas-eletronicas-mais-tocadas-2017.mp3'
    },
    {  img : './images/ALOK.jpeg',
       name : 'Chainsmokers',
       artist : 'ALOK',
       music : 'music/jungle-official-video.mp3'
    },
    {  img : './images/bigui.jpeg',
       name : 'Arrocha',
       artist : 'Biguinho Sensação',
       music : 'music/title (11).mp3',
    },
    {   img : './images/SERES.jpeg',
        name : 'Serestas',
        artist : 'Dan Ventura',
        music : 'music/seresta.mp3',
    },
    {   img : './images/santos.jpeg',
        name : 'As melhores',
        artist : 'Romeu Santos',
        music : 'music/las-mejores-canciones-de-romeo-santos-mix-bachata-letra.mp3'
    },
    {   img : './images/sim.jpeg',
        name : 'As melhores',
        artist : 'Simone Mendes',
        music : 'music/semone-mendes-dezembro-2023-7-musicas-novas-atualizadas-simonemendes.mp3'
    },
    {   img : './images/G.jpg',
        name : 'Em Barrio',
        artist : 'Gild ',
        music : 'music/title (10).mp3'
    },
    {   img : './images/ESC.jpg',
        name : 'Arena da sorte',
        artist : 'Grupo ta Escrito ',
        music : 'music/pe-pouporrir.mp3'
    },
    {   img : './images/po.jpg',
        name : 'Paredão',
        artist : 'PODEROSO CHEFÃO',
        music : 'music/luiz-o-poderoso-chefao-2023.mp3'
    },
    {   img : './images/LUIZ.jpg',
        name : 'Paredão',
        artist : 'PODEROSO CHEFÃO',
        music : 'music/diversas (1).mp3'
    },
    {   img : './images/ser.jpg',
        name : ' Sucessos do Passado',
        artist : 'Ritmo de Seresta',
        music : 'music/set-sucessos-do-passado-em-ritmo-de-seresta-2.mp3'
    },
    {   img : './images/xote.jpg',
        name : 'ÉPOCAS VOL.3',
        artist : 'XOTE MIUDINHO',
        music : 'music/title (8).mp3'
    },
    {   img : './images/vleo.jpg',
        name : 'Mais Tocadas',
        artist : 'VICTOR E LEO',
        music : 'music/title (6).mp3'
    },
    {   img : './images/preta.jpg',
        name : 'AS MELHORES',
        artist : 'CALCINHA PRETA',
        music : 'music/selecao-das-melhores-musicas-mais-tocadas-calcinha-preta-antigas-calcinha-preta.mp3'
    },
    {   img : './images/pise.jpg',
        name : 'AS MAIS TOCADAS',
        artist : 'PISEIRO REMIX ',
        music : 'music/as-mais-tocadas-2023.mp3'
    },
    {   img : './images/romeu.jpg',
        name : 'Mix Bachata 2023 ',
        artist : 'Romeu Santos',
        music : 'music/Romeu santo.mp3'
    },
    {   img : './images/alan.jpg',
        name : '🎶Summer Vibes🎶',
        artist : 'Alan Walker',
        music : 'music/alan-walker-dua-lipa-coldplay-martin-garrix-and-kygo-the-chainsmokers-style-summer-vibes-1.mp3'
    },
    {   img : './images/pablo.jpg',
        name : 'Fake News (Ei Mô)',
        artist : 'Pablo',
        music : 'music/fake-news-ei-mo.mp3'
    },
    {   img : './images/LEO.jpg',
        name : 'AS MAIS TOCADAS',
        artist : 'LEONARDO & EDUARDO',
        music : 'music/as-mais-tocadas.mp3'
    },
    {   img : './images/zinho.jpg',
        name : 'Talismã/Saudade',
        artist : 'NATTAN',
        music : 'music/diversas.mp3'
    },
    {   img : './images/safa.jpg',
        name : 'Paredes',
        artist : 'Wesley Safadão',
        music : 'music/title (5).mp3'
    },
    {   img : './images/manu.jpg',
        name : 'Daqui Pra Sempre',
        artist : 'Manu Simone Mendes',
        music : 'music/title (3).mp3'
    },
    {   img : './images/seleção.jpg',
        name : ' SÓ AS TOP 2023',
        artist : 'SÓ AS MAIS TOCADAS',
        music : 'music/selecao-hits-tik-tok-2023-so-as-top-tik-tok-2023.mp3'
    },
    {   img : './images/wesley.jpeg',
        name : 'Ele é Ele, Eu Sou Eu',
        artist : 'Safadão e Barões da Pisadinha ',
        music : 'music/ele-e-ele-eu-sou-eu-dvd-safadao-amplificado.mp3'
    },
    {   img : './images/ivis1.jpeg',
        name : 'Zombie',
        artist : 'Dj Ivis',
        music : 'music/title (3).mp3'
    },
    {   img : './images/Mioto.jpeg',
        name : 'Depois do Amor',
        artist : 'Gustavo Mioto',
        music : 'music/title (2).mp3'
    },
    {   img : './images/gusta1.jpeg',
        name : 'Mordidinha',
        artist : 'Gustavo Lima',
        music : 'music/mordidinha-dvd-paraiso-particular.mp3'
    },
    {   img : './images/kazi.jpeg',
        name : 'Diversas',
        artist : 'kazinha',
        music : 'music/title (1).mp3'
    },
    {   img : './images/vitor.jpeg',
        name : 'Apaixonado',
        artist : 'Vitor Fernandes',
        music : 'music/vitor-fernandes-dvd-piseiro-apaixonado (1).mp3'
    },
    {   img : './images/vianna1.jpeg',
        name : 'Eu so do tempo',
        artist : 'Júnior Vianna',
        music : 'music/title.mp3'
    },
    {   img : './images/vianna.jpeg',
        name : 'Agora ficou bom',
        artist : 'Júnior Vianna',
        music : 'music/junior-vianna-clipe-oficial.mp3'
    },
    {   img : './images/cido.jpeg',
        name : 'Pascito',
        artist : 'Cindo dos ',
        music : 'music/pascito.mp3'
    },
    {   img : 'images/kabaça.jpeg',
        name : 'Diversas',
        artist : 'Água de Kabaça',
        music : 'music/agua-de-kabaça.mp3'
    },
    {   img : 'images/gusta.jpeg',
        name : 'Sujeito',
        artist : 'Gustavo Lima',
        music : 'music/sujeito-dvd-o-embaixador-ao-vivo.mp3'
    },
    {   img : 'images/gustavo.jpeg',
        name : 'Duas-da-manha',
        artist : 'Gustavo Lima',
        music : 'music/duas-da-manha-o-embaixador-the-legacy.mp3'
    },
    {   img : 'images/rai.jpeg',
        name : 'Farra Falsa',
        artist : 'Rai Saia Rodada',
        music : 'music/farra-falsa-clipe-oficial.mp3'
    },
    {   img : 'images/marcynho.jpeg',
        name : 'Viela',
        artist : 'Marcinho Sensação',
        music : 'music/marcynho-sensacao-dvd-oficial (1).mp3'
    },
    {   img : 'images/mar.jpeg',
        name : 'Boquinha',
        artist : 'Marcinho Sensação',
        music : 'music/marcynho-sensacao-dvd-oficial.mp3'
    },
    {   img : 'images/JOÃO.jpeg',
        name : 'Digo-ou-não-digo',
        artist : 'joão-gomes',
        music : 'music/joao-gomes-digo-ou-nao-digo.mp3'
    },
    {   img : 'images/natan.jpeg',
        name :  'Esqueceu né?',
        artist : 'Natan',
        music : 'music/nattan-video-oficial.mp3'
    },
    {   img : 'images/Waldo.jpeg',
        name : 'é saudade',
        artist : 'Waldo César',
        music : 'music/waldo césar - é saudade.mp3.mp3'
    },
    {   img : 'images/ivis.jpeg',
        name : 'Esquema Preferido',
        artist : 'Dj ivis',
        music : 'music/Esquema Preferido.mp3'
    },
    {
        img : 'images/stay.png',
        name : 'Stay',
        artist : 'The Kid LAROI, Justin Bieber',
        music : 'music/stay.mp3'
    },
    {
        img : 'images/fallingdown.jpg',
        name : 'Falling Down',
        artist : 'Wid Cards',
        music : 'music/fallingdown.mp3'
    },
    {
        img : 'images/faded.png',
        name : 'Faded',
        artist : 'Alan Walker',
        music : 'music/Faded.mp3'
    },
    {
        img : 'images/ratherbe.jpg',
        name : 'Rather Be',
        artist : 'Clean Bandit',
        music : 'music/Rather Be.mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Só Tocar música " + (track_index + 1) + " de " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
