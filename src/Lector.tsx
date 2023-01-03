import React, { FC, useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";

type Props = {
  onScan: (scannedInfo: string) => void;
  onClose: () => void;
};

const Lector: FC<Props> = ({ onScan, onClose }) => {
  const [data, setData] = useState<string>()
  const alive = useRef(true);
  const qrScanner = useRef<QrScanner>();
  const video = useRef<HTMLVideoElement>(null);

  function onClick(){
    
  }

  useEffect(() => {
    alive.current = true;

    (async () => {
      const QrScanner = (await import("qr-scanner")).default;

      if (!alive.current) return;
      if (video.current) {
        qrScanner.current = new QrScanner(
          video.current,
          (result) =>
            onScan(result.data)
            // setData(result.data)
          ,
          {
            highlightScanRegion: true,
            maxScansPerSecond: 0.5,
          }
        );

        qrScanner.current.start();
      }
    })();

    return () => {
      alive.current = false;
      qrScanner.current?.destroy();
    };
  }, []);

  return (
    <section className="fixed inset-0 z-1200 flex items-center justify-center bg-black">
      <section className="flex items-center justify-center max-h-80vh overflow-y-hidden">
        <video className="w-full" ref={video} />
      </section>
      <button
        color="warning"
        className="!absolute top-2 right-2"
        aria-label="close"
        onClick={onClose}
      >
        {/* <CloseIcon /> */}
      </button>
      <h6>{data}</h6>
    </section>
  );
};

export default Lector;