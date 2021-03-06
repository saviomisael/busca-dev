import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import { SearchIcon } from '../../../components/SearchIcon';

export const SearchDevForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitted },
  } = useForm();

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Input data-cy="username-input" placeholder="Digite o username do github" {...register('username')} />
      <Styled.ButtonSubmit data-cy="submit-search-dev" disabled={isSubmitted}>
        <SearchIcon />
      </Styled.ButtonSubmit>
    </Styled.Form>
  );
};

SearchDevForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
