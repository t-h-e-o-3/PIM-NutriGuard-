using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    // DbSets para as tabelas
    public DbSet<Produtos> Produtos { get; set; }
    public DbSet<Pedidos> Pedidos { get; set; }
    public DbSet<Usuarios> Usuarios { get; set; }
    public DbSet<Entregas> Entregas { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configurar chaves primárias para as tabelas
        modelBuilder.Entity<Produtos>()
            .HasKey(p => p.IdProduto);

        modelBuilder.Entity<Pedidos>()
            .HasKey(p => p.IdPedido);

        modelBuilder.Entity<Usuarios>()
            .HasKey(u => u.IdUsuario);

        modelBuilder.Entity<Entregas>()
            .HasKey(e => new { e.IdUsuario, e.Pedidos_IdPedido }); // Exemplo de chave composta

        // Configurar relacionamentos
        modelBuilder.Entity<Produtos>()
            .HasOne<Pedidos>() // Produto está relacionado a um Pedido
            .WithMany()
            .HasForeignKey(p => p.Pedidos_IdPedido)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Pedidos>()
            .HasOne<Usuarios>() // Pedido está relacionado a um Usuário
            .WithMany()
            .HasForeignKey(p => p.Usuarios_IdUsuario)
            .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Entregas>()
            .HasOne<Pedidos>() // Entrega está relacionada a um Pedido
            .WithMany()
            .HasForeignKey(e => e.Pedidos_IdPedido)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
