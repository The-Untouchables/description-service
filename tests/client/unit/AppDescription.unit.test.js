import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AppDescription from '../../../client/src/js/AppDescription.jsx';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import descriptionSample from '../../../db/data/description_sample.js';

configure({ adapter: new Adapter() });

describe('App', () => {
  var mock = new MockAdapter(axios);
  const data = descriptionSample;
  mock.onGet('/api/rooms/2736358/description').reply(200, data);

  it ('should render correctly', async () => {
    const output = shallow(
      <AppDescription roomId="2736358"></AppDescription>
    );
    output.update();
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
