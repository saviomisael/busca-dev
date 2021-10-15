import { screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { ProfilePage } from '.';
import { API_URL } from '../../utils/constants';

const handlers = [
  rest.get(`${API_URL}/users/lukeskywalker`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        login: 'lukeskywalker',
        id: 1,
        avatar_url: 'avatar.com',
        name: 'John Doe',
        bio: 'bio John Doe',
        blog: 'bloglukeskywalker.com',
      }),
    );
  }),
  rest.get(`${API_URL}/users/lukeskywalker/repos`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, name: 'luke repo 1', description: 'description 1', stargazers_count: 0, html_url: 'repo1.com' },
        { id: 2, name: 'luke repo 2', description: 'description 2', stargazers_count: 3, html_url: 'repo2.com' },
        { id: 3, name: 'luke repo 3', description: 'description 3', stargazers_count: 2, html_url: 'repo3.com' },
        { id: 4, name: 'luke repo 4', description: 'description 4', stargazers_count: 2, html_url: 'repo4.com' },
        { id: 5, name: 'luke repo 5', description: 'description 5', stargazers_count: 6, html_url: 'repo5.com' },
        { id: 6, name: 'luke repo 6', description: 'description 6', stargazers_count: 2, html_url: 'repo6.com' },
      ]),
    );
  }),
];

const server = setupServer(...handlers);

describe('<ProfilePage />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should renders user info with response data mock', async () => {
    global.withRoutes(<ProfilePage />, { initialRoutes: [`/profile/lukeskywalker`], pathname: '/profile/:username' });

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /lukeskywalker/i })).toBeInTheDocument();
    });
  });

  it('should renders main content with repositories response data mock', async () => {
    global.withRoutes(<ProfilePage />, { initialRoutes: [`/profile/lukeskywalker`] });

    const lukeHeading = screen.queryByRole('heading', { name: /lukeskywalker/i });

    await waitFor(() => {
      expect(lukeHeading).toBeInTheDocument();
    });

    const allRepos = screen.getAllByRole('listitem');

    expect(allRepos).toHaveLength(6);
  });
});
