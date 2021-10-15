import { screen, fireEvent } from '@testing-library/react';
import { waitFor } from '@testing-library/react';
import { SearchDevForm } from '.';

describe('<SearchDevForm />', () => {
  it('should calls onSubmit prop when form is submit', async () => {
    const onSubmitMock = jest.fn();

    global.renderTheme(<SearchDevForm onSubmit={onSubmitMock} />);

    const buttonSubmit = screen.getByRole('button');

    fireEvent.submit(buttonSubmit);

    await waitFor(() => {
      expect(buttonSubmit).toBeDisabled();
    });

    expect(onSubmitMock).toBeCalledTimes(1);
  });

  it('should matches with snapshot', () => {
    const onSubmitMock = jest.fn();

    const { container } = global.renderTheme(<SearchDevForm onSubmit={onSubmitMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
