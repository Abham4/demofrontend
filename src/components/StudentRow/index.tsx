import { Button } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
const StudentRow = ({ row, handleDelete, handleEdit }: any) => {
  return (
    <TableRow
      key={row.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {row.firstName} {row.middleName} {row.lastName}
      </TableCell>
      <TableCell>{row.gender}</TableCell>
      <TableCell>{row.age}</TableCell>
      <TableCell>{row.createdDate}</TableCell>
      <TableCell>
        <Button onClick={() => handleEdit(row.id)}>
          <AiFillEdit style={{ fontSize: 20 }} />
        </Button>
        <Button onClick={() => handleDelete(row.id)}>
          <AiFillDelete style={{ color: "red", fontSize: 20 }} />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default StudentRow;
