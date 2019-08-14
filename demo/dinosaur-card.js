import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class DinosaurCard extends PolymerElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block;
        border-bottom: 1px solid #E8E8E8;
      }
      [horizontal][layout] {
        width: 400px;
        display: flex;
        flex-direction: row;
      }
      img {
        width: 100px;
        height: 100px;
        min-width: 100px;
        min-height: 100px;
        padding: 5px;
        border-radius: 100px;
      }
    </style>

    <div horizontal="" layout="">
      <img src="[[data.avatar]]" alt="[[data.name]]">
      <div>
        <h3>[[data.value]]</h3>
        <p>[[data.description]]</p>
      </div>
    </div>
`;}

static get is() { return 'dinosaur-card'; }

static get  properties() {
  return {
    data: Object,
    label: {
      type: String,
      computed: "_getLabel(data)"
    }
  }
}

  static get listeners() {
    return {
    "tap": "dinotap"
  }}

  dinotap(event) {
    console.log("dinotap", this);
  }

  _getLabel(data) {
    return data.dinoName;
  }
}
window.customElements.define(DinosaurCard.is, DinosaurCard);