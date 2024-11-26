using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class ProdutosController2 : ControllerBase
{
    private static List<string> produtos = new List<string>();

    // GET api/produtos
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(produtos);
    }

    // POST api/produtos
    [HttpPost]
    public IActionResult Post([FromBody] string produto)
    {
        produtos.Add(produto);
        return CreatedAtAction(nameof(Get), new { nome = produto }, produto);
    }

    // DELETE api/produtos/{nome}
    [HttpDelete("{nome}")]
    public IActionResult Delete(string nome)
    {
        var produto = produtos.FirstOrDefault(p => p == nome);
        if (produto == null)
        {
            return NotFound();
        }

        produtos.Remove(produto);
        return NoContent();
    }
}
