type TErrorMessage = {
  message: string | Array<Record<string, string>>;
};

type TErrorResponse = {
  status_code: number;
  message: string;
  errors: TErrorMessage;
};

export const formatErrors = (errors: TErrorResponse) => {
  if (typeof errors.errors.message === 'string') {
    return errors.errors.message;
  }

  return errors.errors.message.map((err) => ({
    name: Object.keys(err)[0],
    errors: [err[Object.keys(err)[0]]],
  }));
};
