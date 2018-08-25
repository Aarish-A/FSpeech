function drawContent(Page) {
  let page = Page;
  removeElements();


  if (page == -1) {
    //test page
    let inbox;
    let outbox;
    let recStartB;
    let recStopB;

    let divInbox;
    let divButton;
    let divOutbox;

    divInbox = createDiv();
    divInbox.parent("content");

    inbox = createElement("textarea");
    inbox.elt.placeholder = "input goes here";
    inbox.elt.cols = "50";
    inbox.elt.rows = "4";
    inbox.parent(divInbox);

    divButton = createDiv();
    divButton.parent("content");

    recStartB = createButton("record");
    recStartB.mouseReleased(recStart);
    recStartB.parent(divButton);

    recStopB = createButton("stop recording");
    recStopB.mouseReleased(recStop);
    recStopB.parent(divButton);

    divOutbox = createDiv();
    divOutbox.parent("content");

    outbox = createElement("textarea");
    outbox.elt.placeholder = "output goes here";
    outbox.elt.cols = "50";
    outbox.elt.rows = "4";
    outbox.parent(divOutbox);

    function recStart() {
      //start recording here
      let input;
      input = inbox.value();
      console.log(input);
    }

    function recStop() {
      //stop recording, save, put in text to speech, paste into output
      let output;
      outbox.value(output);
      console.log(output);
    }

  }

<<<<<<< HEAD
  if (page == 0) {
=======
  if(page == 0){
    let divText;
>>>>>>> b3701deac328bafc6b4bdc785ea6bef2ade85752
    let divHeader;
    let divPara;
    let divButton;

    let header;
    let para;


    divHeader = createDiv();
    divHeader.class("header");
    divHeader.parent("content");

    header = createElement("h1", "placeholder");
    header.parent(divHeader);

<<<<<<< HEAD
    divButton = createDiv();
    divButton.parent("content");

    recStartB = createButton("Start");
    recStartB.position (625, 450);
    recStartB.mouseReleased(recStart);
    recStartB.parent(divButton);


    function recStart() {
      //start recording here
      removeElements();
      drawContent(1);
    }
=======
    divPara = createDiv();
    divPara.class("para");
    divPara.parent("content");

    para = createElement("p", "yaw yeet");
    para.parent(divPara);

    divButton = createDiv();
    divButton.class("launchButton");
    divButton.parent("content");

    button = createButton("Get started");
    button.mouseReleased(function() { drawContent();});
    button.parent(divButton);
>>>>>>> b3701deac328bafc6b4bdc785ea6bef2ade85752

  }
  if (page == 1) {
    let inbox;

    let divInbox;
    let divButton;

  
    divInbox = createDiv();
    divInbox.parent("content");

    inbox = createElement("textarea");
    inbox.position(350,200);
    inbox.elt.placeholder = "input goes here";
    inbox.elt.cols = "80";
    inbox.elt.rows = "15";
    inbox.parent(divInbox);

    divButton = createDiv();
    divButton.parent("content");

    recStartB = createButton("Enter");
    recStartB.position (625, 450);
    recStartB.mouseReleased(recStart);
    recStartB.parent(divButton);


    function recStart() {
      //start recording here
      let input;
      input = inbox.value();
      console.log(input); //For Testing Purposes
      removeElements();
      drawContent(2);
    }


  }
  if (page == 2) {
    // record self
  }
  if (page == 3) {
    // processing
  }
  if (page == 4) {
    // review
  }

}
