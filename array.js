var data = {
  'a': {
    'nama': 'Ultra Video Compressor',
    'deskripsi': 'A script to compress video size without losing video quality on Termux',
    'tipe': 'app',
    'link': 'https://github.com/tfkhdyt/uvc',
    'foto': 'assets/img/portfolio/portfolio-1.jpg'
  },
  'b': {
    'nama': 'Astrophotography',
    'deskripsi': '26 Agustus 2020',
    'tipe': 'art',
    'link': 'https://www.instagram.com/p/CEVYVw_gi3-/?utm_source=ig_web_copy_link',
    'foto': 'https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/e35/118296687_3209493245773161_2670363808048102388_n.jpg?_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=2nH02YDHPvQAX_PN1d5&tp=1&oh=65538573959190aa4d2a86e5b058c56f&oe=6054EC44&dl=1'
  },
  'c': {
    'nama': 'Spotify Downloader',
    'deskripsi': 'A script to download Spotify music into mp3 easily',
    'tipe': 'app',
    'link': 'https://github.com/tfkhdyt/SpotifyDL',
    'foto': 'assets/img/portfolio/portfolio-2.jpg'
  },
  'd': {
    'nama': 'Formula E SRT05E',
    'deskripsi': '1 Desember 2019',
    'tipe': 'art',
    'link': 'https://www.instagram.com/p/B5hxECdAXdQ/?igshid=9oicfesy8wfk',
    'foto': 'https://instagram.fbdo1-2.fna.fbcdn.net/v/t51.2885-15/e35/74705000_179257256589868_2821042374306544775_n.jpg?_nc_ht=instagram.fbdo1-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=jrIczBofd_EAX_M0Xw5&tp=1&oh=d72e4ccf8e7e59768c1ae66afe3a4e75&oe=6056C914'
  },
  'e': {
    'nama': 'Wangy Wangy Generator',
    'deskripsi': 'Skrip untuk membuat copypasta wangy wangy dengan Termux',
    'tipe': 'app',
    'link': 'https://github.com/tfkhdyt/wangy',
    'foto': 'assets/img/portfolio/wangy.jpg'
  },
  'f': {
    'nama': 'Acura NSX GT3',
    'deskripsi': '1 Desember 2019',
    'tipe': 'art',
    'link': 'https://www.instagram.com/p/B5hw4LJgeLF/',
    'foto': 'https://scontent-iad3-1.cdninstagram.com/v/t51.2885-15/e35/75207301_2420141644864116_1256531060313996712_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=100&_nc_ohc=jrJj0mehz0QAX_fK5bk&tp=1&oh=403123544bea29b5b5c489e03b3e8eae&oe=6054DE49&dl=1'
  },
  'g': {
    'nama': "Call of Duty Mobile Weapon Score",
    'deskripsi': "Skrip ini berfungsi untuk menghitung score dari senjata CODM.",
    'tipe': "app",
    'link': "https://github.com/tfkhdyt/CODMWeaponScore",
    'foto': "assets/img/portfolio/banner-codm-ws.jpg"
  },
  'h': {
    'nama': "Nissan 718 Cayman GT4 Clubsport",
    'deskripsi': "1 Desember 2019",
    'tipe': "art",
    'link': "https://www.instagram.com/p/B5hPEqFg7MX/?igshid=1ao9i4cd4go1",
    'foto': "https://instagram.fbdo1-2.fna.fbcdn.net/v/t51.2885-15/e35/74638885_186899705799029_8234413037892507777_n.jpg?_nc_ht=instagram.fbdo1-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=mll5L7Mh_U4AX8DefT4&tp=1&oh=42637ea3f851ac5cb04871a5777906f3&oe=6056FC58"
  },
  'i': {
    'nama': "Free Pascal Compiler for Termux",
    'deskripsi': "Compiler untuk Free Pascal di Termux",
    'tipe': "app",
    'link': "https://github.com/tfkhdyt/termux-fpc",
    'foto': "assets/img/portfolio/banner-termux-fpc.jpg"
  },
  'j': {
    'nama': "Sakura Gakuin 2017 3rd Grade Jojo Effect",
    'deskripsi': "21 Juli 2019",
    'tipe': "art",
    'link': "https://www.instagram.com/p/B0LqAhpg9kh/?igshid=1scbvjxxi85xd",
    'foto': "assets/img/portfolio/sg-jojo.jpg"
  }
};

for (var item in data) {
  console.log(`${data[item].nama}`);
  var html = `<div class="col-lg-4 col-md-6 portfolio-item filter-` + `${data[item].tipe}` + `"><div class="portfolio-wrap"><img src="` + `${data[item].foto}` + `" class="img-fluid" alt=""><div class="portfolio-info"><h4>` + `${data[item].nama}` + `</h4><p>` + `${data[item].deskripsi}` + `</p><div class="portfolio-links"><a href="` + `${data[item].link}` + `" target="_blank"><i class="bx bx-window-open"></i></a></div></div></div></div>`;
  //document.getElementById('project').innerHTML = html;
  $("#project").append(html);
}