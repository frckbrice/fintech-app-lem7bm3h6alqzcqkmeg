const SignInOption = {
    Phone: 'phone',
    Email: 'email',
    Google: 'google',
    Apple: 'apple'
} as const;

type SignInOptionValue = (typeof SignInOption)[keyof typeof SignInOption];
type SignInOptionKey = keyof typeof SignInOption;
type SignInType = typeof SignInOption;

export default SignInOptionKey;
