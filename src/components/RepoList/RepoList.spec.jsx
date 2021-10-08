import { screen } from '@testing-library/react';
import { RepoList } from '.';
import { repoListPropsMock, manyRepositories } from './mock';

describe('<RepoList />', () => {
  it('should renders list empty message when repositories list is empty', () => {
    global.renderTheme(<RepoList repositories={[]} />);

    const message = screen.getByText('Este usuário não possui repositórios');

    expect(message).toBeInTheDocument();
  });

  it('should renders a list of RepoCard when repositories length greater than zero', () => {
    global.renderTheme(<RepoList {...repoListPropsMock} />);

    const listElement = screen.getByRole('list');

    expect(listElement).toBeInTheDocument();
  });

  it('should renders many li elements', () => {
    global.renderTheme(<RepoList {...manyRepositories} />);

    const listItem = screen.getAllByRole('listitem');

    expect(listItem.length).toBe(4);
  });

  it('should matches with snapshot', () => {
    const { container } = global.renderTheme(<RepoList {...manyRepositories} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
