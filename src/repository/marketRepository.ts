import sql from "mssql"
import {getPool} from "../db/config";

export const getallmarkets=async ()=>{const pool = await getPool();
    const result = await pool.request().query("select *from market");
    return result.recordset};

    export const getmarketbyid = async(id:number)=> {const pool = await getPool();
        const result = await pool.request()
        .input("id",sql.Int,id)
        .query("SELECT * FROM market Where id = @id");
        return result.recordset[0];
    };