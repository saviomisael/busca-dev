import { MainContent } from '.';

describe('<MainContent />', () => {
  it('should matches with snapshot', () => {
    const { container } = global.renderStoreProviderWithTheme(<MainContent />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
