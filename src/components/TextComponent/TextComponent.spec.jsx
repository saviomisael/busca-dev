import { screen } from '@testing-library/react';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should renders component with default styles', () => {
    global.renderTheme(<TextComponent>Children</TextComponent>);

    const text = screen.getByText('Children');

    expect(text).toHaveStyleRule('font-size', '1.8rem');
  });

  it('should renders component with smal font size', () => {
    global.renderTheme(<TextComponent smallText>Children</TextComponent>);

    const text = screen.getByText('Children');

    expect(text).toHaveStyleRule('font-size', '1.6rem');
  });

  it('should matches with snapshot', () => {
    global.renderTheme(<TextComponent>Children</TextComponent>);

    const text = screen.getByText('Children');

    expect(text).toMatchSnapshot();
  });
});
