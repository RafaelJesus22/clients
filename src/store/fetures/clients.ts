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
    },
  },
});

export default clientsSlice.reducer;
export const { setClients } = clientsSlice.actions;
