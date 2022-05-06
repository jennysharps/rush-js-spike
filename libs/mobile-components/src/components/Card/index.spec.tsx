import React from 'react';
import { render } from '@testing-library/react-native';

import Card from '.';

describe('Title', () => {
  it('should render successfully', () => {
    const { container } = render(<Card title="Test Title">Test Content</Card>);
    expect(container).toBeTruthy();
  });
});
