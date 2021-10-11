import { Sidebar } from '.';

describe('<Sidebar />', () => {
  it('should matches with snapshot', () => {
    const { container } = global.renderStoreProviderWithTheme(<Sidebar />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
