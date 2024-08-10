export async function getFlashSales() {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await res.json();
    if (!res.ok) {
      throw new Error("flash sales could not be loaded");
    }
    return data;
  } catch (err) {
    console.log(err);
  }
}
