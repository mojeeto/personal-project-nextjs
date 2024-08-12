import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function FinancePage() {
  return (
    <main>
      <div className="flex flex-row justify-between">
        <h2>$300,000 Available</h2>
        <button>New Record</button>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[24px]">#</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Buy Drink</TableCell>
            <TableCell>$300</TableCell>
            <TableCell>SELL</TableCell>
            <TableCell>Buy two coffee for my self and my brother.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  );
}
