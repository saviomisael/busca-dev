import { screen } from '@testing-library/react';
import { StarsCounter } from '.';
import StarEmpty from '../../../assets/images/star_empty.svg';
import StarFilled from '../../../assets/images/star_fill.svg';

describe('<StarsCounter />', () => {
  it('should renders component with starsCount into content', () => {
    global.renderTheme(<StarsCounter starsCount={5} />);

    const counter = screen.getByText(/estrelas/i);

    expect(counter.textContent).toContain(5);
  });

  it('should renders star empty icon when starsCount is equal to zero', () => {
    global.renderTheme(<StarsCounter starsCount={0} />);

    const icon = screen.getByAltText('star icon');

    expect(icon.src).toContain(StarEmpty);
  });

  it('should renders star filled icon when starsCount greater than zero', () => {
    global.renderTheme(<StarsCounter starsCount={5} />);

    const icon = screen.getByAltText('star icon');

    expect(icon.src).toContain(StarFilled);
  });
});
