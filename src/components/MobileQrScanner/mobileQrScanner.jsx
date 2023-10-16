import { toastMessageDisplay } from "components/QrUploader/qrCodeHelper";
import { fakeQrValidator } from "components/QrUploader/qrCodeHelper";
import { useEffect, useState } from "react";
import QrReader from "react-qr-reader";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import { css } from "glamor";
import 'react-toastify/dist/ReactToastify.css';



const MobileQrScanner = () => {
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  useEffect( () => {
     if(data){
        setLoadingScan(true);
        fakeQrValidator('Something went wrong', false).then( response => {
          toastMessageDisplay(response.type, response.message, toast, css)
          setLoadingScan(false)
        }).catch( (error) => {
          setLoadingScan(false)
        } )
     }
  }, [data] )

  const handleScan = async (scanData) => {
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  const toggle = () => setStartScan(!startScan);

  return (
    <div className="App">
            <Button
                color="info"
                onClick={() => {
                  setStartScan(!startScan);
                }}
              >
                {loadingScan && 
        <Spinner size="sm" className="mr-1">
        Loading...
        </Spinner>
      }
                {startScan ? "Stop Scan" : "Start Scan"}
              </Button>
         <Modal isOpen={startScan} toggle={toggle} >
         <ModalHeader toggle={toggle}>Modal title</ModalHeader>
         <ModalBody>
         <QrReader
            facingMode="environment"
            delay={1000}
            onError={handleError}
            onScan={handleScan}
          />
     

         </ModalBody>
         <ModalFooter>
           <Button color="secondary" onClick={toggle}>
           
             Stop Scan
           </Button>
         </ModalFooter>
       </Modal>
      {data !== "" && <p className="text-green font-bold">{data}</p>}
      <ToastContainer />

    </div>
  );
};

export default MobileQrScanner;
