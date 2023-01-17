import { useFormAdvanced } from '@/customHooks/useFormAdvanced';
import { changePasswordValidation } from '@/utils/authValidations';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { Box, Button, FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import ImgResetPassword from '@/assets/images/reset-password.png'
import './change_password_layout.css';
import { TextField } from '@mui/material';
import { InputLabel } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type SignUpForm = { email: string, password: string }

export const ChangePasswordLayout = () => {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const { data, errors, isValid, pristine, handelSetData, resetForm } = useFormAdvanced<SignUpForm>({
        validations: changePasswordValidation.validations,
        initialValues: {
            email: emailRef.current?.value ?? '',
            password: passwordRef.current?.value ?? ''
        }
    });

    useEffect(() => {
        const signUp = async () => {
            if (!isValid) return;

            const userCredentials = {
                email: data.email ?? '',
                password: data.password ?? ''
            };

            let isOk = false;
        };
        signUp();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isValid, data]);

    const onSubmit = (ev: FormEvent) => {
        ev.preventDefault();

        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        handelSetData({
            email, password
        });
    };


    return (
        <Box className='reset-password-container'>
            <Box component={'form'} onSubmit={onSubmit}>
                <h1>Password Reset</h1>

                <FormHelperText>Please enter a new password for your account.</FormHelperText>

                <Box>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-confirm-password">Enter new Password</InputLabel>
                        <OutlinedInput
                            label="Enter new Password"
                            id="outlined-adornment-confirm-password"
                            type={showPassword ? 'text' : 'password'}
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
                    </FormControl>

                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Confirm new Password</InputLabel>
                        <OutlinedInput
                            label="Confirm new Password"
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
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
