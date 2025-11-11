import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sql from "mssql";
import { getPool } from "../db/config";

const router = express.Router();

//  Register new user
router.post("/register", async (req, res) => {
  const { full_name,email,phone,role, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const pool = await getPool();

    await pool.request()
      .input("full_name", sql.VarChar, full_name)
      .input("email", sql.VarChar, email)
      .input("phone", sql.VarChar, phone)
      .input("role", sql.VarChar, role)
      .input("password_hash", sql.VarChar, hashedPassword)
      .query(
        `INSERT INTO UserAccount (full_name, email, phone, role, password_hash)
         VALUES (@full_name, @email, @phone, @role, @password_hash)`
      );

     
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error: any) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Login existing user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const pool = await getPool();
    const result = await pool
      .request()
      .input("email", sql.VarChar, email)
      .query("SELECT * FROM UserAccount WHERE email = @email");

    if (result.recordset.length === 0)
      return res.status(404).json({ message: "User not found" });

    const user = result.recordset[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { userId: user.UserID, email: user.Email },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token });
  } catch (error: any) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
