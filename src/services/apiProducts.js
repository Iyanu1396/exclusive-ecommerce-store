import { Chance } from "chance";

export async function getFlashSales() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (!res.ok) {
      throw new Error("flash sales could not be loaded");
    }

    // // Generates 10 random items from the data
    const chance = new Chance();
    const products = chance.pickset(data, 5);

    return products;
  } catch (err) {
    console.log(err);
  }
}

export async function getBestSelling() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (!res.ok) {
      throw new Error("flash sales could not be loaded");
    }

    // // Generates 10 random items from the data
    const chance = new Chance();
    const products = chance.pickset(data, 5);

    return products;
  } catch (err) {
    console.log(err);
  }
}

export async function getOurProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (!res.ok) {
      throw new Error("produtcs could not be loaded");
    }

    // // Generates 10 random items from the data
    const chance = new Chance();
    const products = chance.pickset(data, 13);

    return products;
  } catch (err) {
    console.log(err);
  }
}

export async function getAllProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (!res.ok) {
      throw new Error("produtcs could not be loaded");
    }

    return data;
  } catch (err) {
    console.log(err);
  }
}
