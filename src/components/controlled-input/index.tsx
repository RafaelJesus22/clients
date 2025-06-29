import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import { styles } from './styles';

interface ControlledInputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export function ControlledInput<FormType extends FieldValues>({
  name,
  rules,
  control,
  disabled,
  defaultValue,
  shouldUnregister,
  label,
  error,
  ...props
}: ControlledInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      disabled={disabled}
      defaultValue={defaultValue}
      shouldUnregister={shouldUnregister}
      render={({ field: { value, onBlur, onChange } }) => (
        <View style={styles.container}>
          {label && (
            <Text style={error ? styles.errorLabel : styles.label}>
              {label}
            </Text>
          )}
          <TextInput
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
            {...props}
            style={[styles.input, error && styles.inputError]}
          />
          {error && <Text style={styles.errorLabel}>{error}</Text>}
        </View>
      )}
    />
  );
}
