export const changePasswordValidation = {
    validations: {
        password: {
            pattern: {
                // eslint-disable-next-line
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/,
                message: 'Please provide your password, must be at least 8 characters long & 1 letter'
            }
        },
        passwordConfirm: {
            pattern: {
                // eslint-disable-next-line
                value: /^(?=.*[A-Za-z])(?=.*\d){8,}/,
                message: 'Please provide your password, must be at least 8 characters long & 1 letter'
            }
        }
    }
};

export const PatternPassword = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
