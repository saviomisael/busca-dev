import { screen } from '@testing-library/react';
import { StarsCounter } from '.';

describe('<StarsCounter />', () => {
  it('should renders component with starsCount into content', () => {
    global.renderTheme(<StarsCounter starsCount={5} />);

    const counter = screen.getByText(/estrelas/i);

    expect(counter.textContent).toContain(5);
  });
});
