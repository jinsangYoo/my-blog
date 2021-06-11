const getUser = (response) => {
  const repos = [];
  const itemLength = response.data.length;
  for (let index = 0; index < itemLength; index++) {
    const item = response.data[index];
    repos.push({
      name: item.Name,
      description: item.description,
      url: item.html_url,
    });
  }
  return repos;
};

const initialState = {
  user: undefined,
  repos: undefined,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "START_REQUEST":
      return {
        user: action.payload.user,
        repos: undefined,
        error: false,
      };

    case "RECEIVE_DATA":
      return action.payload.error
        ? {
            ...state,
            error: true,
          }
        : { ...state, repos: getUser(action.payload.response) };
    default:
      return state;
  }
};
