import Category from "./Category";
class Product {
  private id: number;
  private title: string;
  private cost: number;
  private desribe: string;
  private new_cost: number;
  private promotion: boolean;
  private category: Category;
  constructor(
    id: number,
    title: string,
    cost: number,
    desribe: string,
    new_cost: number,
    promotion: boolean,
    category: Category
  ) {
    this.id = id;
    this.title = title;
    this.cost = cost;
    this.desribe = desribe;
    this.new_cost = new_cost;
    this.promotion = promotion;
    this.category = category;
  }
  get getId() {
    return this.id;
  }
  set setId(value: number) {
    this.id = value;
  }
  get getTitle() {
    return this.title;
  }
  set setTitle(value: string) {
    this.title = value;
  }

  get getCost() {
    return this.cost;
  }
  set setCost(value: number) {
    this.cost = value;
  }

  get getDesribe() {
    return this.desribe;
  }
  set setDesribe(value: string) {
    this.desribe = value;
  }
  get getNew_cost() {
    return this.new_cost;
  }
  set setNew_cost(value: number) {
    this.new_cost = value;
  }
  get getPromotion() {
    return this.promotion;
  }
  set setPromotion(value: boolean) {
    this.promotion = value;
  }
  get getCategory() {
    return this.category;
  }
  set setCategory(value: Category) {
    this.category = value;
  }
}

export default Product;
