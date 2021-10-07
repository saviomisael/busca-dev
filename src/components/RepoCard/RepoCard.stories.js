import { RepoCard } from '.';

export default {
  title: 'RepoCard',
  component: RepoCard,
  args: {
    repoName: 'repo name',
    description: 'Repository Description lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    starsCount: 0,
    repoUrl: 'github.com/repo',
  },
  argTypes: {
    repoName: { type: 'string' },
    starsCount: { type: 'number' },
    repoUrl: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Default = (args) => <RepoCard {...args} />;

export const WithoutDescription = Default.bind({});

WithoutDescription.args = {
  description: '',
};
