import { useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';
import SalesTable from './components/sales-table';
import { FilterData } from './types';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesByDate filterData={filterData} />
        <div className="sales-overview-container">
          <SalesSummary />
          <PieChartCard
            name="Lojas"
            labels={['Uberlandia', 'Araguari', 'Uberaba']}
            series={[25, 70, 5]}
          />
          <PieChartCard
            name="Pagamento"
            labels={['Credito', 'Débito', 'Dinheiro']}
            series={[20, 50, 30]}
          />
        </div>
        <SalesTable />
      </div>
    </>
  );
}

export default App;
