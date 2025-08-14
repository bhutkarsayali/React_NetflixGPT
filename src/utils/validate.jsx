export const checkValidateData = (fullname, email, password) => {
  const isFullnameValid = /^[A-Za-z]+(?: [A-Za-z]+)+$/.test(fullname);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isFullnameValid) {
    return "Please enter correct name";
  }
  if (!isEmailValid) {
    return "Email id is not valid";
  }
  if (!isPasswordValid) {
    return "Password is not valid";
  }

  return null;
};
