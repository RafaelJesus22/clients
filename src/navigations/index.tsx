import { AppNavigation } from './app-navigation';
import AuthNavigation from './auth-navigation';

export function Navigations() {
  const isAuthenticated = false; // Replace with actual authentication logic

  return isAuthenticated ? <AppNavigation /> : <AuthNavigation />;
}
