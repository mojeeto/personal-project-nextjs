import FinanceTable from "@/components/finance-table";

export default function FinancePage() {
  return (
    <main>
      <div className="flex flex-row justify-between">
        <h2>$300,000 Available</h2>
        <button>New Record</button>
      </div>
      <FinanceTable />
    </main>
  );
}
