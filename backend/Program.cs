var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Habilitar arquivos estáticos
app.UseStaticFiles();

app.MapControllers();

app.Run();
