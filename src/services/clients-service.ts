import { ClientDTO, ClientModel } from '../types/clients';

export interface SalesStats {
  date: string;
  total: number;
}

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

  public async getSalesStats(): Promise<SalesStats[]> {
    await this.delay(1500);

    const salesByDate: Record<string, number> = {};

    this.clients.forEach(client => {
      client.estatisticas?.vendas?.forEach(sale => {
        salesByDate[sale.data] = (salesByDate[sale.data] || 0) + sale.valor;
      });
    });

    return Object.entries(salesByDate).map(([date, total]) => ({
      date,
      total,
    }));
  }

  public async getHighestSalesClient(): Promise<ClientModel | null> {
    await this.delay(2500);

    let maxTotal = 0;
    let maxClient: ClientDTO | null = null;

    for (const client of this.clients) {
      const total =
        client.estatisticas?.vendas?.reduce(
          (sum, sale) => sum + sale.valor,
          0,
        ) || 0;
      if (total > maxTotal) {
        maxTotal = total;
        maxClient = client;
      }
    }

    return maxClient ? mapClientDtoToModel(maxClient) : null;
  }

  public async getHighestAverageClient(): Promise<ClientModel | null> {
    await this.delay(1750);

    let maxAvg = 0;
    let maxClient: ClientDTO | null = null;

    for (const client of this.clients) {
      const vendas = client.estatisticas?.vendas || [];
      if (vendas.length === 0) continue;
      const total = vendas.reduce((sum, sale) => sum + sale.valor, 0);
      const avg = total / vendas.length;
      if (avg > maxAvg) {
        maxAvg = avg;
        maxClient = client;
      }
    }

    return maxClient ? mapClientDtoToModel(maxClient) : null;
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
