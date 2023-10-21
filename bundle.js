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
      background-color: black;
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

  // Speakers
  let speakers_wrapper = document.createElement('div')
  speakers_wrapper.classList.add('box')
  speakers_wrapper.innerHTML = `
    <h2>Speakers</h2>
    <div class="speaker_grid"></div>
  `



  list.forEach(item => {
    let speaker_grid = speakers_wrapper.querySelector('.speaker_grid')
    let speaker_card_container = document.createElement('div')
    speaker_card_container.classList.add('speaker_card_container')
    speaker_card_container.innerHTML = `
      <div class="speaker_card">
        <img src="./assets/speakers/${item.name}" class="profile_img" ></img>
          <div class="username">
            <a href="${item.link}" target="_blank">${item.name}</a> - <a>${item.project}</a>
          </div>
        <div class="talk"> ${item.talk}</div>
      </div>`
    speaker_grid.append(speaker_card_container)

  })

  
  shadow.innerHTML = `
    <link rel="preload" href'./assets/alvados3.png' as="image">
    <link rel="preload" href'./assets/alvados9.png' as="image">
    <link rel="preload" href'./assets/alvados1.png' as="image">
    <link rel="preload" href'./assets/alvados8.png' as="image">
    <link rel="preload" href'./assets/alvados10.png' as="image">
    <link rel="preload" href'./assets/alvados7.png' as="image">
    <link rel="preload" href'./assets/alvados5.png' as="image">
    <link rel="preload" href'./assets/alvados2.png' as="image">
    <link rel="preload" href'./assets/alvados4.png' as="image">
    <link rel="preload" href'./assets/alvados6.png' as="image">
    <link rel="preload" href'./assets/alvados11.png' as="image">
    <link rel="preload" href'./assets/alvados12.png' as="image">
    <link rel="preload" href'./assets/alvados3.png' as="image">
    
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
          P2P / federated / co-governed tech, care for people & the future, sustainability and exploring pathways toward a real systemic change.
        </p>
        <p>Are you thinking of joining? The camp starts very soon and there is still a few spots available :)</p>
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
        Wizard Amigos code camp 2023 is set in a villa on a valley with a breathtaking view of the mountains around it. It is located in a quiet village in Portugal called Alvados, where you can experience the old days' rural life.
        Surrounded by nature 360º you will feel like you've been immersed into relaxing mode. 

        We plan to work, learn from each other and relax inside the house or outside beneath the shade of an olive tree, by the pool or on the terrace facing the mountains, or even hiking/biking around the kms and kms of indigenous nature trails that surround the wizard villa.
        </p>      

        <div class='gallery'>
          <img src='./assets/alvados1.png'></img>
          <img src='./assets/alvados11.png'></img>
          <img src='./assets/alvados4.png'></img>
          <img src='./assets/alvados2.png'></img>
          <img src='./assets/alvados13.png'></img>
          <img src='./assets/alvados8.png'></img>
          <img src='./assets/alvados6.png'></img>
          <img src='./assets/alvados9.png'></img>
          <img src='./assets/alvados7.png'></img>
          <img src='./assets/alvados5.png'></img>
          <img src='./assets/alvados10.png'></img>
          <img src='./assets/alvados3.png'></img>
          <img src='./assets/alvados12.png'></img>
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
  shadow.querySelector('speakers').replaceWith(speakers_wrapper)
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
      container-type: inline-size;
      grid-column-start: 2;
      border: 6px solid var(--light-purple);
      transition: box-shadow .3s ease-in-out;
      padding: 3%;
      margin: 5% 5% 0 5%;
      text-align: center;
      font-size: 1.5rem;
      width: 90%;
    }

    /* SPEAKER */
    .speaker_grid{
      display:grid;
      grid-template-columns: 12fr;
      gap: 30px;

      .speaker_card_container{
        background-color:var(--light-purple);
        height:100%;
        width:100%;

        .speaker_card{
          height:100%;
          width:100%;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          background-color:black;
          border:2px solid var(--light-purple);
          transition:0.2s;
          text-align:center;
          box-sizing: border-box;
          padding:40px;
        }

        .profile_img{
          width:110px;
          aspect-ratio:1/1;
          border-radius:10rem;
          background-color:red;
          margin-bottom:25px;
        }

        .username{
          color: var(--fluo-green);
          font-size:1.2rem;
          font-weight:700;
          
          a{
            text-decoration:none;
            color:var(--flou-green);
            &:hover{
              text-decoration:underline;
            }
          }
        }
        
        .talk{
          color:var(--green);
          font-size:1rem;
          margin-top:10px;
          line-height:28px;
        }

        &:hover{
          .speaker_card{
            transform: translate(-12px, -12px)
          }
        }

      }

    }
    @container (min-width: 810px) {
      .speaker_grid{
        grid-template-columns: 6fr 6fr;
      }
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
    { name: 'adelayde', project: 'Hacktion Lab', from: 'local' , link: 'https://twitter.com/MBrinsleyHarris', talk: 'How Science Publishing works today and how it could look like in the future'},
    { name: 'bjoern', project: 'Delta Chat', from: 'remote', link: 'https://github.com/r10s', talk: 'Deltachat/Webxdc Secure Sandbox'},
    { name: 'cryptix', project: 'Sleepy bike', from: 'remote', link: 'github.com/cryptix/', talk: 'Cable Protocol (cabal.chat)'},
    { name: 'derhuerst', project: 'Open Transportation', from: 'local' , link: 'https://twitter.com/derhuerst', talk: 'Open-sourcing Transportation data'},
    { name: 'gus', project: 'Templo', from: 'local', link: 'https://medium.com/@gustavo_64625', talk: 'Open House - Social Experiment for Innovation'},
    { name: 'hdegroote', project: 'HyperPubee', from: 'local', link: 'https://gitlab.com/HDegroote', talk: 'Decentralised publishing (dcent reads, dcent beats)'},
    { name: 'jam10o', project: 'Shokunin', from: 'local', link: 'https://twitter.com/jam10o', talk: 'A weird esolang I accidentally created on the way to building a portable AI sideproject'},
    { name: 'kristallpirat', project: 'C-base', from: 'remote', link: '', talk: 'Building a natural language processing as a c-base community member'},
    { name: 'lukks', project: 'Holepunch', from: 'remote', link: 'https://github.com/lukks', talk: 'Holepunch, Hypercore, Hyper DHT'},
    { name: 'mariha', project: 'Sleepy bike', from: 'remote', link: 'https://liberapay.com/mariha', talk: 'Solid + sleepy.bike'},
    { name: 'michal', project: 'Sleepy bike', from: 'remote', link: 'https://github.com/mrkvon', talk: 'Solid + sleepy.bike'},
    { name: 'miguel', project: 'Kinera', from: 'local', link: 'https://www.linkedin.com/in/miguel-marques-4322101a8/', talk: 'Prediction markets in Movie Industry'},
    { name: 'naugtur', project: 'Endo & MetaMask', from: 'remote', link: 'https://twitter.com/naugtur', talk: 'Safely running obfuscated Malware from npm'},
    { name: 'ninjabirdy', project: 'DatDot & WizardAmigos', from: 'local', link: 'https://twitter.com/ninabreznik', talk: 'Organizing WizardAmigos code camps behind the scenes'},
    { name: 'nora', project: 'Patronage', from: 'local', link: 'https://twitter.com/noraliucode', talk: 'Funding Open Source Projects with Crypto Patronage' },
    { name: 'olemehll', project: 'Grillchat', from: 'remote', link: '', talk: 'Subsocial:  Grill chat' },
    { name: 'serapath', project: 'DatDot & WizardAmigos', from: 'local', link: 'https://twitter.com/serapath', talk: 'Decoupling data from the app service with DatDot'},
    { name: 'telamohn', project: 'Pico Stack', from: 'remote', link: 'https://twitter.com/telamohn', talk: 'It is called: The Subtle Art of  Xorcery'},
    { name: 'tinchoz', project: 'Sher', from: 'remote', link: 'https://twitter.com/tinchoz49', talk: 'Audio streaming with Sher'},
    // { name: 'rtn', project: 'Linkping', from: 'remote', link: ' https://github.com/ralphtheninja'},
    // { name: 'fredrik', project: 'digital philosopher', from: 'local' , link: ''},
    // { name: 'kumavis_', project: 'LavaMoat & MetaMask', from: 'remote', link: 'https://twitter.com/kumavis_'},
    // { name: 'heapwolf', project: 'Socket Supply', from: 'remote', link: 'https://twitter.com/heapwolf'},
    // { name: 'zobroj', project: 'Art & Design', from: 'local', link: 'https://twitter.com/zobroj'},
    // { name: 'RangerMauve', project: 'Agregore', from: 'remote', link: 'https://twitter.com/RangerMauve'},
    // { name: 'Aglae Bindi', project: 'Astralship & TyddynTeg', from: 'local', link: 'https://twitter.com/AstralMarlene'},
    // { name: 'liamkurmos', project: 'Astralship', from: 'local', link: 'https://twitter.com/liamkurmos'},
    // { name: 'hugozap', project: 'Rust in JS', from: 'remote', link: 'https://twitter.com/hugozap'},
    // { name: 'xylodrone', project: 'Ordum', from: 'local', link: 'https://twitter.com/xylodrone'},
    // { name: 'jeffemmett', project: 'Commons stack', from: 'remote', link: 'https://twitter.com/jeffemmett'},
    // { name: 'MikolaLysenko', project: '0fps & Socket Security', from: 'remote', link: 'https://twitter.com/MikolaLysenko'},
    // { name: 'nicksellen', project: 'Karrot', from: 'local', link: 'https://nicksellen.co.uk/'},
    // { name: 'micahscopes', project: 'Wondering Xyz', from: 'remote', link: 'https://twitter.com/micahscopes'},
    // { name: 'julianne becker', project: 'Coconat', from: 'remote', link: 'https://www.facebook.com/juliannebecker'},
    // { name: 'whimful', project: 'Ahau', from: 'remote', link: 'https://twitter.com/whimful'},
    // { name: 'shaneo_donnell', project: 'Value Flows', from: 'remote', link: 'https://twitter.com/shaneo_donnell'},
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
