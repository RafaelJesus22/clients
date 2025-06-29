interface AuthServiceInterface {
  login: (
    email: string,
    password: string,
  ) => Promise<{ authenticated: boolean }>;
  logout: () => Promise<void>;
}

export class AuthService implements AuthServiceInterface {
  private async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async login(email: string, password: string) {
    await this.delay(2000);
    console.log(`Logging in with email: ${email} and password: ${password}`);
    return {
      authenticated: true,
    };
  }

  async logout(): Promise<void> {
    await this.delay(2000);
  }
}
