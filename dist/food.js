"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const foods_js_1 = require("./foods.js");
const score_js_1 = require("./score.js");
class Food {
    constructor(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    clickEventHandler() {
        console.log('aaaaa');
        this.element.classList.toggle('food--active');
        const foods = foods_js_1.Foods.getInstance();
        const score = score_js_1.Score.getInstance();
        foods.activeElements;
        foods.activeElementsScore;
        score.totalScore;
        score.render();
    }
}
exports.Food = Food;
