import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import dataValidate from '../utils/dataValidate';
import Select from './Select';
import roleTypes from '../json/roleTypes.json';

function RegisterForm({ register, fields, setFormFields }) {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const data = dataValidate(fields);
    setIsValid((data.name && data.email && data.password && fields.role));
  }, [fields]);

  return (
    <form
      className="flex flex-wrap justify-center w-4/6 max-[640px]:w-96 p-5
      border-solid border border-gray-400 shadow-md rounded gap-y-10"
      action="#"
    >
      <div className="flex flex-wrap justify-center w-full gap-x-10">
        <label
          htmlFor="name"
          className="w-60 max-[640px]:w-full min-[641px]:mx-1
          uppercase tracking-wide text-xs font-bold"
        >
          Nome
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Seu nome"
            required=""
            data-testid="admin_manage__input-name"
            value={ fields.name }
            onChange={ setFormFields }
            className="appearance-none block w-full rounded py-3 px-4 my-2
            min-[641px]:-mx-1 border-solid border border-black font-normal text-sm"
          />
        </label>
        <label
          htmlFor="email"
          className="w-60 max-[640px]:w-full min-[641px]:mx-1
          uppercase tracking-wide text-xs font-bold"
        >
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="seu-email@site.com.br"
            required=""
            data-testid="admin_manage__input-email"
            value={ fields.email }
            onChange={ setFormFields }
            className="appearance-none block w-full rounded py-3 px-4 my-2
            min-[641px]:-mx-1 border-solid border border-black font-normal text-sm"
          />
        </label>
        <label
          htmlFor="password"
          className="w-60 max-[640px]:w-full min-[641px]:mx-1
          uppercase tracking-wide text-xs font-bold"
        >
          Senha
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            required=""
            value={ fields.password }
            onChange={ setFormFields }
            data-testid="admin_manage__input-password"
            className="appearance-none block w-full rounded py-3 px-4 my-2
            min-[641px]:-mx-1 border-solid border border-black font-normal text-sm"
          />
        </label>
        <div
          className="w-60 max-[640px]:w-full mx-1 inline-block uppercase tracking-wide
          text-xs font-bold"
        >
          <p
            className="w-full block uppercase tracking-wide
            text-xs font-bold mb-2"
          >
            P. Vendedora Responsável:
          </p>
          <div className="relative">
            <Select
              id="role"
              name="role"
              options={ roleTypes }
              value={ fields.role }
              handleChange={ setFormFields }
              dataTestId="admin_manage__select-role"
            />
          </div>
        </div>
        <button
          type="button"
          disabled={ !isValid }
          onClick={ (e) => register(e) }
          data-testid="admin_manage__button-register"
          className="flex items-center justify-center h-12 p-3 w-32 my-5 rounded
          text-lg text-white font-bold bg-green-800 disabled:bg-gray-500"
        >
          Cadastrar
        </button>
      </div>
    </form>
  );
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
  fields: PropTypes.objectOf(PropTypes.string).isRequired,
  setFormFields: PropTypes.func.isRequired,
};

export default RegisterForm;
