const list = require('speakers')()

module.exports = page

function page (cb) {
  const el = document.createElement('div')
  const shadow = el.attachShadow({ mode: 'closed' })
  
  const mastodon = document.createElement('button')
  mastodon.innerText = 'Follow us'
  mastodon.onclick = () => follow()

  // Speakers
  let speakers_wrapper = document.createElement('div')
  speakers_wrapper.classList.add('box')
  speakers_wrapper.innerHTML = `
    <h2>Wizards</h2>
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
        <div class="talk"> 
          <a href="${item.peertube}" target="_blank">${item.talk}</a>
        </div>
      </div>`
    speaker_grid.append(speaker_card_container)

  })

  
  shadow.innerHTML = `
    <link rel="preload" href'./assets/camp3.jpg' as="image">
    <link rel="preload" href'./assets/camp9.jpg' as="image">
    <link rel="preload" href'./assets/camp1.jpg' as="image">
    <link rel="preload" href'./assets/camp8.jpg' as="image">
    <link rel="preload" href'./assets/camp10.jpg' as="image">
    <link rel="preload" href'./assets/camp7.jpg' as="image">
    <link rel="preload" href'./assets/camp5.jpg' as="image">
    <link rel="preload" href'./assets/camp2.jpg' as="image">
    <link rel="preload" href'./assets/camp4.jpg' as="image">
    <link rel="preload" href'./assets/camp6.jpg' as="image">
    <link rel="preload" href'./assets/camp11.jpg' as="image">
    <link rel="preload" href'./assets/camp12.jpg' as="image">
    <link rel="preload" href'./assets/camp13.jpg' as="image">
    
    <div class='main'>
      <img class='logo' src='./assets/Wizard-Amigos---Stickers---CAT-NOMAD---TRANSPARENT---2022.png'></img>
      <h1>
        <span>Wizard Amigos</span>
        <span> Code Camp</span>
      </h1>

      <div class='date'>October 2023, Portugal</div>
      <div class='box'>
      <p>Wizard Amigos code camp is a DIY gathering and has this year stretched over the whole October.</p>
        <p>
          A full month of co-living, co-working and organizing an unconference (with remote guests) sharing knowledge about 
          P2P / federated / co-governed tech, care for people & the future, sustainability and exploring pathways toward a real systemic change.
        </p>
        <p>Are you thinking of joining? We are already planning the next cam, so stay tuned :)</p>
        <mastodon></mastodon>
      </div>

      <div class='box'>
        <h2> Talks, Workshops & Discussions </h2>
        <p></p>
        <p> Talks from the code camp are recorded and available on our <a target='_blank' href='https://peertube.1312.media/a/wizardamigos/video-channels'> PeerTube</a> and <a target='_blank' href='https://www.youtube.com/@wizardamigos4213'> Youtube</a> channels. </p>
        <p>To support Wizard Amigos, You can drop a coin in the tip jar through our <a target='_blank' href='https://opencollective.com/wizardamigos'> Open Collective page. </a></p>
      
        </div>
      
      <speakers></speakers>

      <div class='venue box'>
        <h2>Location</h2>
        <p>
        Wizard Amigos code camp 2023 was set in a villa on a valley with a breathtaking view of the mountains around it. Located in a quiet village in Portugal called Alvados we experienced a perfect mash between tech and the old days' rural life.
        Surrounded by nature 360º you will feel like you've been immersed into relaxing mode. 

        We plan were coworking, learning from each other and relaxing inside the house or outside beneath the shade of an olive tree or on a hike in amazingly indigenous nature trails that surrounded the wizard villa.
        </p>      

        <div class='gallery'>
          <img src='./assets/camp1.jpg'></img>
          <img src='./assets/camp10.jpg'></img>
          <img src='./assets/camp12.jpg'></img>
          <img src='./assets/camp2.jpg'></img>
          <img src='./assets/camp17.jpg'></img>
          <img src='./assets/camp8.jpg'></img>
          <img src='./assets/camp6.jpg'></img>
          <img src='./assets/camp9.jpg'></img>
          <img src='./assets/camp7.jpg'></img>
          <img src='./assets/camp16.jpg'></img>
          <img src='./assets/camp11.jpg'></img>
          <img src='./assets/camp19.jpg'></img>
          <img src='./assets/camp4.jpg'></img>
        </div>     
      </div>
      
      <div class='faq box'>
        <h2>About</h2>
        <h3>Who is organizing this?</h3>
        <p>
          Wizard Amigos code camps are being organised by enthusiasts, for enthusiasts. 
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
  shadow.querySelector('mastodon').replaceWith(mastodon)
  
  // shadow.adoptedStyleSheets = [sheet]
  const style = document.createElement('style')
  style.textContent = get_theme()
  shadow.append(style)
  return el

  // handlers

  function follow () {
    window.open('https://fosstodon.org/@wizardamigos')
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