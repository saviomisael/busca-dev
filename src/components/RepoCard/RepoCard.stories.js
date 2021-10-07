import { RepoCard } from '.';
import { repoCardPropsMock } from './mock';

export default {
  title: 'RepoCard',
  component: RepoCard,
  args: {
    repoName: repoCardPropsMock.repoName,
    description: repoCardPropsMock.description,
    starsCount: repoCardPropsMock.starsCount,
    repoUrl: repoCardPropsMock.repoUrl,
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
