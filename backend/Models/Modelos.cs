public class Produtos
{
    public int IdProduto { get; set; }
    public string NomeProduto { get; set; }
    public string Tipo{ get; set; }

    public int Quantidade { get; set; }

    public int Pedidos_IdPedido { get; set; }
}

public class Pedidos
{
    public int IdPedido { get; set; }
    public int IdProduto{ get; set; }
    public int Usuarios_IdUsuario { get; set; }

}

public class Usuarios
{
    public int IdUsuario { get; set; }
    public string NomeUsuario { get; set; }
    public string Senha { get; set; }

    public string Regiao { get; set; }
}

public class Entregas
{
    public int IdUsuario { get; set; }
    public string Rua { get; set; }
    public string Cidade { get; set; }

    public string Regiao { get; set; }

    public int CEP { get; set; }

    public int Pedidos_IdPedido { get; set; }
}
