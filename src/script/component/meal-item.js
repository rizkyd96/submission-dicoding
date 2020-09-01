class MealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :host {
                display: block;
                margin-bottom: 20px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 20px;
                overflow: hidden;
                background-color: #fff;
                color: #d72323;
                word-spacing: 1px;
                line-height: 1.4em;
            }
            
            .meal-img {
                width: 100%;
                max-height: 800px;
                object-fit: cover;
                object-position: center;
                background-color: #3a4750;
            }
            
            .meal-info {
                padding: 25px;
            }

            .meal-info>h2 {
                text-align: center;
            }
            
            .meal-info>h3 {
                margin-top: 10px;
                font-weight: lighter;
            }
            
            .meal-info>p {
                text-align: justify;
                margin-top: 15px;
                overflow: hidden;
                text-overflow: inherit;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10;
            }
        </style>
           <img class="meal-img" src="${this._meal.strMealThumb}" alt="Fan Art">
           <div class="meal-info">
               <h2>${this._meal.strMeal}</h2>
               <h3>Category: ${this._meal.strCategory}</h3>
               <h3>From: ${this._meal.strArea}</h3>
               <p>${this._meal.strInstructions}</p>
           </div>`;
    }
}

customElements.define('meal-item', MealItem);