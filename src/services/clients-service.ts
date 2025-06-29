import { ClientDTO, ClientModel } from '../types/clients';

export class ClientsService {
  private clients: ClientDTO[] = [
    {
      info: {
        nomeCompleto: 'Ana Beatriz',
        detalhes: {
          email: 'ana.b@example.com',
          nascimento: '1992-05-01',
        },
      },
      estatisticas: {
        vendas: [
          { data: '2024-01-01', valor: 150 },
          { data: '2024-01-02', valor: 50 },
        ],
      },
    },
    {
      info: {
        nomeCompleto: 'Carlos Eduardo',
        detalhes: {
          email: 'cadu@example.com',
          nascimento: '1987-08-15',
        },
      },
      duplicado: {
        nomeCompleto: 'Carlos Eduardo',
      },
      estatisticas: {
        vendas: [],
      },
    },
  ];

  private async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public async getClients(): Promise<any[]> {
    await this.delay(2000);
    return this.clients.map(clientMapper);
  }
}

function clientMapper(client: ClientDTO): ClientModel {
  return {
    name: client.info.nomeCompleto,
    email: client.info.detalhes.email,
    birthDate: client.info.detalhes.nascimento,
    stats: {
      sales: client.estatisticas?.vendas?.map(sale => ({
        date: sale.data,
        value: sale.valor,
      })),
    },
  };
}
