# Trabalho de Conclusão - Serviço de Pagamento 💳

Este projeto implementa uma solução simples para gerenciamento e consulta de pagamentos, estruturada com testes automatizados utilizando **Mocha**, **Node Assert** e relatórios visuais com **Mochawesome**.

Projeto desenvolvido para a disciplina de Automação de Testes da Pós-Graduação.

## 🚀 Estrutura do Projeto

- `src/pagamento.js`: Contém a classe `ServicoDePagamento` e as regras de negócio de pagamentos.
- `test/pagamento.test.js`: Contém os cenários de testes automatizados que validam a lógica de categorização e a integridade da lista de pagamentos.

---

## 🛠️ Como Executar o Projeto Localmente

Siga os passos abaixo para baixar as dependências e executar os testes:

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### 1. Instalar as dependências
Abra o terminal na pasta do projeto e execute:
```bash
npm install
```

### 2. Executar os testes automatizados
Para rodar a bateria de testes e gerar o relatório do Mochawesome:
```bash
npm test
```

---

## 📊 Relatório de Testes (Mochawesome)

Após executar `npm test`, uma pasta chamada `mochawesome-report` será gerada na raiz do projeto. 
Para visualizar o relatório gráfico e interativo no seu navegador:

1. Abra a pasta `mochawesome-report/`.
2. Dê um duplo clique no arquivo `mochawesome.html`.
