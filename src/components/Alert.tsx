import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  handleCloseClick: () => void
}

const Alert = ({ children, handleCloseClick}: Props) => {
  return (
    <div className="alert alert-primary alert-dismissable" role="alert">
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hiden="true" onClick={handleCloseClick}>&times;</span>
      </button>
      {children}
    </div>
  )
}

export default Alert 