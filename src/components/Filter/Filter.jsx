import { useContacts, LabelFilter, InputFilter } from 'components';

export const Filter = () => {
  const { filter, handleFilter } = useContacts();

  return (
    <LabelFilter>
      Filter contacts by name
      <InputFilter type="text" onChange={handleFilter} value={filter} />
    </LabelFilter>
  );
};
