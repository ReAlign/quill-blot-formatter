// @flow

import BlotSpec from './BlotSpec';
import BlotFormatter from '../BlotFormatter';

export default class ImageSpec extends BlotSpec {
  img: ?HTMLElement;

  constructor(formatter: BlotFormatter) {
    super(formatter);
    this.img = null;
  }

  init() {
    this.formatter.quill.root.addEventListener('click', this.onClick);
  }

  getTargetElement(): ?HTMLElement {
    return this.img;
  }

  onHide() {
    this.img = null;
  }

  onClick = (event: MouseEvent) => {
    const el = event.target;
    console.log(el);
    console.log(el.className);
    console.log(el.dataset);
    console.log(el.style);
    if (!(el instanceof HTMLElement) || el.tagName !== 'IMG' || el.dataset.resize === 'no') {
      return;
    }

    this.img = el;
    this.formatter.show(this);
  };
}
