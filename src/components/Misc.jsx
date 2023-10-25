import { Text, View } from 'react-native'

import { ChartBarIcon, ClockIcon } from "react-native-heroicons/outline";
import { FireIcon, UsersIcon } from "react-native-heroicons/solid";
import ItemMisc from './ItemMisc';





const Misc = () => {

  return (


    <View style={{ flex: 1, flexDirection: 'row', marginVertical: 8, justifyContent: 'space-evenly' }} >
      <ItemMisc
        text1={35}
        text2={'Mins'}
        icon={<ClockIcon size={32} strokeWidth={2.5} color={'black'} />}
      />
      <ItemMisc
        text1={150}
        text2={'Cals'}
        icon={<FireIcon size={32} strokeWidth={2.5} color={'black'} />}
      />
      <ItemMisc
        text1={'04'}
        text2={'Servs'}
        icon={<UsersIcon size={32} strokeWidth={2.5} color={'black'} />}
      />
      <ItemMisc
        text2={'Easy'}
        icon={<ChartBarIcon size={32} strokeWidth={2.5} color={'black'} />}
      />
    </View>
  )
}

export default Misc
