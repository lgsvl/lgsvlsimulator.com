import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle, { DialogTitleProps } from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { fade, withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import React, { useCallback } from 'react';
import { IconLGSVLSimulator, IconX } from 'src/components/Icons';
import Input, { InputProps } from 'src/components/Input';
import { useTranslation } from 'src/hooks/useTranslations';
import addSpacing from 'src/utils/addSpacing';
import { px } from 'src/utils/theme';
import styled from 'styled-components';

const FormDialog = withTheme(styled(Dialog)`
  .MuiDialog-paper {
    width: 1024px;
    height: 640px;
    max-width: 90vw;
    max-height: 90vh;
    background-color: ${({ theme }) => theme.palette.background.default};
  }
`) as React.FC<DialogProps>;

const FormDialogTitle = withTheme(styled(DialogTitle)`
  background-color: ${({ theme }) => fade(theme.palette.background.paper, 0.6)};
  padding-top: 0;
  padding-bottom: 0;
`) as React.FC<DialogTitleProps>;

const CloseIconButton = withTheme(styled(IconButton)`
  padding: ${({ theme }) => px(theme.spacing(1))};
`) as React.FC<IconButtonProps>;

const FormDialogContent = addSpacing(DialogContent);

const FormDialogActions = addSpacing(DialogActions);

const RequestDemoForm: React.FC<DialogProps> = ({ onClose, ...rest }) => {
  const { t, tMap } = useTranslation();
  const [confirming, setConfirming] = React.useState(false);
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setSubmitting,
    setFieldValue,
    values,
    touched,
    errors,
    dirty,
    isValid
  } = useFormik({
    initialValues: {
      _subject: '[Public Website] Demo Requested',
      _replyto: '',
      _confirmation: 'We will contact you to arrange the technology demo session',
      _after: '',
      nameGiven: '',
      nameFamily: '',
      email: '',
      emailVerify: '',
      organization: '',
      title: '',
      region: '',
      usecase: 'Autonomous Vehicle',
      other: ''
    },
    validationSchema: yup.object({
      nameGiven: yup.string().required(t('requestdemo.required.firstname')),
      nameFamily: yup.string().required(t('requestdemo.required.lastname')),
      email: yup.string().email(t('requestdemo.validate.email')).required(t('requestdemo.required.email')),
      emailVerify: yup
        .mixed()
        .test('email-match', t('requestdemo.validate.mismatch'), function (value) {
          const { email } = this.parent;
          return email === value;
        })
        .required(t('requestdemo.required.email')),
      region: yup.string().required(t('requestdemo.required.region'))
    }),
    onSubmit: data => {
      console.log(data);

      // Add custom fields:
      data._replyto = data.email;

      axios
        .post('https://mailthis.to/blake.stephens@lge.com', data)
        .then(response => {
          // window.location.href = 'https://mailthis.to/confirm';
          console.log('Submited with response:', response, data);
          setConfirming(true);
        })
        .catch(err => {
          err = 'oh beans ';
        });

      // TODO: submit data to LG server to send demo request
      setSubmitting(false);
      // if (onClose) onClose({}, 'escapeKeyDown');
    }
  });

  const dispatchClose = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (onClose) onClose(event, 'escapeKeyDown');
      setConfirming(false);
    },
    [onClose]
  );

  const handleUsecaseChange = useCallback(
    (event: React.ChangeEvent<{ value: unknown }>) => {
      setFieldValue('usecase', event.target.value as string);
    },
    [setFieldValue]
  );

  const commonTextInputProps: InputProps = {
    onChange: handleChange,
    onBlur: handleBlur,
    InputLabelProps: { shrink: true },
    variant: 'outlined',
    fullWidth: true
  };

  return (
    <FormDialog
      aria-labelledby='form-title'
      aria-describedby='form-description'
      disableScrollLock
      onClose={onClose}
      {...rest}
    >
      <FormDialogTitle disableTypography>
        <Box display='flex' alignItems='center' justifyContent='space-between' height={56}>
          <Typography id='form-title' variant='body1'>
            {t('requestdemo.title')}
          </Typography>
          <CloseIconButton aria-label='close' onClick={dispatchClose}>
            <IconX />
          </CloseIconButton>
        </Box>
      </FormDialogTitle>
      {!confirming ? (
        <form noValidate onSubmit={handleSubmit}>
          <FormDialogContent p={3}>
            <input type='hidden' name='_honeypot' value='' onChange={handleChange} />
            <Grid container spacing={3}>
              <Hidden smDown>
                <Grid item sm={4}>
                  <Box mb={5}>
                    <IconLGSVLSimulator />
                  </Box>
                  {tMap('requestdemo.message', (msg, i) => (
                    <Typography id='form-description' variant='caption' key={`message${i}`} paragraph>
                      {msg}
                    </Typography>
                  ))}
                </Grid>
              </Hidden>
              <Grid item sm={12} md={8}>
                <Grid container spacing={4} justify='space-between'>
                  <Grid item xs={12} sm={6}>
                    <Input
                      {...commonTextInputProps}
                      required
                      name='nameGiven'
                      id='form-field-name-given'
                      label={t('requestdemo.labels.nameGiven')}
                      placeholder={t('requestdemo.placeholders.nameGiven')}
                      error={touched.nameGiven && Boolean(errors.nameGiven)}
                      helperText={touched.nameGiven && errors.nameGiven}
                      value={values.nameGiven}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      {...commonTextInputProps}
                      required
                      name='nameFamily'
                      id='form-field-name-family'
                      label={t('requestdemo.labels.nameFamily')}
                      placeholder={t('requestdemo.placeholders.nameFamily')}
                      error={touched.nameFamily && Boolean(errors.nameFamily)}
                      helperText={touched.nameFamily && errors.nameFamily}
                      value={values.nameFamily}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      {...commonTextInputProps}
                      required
                      name='email'
                      id='form-field-email'
                      label={t('requestdemo.labels.email')}
                      placeholder={t('requestdemo.placeholders.email')}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      value={values.email}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      {...commonTextInputProps}
                      required
                      name='emailVerify'
                      id='form-field-email-verify'
                      label={t('requestdemo.labels.emailVerify')}
                      placeholder={t('requestdemo.placeholders.emailVerify')}
                      error={touched.emailVerify && Boolean(errors.emailVerify)}
                      helperText={touched.emailVerify && errors.emailVerify}
                      value={values.emailVerify}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      {...commonTextInputProps}
                      name='organization'
                      id='form-field-organization'
                      label={t('requestdemo.labels.organization')}
                      placeholder={t('requestdemo.placeholders.organization')}
                      value={values.organization}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      {...commonTextInputProps}
                      name='title'
                      id='form-field-title'
                      label={t('requestdemo.labels.title')}
                      placeholder={t('requestdemo.placeholders.title')}
                      value={values.title}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Input
                      {...commonTextInputProps}
                      required
                      name='region'
                      id='form-field-region'
                      label={t('requestdemo.labels.region')}
                      placeholder={t('requestdemo.placeholders.region')}
                      error={touched.region && Boolean(errors.region)}
                      helperText={touched.region && errors.region}
                      value={values.region}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl variant='outlined' fullWidth>
                      <InputLabel id='form-usecase-label' htmlFor='form-field-usecase'>
                        {t('requestdemo.labels.usecase')}
                      </InputLabel>
                      <Select
                        required
                        label={t('requestdemo.labels.usecase')}
                        value={values.usecase}
                        onChange={handleUsecaseChange}
                        labelId='form-usecase-label'
                        id='form-field-usecase'
                      >
                        <MenuItem value='Autonomous Vehicle'>{t('requestdemo.usecases.vehicle')}</MenuItem>
                        <MenuItem value='Autonomous Driving Service/Software'>
                          {t('requestdemo.usecases.software')}
                        </MenuItem>
                        <MenuItem value='Sensor'>{t('requestdemo.usecases.sensor')}</MenuItem>
                        <MenuItem value='Robotics'>{t('requestdemo.usecases.robotics')}</MenuItem>
                        <MenuItem value='Academic Research'>{t('requestdemo.usecases.research')}</MenuItem>
                        <MenuItem value='Urban Transportation Planning'>{t('requestdemo.usecases.planning')}</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Input
                      {...commonTextInputProps}
                      name='other'
                      id='form-field-other'
                      label={t('requestdemo.labels.other')}
                      placeholder={t('requestdemo.placeholders.other')}
                      value={values.other}
                      multiline
                      rows={3}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </FormDialogContent>
          <FormDialogActions px={3}>
            <Grid container spacing={3}>
              <Grid item sm={4}></Grid>
              <Grid item sm={4}>
                <Typography variant='body2'>* indicates a required field.</Typography>
              </Grid>
              <Grid item sm={4} style={{ textAlign: 'end' }}>
                <FormControl>
                  <Button
                    color='primary'
                    variant='contained'
                    disabled={isSubmitting || !(isValid && dirty)}
                    type='submit'
                  >
                    {t('requestdemo.confirm')}
                  </Button>
                </FormControl>
              </Grid>
            </Grid>
          </FormDialogActions>
        </form>
      ) : (
        <FormDialogContent p={2} height={1}>
          <iframe src='https://mailthis.to/confirm' height='99%' width='100%' frameBorder={0} />
        </FormDialogContent>
      )}
    </FormDialog>
  );
};

export default RequestDemoForm;
export { RequestDemoForm };
