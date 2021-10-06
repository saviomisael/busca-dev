import { screen } from '@testing-library/react';
import { ProfileBox } from '.';
import { profileBoxPropsMock } from './mock';

describe('<ProfileBox />', () => {
  it('should renders component with default props', () => {
    delete profileBoxPropsMock.bio;
    delete profileBoxPropsMock.blog;

    global.renderTheme(<ProfileBox {...profileBoxPropsMock} />);

    const bioElement = screen.queryByText(
      'bio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    );

    const blogElement = screen.queryByRole('link', { name: 'blog.com' });

    expect(bioElement).not.toBeInTheDocument();

    expect(blogElement).not.toBeInTheDocument();
  });

  it('should renders avatar image with alt containing username', () => {
    global.renderTheme(<ProfileBox {...profileBoxPropsMock} />);

    const avatarElement = screen.getByAltText(`${profileBoxPropsMock.username} avatar`);

    expect(avatarElement).toBeInTheDocument();
  });
});
