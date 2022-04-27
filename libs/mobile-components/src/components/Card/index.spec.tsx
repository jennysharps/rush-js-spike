import React from 'react';
import { render } from '@testing-library/react-native';

import Title from '.';

describe('Title', () => {
  it('should render successfully', () => {
    const { container } = render(<Title>Test Title</Title>);
    expect(container).toBeTruthy();
  });
});
