import { screen } from '@testing-library/react';
import { RepoList } from '.';
import { repoListPropsMock } from './mock';

describe('<RepoList />', () => {
  it('should renders list empty message when repositories list is empty', () => {
    global.renderTheme(<RepoList repositories={[]} />);

    const message = screen.getByText('Este usuário não possui repositórios');

    expect(message).toBeInTheDocument();
  });

  it('should renders a list of RepoCard when repositories length greater than zero', () => {
    global.renderTheme(<RepoList {...repoListPropsMock} />);

    const listItem = screen.getAllByRole('listitem');

    expect(listItem.length).toBe(1);
  });
});
