(function () {
  var beginAC = 80,
    endAC = 320,
    beginB = 80,
    endB = 320;

    var menuItem = document.getElementsByClassName('menu-item');

  function inAC(s) {
    s.draw('80% - 240', '80%', 0.3, {
      delay: 0.1,
      callback: function () {
        inAC2(s)
      }
    });
  }

  function inAC2(s) {
    s.draw('100% - 545', '100% - 305', 0.6, {
      easing: ease.ease('elastic-out', 1, 0.3)
    });
  }

  function inB(s) {
    s.draw(beginB - 60, endB + 60, 0.1, {
      callback: function () {
        inB2(s)
      }
    });
  }

  function inB2(s) {
    s.draw(beginB + 120, endB - 120, 0.3, {
      easing: ease.ease('bounce-out', 1, 0.3)
    });
  }

  function outAC(s) {
    s.draw('90% - 240', '90%', 0.1, {
      easing: ease.ease('elastic-in', 1, 0.3),
      callback: function () {
        outAC2(s)
      }
    });
  }

  function outAC2(s) {
    s.draw('20% - 240', '20%', 0.3, {
      callback: function () {
        outAC3(s)
      }
    });
  }

  function outAC3(s) {
    s.draw(beginAC, endAC, 0.7, {
      easing: ease.ease('elastic-out', 1, 0.3)
    });
  }

  function outB(s) {
    s.draw(beginB, endB, 0.7, {
      delay: 0.1,
      easing: ease.ease('elastic-out', 2, 0.4)
    });
  }

  function addScale(m) {
    m.className = 'scaled';
  }

  function removeScale(m) {
    m.className = '';
  }

  var pathD = document.getElementById('pathD'),
    pathE = document.getElementById('pathE'),
    pathF = document.getElementById('pathF'),
    segmentD = new Segment(pathD, beginAC, endAC),
    segmentE = new Segment(pathE, beginB, endB),
    segmentF = new Segment(pathF, beginAC, endAC),
    wrapper = document.getElementById('menu-icon-wrapper'),
    trigger = document.getElementById('menu-icon-trigger'),
    toCloseIcon = true,
    nav = document.getElementById('menu');

  wrapper.style.visibility = 'visible';

  trigger.onclick = function () {
    addScale(wrapper);
    if (toCloseIcon) {
      inAC(segmentD);
      inB(segmentE);
      inAC(segmentF);
      nav.style.display = 'block';
    } else {
      outAC(segmentD);
      outB(segmentE);
      outAC(segmentF);
      nav.style.display = 'none';
    }
    toCloseIcon = !toCloseIcon;
    setTimeout(function () {
      removeScale(wrapper)
    }, 450);
  };
  // Get elements by ID
  var list = document.getElementById("menu-item");
  var overlay = document.getElementById("overlay");
  var first = document.getElementById("first");
  var second = document.getElementById("second");

  // BY default overlay is hidden
  overlay.style.display= 'none';
  list.style.display= 'block';

  // Show Overlay
  function hide() {
    overlay.style.display= 'block';
    list.style.display= 'none';
  }

  //Hide Overlay
  function show() {
    list.style.display= 'block';
    overlay.style.display= 'none'
  }

  //Hide menu
  function hideMenu() {
    hide();

    overlay.style.position = 'absolute';
    overlay.style.width= '100%';
    overlay.style.height= '100%';
    overlay.style.top= '0';
    overlay.style.left= '0';

    //apply styles to the divs inside overlay
    first.style.float= 'left';
    first.style.width= '50%';
    first.style.height= '100%';
    second.style.height= '100%';
    second.style.backgroundColor= 'green';
    first.style.backgroundColor= 'red';
  }

  //show Menu
  function showMenu() {
    show();
  }

  //By clicking on list-item
  list.addEventListener('click', hideMenu,false);

  //Hide the overlay on clicking outside
  overlay.addEventListener('click', showMenu,false);

  var button = document.getElementById("submit");

  function get() {
    var url = 'https://rickandmortyapi.com/api/character/';
    // Return new promise 
    
    return new Promise(function(resolve, reject) {

      var req = new XMLHttpRequest();
      req.open('GET', url, true);
      req.setRequestHeader('Content-Type', 'text/plain');
      req.send();


      req.onload = function() {
        if (req.status == 200) {
          // Resolve the promise with the response          
          resolve(JSON.parse(req.response));
        }
        else {
          //Error hndling
          reject(Error(req.statusText));
        }
      };

    })

     
  }
  function showCharacters(characters, name) {
      //Unable to proceed currently can't think of right now
      characters.forEach(character => {
        //character['name]
        // Approach would be matching the name given in object with the given name in input
        
      });
  };
    
  function getCharacters(name) {
    get().then(res => {
      showCharacters(res.results, name);
    });

  }
  

  button.addEventListener('click',function(e){
      e.preventDefault();
      let name = document.getElementById('name').value;
      getCharacters(name.toLowerCase());
  },false);
  

})();
