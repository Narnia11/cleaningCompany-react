import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firestore.config";
import { IBooking } from "../../../interface/interface";

export default function Hero2() {
  const [bookings, setBookings] = useState<IBooking[]>([]);
  const [level, setLevel] = useState("");
  const [cleaner, setCleaner] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [kund, setKund] = useState("");
  const bookingCollectionsRef = collection(db, "bookings");

  const getBookings = async () => {
    const data = await getDocs(bookingCollectionsRef);
    const res: IBooking[] = data.docs.map((doc) => ({
      ...(doc.data() as IBooking),
      id: doc.id,
    }));
    setBookings(res);
    console.log(bookings)
    setKund(res[0].kund);
    console.log(kund)
  };

  useEffect(() => {
    getBookings();
  }, []);

  const addBooking = async () => {
    const nyKund= {
      nivå: level,
      städare: cleaner,
      status: false,
      datum: date,
      tid: time,
      kund: kund,
      // id:"",
      // isChecked:false
     
    }
    await addDoc(bookingCollectionsRef, nyKund);
    // setBookings([...bookings, nyKund])
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const findObj = bookings.find(
      (obj) => obj.datum === date && obj.städare === cleaner
    );
    if (!findObj) {
      addBooking();
      
      setLevel("");
      setCleaner("");
      setDate("");
      setTime("");
     
      console.log("added")
      getBookings();
      console.log("okej")
    } else {
      alert("Du har redan bokat");
    }
    // refreshPage()
    
  };
//   const refreshPage=()=>{
// window.location.reload()
//   }

  return (
    <>
      <div className="hero-img2">
        <div className="sectionOne container grid">
          <div className="left flex">
            <section>
              <div className=" sectionSix">
                <form onSubmit={handleSubmit}>
                  <h2 style={{"backgroundColor":"black" , "color" : "#fff", "borderRadius": "8px 8px 0 0"}}>Bokning</h2>
                  <div className="radio">
                    <fieldset>
                      <legend>Tjänster</legend>
                      <input
                        type="radio"
                        id="basic"
                        name="nivå"
                        value="Basic"
                        required
                        onChange={(e) => setLevel(e.target.value)}
                      />
                      <label htmlFor="basic">Basic</label>
                      <br />
                      <input
                        type="radio"
                        id="topp"
                        name="nivå"
                        value="Topp"
                        required
                        onChange={(e) => setLevel(e.target.value)}
                      />
                      <label htmlFor="topp">Topp</label>
                      <br />
                      <input
                        type="radio"
                        id="diamond"
                        name="nivå"
                        value="Diamond"
                        required
                        onChange={(e) => setLevel(e.target.value)}
                      />
                      <label htmlFor="diamond">Diamond</label>
                      <br />
                      <input
                        type="radio"
                        id="fönster"
                        name="nivå"
                        value="Fönster tvätt"
                        required
                        onChange={(e) => setLevel(e.target.value)}
                      />
                      <label htmlFor="fönster">Fönster tvätt</label>
                      <br />
                    </fieldset>
                  </div>
                  <div className="sectionSix__staffInfo">
                    <div>
                      <select
                        name="städare"
                        id="städare"
                        value={cleaner}
                        onChange={(e) => setCleaner(e.target.value)}
                        required
                      >
                        <option value="">Val av städare </option>
                        <option value="Städare1">Städare1</option>
                        <option value="Städare2">Städare 2</option>
                        <option value="Städare3">Städare 3</option>
                        <option value="Städare4">Städare 4</option>
                      </select>
                    </div>
                  </div>
                  <div className="sectionSix__dateInfo">
                    <div>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        placeholder="Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="time"
                        name="time"
                        id="time"
                        min="07:00"
                        max="18:00"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <input type="submit" value="Boka städning" className="dark-btn" style={{"width" : "100%", "borderRadius":"0 0 8px 8px"}} />
                </form>

               
              </div>
            </section>
          </div>
          <div className="right">
            <h1>Välkommen <span style={{"color":"#4ecca3"}}>{kund}!</span></h1>
          </div>
        </div>
      </div>
    </>
  );
}
