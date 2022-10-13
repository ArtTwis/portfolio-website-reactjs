const appThemeReducer = (
  state = window.localStorage.getItem('theme'),
  action
) => {
  switch (action.type) {
    case 'APP_THEME':
      if (state === 'dark') {
        window.localStorage.setItem('theme', 'light');
        return 'light';
      } else {
        window.localStorage.setItem('theme', 'dark');
        return 'dark';
      }
    default:
      return state;
  }
};

export default appThemeReducer;
