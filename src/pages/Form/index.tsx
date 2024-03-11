import { Button, Container, Fieldset, Group, NativeSelect, TextInput, rem } from '@mantine/core';
import { IconAlertTriangle } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { showNotification } from '@mantine/notifications';
import classes from './ContainedInput.module.css';
import { email, required } from '../../utils/fieldValidators';
import { addUser } from '../../services/users';
import { useAddUserMutation } from '../../store/rtkQuery/users';
import { User } from '../../types';

const Form = () => {
  const intl = useIntl();
  // const [triggerAddMutation] = useAddUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = (user: User) => {
    addUser(user).then(() => {
      showNotification({
        message: intl.formatMessage({
          id: 'form.submit.success',
        }),
        color: 'green',
        autoClose: 10000,
        id: 'success-notification',
      });
    });
  };

  return (
    <Container p="xl" data-testid="form-test">
      <Fieldset legend={intl.formatMessage({ id: 'form.fieldset_title' })}>
        <TextInput
          data-testid="form-name-input"
          label={intl.formatMessage({
            id: 'form.name_input.label',
          })}
          description={intl.formatMessage({
            id: 'form.name_input.description',
          })}
          placeholder={intl.formatMessage({
            id: 'form.name_input.placeholder',
          })}
          {...register('name')}
        />
        <TextInput
          mt="sm"
          required
          type="email"
          errorProps={{
            'data-testid': 'form-email-input-error',
          }}
          data-testid="form-email-input"
          label={intl.formatMessage({
            id: 'form.email_input.label',
          })}
          description={intl.formatMessage({
            id: 'form.email_input.description',
          })}
          error={errors.email?.type && errors.email.message}
          placeholder={intl.formatMessage({
            id: 'form.email_input.placeholder',
          })}
          classNames={{ input: errors.email && classes.invalid }}
          rightSection={
            errors.email && (
              <IconAlertTriangle
                stroke={1.5}
                style={{ width: rem(18), height: rem(18) }}
                className={classes.icon}
              />
            )
          }
          {...register('email', { ...required(intl), ...email(intl) })}
        />
        <NativeSelect
          mt="sm"
          required
          data-testid="form-framework-input"
          label={intl.formatMessage({ id: 'form.framework_input.label' })}
          data={['React', 'Angular', 'Svelte', 'Vue', 'Javascript vaniglia e cioccolato']}
          {...register('framework', { ...required(intl) })}
        />
      </Fieldset>
      <Group mt="md" justify="center">
        <Button data-testid="form-submit-input" onClick={handleSubmit(onSubmit)} size="md">
          <FormattedMessage id="form.submit.button" />
        </Button>
      </Group>
    </Container>
  );
};

export default Form;
