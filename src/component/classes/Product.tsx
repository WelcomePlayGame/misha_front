import Category from "./Category";
class Product {
  private title: string;
  private cost: number;
  private size: string;
  private new_cost: number;
  private promotion: boolean;
  private category: Category;
  constructor(
    title: string,
    cost: number,
    size: string,
    new_cost: number,
    promotion: boolean,
    category: Category
  ) {
    this.title = title;
    this.cost = cost;
    this.size = size;
    this.new_cost = new_cost;
    this.promotion = promotion;
    this.category = category;
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

  get getSize() {
    return this.size;
  }
  set setSize(value: string) {
    this.size = value;
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
