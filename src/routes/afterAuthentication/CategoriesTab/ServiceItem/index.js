import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';

const w = Dimensions.get('window').width;

import {colors} from '../../../../assets/colors';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import DataService from '../../../../API/HTTP/services/data.service';

export const ServiceItem = ({name, id, selectedServices}) => {
  const [isSelected, setIsSelected] = useState(false);

  const isServiceExist = useCallback(() => {
    let isFounded = false;

    for (let i = 0; i < selectedServices.length; i++) {
      if (selectedServices[i] === id) {
        isFounded = true;
      }
    }

    return isFounded;
  }, [selectedServices, id]);

  useEffect(() => {
    isServiceExist() && setIsSelected(true);
  }, [isServiceExist]);

  const addService = async () => {
    await DataService.addService(id)
      .then(res => {
        if (res.status !== 200) {
          console.log('Error');
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteService = async () => {
    await DataService.deleteService(id)
      .then(res => {
        if (res.status !== 200) {
          console.log('Error');
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  const addOrRemoveService = () => {
    setIsSelected(!isSelected);
    isServiceExist() ? deleteService() : addService();
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.button}
      onPress={() => addOrRemoveService()}>
      <Text style={[styles.text, styles.boldText]}>{name}</Text>
      <View style={styles.frameContainer}>
        <View style={styles.frame}>
          {isSelected && (
            <FontAwesomeIcon
              icon={Icons.faCheck}
              size={w * 0.06}
              style={[styles.icon, {color: colors.deepBlue}]}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceItem;

const styles = StyleSheet.create({
  button: {
    width: w * 0.9,
    flexDirection: 'row',
    minHeight: w * 0.16,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: w * 0.03,
    marginBottom: w * 0.03,
    paddingLeft: w * 0.04,
    paddingTop: w * 0.02,
    paddingBottom: w * 0.02,
    backgroundColor: colors.pink,
  },
  text: {
    fontSize: w * 0.045,
    color: colors.deepBlue,
    width: '80%',
  },
  boldText: {
    fontWeight: '500',
  },
  icon: {
    width: w * 0.05,
    height: w * 0.05,
  },
  iconMarginLeft: {
    marginLeft: w * 0.01,
  },
  frameContainer: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  frame: {
    width: w * 0.1,
    height: w * 0.1,
    borderColor: colors.white,
    borderWidth: 4,
    borderRadius: w * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
