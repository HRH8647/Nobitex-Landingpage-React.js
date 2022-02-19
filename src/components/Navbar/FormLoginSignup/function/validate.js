export const validate = (data, type) => {

    const errors = {};

    if (type === "login") {
        const { email, password } = data;

        if (!email) {
            errors.email = "ایمیل نمی تواند خالی باشد";
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            errors.email = "ایمیل معتبر نیست";
        } else {
            delete errors.email;
        }

        if (!password) {
            errors.password = "رمز عبور نمی تواند خالی باشد";
        } else {
            delete errors.password;
        }
    } else {
        const { email, password, confirmPassword} = data;

        if (!email) {
            errors.email = "ایمیل نمی تواند خالی باشد";
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            errors.email = "ایمیل معتبر نیست";
        } else {
            delete errors.email;
        }

        if (!password) {
            errors.password = "رمز عبور نمی تواند خالی باشد";
        } else if(password.length < 6 || password.length > 15) {
            errors.password = "طول پسوورد باید بین 6 تا 15 کاراکتر باشد";
        } else {
            delete errors.password;
        }

        if(!confirmPassword) {
            errors.confirmPassword = "رمز خود را تکرار کنید";
        } else if(confirmPassword !== password) {
            errors.confirmPassword =  "رمز ها تطابق ندارند";
        } else {
            delete errors.confirmPassword;
        }
    }

    return errors;
}