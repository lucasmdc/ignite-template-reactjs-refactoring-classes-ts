export interface FoodData {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export interface FoodInput extends Omit<FoodData, 'id, available'> { }