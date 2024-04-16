import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firestore.config";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import { IBooking } from "../../../interface/interface";

export default function Uncompleted() {
  const [uncompletedBookings, setUncompletedBookings] = useState<IBooking[]>([]);
  const bookingCollectionsRef = collection(db, "bookings");

  const getUncompletedBookings = async () => {
    const q = query(bookingCollectionsRef, where("status", "==", false));
    const data = await getDocs(q);
    const res =  data.docs.map((doc) => ({
      ...(doc.data() as IBooking),
      id: doc.id,
    }))
    res.sort((a: IBooking, b: IBooking) =>
    a.datum
      .split("/")
      .reverse()
      .join()
      .localeCompare(b.datum.split("/").reverse().join())
  );
    setUncompletedBookings(res);  
 };

  useEffect(() => {
    getUncompletedBookings();
  }, []);
  getUncompletedBookings();

  const deletUncompletedBooking = async (n: IBooking) => {
    await deleteDoc(doc(bookingCollectionsRef, n.id));
    getUncompletedBookings();
  };

  return (
    <>
      <div className="container">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            margingTop: 3,
            marginBottom: 3,
            color: "#21252980",
          }}
        >
          Kommande städningar
        </Typography>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{backgroundColor:"#4ecca3", "color":"000"}}>
                <TableCell sx={{ fontWeight: "bold" }}>Nivå</TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Datum
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="left">
                  Städare
                </TableCell>
                <TableCell sx={{ fontWeight: "bold" }} align="right">
                  Ta bort
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {uncompletedBookings.map((booking) => (
                <TableRow
                  key={booking.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {booking.nivå}
                  </TableCell>
                  <TableCell align="left">
                    {booking.datum} - {booking.tid}
                  </TableCell>
                  <TableCell align="left">{booking.städare}</TableCell>
                  <TableCell align="right">
                    <DeleteIcon sx={{cursor:'pointer'}} className="hoverTrash"
                      onClick={() => deletUncompletedBooking(booking)}
                    />
                  </TableCell>
                </TableRow>
              ))}
           
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

