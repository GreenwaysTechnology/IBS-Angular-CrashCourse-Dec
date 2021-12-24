//dependency injection.

class OrderRepository {

    public list(): string {
        return 'orders'
    }
}

class OrderService {
    constructor(private orderRepo: OrderRepository) { }
    //
    public list(): string {
        return this.orderRepo.list();
    }

}

class OrderController {

    constructor(private orderService: OrderService) { }
    public list(): string {
        return this.orderService.list();
    }
}

let orderControler = new OrderController(new OrderService(new OrderRepository))
console.log(orderControler.list())