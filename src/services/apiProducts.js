import { Chance } from "chance";

export async function getFlashSales() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    if (!res.ok) {
      throw new Error("flash sales could not be loaded");
    }

    // Generates 6 random items from the data
    const chance = new Chance();
    const products = chance.pickset(data, 6);

    return products;
  } catch (err) {
    console.log(err);
  }
}

export async function getBestSelling(){
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    if (!res.ok) {
      throw new Error("flash sales could not be loaded");
    }

    // Generates 6 random items from the data
    const chance = new Chance();
    const products = chance.pickset(data, 6);

    return products;
  } catch (err) {
    console.log(err);
  }
}
