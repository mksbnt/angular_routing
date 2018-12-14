import { Injectable } from '@angular/core';
import { Product } from './product';

let products = [
  new Product(6325, 'Ethylene', 100, 1, 2),
  new Product(8252, 'Propene', 200, 1, 3),
  new Product(8255, 'Isobutylene', 300, 1, 5),
  new Product(6326, 'Acetylene', 400, 2, 1),
  new Product(7846, '1-Butyne', 500, 2, 6),
  new Product(996, 'Phenol', 600, 2, 4),
  new Product(289, 'Catechol', 700, 3, 3),
  new Product(5054, 'Resorcinol', 800, 3, 6),
  new Product(764, 'Hydroquinone', 900, 3, 4),
  new Product(1057, 'Pyrogallol', 1000, 1, 5)
]

let productsPromise = Promise.resolve(products);

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getAll(): Promise<Product[]> {
    return productsPromise;
  }

  getProduct(id: number): Promise<Product> {
    return productsPromise
      .then(products => products.find(x => x.id == id));
  }
}