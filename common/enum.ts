enum StateUser {
  Pending = "Pending",
  Done = "Done",
  Cancel = "Cancel",
}
enum StateOrder {
  Pending = "Pending",
  Done = "Done",
  Cancel = "Cancel",
}
enum StatePartner {
  Pending = "Pending",
  Done = "Done",
  Cancel = "Cancel",
}
enum StateContact {
  Pending = "Pending",
  Done = "Done",
  Cancel = "Cancel",
}
enum StateBrandShop {
  Pending = "Pending",
  Done = "Done",
  Cancel = "Cancel",
}
enum StateItOutsource {
  Pending = "Pending",
  Done = "Done",
  Cancel = "Cancel",
}
enum StateConnectZaLo {
  Pending = "Pending",
  Done = "Done",
  Cancel = "Cancel",
}
type SelectedOptions = {
  type: string;
  color: string;
  power: string;
};
interface ProductData {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  type: string;
  color: string;
  button: string;
  power: string;
  connect: string;
  type_key: string;
}
interface TabItem {
  id: string;
  name: string;
  disc: Product[];
}

interface Product {
  title: string;
  items: Item[];
}

interface Item {
  id: string;
  name: string;
  price: number;
}
