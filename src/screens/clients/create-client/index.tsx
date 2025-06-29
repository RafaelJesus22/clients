import { View } from 'react-native';
import { ScreenWrapper } from '../../../components/screen-wrapper';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../components/button';
import { ControlledInput } from '../../../components/controlled-input';
import { ControlledDatePicker } from '../../../components/date-picker';
import { useClients } from '../../../hooks/useClients';
import { formatDateToDDMMYYYY } from '../../../utils';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export const AddClientFormSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(1, 'Name is required')
    .regex(
      /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/,
      'Name must contain only letters and spaces',
    ),
  email: z
    .string({ required_error: 'Email is required' })
    .email('Invalid email address'),
  birthDate: z.date({ required_error: 'Birth date is required' }),
});
type AddClientForm = z.infer<typeof AddClientFormSchema>;

export function CreateClientScreen(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  const { createClient } = useClients();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AddClientForm>({
    resolver: zodResolver(AddClientFormSchema),
  });

  async function onSubmit(data: AddClientForm) {
    setIsLoading(true);
    try {
      await createClient({
        name: data.name,
        email: data.email,
        birthDate: formatDateToDDMMYYYY(data.birthDate),
        stats: { sales: [] },
      });
      navigation.goBack();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ScreenWrapper>
      <View style={{ marginVertical: 16, gap: 18, flex: 1 }}>
        <ControlledInput
          control={control}
          name="name"
          placeholder="Name"
          label="Full name"
          error={errors.name?.message}
        />
        <ControlledInput
          control={control}
          name="email"
          placeholder="Email"
          label="Email"
          error={errors.email?.message}
        />
        <ControlledDatePicker
          control={control}
          name="birthDate"
          error={errors.birthDate?.message}
          label="Birth Date"
          maximumDate={new Date()}
        />
      </View>

      <Button
        onPress={handleSubmit(onSubmit)}
        title="Save"
        isLoading={isLoading}
      />
    </ScreenWrapper>
  );
}
