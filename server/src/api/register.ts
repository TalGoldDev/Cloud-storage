import { pool } from "../database/index";

export const selectAllRows = async () => {
  try {
    const members = await pool.query("SELECT * FROM members");
    console.log(members.rows);
    return members;
  } catch (err) {
    console.error(err.message);
  }
};
