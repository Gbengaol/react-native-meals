export interface IMeal {
  id: string;
  categoryIds: string[];
  title: string;
  imageUrl: string;
  ingredients: string[];
  steps: string[];
  duration: number;
  complexity: "challenging" | "simple" | "hard";
  affordability: "pricey" | "affordable" | "luxurious";
  isGluttenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}
