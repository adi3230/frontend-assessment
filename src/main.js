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

  //By clicking on list-item
  list.addEventListener('click', function(elem) {
    //Hide the list item
    list.style.display= 'none';

    //Apply styles to overlay
    overlay.style.display= 'block';
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
  },false);

  //Hide the overlay on clicking outside
  overlay.addEventListener('click', function() {
    list.style.display= 'block';
    overlay.style.display= 'none'
  },false)

  

})();
