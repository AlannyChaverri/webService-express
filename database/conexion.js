const sql = require("mssql");

async () => {
  try {
    // make sure that any items are correctly URL encoded in the connection string
    await sql.connect(
      "Server=localhost,1433;Database=diagnostico_db;User Id=alanny;Password=root;Encrypt=true"
    );
    const result = await sql.query`select * from usuarios_tb `;
    console.dir(result);
  } catch (err) {
    console.error(error);
  }
};
