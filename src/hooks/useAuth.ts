import { authService } from '../services';
import { useAppDispatch, useAppSelector } from '../store';
import * as actions from '../store/fetures/auth';

export function useAuth() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth);

  async function login(email: string, password: string) {
    try {
      const response = await authService.login(email, password);
      if (response.authenticated) {
        dispatch(actions.login());
      } else {
        throw new Error('Could not authenticate');
      }
    } catch (error) {
      console.error('Authentication failed:', error);
      throw error;
    }
  }

  return {
    isAuthenticated: auth.isAuthenticated,
    login,
  };
}
