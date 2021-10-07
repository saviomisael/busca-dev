import { screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  it('should renders component with default props', () => {
    const onClickMock = jest.fn();

    global.renderTheme(<Button onClick={onClickMock}>Button</Button>);

    const button = screen.getByRole('button', { name: 'Button' });

    expect(button).toHaveStyleRule('width', '100%');
  });

  it('should renders component with medium size', () => {
    const onClickMock = jest.fn();

    global.renderTheme(
      <Button onClick={onClickMock} size="medium">
        Button
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Button' });

    expect(button).toHaveStyleRule('width', '85%');
  });
});
