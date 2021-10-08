import { RepoList } from '.';
import { repoListPropsMock } from './mock';

export default {
  title: 'RepoList',
  component: RepoList,
  args: {
    repositories: [].concat(repoListPropsMock.repositories),
  },
  argTypes: {
    repositories: { table: { disable: true } },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Default = (args) => <RepoList {...args} />;

export const WithoutRepositories = Default.bind({});

WithoutRepositories.args = {
  repositories: [],
};

WithoutRepositories.parameters = {
  backgrounds: {
    default: 'light',
  },
};
