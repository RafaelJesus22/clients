import { View } from 'react-native';
import { ScreenWrapper } from '../../../components/screen-wrapper';
import { Button } from '../../../components/button';
import { ControlledInput } from '../../../components/controlled-input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '../../../hooks/useAuth';
import { styles } from './styles';

const LoginFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

type LoginForm = z.infer<typeof LoginFormSchema>;

export function LoginScreen(): React.JSX.Element {
  const { login } = useAuth();

  const { control, handleSubmit, formState } = useForm<LoginForm>({
    resolver: zodResolver(LoginFormSchema),
  });

  async function onSubmit(data: LoginForm) {
    await login(data.email, data.password);
  }

  return (
    <ScreenWrapper>
      <View style={styles.form}>
        <ControlledInput
          control={control}
          name="email"
          label="Email"
          error={formState.errors.email?.message}
        />
        <ControlledInput
          control={control}
          name="password"
          label="Password"
          error={formState.errors.password?.message}
        />
      </View>

      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </ScreenWrapper>
  );
}
