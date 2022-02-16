export const validate = (data, type) => {

    const errors = {};

    if (type === "login") {
        const { email, password } = data;

        if (!email) {
            errors.email = "ایمیل نمی تواند خالی باشد";
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            errors.email = "ایمیل معتبر نیست";
        } else {
            delete errors.email;
        }

        if (!password) {
            errors.password = "رمز عبور نمی تواند خالی باشد";
        } else {
            delete errors.password;
        }
    }

    return errors;
}