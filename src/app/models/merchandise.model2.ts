import { MerchandiseModel } from "./merchandise.model";
export interface MerchandiseModel2 {
  products: MerchandiseModel[];
  total: number;
  skip: number;
  limit: number;
}
