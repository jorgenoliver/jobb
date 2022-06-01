
using System.Data.Common;
namespace UserProApi
{
    public class UserProQuery
    {
        public AppDb Db { get; set; }

        public UserProQuery(AppDb db)
        {
            Db = db;
        }

        public async Task<UserPro> SelectAsync()
        {
            using var cmd = Db.Connection.CreateCommand();
            cmd.CommandText = @"SELECT * FROM `UserPro`;";
            return await ReadAllAsync(await cmd.ExecuteReaderAsync());
        }

        private async Task<UserPro> ReadAllAsync(DbDataReader reader)
        {
            using (reader)
            {
                var post = new UserPro(Db)
                {
                    Navn = reader.GetString(0),
                    Address = reader.GetString(1),
                    Telefon = reader.GetInt32(2),
                    Fodsel = reader.GetDateTime(3),
                };
                return post;
            }
            
        }
    }
}