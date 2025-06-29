import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { styles } from '../controlled-input/styles';

interface ControlledDatePickerProps {
  label?: string;
  error?: string;
  mode?: 'date' | 'time' | 'datetime';
  minimumDate?: Date;
  maximumDate?: Date;
}

export function ControlledDatePicker<FormType extends FieldValues>({
  name,
  rules,
  control,
  disabled,
  defaultValue,
  shouldUnregister,
  label,
  error,
  mode = 'date',
  minimumDate,
  maximumDate,
}: ControlledDatePickerProps & UseControllerProps<FormType>) {
  const [open, setOpen] = useState(false);

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      disabled={disabled}
      defaultValue={defaultValue}
      shouldUnregister={shouldUnregister}
      render={({ field: { value, onChange } }) => (
        <View style={styles.container}>
          {label && (
            <Text style={error ? styles.errorLabel : styles.label}>
              {label}
            </Text>
          )}

          <TouchableOpacity
            onPress={() => setOpen(true)}
            disabled={disabled}
            style={[styles.input, error && styles.inputError]}
            activeOpacity={0.9}
          >
            <Text style={error ? styles.errorLabel : styles.label}>
              {value
                ? new Date(value).toLocaleDateString('pt-BR')
                : 'Select a date'}
            </Text>
          </TouchableOpacity>

          <DatePicker
            modal
            open={open}
            date={value || new Date()}
            mode={mode}
            onConfirm={date => {
              setOpen(false);
              onChange(date);
            }}
            onCancel={() => setOpen(false)}
            minimumDate={minimumDate}
            maximumDate={maximumDate}
          />

          {error && <Text style={styles.errorLabel}>{error}</Text>}
        </View>
      )}
    />
  );
}
