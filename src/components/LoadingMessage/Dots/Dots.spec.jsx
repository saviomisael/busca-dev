import { Dots } from '.';

describe('<Dots />', () => {
  it('should matches with snapshot', () => {
    const { container } = global.renderTheme(<Dots />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
