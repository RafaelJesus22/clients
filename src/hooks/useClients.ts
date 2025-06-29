import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../store';
import { setClients } from '../store/fetures/clients';
import { clientsService } from '../services';
import { useCallback } from 'react';
import { ClientModel } from '../types/clients';

export function useClients() {
  const dispatch = useAppDispatch();
  const clients = useAppSelector(state => state.clients, shallowEqual);

  const getClients = useCallback(
    async function () {
      try {
        const response = await clientsService.getClients();
        dispatch(setClients(response));
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    },
    [dispatch],
  );

  const createClient = useCallback(
    async (client: ClientModel) => {
      try {
        await clientsService.createClient(client);
        await getClients();
      } catch (error) {
        console.error('Error creating client:', error);
      }
    },
    [getClients],
  );

  const getStats = useCallback(async () => {
    try {
      const [salesStats, clientHighestSale, clientHighestAverage] =
        await Promise.all([
          clientsService.getSalesStats(),
          clientsService.getHighestSalesClient(),
          clientsService.getHighestAverageClient(),
        ]);

      return {
        salesStats,
        clientHighestSale,
        clientHighestAverage,
      };
    } catch (error) {
      console.error(error);
    }
  }, []);

  return {
    clients,
    getClients,
    createClient,
    getStats,
  };
}
