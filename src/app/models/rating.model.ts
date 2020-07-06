import { Product } from "./product.model";

export class Rating {
    constructor(
        public ratingId?: number,
        public starts?: number,
        public product?: Product
    ){}
}