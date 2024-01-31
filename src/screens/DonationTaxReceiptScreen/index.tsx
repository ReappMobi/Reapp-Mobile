import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text } from 'react-native';

import DonationTaxReceiptImage from '../../assets/images/DonationTaxReceiptImage.svg';
import Button from '../../components/Button';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import Colors from '../../constants/Colors';

function DonationTaxReceiptScreen() {
  return (
    <ScreenContainer>
      <View className="py-4">
        <Header
          leftComponent={
            <Ionicons name="chevron-back" size={24} color={Colors.text_dark} />
          }
          rightComponent={
            <Text className="font-_bold text-2xl uppercase text-text_primary">
              reapp
            </Text>
          }
        />

        <View className="items-center gap-y-4 pt-16">
          <DonationTaxReceiptImage width={228} height={199} />

          <View className="gap-y-2.5">
            <View>
              <Button customStyles="w-52 justify-center" textSize="text-sm">
                Adicionar nota manual
              </Button>
            </View>
            <View>
              <Button customStyles="w-52 justify-center" textSize="text-sm">
                Ler QRCode
              </Button>
            </View>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
}

export default DonationTaxReceiptScreen;
