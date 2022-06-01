using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace UserProApi.Controllers
{
    ///Get
    [Route("Get")]
    public class GetController : ControllerBase
    {
        public GetController(AppDb db)
        {
            Db = db;
        }

  
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            await Db.Connection.OpenAsync();
            var query = new UserProQuery(Db);
            var result = await query.SelectAsync();
            return new OkObjectResult(result);
        }

        public AppDb Db { get; }
    }

    //Set
    [Route("Set")]
    public class SetController : ControllerBase
    {
        public SetController(AppDb db)
        {
            Db = db;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]UserPro body)
        {
            await Db.Connection.OpenAsync();
            body.Db = Db;
            await body.SetAsync();
            return new OkObjectResult(body);
        }

        public AppDb Db { get; }
    }
        
}
