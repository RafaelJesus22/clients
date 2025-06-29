export interface ClientDTO {
  info: {
    nomeCompleto: string;
    detalhes: {
      email: string;
      nascimento: string;
    };
  };
  duplicado?: {
    nomeCompleto: string;
  };
  estatisticas: {
    vendas?: Array<{ data: string; valor: number }>;
  };
}

export interface ClientModel {
  name: string;
  email: string;
  birthDate: string;
  stats: {
    sales?: { date: string; value: number }[];
  };
}
