(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const page = require('..')

function demo (cb) {
  let font = new FontFace('Magic School One', 'url("https://fonts.cdnfonts.com/s/56374/MagicSchoolOne.woff")')
  document.fonts.add(font)
  font.load()

  const favicon = document.createElement('link')
  favicon.setAttribute('rel', 'icon')
  favicon.setAttribute('type', 'imagine/png')
  favicon.setAttribute('href', './assets/Wizard-Amigos---Stickers---WIZARD-BALL---TRANSPARENT---2022.png')
  
  document.head.append(favicon)
  const codecamp = page(cb)
  return codecamp
}
var count = 0
const el = demo(async () => {
  await document.fonts.ready
  const style = document.createElement('style')
  style.textContent = `
    html, body {
      height: 100%;
      font-size: 1.3em;
      margin: 0;
      padding: 0;
    }
  `
  document.body.append(style, el)
})



},{"..":2}],2:[function(require,module,exports){
const list = require('speakers')()

module.exports = page

function page (cb) {
  const el = document.createElement('div')
  const shadow = el.attachShadow({ mode: 'closed' })
  
  const booking_button = document.createElement('button')
  booking_button.innerText = 'Tickets / Booking'
  booking_button.onclick = () => book()
  
  const register = document.createElement('button')
  register.innerText = 'Register'
  register.onclick = () => book()
  
  const speakers = document.createElement('div')
  speakers.classList.add('box')
  speakers.innerHTML = `<h2> Wizards </h2> </div>`
  const container = document.createElement('div')
  container.classList.add('speakers')
  speakers.append(container)
  list.forEach(item => {
    const img = document.createElement('img')
    img.setAttribute('src', `./assets/speakers/${item.name}`)
    img.classList.add((item.from === 'remote') ? 'remote' : 'local' )
    const name = document.createElement('div')
    name.innerText = item.name
    name.classList.add('name')
    const project = document.createElement('div')
    project.innerText = item.project
    project.classList.add('project')

    const speaker = document.createElement('a')
    if (item.link) speaker.setAttribute('href', item.link)
    speaker.setAttribute('target', '_blank')
    speaker.classList.add('speaker')
    speaker.append(img, name, project)

    container.append(speaker)
  })
  
  shadow.innerHTML = `
    <link rel="preload" href'./assets/astral3.jpg' as="image">
    <link rel="preload" href'./assets/astral9.jpg' as="image">
    <link rel="preload" href'./assets/astral1.jpg' as="image">
    <link rel="preload" href'./assets/astral8.jpg' as="image">
    <link rel="preload" href'./assets/astral10.jpg' as="image">
    <link rel="preload" href'./assets/astral7.jpg' as="image">
    <link rel="preload" href'./assets/astral5.jpg' as="image">
    <link rel="preload" href'./assets/astral2.jpg' as="image">
    <link rel="preload" href'./assets/astral4.jpg' as="image">
    <link rel="preload" href'./assets/astral6.jpg' as="image">
    <link rel="preload" href'./assets/astral11.jpg' as="image">
    <link rel="preload" href'./assets/astral12.jpg' as="image">
    <link rel="preload" href'./assets/astral3.jpg' as="image">
    
    <div class='main'>
      <img class='logo' src='./assets/Wizard-Amigos---Stickers---CAT-NOMAD---TRANSPARENT---2022.png'></img>
      <h1>
        <span>Wizard Amigos</span>
        <span> Code Camp</span>
      </h1>
      <div class='date'>October 2023, Portugal</div>
      <div class='box'>
      <p>Wizard Amigos code camp is a DIY gathering that will this year stretch over the whole October.</p>
        <p>
          A full month of co-living, co-working and organizing an unconference (with remote guests) sharing knowledge about 
          P2P / federated / co-governed tech, care for people & the future, sustainability and exploring pathways toward real systemic change.
        </p>
        <p>Are you thining of joining? Let us know, so we can plan better :)</p>
        <register></register>
      </div>

      <div class='box'>
        <h2> Talks, Workshops & Discussions </h2>
        <p></p>
        <p> Talks from the code camp will be recorded (some will be live-streamed) and available on our <a target='_blank' href='https://peertube.1312.media/a/wizardamigos/video-channels'> PeerTube</a> and <a target='_blank' href='https://www.youtube.com/@wizardamigos4213'> Youtube</a> channels. </p>
        <p>To support Wizard Amigos, You can drop a coin in the tip jar through our <a target='_blank' href='https://opencollective.com/wizardamigos'> Open Collective page. </a></p>
      
        </div>
      
      <speakers></speakers>

     
      
      <div class='venue box'>
        <h2>Location</h2>
        <p>
          We are still looking for the right place somewhere in the nature near Lisbon (if you know any nice place that would host 10-20 people, pelase let us know).

          Last year's code camp happened in the Astralship, a hackerspace that promotes 
          creativity, collaboration and innovation located in Deiniolen, Wales. Below are some photos from the previous gathering.
        </p>      

        <div class='gallery'>
          <img src='./assets/astral3.jpg'></img>
          <img src='./assets/astral9.jpg'></img>
          <img src='./assets/astral1.jpg'></img>
          <img src='./assets/astral8.jpg'></img>
          <img src='./assets/astral10.jpg'></img>
          <img src='./assets/astral7.jpg'></img>
          <img src='./assets/astral5.jpg'></img>
          <img src='./assets/astral4.jpg'></img>
          <img src='./assets/astral6.jpg'></img>
          <img src='./assets/astral11.jpg'></img>
          <img src='./assets/astral13.jpg'></img>
          <img src='./assets/astral2.jpg'></img>
          <img src='./assets/astral12.jpg'></img>
        </div>     
      </div>
      
      <div class='faq box'>
        <h2>About</h2>
        <h3>Who is organizing this?</h3>
        <p>
          This event is being organised by enthusiasts, for enthusiasts. 
          We are a group doing this together, and we want to learn how to do things together. If you want to <a href='https://discord.gg/8FzZPHkp44' target="_blank">tag along</a>, you are in the group. We are we.
        </p>
        <h3>Is event sponsored?</h3>
        <p>
          No. We have not yet asked for, nor recieved any interest in sponsorship. 
          If you would like to support Wizard Amigos, you can donate through our <a href="https://opencollective.com/wizardamigos"  target="_blank">Open Collective page.</a>
        </p>
      </div>
    </div>
  `

  shadow.querySelector('img').onload = cb
  shadow.querySelector('speakers').replaceWith(speakers)
  shadow.querySelector('register').replaceWith(register)
  
  // shadow.adoptedStyleSheets = [sheet]
  const style = document.createElement('style')
  style.textContent = get_theme()
  shadow.append(style)
  return el

  // handlers

  function book () {
    window.open('https://forms.zohopublic.com/virtualoffice22084/form/WizardAmigosCodeCamp1/formperma/D8aoqyrH9shhhLqNxLFWLczATUOBKHfmvTLJVvIOUs8')
  }

  function open_map () {
    window.open('https://www.openstreetmap.org/way/308537567')
  }
}

function get_theme () {
  return `
    :host {
      font-family: "Courier New", Courier, monospace;
      --pink: hsla(291, 100%, 81%, 1);
      --light-purple: hsla(247, 89%, 70%, 1);
      --fluo-green: hsla(121, 97%, 65%, 1);
      --green: hsla(163, 76%, 58%, 1);
      --red: hsla(316, 56%, 32%, 1);
      --light-yellow: hsla(44, 87%, 78%, 1);
    }
    .main {
      display: grid;
      justify-items: center;
      line-height: 2rem;
      grid-template-columns: 1fr 4fr 1fr;
      justify-items: center;
    }
    .logo {
      margin-top: 55px;
      min-width: 550px;
      max-width: 550px;
      width: 20%;
      height: auto;
      grid-column-start: 2;
    }
    h1 {
      font-family: 'Magic School One', sans-serif;
      display: block;
      line-height: 0.8;
      text-align: center;
      font-size: 4rem;
      font-weight: 100;
      color: var(--pink);
      grid-column-start: 2;
    }
    h2 {
      font-family: 'Magic School One', sans-serif;
      text-align: center;
      line-height: 1;
      font-size: 3em;
      font-weight: 100;
      color: var(--fluo-green);
      grid-column-start: 2;
    }
    h3 {
      color: var(--green);
      grid-column-start: 2;
    }
    p {
      color: var(--green);
      display: subgrid;
      justify-items: space-between;
      grid-column-start: 2;
    }
    a {
      color: var(--green);
      transition: color .3s;
      min-width: 280px;
      max-width: 350px;
      width: 20%;
      height: auto;
    }
    a:hover {
     text-decoration: underline; 
     color: var(--fluo-green);
     transition: color .3s;
     cursor: pointer;
    }
    button {
      font-size: 1rem;
      border: none;
      padding: 1em;
      background-color: var(--pink);
      transition: background-color .3s ease-in-out;
      color: var(--red);
      grid-column-start: 2;
      margin: 3% 0 3% 0;
      width: 215px;
      height: 70px;
    }
    button:hover {
      background-color: var(--fluo-green);
      transition: background-color .3s ease-in-out;
      cursor: pointer;
    }
    .date {
      font-family: "Courier New", Courier, monospace;
      justify-items: center;
      text-align: center;
      font-size: 2rem;
      font-weight: 600;
      color: var(--fluo-green);
      grid-column-start: 2;
    }
    .box {
      grid-column-start: 2;
      border: 16px solid var(--light-purple);
      transition: box-shadow .3s ease-in-out;
      padding: 3%;
      margin: 5% 5% 0 5%;
      text-align: center;
      font-size: 1.5rem;
      width: 90%;
    }
    .speakers {     
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      justify-items: center;
    }
    .speaker {
      padding: 10px;
      text-decoration: none;
    }
    .speaker:hover {
      text-decoration: none;
    }
    .speaker .name {
      text-align: center;
      font-weight: 700;
      font-size: 1.2rem;
      color: var(--fluo-green);
    }
    .speaker .project {
      text-align: center;
      font-size: 1rem;
      color: var(--green);
    }
    .speaker img {
      border-radius: 50%;
      margin-top: 20%;
      min-width: 150px;
      max-width: 150px;
      width: 50%;
      height: auto;  
      transition: all 0.5s ease-in-out 0s;
    }
    .speaker img:hover {
      cursor: pointer;
      transform: translate(5%, 10%);
      box-shadow: var(--purple);
      -moz-box-shadow: var(--purple);
      -webkit-box-shadow: var(--purple);
      -o-box-shadow: var(--purple);   
      transition: all 0.3s ease-in-out 0s;
    }
    .local {
      box-shadow: 7px 7px var(--pink);
      -moz-box-shadow: 7px 7px var(--pink);
      -webkit-box-shadow: 7px 7px var(--pink);
      -o-box-shadow: 7px 7px var(--pink);  
    }
    .remote {
      box-shadow: 7px 7px var(--fluo-green);
      -moz-box-shadow: 7px 7px var(--fluo-green);
      -webkit-box-shadow: 7px 7px var(--fluo-green);
      -o-box-shadow: 7px 7px var(--fluo-green);    
    }
    .booking {
    }
    .venue {
    }
    .faq {
      word-break: break-word;
    }
    .astralship {
      font-style: italic;
      font-size: 1rem;
      padding: 0 3% 3% 3%;
    }
    .gallery {
      grid-column-start: 2;
      grid-column-end: 3;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(31, 5vw);
      grid-gap: 15px;
    }
    .gallery img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: border .3s, opacity .3s ease-in-out;
    }
    .gallery img:hover {
      opacity: 0.8;
      transition: border .3s, opacity .3s ease-in-out;
    }
    .gallery img:nth-child(1) {
      grid-column-start: 1;
      grid-column-end: 6;
      grid-row-start: 1;
      grid-row-end: 7;
    }
    .gallery img:nth-child(2) {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 1;
      grid-row-end: 4;
    }
    .gallery img:nth-child(3) {
      grid-column-start: 1;
      grid-column-end: 6;
      grid-row-start: 12;
      grid-row-end: 18;
    }
    .gallery img:nth-child(4) {
      grid-column-start: 4;
      grid-column-end: 9;
      grid-row-start: 7;
      grid-row-end: 12;
    }
    .gallery img:nth-child(5) {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 4;
      grid-row-end: 7;
    }
    .gallery img:nth-child(6) {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 12;
      grid-row-end: 18;
    }
    .gallery img:nth-child(7) {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 7;
      grid-row-end: 12;
    }
    .gallery img:nth-child(8) {
      grid-column-start: 4;
      grid-column-end: 9;
      grid-row-start: 18;
      grid-row-end: 23;
    }
    .gallery img:nth-child(9) {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 18;
      grid-row-end: 23;
    }
    .gallery img:nth-child(10) {
      grid-column-start: 1;
      grid-column-end: 6;
      grid-row-start: 23;
      grid-row-end: 28;
    }
    .gallery img:nth-child(11) {
      grid-column-start: 6;
      grid-column-end: 9;
      grid-row-start: 23;
      grid-row-end: 28;
    }
    .gallery img:nth-child(12) {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 28;
      grid-row-end: 33;
    }
    .gallery img:nth-child(13) {
      grid-column-start: 4;
      grid-column-end: 9;
      grid-row-start: 28;
      grid-row-end: 33;
    }
    @media screen and (max-width: 956px) {
      .main {
        grid-template-columns: 1fr 5fr 1fr;
        font-size: 1vw;
      };
    }
    @media only screen and (max-width: 768px) {
      .main {
        grid-template-columns: 1fr 8fr 1fr;
        font-size: 1vw;
      };
    }
  `
}
},{"speakers":3}],3:[function(require,module,exports){
module.exports = get_speakers

function get_speakers () {
  const list = [
    // { name: 'mafintosh', project: 'Hypercore & Holepunch', from: 'remote', link: 'https://twitter.com/mafintosh' },
    { name: 'jam10o', project: 'Shokunin', from: 'local', link: 'https://twitter.com/jam10o'},
    // { name: 'dboutcert', project: 'WizardAmigos', from: 'remote', link: 'https://twitter.com/dboutcert'},
    { name: 'noraliucode', project: 'Patronage', from: 'local', link: 'https://twitter.com/noraliucode' },
    { name: 'adelayde', project: 'Hacktion Lab', from: 'local' , link: 'https://twitter.com/MBrinsleyHarris'},
    { name: 'fredrik', project: 'Hacker', from: 'local' , link: ''},
    // { name: 'kumavis_', project: 'LavaMoat & MetaMask', from: 'remote', link: 'https://twitter.com/kumavis_'},
    // { name: 'heapwolf', project: 'Socket Supply', from: 'remote', link: 'https://twitter.com/heapwolf'},
    // { name: 'carax', project: 'Sher & Geut', from: 'remote', link: 'https://twitter.com/carax'},
    { name: 'ninjabirdy', project: 'DatDot & WizardAmigos', from: 'local', link: 'https://twitter.com/ninabreznik'},
    // { name: 'zobroj', project: 'Art & Design', from: 'local', link: 'https://twitter.com/zobroj'},
    // { name: 'RangerMauve', project: 'Agregore', from: 'remote', link: 'https://twitter.com/RangerMauve'},
    // { name: 'Aglae Bindi', project: 'Astralship & TyddynTeg', from: 'local', link: 'https://twitter.com/AstralMarlene'},
    { name: 'serapath', project: 'DatDot & WizardAmigos', from: 'local', link: 'https://twitter.com/serapath'},
    // { name: 'liamkurmos', project: 'Astralship', from: 'local', link: 'https://twitter.com/liamkurmos'},
    // { name: 'naugtur', project: 'Endo & MetaMask', from: 'remote', link: 'https://twitter.com/naugtur'},
    { name: 'telamohn', project: 'Pico Stack', from: 'local', link: 'https://twitter.com/telamohn'},
    { name: 'mariha', project: 'Sleepy bikes', from: 'local', link: 'https://liberapay.com/mariha'},
    // { name: 'hugozap', project: 'Rust in JS', from: 'remote', link: 'https://twitter.com/hugozap'},
    // { name: 'xylodrone', project: 'Ordum', from: 'local', link: 'https://twitter.com/xylodrone'},
    // { name: 'jeffemmett', project: 'Commons stack', from: 'remote', link: 'https://twitter.com/jeffemmett'},
    // { name: 'MikolaLysenko', project: '0fps & Socket Security', from: 'remote', link: 'https://twitter.com/MikolaLysenko'},
    // { name: 'nicksellen', project: 'Karrot', from: 'local', link: 'https://nicksellen.co.uk/'},
    // { name: 'micahscopes', project: 'Wondering Xyz', from: 'remote', link: 'https://twitter.com/micahscopes'},
    // { name: 'julianne becker', project: 'Coconat', from: 'remote', link: 'https://www.facebook.com/juliannebecker'},
    // { name: 'whimful', project: 'Ahau', from: 'remote', link: 'https://twitter.com/whimful'},
    // { name: 'shaneo_donnell', project: 'Value Flows', from: 'remote', link: 'https://twitter.com/shaneo_donnell'},
    { name: 'hdegroote', project: 'HyperPubee', from: 'local', link: 'https://gitlab.com/HDegroote'},
    { name: 'rtn', project: 'Linkping', from: 'local', link: ' https://github.com/ralphtheninja'},
    // { name: 'Stephen Reid', project: 'Worker Cooperatives and DAOs', from: 'remote', link: 'https://twitter.com/lunarpunk_0x'},
    // { name: 'Daniel Bar', project: 'Pink Valley Farm', from: 'remote', link: 'https://twitter.com/danieltbar'},
    // { name: 'Aral Balkan', project: 'Small World Tech & Kitten', from: 'remote' },
    // { name: 'Toshi', project: ' Freelance', from: 'remote' },
    // { name: 'Mirsal', project: 'Peertube', from: 'local' },
    // { name: 'Naomi', project: 'Freelance', from: 'remote' },    
    // { name: 'Leslie', project: 'Zen', from: 'remote' },    
  ]
  return list
} 
},{}]},{},[1]);
