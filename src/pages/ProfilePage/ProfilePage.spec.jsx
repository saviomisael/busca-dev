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
    global.withRoutes(<ProfilePage />, { initialRoutes: [`/profile/lukeskywalker`] });

    waitFor(() => {
      expect(screen.getByRole('heading', { name: /lukeskywalker/i })).toBeInTheDocument();
    });
  });
});
