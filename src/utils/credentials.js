import isEmail from 'validator/lib/isEmail';

export const userLogin = ({ emailid, password }) => {
  return new Promise((resolve, reject) => {
    let user = {
      emailid: 'ab@ab.com',
      password: '123',
    };
    let errors = {};

    if (emailid) {
      if (!isEmail(emailid)) errors.emailid = 'Enter a valid email-id';
      else if (emailid !== user.emailid) errors.loginFailed = 'Entered invalid credentials';
    } else errors.emailid = 'Email-id required';

    if (password) {
      if (password !== user.password) errors.loginFailed = 'Entered invalid credentials';
    } else errors.password = 'Password required';

    if (errors.emailid || errors.password || errors.loginFailed) reject(errors);
    else resolve(user);
  });
};
