import { screen } from '@testing-library/react';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should renders component with default styles', () => {
    global.renderTheme(<TextComponent>Children</TextComponent>);

    const text = screen.getByText('Children');

    expect(text).toHaveStyleRule('font-size', '1.8rem');
  });
});
