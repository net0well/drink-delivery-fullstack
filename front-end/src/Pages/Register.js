import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import dataValidate from '../utils/dataValidate';
import { createUser } from '../services/requests';
import CustomerRegisterForm from '../components/CustomerRegisterForm';
import logo from '../images/logo-remove.png';

function Register() {
  const { fields, setFormFields, setUserData } = useContext(AppContext);
  const [isValid, setIsValid] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [unauthorized, changeAuthorized] = useState(false);

  const register = async (e) => {
    e.preventDefault();

    try {
      const data = await createUser(
        '/users/register',
        {
          email: fields.email,
          password: fields.password,
          name: fields.name,
        },
      );
      setUserData(data);
      setIsLogged(true);
    } catch (error) {
      setIsValid(false);
      changeAuthorized(true);
    }
  };

  useEffect(() => {
    const data = dataValidate(fields);
    setIsValid((data.name && data.email && data.password));
  }, [fields]);

  if (isLogged) return <Redirect to="/customer/products" />;

  return (
    <>
      <header
        className="w-full bg-flamingo-600"
      >
        <Link
          to="/login"
        >
          <img className="w-60 max-[640px]:mx-auto" src={ logo } alt="logo" />
        </Link>
      </header>
      <div
        className="flex flex-col items-center justify-center min-w-full
        min-h-screen text-gray-900"
      >
        <h1
          className="inline-block w-full my-4 text-center font-bold text-3xl"
        >
          Cadastro
        </h1>
        <CustomerRegisterForm
          register={ register }
          fields={ fields }
          setFormFields={ setFormFields }
          isValid={ isValid }
          unauthorized={ unauthorized }
        />
      </div>
    </>
  );
}

export default Register;
