type Contents = {
  checkIn: string;
  checkOut: string;
  price: string;
  guest: string;
};

type Action = {
  type: ActionType;
  payload: Payload;
};

type Payload = {
  key: string;
  value: string;
};

enum ActionType {
  SET_CONTENTS,
}

const setContents = (state: Contents, payload: Payload): Contents => {
  const { key, value } = payload;
  return { ...state, [key]: value };
};

const actionFunc = {
  [ActionType.SET_CONTENTS]: setContents,
};

const reducer = (state: Contents, { type, payload }: Action): Contents => actionFunc[type](state, payload) || state;

export { ActionType, reducer };
