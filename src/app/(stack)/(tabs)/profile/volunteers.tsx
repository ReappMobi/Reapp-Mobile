import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React, { useEffect, useState, memo } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button } from 'src/components';
import colors from 'src/constants/colors';
import { IVolunteer } from 'src/types/IVolunteer';

const mockData: IVolunteer[] = [
  {
    id: 1,
    institutionId: 1,
    name: 'Gabriel Bastos',
    image: 'https://placehold.co/600x400/png',
  },

  {
    id: 2,
    institutionId: 1,
    name: 'Gabriel Belo',
    image: 'https://placehold.co/600x400/png',
  },

  {
    id: 3,
    institutionId: 1,
    name: 'André Gabriel',
    image: 'https://placehold.co/600x400/png',
  },

  {
    id: 4,
    institutionId: 1,
    name: 'Neymar Júnior ',
    image: 'https://placehold.co/600x400/png',
  },
];

const blurhash: string =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const VolunteerCard = ({ info }) => {
  return (
    <View className="flex-row items-center gap-x-2 border-b border-zinc-200 p-2">
      <Image
        className="h-[64] w-[64] rounded-full"
        source={info.image}
        placeholder={blurhash}
        contentFit="cover"
        transition={500}
      />

      <Text className="font-reapp_medium text-sm">{info.name}</Text>
    </View>
  );
};

function Volunteers() {
  const [volunteers, setVolunteers] = useState<IVolunteer[]>([]);

  useEffect(() => {
    setVolunteers(mockData);
  }, []);

  const renderHeader = () => (
    <View className="mb-3 items-center justify-center">
      <Button
        endIcon={
          <Ionicons
            name="chevron-forward"
            size={20}
            color={colors.text_neutral}
          />
        }
        customStyles="w-64 justify-center space-x-2"
        onPress={() => {
          router.push({
            pathname: 'volunteer-create',
          });
        }}
      >
        Cadastrar Voluntário
      </Button>
    </View>
  );
  return (
    <View className="py-4">
      <FlatList
        data={volunteers}
        renderItem={({ item }) => <VolunteerCard info={item} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View className="h-2" />}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
}

export default memo(Volunteers);
