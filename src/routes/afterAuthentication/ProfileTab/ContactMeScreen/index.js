import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import {colors} from '../../../../assets/colors';

import * as Icons from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import DataService from '../../../../API/HTTP/services/data.service';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

import AlertBox from '../../../../components/Alert';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import TextBlock from '../../../../components/TextBlock';
import BottomLinks from '../../../../components/BottomLinks';

export const ContactMeScreen = ({navigation, navigation: {goBack}}) => {
  const [instagram, setInstagram] = useState('');
  const [telegram, setTelegram] = useState('');
  const [viber, setViber] = useState('');

  const updateMyContacts = async data => {
    await DataService.updateMyContacts(data)
      .then(res => {
        if (res.status === 200) {
          AlertBox('Успішно!', 'Ваші дані було оновлено');
          goBack();
        } else {
          AlertBox('Сталася помилка', res.data.errors);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  const sendRequest = () => {
    updateMyContacts({
      instagram,
      telegram,
      viber,
    });
  };

  const getUserRequest = async () => {
    await DataService.getUserData()
      .then(res => {
        if (res.data.success) {
          const {instagram: ins, telegram: tg, viber: vb} = res.data.data;
          setInstagram(ins);
          setTelegram(tg);
          setViber(vb);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUserRequest();
  }, []);

  return (
    <>
      <View style={styles.background}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.labels}>
              <TextBlock text={'Введіть ваші'} size={1} lightBlue boldest />
              <TextBlock text={'Контакти'} size={1} lightBlue boldest />

              <View style={styles.subTitle}>
                <TextBlock text={'Заповніть нижче'} size={5} grey bold />
              </View>
            </View>

            <View>
              <Input
                label={'Instagram:'}
                isShowLabel={true}
                placeholder="Введіть ваш нік"
                value={instagram}
                onChange={e => setInstagram(e)}
              />

              <View style={styles.someSpace} />

              <Input
                label={'Telegram:'}
                isShowLabel={true}
                placeholder="Номер телефону або @name"
                value={telegram}
                onChange={e => setTelegram(e)}
              />

              <View style={styles.spacing} />

              <Input
                label={'Viber:'}
                isShowLabel={true}
                placeholder="Введіть номер телефону"
                value={viber}
                onChange={e => setViber(e)}
              />

              <View style={styles.spacing} />

              <Button
                label={'Змінити дані'}
                onPress={() => sendRequest()}
                pink
                bold
              />

              <BottomLinks
                firstText={'Маєте запитання?'}
                secondText={'Напишіть нам!'}
                route={'ContactUsScreen'}
                navigation={navigation}
              />
            </View>
          </View>
          <View style={styles.someSpace} />
          <View style={styles.someSpace} />
          <TouchableOpacity onPress={() => goBack()} style={styles.backButton}>
            <FontAwesomeIcon
              icon={Icons.faChevronLeft}
              size={w * 0.08}
              style={[{color: colors.deepBlue}, styles.backIcon]}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default ContactMeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labels: {
    marginTop: h * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    marginTop: w * 0.02,
    marginBottom: w * 0.15,
  },
  someSpace: {
    marginBottom: w * 0.07,
  },
  backButton: {
    position: 'absolute',
    top: w * 0.12,
  },
  backIcon: {
    width: w * 0.09,
    height: w * 0.09,
  },
  spacing: {
    marginTop: w * 0.1,
  },
});
