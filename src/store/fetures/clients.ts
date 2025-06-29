import { createSlice } from '@reduxjs/toolkit';
import { ClientModel } from '../../types/clients';

export const clientsSlice = createSlice({
  name: 'clients',
  initialState: {
    clients: [] as ClientModel[],
  },
  reducers: {
    setClients: (state, action) => {
      state.clients = action.payload;
      console.log('Clients updated:', JSON.stringify(state.clients, null, 2));
    },
  },
});

export default clientsSlice.reducer;
export const { setClients } = clientsSlice.actions;
