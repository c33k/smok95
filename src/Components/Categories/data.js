import { v4 as uuidv4 } from 'uuid';

const data = {
  categories: [
    {
      id: uuidv4(),
      icon: '🍽',
      name: 'Food',
    },
    {
      id: uuidv4(),
      icon: '🏠',
      name: 'Household',
    },
    {
      id: uuidv4(),
      icon: '🚋',
      name: 'Transport',
    },
    {
      id: uuidv4(),
      icon: '🚴‍♂️',
      name: 'Health',
    },
    {
      id: uuidv4(),
      icon: '🌍',
      name: 'Travel',
    },
    {
      id: uuidv4(),
      icon: '💰',
      name: 'Charity',
    },
    {
      id: uuidv4(),
      icon: '🎁',
      name: 'Gifts',
    },
    {
      id: uuidv4(),
      icon: '👚',
      name: 'Clothes',
    },
  ],
};

export default data;