let input;

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


  if (page == 0) {
    let divText;
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

    divButton = createDiv();
    divButton.parent("content");

    divPara = createDiv();
    divPara.class("para");
    divPara.parent("content");

    para = createElement("p", "yaw yeet");
    para.parent(divPara);

    divButton = createDiv();
    divButton.class("launchButton");
    divButton.parent("content");

    button = createButton("Get started");
    button.mouseReleased(function() { drawContent(1);});
    button.parent(divButton);

  }
  if (page == 1) {
    let inbox;
    let header;
    let bar;
    let divInbox;
    let divButton;

    divHeader = createDiv();
    divHeader.parent("content");
    rect(13, 1, 600, 55, 20, 15, 10, 5);
    header = createElement("h2","Step 1: Input Text and press Enter!");
    header.position(20,-5);
    header.parent(divHeader);

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
      input = inbox.value();
      var check = Boolean(input);
      if (check){
        removeElements();
        drawContent(2);
      }else{
        alert("You didn't type in anything!")
        drawContent(1);
      }

    }


  }
  if (page == 2) {
    let divHeader;
    let divText;
    let header;
    let text;
    let button;
    let para;

    divHeader = createDiv();
    divHeader.parent("content");
    header = createElement("h2","Step 2: Record Yourself!");
    header.position(20,-5);
    header.parent(divHeader);
    button = createButton("Record");
    button.position(500,20);
    button.mouseReleased(recStart);
    button.parent(divHeader);

    divText = createDiv();
    divText.class("para");
    divText.parent("content");
    text = createElement("p",input);
    text.parent(divText);





    function recStart(){
      alert("Recording Started!");
      removeElements();
      drawContent(3);
    }


  }
  if (page == 3) {
    let divHeader;
    let header;

    divHeader = createDiv();
    divHeader.parent("content");
    header = createElement("h2","Loading... ");
    header.position(20,-5);
    header.parent(divHeader);

    alert("Finished Loading!");
    drawContent(4);

  }
  if (page == 4) {
    let divHeader;
    let divText;
    let header;
    let button;
    let text;
    let para;

    divHeader = createDiv();
    divHeader.parent("content");
    header = createElement("h2","Step 3: Review!");
    header.position(20,-5);
    header.parent(divHeader);
    button = createButton("Try Again?");
    button.position(500,20);
    button.mouseReleased(recStart);
    button.parent(divHeader);


    divText = createDiv();
    divText.class("para");
    divText.parent("content");
    text = createElement("p",input);
    text.parent(divText);

    function recStart(){
      removeElements();
      drawContent(1);
    }
  }

}
