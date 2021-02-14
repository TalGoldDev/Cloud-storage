import { pool } from "../database/index";

export const getUserFromDB = async (email: string) => {
  try {
    const user = await pool.query("SELECT * FROM members WHERE (email = $1)", [
      email,
    ]);
    // user not found
    if (user.rows.length == 0) {
      return null;
    }

    return user.rows[0];
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
