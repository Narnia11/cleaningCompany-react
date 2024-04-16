import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../firestore.config";
import { useEffect, useState } from "react";
import { IBooking } from "../../../interface/interface";
import { async } from "@firebase/util";

//const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Completed() {
  const [completedBookings, setCompletedBookings] = useState<IBooking[]>([]);
  const bookingCollectionsRef = collection(db, "bookings");
  const [isChecked, setIsChecked] = useState<string[]>([]);

  const getCompletedBookings = async () => {
    const q = query(bookingCollectionsRef, where("status", "==", true));
    const data = await getDocs(q);

    const res = data.docs.map((doc) => ({
      ...(doc.data() as IBooking),
      id: doc.id,
    }));
    res.sort((a: IBooking, b: IBooking) =>
      a.datum
        .split("/")
        .reverse()
        .join()
        .localeCompare(b.datum.split("/").reverse().join())
    );
    setCompletedBookings(res);
  };

  useEffect(() => {
    getCompletedBookings();
  }, []);

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    console.log(checked);
    console.log(value);
    console.log(isChecked);
    if (checked) {
      setIsChecked([...isChecked, value]);
    } else {
      setIsChecked(isChecked.filter((e) => e !== value));
    }
  };

  const alldelete = async () => {
    isChecked.forEach(async (id) => {
      const ref = doc(db, "bookings", id);
      await deleteDoc(ref);
    });
    getCompletedBookings();
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
          Utförda städningar
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#4ecca3", color: "000" }}>
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
              {completedBookings.map((booking) => (
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
                  {/* <TableCell align="right"><Checkbox {...label} onChange = {handleChange}/></TableCell> */}
                  <TableCell align="right">
                    <input
                      type="checkbox"
                      value={booking.id}
                      checked={booking.isChecked}
                      onChange={(e) => handleCheckbox(e)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          variant="contained"
          sx={{ float: "right", marginTop: 1, backgroundColor: "#212529" }}
          onClick={alldelete}
        >
          Ta Bort
        </Button>
        <br />
      </div>
    </>
  );
}
