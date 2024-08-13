import FinanceTable from "@/components/finance-table";
import { Button } from "@/components/ui/button";

export default function FinancePage() {
  return (
    <main>
      <div className="flex flex-row justify-between items-center px-5 mb-5">
        <h2>
          <span className="text-2xl font-bold">$300,000</span> Available
        </h2>
        <Button>New Record</Button>
      </div>
      <div>
        <FinanceTable />
      </div>
    </main>
  );
}
