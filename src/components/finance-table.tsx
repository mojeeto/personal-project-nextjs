import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const FinanceTable: React.FC = () => {
  return (
    <Table>
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
  );
};

export default FinanceTable;
