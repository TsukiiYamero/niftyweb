import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ImgResetPassword from '@/assets/images/reset-password.png'
import Visibility from '@mui/icons-material/Visibility';
import { MouseEvent, useState } from 'react';
import { Box, Button, FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput, InputLabel } from '@mui/material';
import { useForm } from "react-hook-form";
import { PatternPassword } from '@/utils/authValidations';
import { useFetchWithCallback } from '@/customHooks/useFetchWithCallback';
import { updateProfile } from '@/services/authServices/passwordReset';
import { useSnackbar } from '@/context/snackbar/hooks';
import './change_password_layout.css';

type ChangePassword = { password: string, passwordConfirm: string }

export const ChangePasswordLayout = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [msgError, setMsgError] = useState('');
    const showSnackbar = useSnackbar();
    const { callApi } = useFetchWithCallback();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            password: '',
            passwordConfirm: ''
        }
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const onSubmit = async (form: ChangePassword) => {
        if (form.password !== form.passwordConfirm) {
            setMsgError('Ops... Both passwords must match');
            return;
        }
        setMsgError('');

        const { data, error } = await callApi<{ password: string, email?: string }>(updateProfile, { password: form.password });
        if (error) {
            setMsgError(error.message);
            return;
        }

        showSnackbar('Password changed successfully', 'success');
        console.log(data);
    };

    return (
        <Box className='reset-password-container'>
            <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>

                <h1>Password Reset</h1>

                <FormHelperText>Please enter a new password for your account.</FormHelperText>
                <FormHelperText error>{msgError}</FormHelperText>
                <Box>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-confirm-password">Enter new Password</InputLabel>
                        <OutlinedInput
                            label="Enter new Password"
                            id="outlined-adornment-confirm-password"
                            type={showPassword ? 'text' : 'password'}
                            {...register('password', {
                                required: 'Please enter a new password for your account',
                                pattern: {
                                    value: PatternPassword,
                                    message: 'Password must be at least 8 characters long, and must include 1 letter & 1 number.'
                                }
                            })}
                            error={!!errors.password}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText error> {errors.password?.message}</FormHelperText>
                    </FormControl>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm new Password</InputLabel>
                        <OutlinedInput
                            label="Confirm new Password"
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            {...register('passwordConfirm', {
                                required: 'Please confirm the new password for your account',
                                pattern: {
                                    value: PatternPassword,
                                    message: 'Password must be at least 8 characters long, and must include 1 letter & 1 number.'
                                }
                            })}
                            error={!!errors.passwordConfirm}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText error> {errors.passwordConfirm?.message}</FormHelperText>
                    </FormControl>

                    <Button type="submit" variant='contained'>Change my password</Button>
                </Box>

            </Box>

            <Box className='reset-password-img-container'>
                <Box className='wallpaper-reset-password'></Box>
                <Box>
                    <img src={ImgResetPassword} alt="img of reset password, one girl in front of a laptop" />
                </Box>
            </Box>
        </Box>
    )
}
