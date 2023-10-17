const toastMessageDisplay = (type, message, toast, css) => {
    console.log('message',message)
  if(type === 'success'){
     return  toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: css({
          background: "#1ab394 !important"
        })
      })
  }
  else if( type === 'error'){
   return toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: css({
          background: "#ed5565 !important"
        })
      });
  }
  else {
    return toast.warn(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: css({
          background: "#f8ac59 !important"
        })
      });
  }
}

export {toastMessageDisplay}