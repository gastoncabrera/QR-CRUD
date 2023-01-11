export default class Products {
  public readonly id: string;
  public title: string;
  public price: number;

  public constructor(args: {
    id: string;
    title: string;
    price: number
  }) {
    this.id = args.id;
    this.title = args.title;
    this.price = args.price;
  }

}