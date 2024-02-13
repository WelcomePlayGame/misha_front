import Category from "./Category";
interface IPoroduct {
  id: number;
  title: string;
  cost: number;
  size: string;
  new_cost: number;
  promotion: boolean;
  category: Category;
  photo: string[];
}

class Order {
  private name: string;
  private surname: string;
  private father_name: string;
  private phone: string;
  private city: string;
  private sum: number;
  private products: IPoroduct[];
  constructor(
    name: string,
    surname: string,
    father_name: string,
    phone: string,
    city: string,
    sum: number,
    products: IPoroduct[]
  ) {
    this.name = name;
    this.surname = surname;
    this.father_name = father_name;
    this.phone = phone;
    this.city = city;
    this.sum = sum;
    this.products = products;
  }

  get getName() {
    return this.name;
  }
  set setName(value: string) {
    this.name = value;
  }

  get getSurname() {
    return this.surname;
  }
  set setSurname(value: string) {
    this.surname = value;
  }
  get getFatherName() {
    return this.father_name;
  }
  set setFatherName(value: string) {
    this.father_name = value;
  }
  get getPhone() {
    return this.phone;
  }

  set setPhone(value: string) {
    this.phone = value;
  }
  get getCity() {
    return this.city;
  }
  set setCity(value: string) {
    this.city = value;
  }
  get getSum() {
    return this.sum;
  }
  set setSum(value: number) {
    this.sum = value;
  }
  get getProducts() {
    return this.products;
  }
  set setProducts(value: IPoroduct[]) {
    this.products = value;
  }
}

export default Order;
