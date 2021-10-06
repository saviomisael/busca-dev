import { ProfileBox } from '.';
import { profileBoxPropsMock } from './mock';

export default {
  title: 'ProfileBox',
  component: ProfileBox,
  args: {
    avatar: profileBoxPropsMock.avatar,
    username: profileBoxPropsMock.username,
    fullname: profileBoxPropsMock.fullname,
    bio: profileBoxPropsMock.bio,
    blog: profileBoxPropsMock.blog,
  },
  argTypes: {
    avatar: { type: 'string' },
    username: { type: 'string' },
    fullname: { type: 'string' },
    bio: { type: 'string' },
    blog: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Default = (args) => <ProfileBox {...args} />;

export const WithoutBio = Default.bind({});

WithoutBio.args = {
  bio: '',
};

export const WithoutBlog = Default.bind({});

WithoutBlog.args = {
  blog: '',
};

export const WithoutBioAndBlog = Default.bind({});

WithoutBioAndBlog.args = {
  ...WithoutBio.args,
  ...WithoutBlog.args,
};
