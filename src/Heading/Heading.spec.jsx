import { screen } from '@testing-library/react';
import { Heading } from '.';

describe('<Heading />', () => {
  it('should renders component with default props', () => {
    global.renderTheme(<Heading>Children</Heading>);

    const heading = screen.getByText('Children');

    expect(heading.tagName.toLowerCase()).toBe('h1');

    expect(heading).not.toHaveStyle('color: transparent');
  });

  it('should be a h5 element when as prop is h5', () => {
    global.renderTheme(<Heading as="h5">Children</Heading>);

    const heading = screen.getByText('Children');

    expect(heading.tagName.toLowerCase()).toBe('h5');
  });

  it('should renders component with a blue gradient text', () => {
    global.renderTheme(<Heading gradient="blue">Children</Heading>);

    const heading = screen.getByText('Children');

    expect(heading).toHaveStyleRule('background', 'linear-gradient(#F5F5F5,#284B63)');
    expect(heading).toHaveStyleRule('background-clip', 'text');
  });
});
