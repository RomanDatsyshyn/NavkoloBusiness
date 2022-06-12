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

export const ChangeStatusScreen = ({navigation, navigation: {goBack}}) => {
  const [typeOfActivity, setTypeOfActivity] = useState('');

  const [typeOfActivityErrorMessage, setTypeOfActivityErrorMessage] =
    useState('');

  const isTypeOfActivityCorrect = typeOfActivity.length < 2;

  const updatePassword = async data => {
    await DataService.updateTypeOfActivity(data)
      .then(res => {
        if (res.status === 200) {
          AlertBox('Успішно!', 'Ваш статус було змінено');
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
    updatePassword({
      typeOfActivity,
    });
  };

  const basicValidation = () => {
    setTypeOfActivityErrorMessage('');

    isTypeOfActivityCorrect &&
      setTypeOfActivityErrorMessage('Введіть мінімум 5 символів');

    if (!isTypeOfActivityCorrect) {
      sendRequest();
    }
  };

  useEffect(() => {
    typeOfActivityErrorMessage !== '' &&
      !isTypeOfActivityCorrect &&
      setTypeOfActivityErrorMessage('');
  }, [
    typeOfActivityErrorMessage,
    setTypeOfActivityErrorMessage,
    isTypeOfActivityCorrect,
  ]);

  return (
    <>
      <View style={styles.background}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={styles.labels}>
              <TextBlock text={'Введіть ваш'} size={1} lightBlue boldest />
              <TextBlock text={'Новий статус'} size={1} lightBlue boldest />

              <View style={styles.subTitle}>
                <TextBlock text={'Заповніть поле нижче'} size={5} grey bold />
              </View>
            </View>

            <View>
              <Input
                label={'Введіть значення:'}
                isShowLabel={true}
                placeholder="Придумайте новий статус"
                value={typeOfActivity}
                error={typeOfActivityErrorMessage}
                onChange={e => setTypeOfActivity(e)}
              />

              <View style={styles.spacing} />

              <Button
                label={'Змінити'}
                onPress={() => basicValidation()}
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

export default ChangeStatusScreen;

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
