class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                padding: 30px;
                width: 100%;
                background-color: #3a4750;
                color: #eeeeee;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
                text-align: center;
            }
            h2 {
                padding: 26px;
            }
        </style>
        <h2>Oishi Meals Finder</h2>`;
    }
}

customElements.define('app-bar', AppBar);