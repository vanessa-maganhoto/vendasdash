import './styles.css';
import 'flatpickr/dist/themes/material_green.css';

import { Portuguese } from 'flatpickr/dist/l10n/pt';
import flatpickrLib from 'flatpickr';
import FlatPicker from 'react-flatpickr';

flatpickrLib.localize(Portuguese);

const onChangeDate = (dates: Date[]) => {
  console.log(dates);
};

function Filter() {
  return (
    <div className="filter-container base-card">
      <FlatPicker
        options={{
          mode: 'range',
          dateFormat: 'd/m/Y',
          showMonths: 2
        }}
        className="filter-input"
        onChange={onChangeDate}
        placeholder="Selecione um período"
      />

      <select className="filter-input">
        <option value=""> Selecione um gênero</option>
        <option value="MALE">Masculino</option>
        <option value="FEMALE">Feminino</option>
        <option value="OTHER">Outro</option>
      </select>
    </div>
  );
}

export default Filter;
