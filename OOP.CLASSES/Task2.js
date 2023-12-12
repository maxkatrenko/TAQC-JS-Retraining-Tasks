class Marker {
  #color
  #amountOfInc

  constructor(color) {
    this.#color = color;
    this.#amountOfInc = 100; //percents
  }

  printText(text) {
    text = text.trim();
    for (let i = 0; this.#amountOfInc !== 0; i++) {
      console.log(text[i]);
      if (text[i] === ' ') {
        this.#amountOfInc += 10;
      }
      this.#amountOfInc -= 10;
    }
  }

  get color() {
    return this.#color;
  }

  get amountOfInc() {
    return this.#amountOfInc;
  }

  set amountOfInc(amountOfInc) {
    this.#amountOfInc = amountOfInc;
  }
}

class RefilableMarker extends Marker {

  constructor(colour, initialAmountOfInc) {
    super(colour);
  }

  refillMarkerToFull() {
    super.amountOfInc = 100;
  }

}

let marker = new Marker('Yellow');
marker.printText('Max Katrenko   ');
marker.printText("JS Training");

let refilableMarker = new RefilableMarker('Black');
refilableMarker.printText("Hello World!!!");
refilableMarker.refillMarkerToFull();
refilableMarker.printText("Hello Again!!!")
