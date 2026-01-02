import React, { useState } from "react";

const demoFlights = [
  { id: 1, from: "Bangalore", to: "Delhi", date: "2026-01-02", airline: "IndiGo", price: 5200, class: "Economy" },
  { id: 2, from: "Bangalore", to: "Mumbai", date: "2026-01-02", airline: "Air India", price: 4800, class: "Economy" },
  { id: 3, from: "Delhi", to: "Bangalore", date: "2026-01-05", airline: "Vistara", price: 6100, class: "Economy" },
];

export default function Search() {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState(1,2,3);
  const [fareType, setFareType] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = demoFlights.filter((f) => (
      f.from.toLowerCase().includes(from.toLowerCase()) &&
      f.to.toLowerCase().includes(to.toLowerCase()) &&
      (departDate === "" || f.date === departDate)
    ));
    setResults(filtered);
  };

  return (
    <div style={styles.page}>
     
      <div style={styles.tripType}>
        <button
          onClick={() => setTripType("oneway")}
          style={tripType === "oneway" ? styles.activeBtn : styles.inactiveBtn}
        >One Way</button>
        <button
          onClick={() => setTripType("roundtrip")}
          style={tripType === "roundtrip" ? styles.activeBtn : styles.inactiveBtn}
        >Round Trip</button>
      </div>

      
      <div style={styles.searchBar}>
        <input placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
        <input placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
        <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} />
        {tripType === "roundtrip" && (
          <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
        )}
        <select value={travellers} onChange={(e) => setTravellers(e.target.value)}>
          <option value={1}> Economy</option>
          <option value={2}> Premium Economy</option>
          <option value={3}> Business</option>
        </select>
        <select value={travellers} placeholder="Adults" onChange={(e) =>setTravellers(e.target.value)}>
            <option value={0}>Select Number of Adult</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
        </select>
        <button style={styles.searchBtn} onClick={handleSearch}>Search</button>
      </div>

      
      <div style={styles.fares}>
        <span>Special Fares (Optional):</span>
        {["Student", "Senior Citizen", "Armed Forces"].map((f) => (
          <button
            key={f}
            onClick={() => setFareType(f)}
            style={fareType === f ? styles.fareActive : styles.fareBtn}
          >{f}</button>
        ))}
      </div>

     
      <div style={styles.cancelBox}>
        <input type="checkbox" />
        <span><b>Always opt for Free Cancellation</b> · ₹0 cancellation fee · Instant refunds</span>
      </div>

      
      <div style={{ marginTop: 20 }}>
        {results.map((f) => (
          <div key={f.id} style={styles.card}>
            <b>{f.airline}</b> — {f.from} ➝ {f.to} | ₹{f.price * travellers}
          </div>
        ))}
      </div>
    </div>
  );
}


const styles = {
  page: { maxWidth: 1100, margin: "30px auto", fontFamily: "Arial" },
  tripType: { display: "flex", gap: 10, marginBottom: 15 },
  activeBtn: { padding: "8px 16px", borderRadius: 20, border: "1px solid #0066ff", background: "#e6f0ff", color: "#0066ff" },
  inactiveBtn: { padding: "8px 16px", borderRadius: 20, border: "1px solid #ccc", background: "#fff" },
  searchBar: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 10, background: "#fff", padding: 15, borderRadius: 10, boxShadow: "0 0 10px #eee" },
  searchBtn: { background: "#ff7a00", color: "#fff", border: "none", fontSize: 16 },
  fares: { marginTop: 15, display: "flex", gap: 10, alignItems: "center" },
  fareBtn: { padding: "6px 12px", borderRadius: 20, border: "1px solid #ccc", background: "#fff" },
  fareActive: { padding: "6px 12px", borderRadius: 20, border: "1px solid #0066ff", background: "#e6f0ff" },
  cancelBox: { marginTop: 15, padding: 12, background: "#f1f8ff", borderRadius: 8 },
  card: { padding: 15, marginTop: 10, border: "1px solid #ddd", borderRadius: 6 }
};
