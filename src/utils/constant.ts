export interface IProductDetails {
  title: string,
  price: number,
  image: string,
  rating: IRating
}

export interface IRating {
  rate: number,
  count: number
}