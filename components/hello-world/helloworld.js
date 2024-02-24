export class HelloWorld extends HTMLElement {

  constructor() {
    super();
    this.name = 'World';
}
  // connect component
  // Called when the element is added to the document
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });

    shadow.innerHTML = `
    <style>
      p {
        text-align: center;
        font-weight: normal;
        padding: 1em;
        margin: 0 0 2em 0;
        background-color: #eee;
        border: 1px solid #666;
      }
    </style>

    <p>Hello ${ this.name }!</p>`;
  }

  // component attributes
  // The array of attributes that we want to observe and act on changes
  static get observedAttributes() {
    return ['name'];
  }
  // attribute change
  // an attribute changed
  attributeChangedCallback(property, oldValue, newValue) {
    // add code here to handle attribute changes
    if (oldValue === newValue) return;
    this[ property ] = newValue;

  }
  // disconnect component
  // Called when the element is removed from the document
  disconnectedCallback() {
    console.log('Goodbye World!');
  }
}

customElements.define( 'hello-world', HelloWorld );
