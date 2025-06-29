import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../config/theme';
import { styles } from './styles';
import { View } from 'react-native';

export function ScreenWrapper({
  children,
}: {
  children?: React.ReactNode;
}): React.JSX.Element {
  return (
    <LinearGradient
      colors={[theme.gradient.color1, theme.gradient.color2]}
      style={styles.container}
    >
      <View style={styles.content}>{children}</View>
    </LinearGradient>
  );
}
