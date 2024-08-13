import FinanceButtonDialog from "@/components/finance-button-dialog";
import FinanceTable from "@/components/finance-table";

export default function FinancePage() {
  return (
    <main>
      <div className="flex flex-row justify-between items-center px-5 mb-5">
        <h2>
          <span className="text-2xl font-bold">$300,000</span> Available
        </h2>
        <FinanceButtonDialog />
      </div>
      <div>
        <FinanceTable />
      </div>
    </main>
  );
}
