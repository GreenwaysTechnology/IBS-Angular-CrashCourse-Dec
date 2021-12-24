import { OrderService } from "./services/order.service";
import {ProductService} from './services/product.service';
import { Product } from "./types/product.type";


let orderService = new OrderService();
console.log(orderService.findAll())


let products:Array<Product> = new ProductService().findAllProducts();
console.log(products)