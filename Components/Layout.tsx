import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  children: any;
  innerContainerStyle?: {[key: string]: string | number};
};
const Layout: React.FC<Props> = ({

  children,
  innerContainerStyle,
}) => {
  return (
    <View style={styles.container}>
      <View style={{...styles.innerContainer, ...innerContainerStyle}}>
        {children}
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingBottom: 50,
    flex: 1,
    marginTop: 50,
  },
  innerContainer: {
    width: '80%',
    marginTop: 20,
  },
});
