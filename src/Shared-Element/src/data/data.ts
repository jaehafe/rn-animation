import {ImageSourcePropType} from 'react-native';

export type Data = {
  id: string;
  name: string;
  location: string;
  image: ImageSourcePropType;
  about: string;
};

const data: Data[] = [
  {
    id: 'Kelingking Beach',
    name: 'Kelingking Beach',
    location: 'Bali, Indonesia',
    image: require('../assets/KelingkingBeach.jpg'),
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
  {
    id: 'Diamond Beach',
    name: 'Diamond Beach',
    location: 'Bali, Indonesia',
    image: require('../assets/DiamondBeach.jpg'),
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
  {
    id: 'Canggu Beach',
    name: 'Canggu Beach',
    location: 'Bali, Indonesia',
    image: require('../assets/CangguBeach.jpg'),
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
  {
    id: 'Broken Beach',
    name: 'Broken Beach',
    location: 'Bali, Indonesia',
    image: require('../assets/BrokenBeach.jpg'),
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
  {
    id: 'Test1',
    name: 'Test1',
    location: 'Test1',
    image: require('../assets/BrokenBeach.jpg'),
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse iaculis nulla tortor, at viverra augue venenatis eget. Nam magna ligula, consequat sit amet purus eu, eleifend maximus elit. Aliquam rhoncus fringilla venenatis. In pulvinar lacus quis urna suscipit, placerat commodo turpis molestie. Cras tristique suscipit nisl, eu porttitor ex.',
  },
];

export default data;
