import { SearchIcon } from '.';

describe('<SearchIcon />', () => {
  it('should matches with snapshot', () => {
    const { container } = global.renderTheme(<SearchIcon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
