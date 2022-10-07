import * as yup from 'yup';

export interface ErrorProps {
  [k: string]: string;
}

const shape = {
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  password: yup
    .string()
    .required('Campo obrigatório')
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
      'Obrigatório: 08 caracteres, 01 caractere especial, 01 letra maiúscula, 01 minúscula e 01 número',
    ),
  confirmPassword: yup
    .string()
    .required('Campo obrigatório')
    .oneOf([yup.ref('password')], 'As senhas devem corresponder'),
};

export async function validationRegister<T>(body: T) {
  try {
    const schema = yup.object().shape(shape);
    await schema.validate(body, { abortEarly: false });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      const errorData: ErrorProps = {};
      error.inner.forEach(error => {
        errorData[error.path!] = error.message;
      });
      return errorData;
    }
  }
}
