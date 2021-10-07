import { screen } from '@testing-library/react';
import { RepoCard } from '.';
import { repoCardPropsMock } from './mock';

describe('<RepoCard />', () => {
  it('should renders component with default props', () => {
    const props = { ...repoCardPropsMock };

    delete props.description;

    global.renderTheme(<RepoCard {...props} />);

    const descriptionElement = screen.queryByText(/Repository Description lorem/i);

    expect(descriptionElement).not.toBeInTheDocument();
  });

  it('should renders description when description prop is truthy', () => {
    global.renderTheme(<RepoCard {...repoCardPropsMock} />);

    const descriptionElement = screen.getByText(/Repository Description lorem/i);

    expect(descriptionElement).toBeInTheDocument();
  });

  it('should matches with snapshot', () => {
    const { container } = global.renderTheme(<RepoCard {...repoCardPropsMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
