import { pool } from "../database/index";

export const AddUserToDatabase = async (
  name: string,
  password: string,
  email: string,
  memberLevel: number
) => {
  try {
    const members = await pool.query(
      "INSERT INTO members (name,password,email,member_level) VALUES ($1,$2,$3,$4)",
      [name, password, email, memberLevel]
    );
    return true;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};
