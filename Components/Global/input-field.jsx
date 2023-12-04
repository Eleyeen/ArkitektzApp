// eslint-disable-next-line import/named
import { View, TextInput, Text } from 'react-native'
import { useState } from 'react';

import { capitalizeFirstLetter } from '../../static-functions';


const InputField = (props) => {

  const { placeholder, label, name, index, secureTextEntry, onChange,
    value, classes, type, validation, validationMessage,
    children, maxLength, keyboardType, multiline, des } = props;

  const [inputFocus, setInputFocus] = useState(false)

  const focusIn = () => {
    setInputFocus(true);
  }

  const focusOut = () => {
    setInputFocus(false);
  }


  return (
    <View >
      {
        label &&
        <Text
          className="text-[#2A2A2A] font-medium text-[14px] h-[18px] mb-[5px] block">
          {capitalizeFirstLetter(label)}
        </Text>
      }
      <View
        className={` bg-white  ${inputFocus ? 'border-[#F4EBFF] border-[2px]' : 'border-[#FFFFFF] border-[0px]'}  rounded-[8px] p-[0.5] `}>
        <TextInput


          className={`${classes || ''}  font-regular text-[12px]  text-[#2A2A2A]  ${des ? 'h-[84px]' : ' h-[44px] pt-[13px]'} tracking-[0.4px] ${inputFocus ? 'border-[#732DD9]' : 'border-[#ddd]'}  border-[1px] pl-[16px]  rounded-[6px] w-full `}
          keyboardType={keyboardType}
          maxLength={maxLength}
          multiline={multiline}
          name={name}
          onBlur={focusOut}
          onChange={(e) => onChange && onChange({
            e,
            index,
            name,
            value: e.nativeEvent.text,
          })}
          onFocus={focusIn}
          placeholder={capitalizeFirstLetter(placeholder)}
          placeholderTextColor='#888'
          secureTextEntry={secureTextEntry}
          style={{
            color: 'black',
            fontSize: 14,
            fontWeight: 'normal',
            textAlignVertical: 'top', // Align text at the top


          }}
          type={type}
          value={value}
        />
        {children}
      </View>

      {validation ? <Text className="text-[10px] text-[#F04438] mb-0 mt-[5px]">{validationMessage || 'Required Field'}</Text> : ''}
    </View>
  );
};

export default InputField;
