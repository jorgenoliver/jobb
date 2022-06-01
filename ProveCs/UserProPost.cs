using System.Data;
using System.Threading.Tasks;
using MySqlConnector;

namespace UserProApi
{
    public class UserPro
    {
        public string Navn { get; set; }
        public string Address { get; set; }
        public int Telefon { get; set; }
        public DateTime Fodsel { get; set; }
        internal AppDb Db { get; set; }

        public UserPro()
        {
        }

        internal UserPro(AppDb db)
        {
            Db = db;
        }

        public async Task SetAsync()
        {
            using var cmd = Db.Connection.CreateCommand();
            cmd.CommandText = @"INSERT INTO `UserPro` (`Navn`, `Addre`, `TLF`, `Fodsel`) VALUES (@navn, @address, @telefon, @aar-@maned-@dag);";
            BindParams(cmd);
            await cmd.ExecuteNonQueryAsync();
        }

        private void BindParams(MySqlCommand cmd)
        {
            cmd.Parameters.Add(new MySqlParameter
            {
                ParameterName = "@Navn",
                Value = Navn,
            });
            cmd.Parameters.Add(new MySqlParameter
            {
                ParameterName = "@Address",
                Value = Address,
            });
            cmd.Parameters.Add(new MySqlParameter
            {
                ParameterName = "@Telefon",
                Value = Telefon,
            });
            cmd.Parameters.Add(new MySqlParameter
            {
                ParameterName = "@Fodsel",
                Value = Fodsel,
            });
        }
    }
}