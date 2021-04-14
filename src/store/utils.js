export const createAction = (type, payloadKey = "payload") => {
  const action = (payload, meta = {}) => ({
    type,
    [payloadKey]: payload,
    meta,
  });

  action.toString = () => type;

  return action;
};
