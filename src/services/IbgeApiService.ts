import { News } from '@components/NewsItem';
import axios, { AxiosInstance } from 'axios';

export interface NewsResponse {
  count: number;
  page: number;
  totalPages: number;
  nextPage: number | null;
  previousPage: number | null;
  showingFrom: number;
  showingTo: number;
  items: News[];
}

class IbgeApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://servicodados.ibge.gov.br/api/v3'
    });
  }

  public async getNews(pageNumber?: number): Promise<NewsResponse | null> {
    try {
      const response = await this.axiosInstance.get<NewsResponse>(
        `/noticias/?page=${pageNumber ?? 1}`
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao tentar pegar noticias');
      return null;
    }
  }
}

export const IbgeApiServiceInstance = new IbgeApiService();
