# Trabalho de Conclusão - Serviço de Pagamento e Pipeline de CI 💳

Este repositório contém a solução desenvolvida para o trabalho de conclusão da disciplina de Automação de Testes/Integração Contínua da Pós-Graduação, ministrada pelo professor **Julio de Lima**.

O projeto consiste em um microsserviço simplificado de gerenciamento de pagamentos escrito em Node.js, com testes unitários automatizados integrados a uma pipeline de Integração Contínua (CI) usando **GitHub Actions**.

---

## 🚀 Estrutura do Projeto

* **`src/pagamento.js`**: Implementação da classe `ServicoDePagamento`, que encapsula a regra de negócios (como a categorização automática de pagamentos padrão/caros).
* **`test/pagamento.test.js`**: Suíte de testes unitários desenvolvida utilizando **Mocha** e a biblioteca padrão `node:assert`.
* **`.github/workflows/ci.yml`**: Configuração completa da pipeline de CI no GitHub Actions.
* **`mochawesome-report/`** (gerado localmente/na pipeline): Relatório gráfico de execução dos testes.

---

## 🛠️ Execução Local

### Pré-requisitos
* Node.js (v18 ou superior) instalado.

### 1. Instalar as dependências
```bash
npm install
```

### 2. Executar os testes automatizados
```bash
npm test
```
Isso executará os testes e criará a pasta `mochawesome-report/` contendo o relatório de testes em HTML e JSON.

---

## ⛓️ Pipeline de Integração Contínua (CI) com GitHub Actions

A pipeline foi projetada para garantir que qualquer alteração no código seja automaticamente testada e avaliada. Ela executa sob três gatilhos principais:

1. **Gatilho de Push (`push`):**
   Disparado automaticamente sempre que alterações são enviadas (`git push`) para a branch `main`. Isso garante feedback rápido (*Fail Fast*).
2. **Gatilho Manual (`workflow_dispatch`):**
   Permite que desenvolvedores, testadores ou gerentes executem a suite de testes sob demanda diretamente através da interface web do GitHub.
3. **Gatilho Agendado (`schedule`):**
   Executado de forma programada toda segunda-feira à meia-noite UTC (`0 0 * * 1`), garantindo que testes periódicos rodem independentemente de novos commits (útil para detectar dependências depreciadas ou quebras silenciosas).

### Definição do Workflow
O fluxo de trabalho está definido em [`.github/workflows/ci.yml`](.github/workflows/ci.yml) e realiza as seguintes etapas:
* **Checkout do Código:** Faz o clone do repositório no ambiente virtual temporário (`ubuntu-latest`).
* **Configuração do Node.js:** Prepara o ambiente Node.js na versão 20 e ativa o cache do npm para aceleração das próximas execuções.
* **Instalação das Dependências:** Executa o `npm ci` para garantir uma instalação limpa e idêntica ao arquivo `package-lock.json`.
* **Execução dos Testes:** Roda a bateria de testes automatizados (`npm test`).
* **Armazenamento do Relatório:** Utiliza a action `actions/upload-artifact@v4` para empacotar e disponibilizar o diretório de relatórios `mochawesome-report/` como um artefato da pipeline, garantindo a sua visibilidade mesmo em caso de falha nos testes (`if: always()`).

---

## 🧠 Conceitos de CI/CD Aplicados no Projeto

* **Integração Contínua (CI):** A prática de integrar código frequentemente a um repositório compartilhado, validada por compilações e testes automatizados. O objetivo principal é identificar problemas de integração o mais cedo possível.
* **Automação de Build e Testes:** A pipeline elimina a necessidade de intervenção humana para garantir a corretude do código básico. Se um teste falhar, o build quebra, sinalizando imediatamente ao time que o commit recente introduziu uma regressão.
* **Feedback Contínuo:** Através dos relatórios visuais gerados por ferramentas como o **Mochawesome** e expostos como artefatos da pipeline, a equipe tem visibilidade imediata de quais testes passaram e quais falharam.
* **Ambientes Reprodutíveis:** Rodar os testes em um contêiner limpo (`ubuntu-latest`) garante que o software não dependa de configurações específicas da máquina local do desenvolvedor ("na minha máquina funciona").

---

## 📈 Evidências de Execução da Pipeline

As execuções bem-sucedidas do workflow podem ser validadas na aba **Actions** deste repositório GitHub.
Para baixar o relatório de testes:
1. Acesse o histórico de execuções na aba **Actions**.
2. Clique na execução desejada.
3. Na seção de **Artifacts** no final da página, clique em `mochawesome-report` para realizar o download.
