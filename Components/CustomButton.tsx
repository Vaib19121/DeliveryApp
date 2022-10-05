import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CustomButton: React.FC<{
  name: string;
  bgColor: string;
  height?: number;
  fontColor?: string;
  width: number;
  disabled?:boolean;
  onPress: () => void;
}> = ({name, bgColor, height, fontColor, width, onPress,disabled}) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        marginHorizontal: wp('2%'),
        backgroundColor: bgColor,
        height: height,
        alignSelf: 'center',
        borderRadius: 12,
        marginBottom: hp('3%'),
        marginTop: hp('4%'),
        width: width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: disabled ? 0.5 : 1,
      }}
      onPress={onPress}
      disabled={disabled}
      >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: fontColor,
            fontSize: wp('4.6%'),
            alignSelf: 'center',
            paddingVertical: hp('1%'),
            fontWeight: '600',
            fontFamily: 'Syne-Regular',
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
