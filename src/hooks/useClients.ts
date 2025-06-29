import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../store';
import { setClients } from '../store/fetures/clients';
import { clientsService } from '../services';
import { useCallback } from 'react';

export function useClients() {
  const dispatch = useAppDispatch();
  const clients = useAppSelector(state => state.clients, shallowEqual);

  const getClients = useCallback(
    async function () {
      try {
        const response = await clientsService.getClients();
        dispatch(setClients(response));
        console.log('Fetched clients:', JSON.stringify(response, null, 2));
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    },
    [dispatch],
  );

  return {
    clients,
    getClients,
  };
}
