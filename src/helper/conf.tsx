interface Iurl {
  url: string;
  category: string;
  add: string;
  delete: string;
  product: string;
  order: string;
}
const url: Iurl = {
  url: "http://localhost:8080",
  category: "/api/category",
  add: "/add",
  delete: "/delete",
  product: "/api/product",
  order: "/api/order",
};

export default url;
