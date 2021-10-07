import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('should be more brightness when button hover', () => {
    global.renderTheme(
      <Button onClick={onClickMock} size="medium">
        Button
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Button' });

    expect(button).toHaveStyleRule('filter', 'brightness(1.2)', {
      modifier: ':hover',
    });
  });

  it('should goes down when button is clicked', () => {
    global.renderTheme(
      <Button onClick={onClickMock} size="medium">
        Button
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Button' });

    expect(button).toHaveStyleRule('transform', 'translateY(0.8rem)', {
      modifier: ':active',
    });
  });

  it('should call onClick function when button is clicked', () => {
    global.renderTheme(
      <Button onClick={onClickMock} size="medium">
        Button
      </Button>,
    );

    const button = screen.getByRole('button', { name: 'Button' });

    userEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
