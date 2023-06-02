import PropTypes from 'prop-types';

function Select({ id, name, value, options, dataTestId, handleChange }) {
  return (
    <select
      id={ id }
      name={ name }
      onChange={ handleChange }
      defaultValue={ value }
      data-testid={ dataTestId }
      className="min-[641px]:p-2.5 max-[640px]:w-full max-[640px]:p-4
      max-[640px]:-mx-1 text-lg rounded-lg border-solid border border-black bg-gray-50"
    >
      <option>
        { name }
      </option>
      {
        options.map((data, index) => (
          <option
            key={ index }
            value={ data.id }
          >
            { data.name }
          </option>))
      }
    </select>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  dataTestId: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
