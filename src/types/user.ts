export interface User {
  comentarios: number;
  criadoEm: string;
  imagens: {
    resolucaoMedia: {
      url: string;
      width: number;
      height: number;
    };
    resolucaoPadrao: {
      url: string;
      width: number;
      height: number;
    };
    thumbnail: {
      url: string;
      width: number;
      height: number;
    };
  };
  lastUpdate: string;
  legenda: string;
  link: string;
  localizacao: string | null;
  metadados: {
    engagement: number;
    filter: string;
    impressions: number;
    reach: number;
    saved: number;
  };
  origem: string;
  referencias: Array<{ status: string; id: string; isInfluencer?: boolean; type?: string; oldId?: string; tipo?: string }>;
  tags: string[];
  tipo: string;
  uid: string;
  upvotes: number;
  usuario: {
    id: string;
    username: string;
    foto: string;
    nome: string;
  };
  _id: string;
}
