import { useAuth } from '../hooks/useAuth';
import { AppNavigation } from './app-navigation';
import AuthNavigation from './auth-navigation';

export function Navigations() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <AppNavigation /> : <AuthNavigation />;
}
