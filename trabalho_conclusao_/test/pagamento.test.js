import { ServicoDePagamento } from '../src/pagamento.js';
import assert from 'node:assert';

describe('Testes do Serviço de Pagamento', function () {

    it('Validar que um pagamento com valor maior que 100.00 é categorizado como "cara"', function () {
        // Arrange
        const servico = new ServicoDePagamento();

        // Act
        servico.pagar('0987-7656-3475', 'Samar', 156.87);
        const ultimoPagamento = servico.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '0987-7656-3475');
        assert.equal(ultimoPagamento.empresa, 'Samar');
        assert.equal(ultimoPagamento.valor, 156.87);
        assert.equal(ultimoPagamento.categoria, 'cara');
    });

    it('Validar que um pagamento com valor menor ou igual a 100.00 é categorizado como "padrão"', function () {
        // Arrange
        const servico = new ServicoDePagamento();

        // Act
        servico.pagar('1234-5678-9012', 'Copasa', 45.50);
        const ultimoPagamento = servico.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.codigoBarras, '1234-5678-9012');
        assert.equal(ultimoPagamento.empresa, 'Copasa');
        assert.equal(ultimoPagamento.valor, 45.50);
        assert.equal(ultimoPagamento.categoria, 'padrão');
    });

    it('Validar que a consulta de pagamentos retorna apenas o último pagamento realizado', function () {
        // Arrange
        const servico = new ServicoDePagamento();

        // Act
        servico.pagar('0987-7656-3475', 'Samar', 156.87);
        servico.pagar('1234-5678-9012', 'Copasa', 45.50);
        const ultimoPagamento = servico.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento.empresa, 'Copasa');
        assert.equal(ultimoPagamento.valor, 45.50);
    });

    it('Validar que a consulta retorna nulo quando nenhum pagamento foi realizado', function () {
        // Arrange
        const servico = new ServicoDePagamento();

        // Act
        const ultimoPagamento = servico.consultarUltimoPagamento();

        // Assert
        assert.equal(ultimoPagamento, null);
    });
});
