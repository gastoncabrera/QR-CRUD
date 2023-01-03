import React, { useRef, useState } from "react";
import Button from "@mui/material/Button";
// import QRScanner from "@components/shared/QRScanner";
import Lector from "./Lector";
import App from "./App";
import { display } from "@mui/system";

const Scanner = () => {
  const scanned = useRef<string>();
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  function onScan(scannedInfo: string) {
    scanned.current = scannedInfo;
    setIsScannerOpen(false);
  }

  function closeScanner() {
    setIsScannerOpen(false);
  }

  function openScanner() {
    setIsScannerOpen(true);
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <article className="content">
        <section className="flex items-center justify-between">
          <h3>QR code scanner</h3>
          <Button variant="contained" onClick={openScanner}>
            Open scanner
          </Button>
        </section>
        <br />
        {scanned.current && (
          <section>
            <h4>Scanned information</h4>
            <p>{scanned.current}</p>
          </section>
        )}
        {isScannerOpen && <Lector onClose={closeScanner} onScan={onScan} />}
      </article>
      <App />
    </div>
  );
};

export default Scanner;