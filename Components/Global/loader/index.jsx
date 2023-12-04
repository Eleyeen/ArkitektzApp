// eslint-disable-next-line import/named
import { Image } from 'react-native';

import { loaderGif, loaderGifLight } from '../../../static-img-url';


const Loader = ({ className, isLight }) =>
    isLight ?
        <Image className={className || 'w-[20px] h-[20px]'} source={loaderGifLight} />
        :
        <Image className={className || 'w-[20px] h-[20px]'} source={loaderGif} />

export default Loader;
