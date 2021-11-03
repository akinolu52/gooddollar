import { COLORS } from '@constants';
import Snackbar from 'react-native-snackbar';

export const toast = message => {
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_LONG,
        textColor: COLORS.WHITE,
        backgroundColor: COLORS.BLACK,
        fontFamily: 'Roboto-Regular'
    });
};
