import { screen } from '@testing-library/react';
import { ProfileBox } from '.';
import { profileBoxPropsMock } from './mock';

describe('<ProfileBox />', () => {
  it('should renders component with default props', () => {
    const props = { ...profileBoxPropsMock };

    delete props.bio;
    delete props.blog;

    global.renderTheme(<ProfileBox {...props} />);

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

  it('should renders bio when bio prop is truthy', () => {
    global.renderTheme(<ProfileBox {...profileBoxPropsMock} />);

    const bioElement = screen.getByText(/^bio Lorem ipsum/i);

    expect(bioElement).toBeInTheDocument();
  });

  it('should renders blog element when blog prop is truthy', () => {
    global.renderTheme(<ProfileBox {...profileBoxPropsMock} />);

    const blogElement = screen.getByRole('link', { name: 'blog.com' });

    expect(blogElement).toBeInTheDocument();
  });
});
