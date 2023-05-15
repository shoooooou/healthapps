import { Foods } from "./foods.js";
import { Score } from "./score.js";
export class Food {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        console.log('aaaaa');
        this.element.classList.toggle('food--active');
        const foods = Foods.getInstance();
        const score = Score.getInstance();
        foods.activeElements;
        foods.activeElementsScore;
        score.totalScore;
        score.render();
    }
}
