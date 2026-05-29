import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissable" role="alert">
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hiden="true">&times;</span>
      </button>
      {children}
    </div>
  )
}

export default Alert