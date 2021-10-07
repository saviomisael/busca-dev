import { screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  const onClickMock = jest.fn();

  it('should renders component with default props', () => {
    global.renderTheme(<Button onClick={onClickMock}>Button</Button>);

    const button = screen.getByRole('button', { name: 'Button' });

    expect(button).toHaveStyleRule('width', '100%');
  });

  it('should renders component with medium size', () => {
    global.renderTheme(
      <Button onClick={onClickMock} size="medium">
        Button
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Button' });

    expect(button).toHaveStyleRule('width', '85%');
  });
});
