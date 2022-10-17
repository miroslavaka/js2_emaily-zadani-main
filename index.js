//API: https://apps.kodim.cz/daweb/trening-api/apis/emails

/*const inbox = document.querySelector('#inbox');

const renderEmail = (data) => {
  alert(data.emails);
  let ss = `<h2>Nepřečtené</h2>`;

  data.emails.forEach((item) => {
    //alert(item.sender.name);
    ss =
      ss +
      ` 
      <div class="email">
      <div class="email__icon email__icon--closed"></div>
      <div class="email__fill">
        <div class="email__sender-name">${item.sender.name}</div>
        <div class="email__subject">${item.subject}</div>
      </div>
      <div class="email__end">
             <div class="email__time">${item.time}</div>
       </div>
       </div>
    `;
  });
  //ss = ss + ``;
  inbox.innerHTML = ss;
};*/

// fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=all')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     renderEmail(data);
//   });

///////////////////////////////////////////////////////////////////////////////////////////////////////////

const inboxNeprectene = document.querySelector('#inbox-neprectene');
const inboxPrectene = document.querySelector('#inbox-prectene');

//FUNKCIA NEPRECTENE
const renderEmailNeprectene = (data) => {
  // alert(data);
  let nn = ` <h2>Nepřečtené</h2>`;
  data.emails.forEach((item) => {
    //alert(item.sender.name);
    nn =
      nn +
      `
    <div class="email">
      <div class="email__icon email__icon--closed"></div>
      <div class="email__fill">
        <div class="email__sender-name">${item.sender.name}</div>
        <div class="email__subject">${item.subject}</div>
      </div>
      <div class="email__end">
             <div class="email__time">${item.time}</div>
       </div>
       </div>
    `;
  });
  inboxNeprectene.innerHTML = nn;
};

//FUNKCIA PRECTENE
const renderEmailPrectene = (data) => {
  // alert(data);
  let pp = ` <h2>Přečtené</h2>`;
  data.emails.forEach((item) => {
    pp =
      pp +
      `
    <div class="email">
      <div class="email__icon email__icon--closed"></div>
      <div class="email__fill">
        <div class="email__sender-name">${item.sender.name}</div>
        <div class="email__subject">${item.subject}</div>
      </div>
      <div class="email__end">
             <div class="email__time">${item.time}</div>
       </div>
       </div>
    `;
  });
  inboxPrectene.innerHTML = pp;
};

//FETCH NEPRECTENE
fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    renderEmailNeprectene(data);
  });

//FETCH PRECTENE
fetch('https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    renderEmailPrectene(data);
  });
