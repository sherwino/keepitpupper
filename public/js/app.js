(function () {

  // ------------ Initialize Firebase ---------------
  const config = {
    apiKey: 'AIzaSyDAcHiXHxjLx09RxTDoPOipgVAMjUCM7A8',
    authDomain: 'keepitpupper.firebaseapp.com',
    databaseURL: 'https://keepitpupper.firebaseio.com',
    projectId: 'keepitpupper',
    storageBucket: 'keepitpupper.appspot.com',
    messagingSenderId: '747615583861',
  };




  firebase.initializeApp(config);

  // ------------ Create a reference to the db root ---------------
  const db = firebase
    .database()
    .ref()
    .child('root');

  const elementDb = db.child('elements');

  // ------------ Prints the contents of firebase to console ---------------
  // If there are any values in the db, sync, firebase sends everything as snapshots
  // Usually I only want the value of the snapshot so .val() returns the goods
  //   db.on("value", snap => console.log('The full obj', snap.val()));

  // ------------ Updates all of the static elements to whatever firebase has ---------------
  // PLS PLS PLS PLS PLS PLS REFACTOR THIS, THIS IS SO UGLY
  elementDb.on('value', (snap) => {
    const elementsObj = snap.val();

    const mainHead = document.getElementById('mainHead');

    const musicHead = document.getElementById('musicHead');
    const rulesHead = document.getElementById('rulesHead');
    const eventsHead = document.getElementById('eventsHead');

    mainHead.innerText = elementsObj.mainHead;
    musicHead.innerText = elementsObj.musicHead;
    rulesHead.innerText = elementsObj.rulesHead;
    eventsHead.innerText = elementsObj.eventsHead;

    const musicBody = document.getElementById('musicBody');
    const rulesBody = document.getElementById('rulesBody');
    const eventsBody = document.getElementById('eventsBody');

    musicBody.innerText = elementsObj.musicBody;
    rulesBody.innerText = elementsObj.rulesBody;
    eventsBody.innerText = elementsObj.eventsBody;

  });

  // ------------ Whenever you add something to the elements object in the db ---------------
  elementDb.on('child_added', snap => console.log('Added this to the elementDb --->', snap.val()));

  // ------------ Whenever you change the elements object in the db ---------------
  elementDb.on('child_changed', snap => console.log('Updated the elementDb --->', snap.val()));

  // ------------ Whenever you remove something from the elements object in the db ---------------
  elementDb.on('child_removed', snap => console.log('Removed something from the elementDb --->', snap.val()));
  // const liToRemove = document.getElementById(snap.key);
  // liToRemove.remove();
  //   });



  // ------------ When the element is in edit mode, and you mouseleave, save the edits ---------------
  const saveEdit = (e) => {
    const mouseleftEl = e.target;
    const updateObj = {};

    const stopEditing = () => {
      mouseleftEl.contentEditable = false;
      mouseleftEl.classList.remove('editing');
    };

    setTimeout(stopEditing, 2500);

    const elementKey = mouseleftEl.id;
    const updatedText = mouseleftEl.innerText;

    updateObj[elementKey] = updatedText.trim();
    console.log('save -->', updateObj);

    return elementDb.update(updateObj).then(() => {
      mouseleftEl.removeEventListener('mouseleave', saveEdit);
    });
  };

  // ------------ Put element in edit mode, if it has an id ---------------
  // If the element isn't already in edit mode, toggle it to true
  // Then/else add an event listener that will save the edits
  // when you move the mouse away from the element
  const toggleEdit = (e) => {
    const clickedEl = e.target;

    if (clickedEl.id) {
      if (clickedEl.contentEditable === 'false') {
        clickedEl.contentEditable = true;
        clickedEl.classList.add('editing');
        console.log('Now editing', clickedEl.id);
      }

      clickedEl.addEventListener('mouseleave', saveEdit);
    }
  };

  // ------------ Whatever element you click in the document, make it editable ---------------
  document.addEventListener('click', toggleEdit);

}());
