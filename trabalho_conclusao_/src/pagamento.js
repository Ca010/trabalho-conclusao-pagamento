export class ServicoDePagamento {
  constructor() {
    this.listaDePagamentos = [];
  }

  
  pagar(codigoBarras, empresa, valor) {
    // Categoria com base no valor ser maior que 100.00
    let categoria = 'padrão';
    if (valor > 100.00) {
      categoria = 'cara';
    }

   
    const novoPagamento = {
      codigoBarras: codigoBarras,
      empresa: empresa,
      valor: valor,
      categoria: categoria
    };

    
    this.listaDePagamentos.push(novoPagamento);
  }

  
  consultarUltimoPagamento() {
    if (this.listaDePagamentos.length === 0) {
      return null;
    }
    

    return this.listaDePagamentos[this.listaDePagamentos.length - 1];
  }
}