﻿import React from 'react';
import { shallow } from 'enzyme';
import AppHeader from './AppHeader';

it('Renders without crashing', () => {
  shallow(<AppHeader onClickLogout={() => {}} />);
});
