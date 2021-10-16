import { LoadingMessage } from '.';

describe('<LoadingMessage />', () => {
  it('should renders component', () => {
    const { container } = global.renderTheme(<LoadingMessage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
