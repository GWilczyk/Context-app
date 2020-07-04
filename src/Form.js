import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import formStyles from './styles/FormStyles';
import { LanguageContext } from './contexts/LanguageContext';

const words = {
  english: {
    signIn: 'Sign In',
    email: 'Email',
    password: 'Password',
    remember: 'Remember Me'
  },
  french: {
    signIn: 'Se connecter',
    email: 'Adresse électronique',
    password: 'Mot de passe',
    remember: 'Se rappeler de moi'
  },
  spanish: {
    signIn: 'Registrarse',
    email: 'Correo electrónico',
    password: 'Contraseña',
    remember: 'Recuérdame'
  }
};

function Form(props) {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { classes } = props;
  const { signIn, email, password, remember } = words[language];
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlineIcon />
        </Avatar>
        <Typography variant='h5'>{signIn}</Typography>
        <Select value={language} onChange={changeLanguage}>
          <MenuItem value='english'>English</MenuItem>
          <MenuItem value='french'>Français</MenuItem>
          <MenuItem value='spanish'>Español</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='email'>{email}</InputLabel>
            <Input id='email' type='email' name='email' autoFocus></Input>
          </FormControl>
        </form>
        <form className={classes.form}>
          <FormControl margin='normal' required fullWidth>
            <InputLabel htmlFor='password'>{password}</InputLabel>
            <Input id='password' type='password' name='password'></Input>
          </FormControl>
          <FormControlLabel
            control={<Checkbox color='primary' />}
            label={remember}
          />
          <Button
            variant='contained'
            type='submit'
            fullWidth
            color='primary'
            className={classes.submit}
          >
            {signIn}
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(formStyles)(Form);
