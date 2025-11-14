// src/services/farmerService.ts
import sql from "../db/config";

// Add a farmer
export const addFarmer = async (farmer: any) => {
  const query = `
    INSERT INTO Farmers (FullName, PhoneNumber, Location, FarmName)
    VALUES (@FullName, @PhoneNumber, @Location, @FarmName)
  `;

  const request = new sql.Request();
  request.input("FullName", farmer.FullName);
  request.input("PhoneNumber", farmer.PhoneNumber);
  request.input("Location", farmer.Location);
  request.input("FarmName", farmer.FarmName);

  await request.query(query);
  return { message: "Farmer added successfully" };
};

// Get all farmers
export const getAllFarmers = async () => {
  const result = await new sql.Request().query("SELECT * FROM Farmers");
  return result.recordset;
};

// Get a farmer by ID
export const getFarmerById = async (id: number) => {
  const request = new sql.Request();
  request.input("FarmerID", id);
  const result = await request.query("SELECT * FROM Farmers WHERE FarmerID = @FarmerID");
  return result.recordset[0] || null;
};

// Update a farmer
export const updateFarmer = async (id: number, farmer: any) => {
  const query = `
    UPDATE Farmers
    SET FullName = @FullName,
        PhoneNumber = @PhoneNumber,
        Location = @Location,
        FarmName = @FarmName
    WHERE FarmerID = @FarmerID
  `;
  const request = new sql.Request();
  request.input("FarmerID", id);
  request.input("FullName", farmer.FullName);
  request.input("PhoneNumber", farmer.PhoneNumber);
  request.input("Location", farmer.Location);
  request.input("FarmName", farmer.FarmName);

  await request.query(query);
  return { message: "Farmer updated successfully" };
};

// Delete a farmer
export const deleteFarmer = async (id: number) => {
  const request = new sql.Request();
  request.input("FarmerID", id);
  await request.query("DELETE FROM Farmers WHERE FarmerID = @FarmerID");
  return { message: "Farmer deleted successfully" };
};
