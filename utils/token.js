export const getThisToken = () => {
  const getToken = localStorage.getItem('authToken');
  return getToken;
};

export const tokenChecker = () => {
  if (!localStorage.getItem('authToken')) {
    return false;
  } else {
    console.log('token valid');
    return true;
  }
};
export const tokenRemover = () => {
  localStorage.removeItem('authToken');
  localStorage.setItem('error-message', 'You will need to re-authenticate');
  window.location.reload();
};
