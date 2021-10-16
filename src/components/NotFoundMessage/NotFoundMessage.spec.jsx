import { NotFoundMessage } from '.';

describe('<NotFoundMessage />', () => {
  it('should matches with snapshot', () => {
    const { container } = global.renderTheme(<NotFoundMessage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
