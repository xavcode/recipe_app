import { Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import ItemMisc from './ItemMisc';


const Misc = () => {

  return (
    <View style={{ flex: 1, flexDirection: 'row', marginVertical: 8, justifyContent: 'space-evenly' }} >
      <ItemMisc
        text1={35}
        text2={'Mins'}
        icon={<FontAwesome name='clock-o' size={24} color={'gray'} />}
      />

      <ItemMisc
        text1={150}
        text2={'Cals'}
        icon={<FontAwesome name='fire' size={24} color={'gray'} />}
      />
      <ItemMisc
        text1={'04'}
        text2={'Servs'}
        icon={<FontAwesome name='clock-o' size={24} color={'gray'} />}
      />
      <ItemMisc
        text2={'Easy'}
        icon={<FontAwesome name='bars' size={24} color={'gray'} />}
      />
    </View>
  )
}

export default Misc
