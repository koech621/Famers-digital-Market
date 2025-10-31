import sql from "../db/config";

// Add a product
export const addProduct = async (product: any) => {
  const query = `
    INSERT INTO Product (farmer_id, product_name, category, quantity, price, image_url, description)
    VALUES (@farmer_id, @product_name, @category, @quantity, @price, @image_url, @description)
  `;

  const request = new sql.Request();
  request.input("farmer_id", product.farmer_id);
  request.input("product_name", product.product_name);
  request.input("category", product.category);
  request.input("quantity", product.quantity);
  request.input("price", product.price);
  request.input("image_url", product.image_url || null);
  request.input("description", product.description || null);

  await request.query(query);
  return { message: " Product added successfully" };
};

// Get all products
export const getAllProducts = async () => {
  const result = await new sql.Request().query("SELECT * FROM Product");
  return result.recordset;
};
