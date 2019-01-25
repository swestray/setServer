import { Color, Shape, Value } from "../enum/cardAttributes";

export class Card {
    number: Number
    color: Color
    shape: Shape
    value: Value

    constructor(number, color, shape, value){
        this.number = number
        this.color = color,
        this.shape = shape,
        this.value = value
    }
}