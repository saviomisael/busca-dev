import { screen } from '@testing-library/react';
import { RepoList } from '.';

describe('<RepoList />', () => {
  it('should renders list empty message when repositories list is empty', () => {
    global.renderTheme(<RepoList repositories={[]} />);

    const message = screen.getByText('Este usuário não possui repositórios');

    expect(message).toBeInTheDocument();
  });
});
