import React from 'react';
import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {View, StyleSheet} from 'react-native';

interface CenterProps {
  styles?: StyleProp<ViewStyle>;
  children: ReactNode;
}

export const Center: React.FC<CenterProps> = ({
  children,
  styles: propStyles,
}: CenterProps) => {
  return <View style={[styles.Containter, propStyles]}>{children}</View>;
};
const styles = StyleSheet.create({
  Containter: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
