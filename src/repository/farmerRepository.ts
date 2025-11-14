import sql from 'mssql';
import config, { sqlConfig } from '../db/config'; // Make sure this points to your proper DB config

export interface Farmer {
  FarmerID?: number;
  FullName: string;
  PhoneNumber: string;
  Location: string;
  FarmName: string;
}

export class FarmerRepository {
  private pool: sql.ConnectionPool | null = null;

  constructor() {
    // No need to declare pool here; it's already declared above
  }

  // Connect to the database
  async connect() {
    if (!this.pool) {
      this.pool = await new sql.ConnectionPool(sqlConfig).connect();
      console.log(' MSSQL connected.');
    }
  }

  // Close the connection
  async close() {
    if (this.pool) {
      await this.pool.close();
      this.pool = null;
      console.log(' MSSQL connection closed.');
    }
  }

  // Get all farmers
  async getAllFarmers(): Promise<Farmer[]> {
    await this.connect();
    const result = await this.pool!.request().query('SELECT * FROM Farmers');
    return result.recordset.map(row => ({
      FarmerID: row.FarmerID,
      FullName: row.FullName,
      PhoneNumber: row.PhoneNumber,
      Location: row.Location,
      FarmName: row.FarmName
    }));
  }

  // Get a farmer by ID
  async getFarmerById(id: number): Promise<Farmer | null> {
    await this.connect();
    const result = await this.pool!.request()
      .input('FarmerID', sql.Int, id)
      .query('SELECT * FROM Farmers WHERE FarmerID = @FarmerID');
    if (!result.recordset[0]) return null;
    const row = result.recordset[0];
    return {
      FarmerID: row.FarmerID,
      FullName: row.FullName,
      PhoneNumber: row.PhoneNumber,
      Location: row.Location,
      FarmName: row.FarmName
    };
  }

  // Add a new farmer
  async addFarmer(farmer: Farmer): Promise<void> {
    await this.connect();
    await this.pool!.request()
      .input('FullName', sql.NVarChar, farmer.FullName)
      .input('PhoneNumber', sql.NVarChar, farmer.PhoneNumber)
      .input('Location', sql.NVarChar, farmer.Location)
      .input('FarmName', sql.NVarChar, farmer.FarmName)
      .query(`
        INSERT INTO Farmers (FullName, PhoneNumber, Location, FarmName)
        VALUES (@FullName, @PhoneNumber, @Location, @FarmName)
      `);
  }

  // Update an existing farmer
  async updateFarmer(id: number, farmer: Farmer): Promise<void> {
    await this.connect();
    await this.pool!.request()
      .input('FarmerID', sql.Int, id)
      .input('FullName', sql.NVarChar, farmer.FullName)
      .input('PhoneNumber', sql.NVarChar, farmer.PhoneNumber)
      .input('Location', sql.NVarChar, farmer.Location)
      .input('FarmName', sql.NVarChar, farmer.FarmName)
      .query(`
        UPDATE Farmers
        SET FullName = @FullName,
            PhoneNumber = @PhoneNumber,
            Location = @Location,
            FarmName = @FarmName
        WHERE FarmerID = @FarmerID
      `);
  }

  // Delete a farmer
  async deleteFarmer(id: number): Promise<void> {
    await this.connect();
    await this.pool!.request()
      .input('FarmerID', sql.Int, id)
      .query('DELETE FROM Farmers WHERE FarmerID = @FarmerID');
  }
}
