import React, { useState } from "react"
import { Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { css } from "glamor";
import 'react-toastify/dist/ReactToastify.css';



interface ComponentProps {

}

const defaultValue = {
    isApprove: false,
    isDeclined: false
}

const StatusButton:React.FC<ComponentProps> = () => {

     
    const [btnStatusInfo, setBtnStatusInfo] = useState(defaultValue)

    const displaySuccessToast = (message: string) => {
       return  toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        // className: css({
        //   background: "#1ab394 !important"
        // })
      })
    }

    const displayDeclinedToast = (message: string) => {
        return  toast.error(message, {
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         // className: css({
         //   background: "#1ab394 !important"
         // })
       })
     }


    const handleOnApprove = () => {
        const approveBtnStatus = {
            ...btnStatusInfo,
            isApprove: true
        }
        setBtnStatusInfo({...approveBtnStatus});
        displaySuccessToast('Approved')
    
    }
     
    const handleOnDecline = () => {
        const declinedBtnStatus = {
            ...btnStatusInfo,
            isDeclined: true
        }; 
        setBtnStatusInfo({...declinedBtnStatus});
        displayDeclinedToast('Declined')

    }
      
    return <>
    {
          !btnStatusInfo.isApprove && !btnStatusInfo.isDeclined && 
         <>
           <Button color="success" onClick={handleOnApprove}>
          Approve
        </Button>
        <Button color="danger" onClick={handleOnDecline}>
          Decline
        </Button>
         </>
    }
     {
        btnStatusInfo.isApprove && 
        <Button color="success">
        Approved
      </Button>
     }
     {
        btnStatusInfo.isDeclined && 
        <Button color="danger" onClick={handleOnDecline}>
          Declined
        </Button>
     }
      <ToastContainer />
       
     </>
}

export { StatusButton }
