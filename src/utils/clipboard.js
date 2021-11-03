import Clipboard from '@react-native-clipboard/clipboard';
import { toast } from './notify';

export const copyToClipboard = (key, message) => {
    Clipboard.setString(key);
    if (message) {
        toast(message);
    }
};