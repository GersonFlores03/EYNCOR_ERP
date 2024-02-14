const db = require("../db");

/* Ok */
const getAllUsers = async (req, res) => {
   /*const body = req.body*/
   try {
      const result = await db.query("select * from users");
      console.log(result);
      res.json(result.rows);
   } catch (error) {
      res.json({ error: error.message });
   }
};

/* Ok */
const getUser = async (req, res) => {
   try {
      const { id } = req.params;
      const result = await db.query("select * from users where user_id = $1", [
         id,
      ]);
      console.log(result);
      if (result.rows.length === 0)
         return res.status(404).json({ message: "Usuario no encontrado" });
      res.json(result.rows);
   } catch (error) {
      res.json({ error: error.message });
   }
};
/**/

/* Ok - */
const createUser = async (req, res) => {
   /*const body = req.body*/
   const {
      user_id,
      email,
      user_name,
      password,
      isVerify,
      last_name,
      first_name,
      country_code,
      last_login,
   } = req.body;
   try {
      const result = await db.query(
         "insert into users ( user_id, email, user_name, password, isVerify, last_name, first_name,country_code, last_login ) values ($1, $2, $3, $4,$5,$6,$7,$8,$9) returning *",
         [
            user_id,
            email,
            user_name,
            password,
            isVerify,
            last_name,
            first_name,
            country_code,
            last_login
         ]
      );
      console.log(result);
      res.json(result.rows[0]);
   } catch (error) {
      res.json({ error: error.message });
   }
};
/**/
/*const deleteUser = async (req, res) => {
   const body = req.body;
   console.log(body);
   res.json("Deleting a user");
};*/
/* En proceso */
const deleteUser = async (req, res) => {
  const { id } = req.params;
   try {
     const result = await db.query("delete from users where user_id = $1", [id]);
     
      console.log(result);
      if (result.rowCount === 0)
         return res.status(404).json({ message: "Usuario no encontrado" });
      return res.sendStatus(204);
   } catch (error) {
      res.json({ error: error.message });
   }
};
/*""*/

/* Ok - */
const updateUser = async (req, res) => {
   const { id } = req.params;
   const {
      email,
      user_name,
      password,
      isVerify,
      last_name,
      first_name,
      country_code,
      last_login,
   } = req.body;
   console.log(id, req.body);
   try {
      const result = await db.query(
         "UPDATE users SET email = $1, user_name = $2, password = $3, isVerify = $4, last_name = $5, first_name = $6, country_code = $7, last_login = $8 where user_id = $9 returning *",
         [
            email,
            user_name,
            password,
            isVerify,
            last_name,
            first_name,
            country_code,
            last_login,
            id,
         ]
      );
      console.log(result);
      if (result.rows.length === 0)
         return res.status(404).json({ message: "Usuario no encontrado" });
      res.json(result.rows[0]);
   } catch (error) {
      res.json({ error: error.message });
   }
};
/**/

module.exports = {
   getAllUsers,
   getUser,
   createUser,
   deleteUser,
   updateUser,
};
