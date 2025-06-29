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
    return this.clients.map(mapClientDtoToModel);
  }

  public async createClient(client: ClientModel): Promise<ClientModel> {
    await this.delay(1000);
    const newClient: ClientDTO = mapClientModelToDto(client);
    this.clients.push(newClient);
    return client;
  }
}

function mapClientDtoToModel(client: ClientDTO): ClientModel {
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

function mapClientModelToDto(client: ClientModel): ClientDTO {
  return {
    info: {
      nomeCompleto: client.name,
      detalhes: {
        email: client.email,
        nascimento: client.birthDate,
      },
    },
    estatisticas: {
      vendas: client.stats.sales?.map(sale => ({
        data: sale.date,
        valor: sale.value,
      })),
    },
  };
}
