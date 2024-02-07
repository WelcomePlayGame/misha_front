class Category {
  private id?: number;
  private title?: string;

  constructor(id?: number, title?: string) {
    this.id = id;
    this.title = title;
  }

  get getTitle() {
    return this.title;
  }

  set setTitle(value: string) {
    this.title = value;
  }

  get getId() {
    return this.id;
  }
  set setId(value: number) {
    this.id = value;
  }
}
export default Category;
