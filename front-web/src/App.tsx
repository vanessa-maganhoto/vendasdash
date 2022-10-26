import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import PieChartCard from './components/pie-chart-card';
import SalesByDate from './components/sales-by-date';
import SalesSummary from './components/sales-summary';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByDate />
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
      </div>
    </>
  );
}

export default App;
