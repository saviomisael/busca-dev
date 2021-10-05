import { screen } from '@testing-library/react';
import { Heading } from '.';

describe('<Heading />', () => {
  it('should renders component with default props', () => {
    global.renderTheme(<Heading>Children</Heading>);

    const heading = screen.getByText('Children');

    expect(heading.tagName.toLowerCase()).toBe('h1');

    expect(heading).not.toHaveStyle('color: transparent');
  });
});
