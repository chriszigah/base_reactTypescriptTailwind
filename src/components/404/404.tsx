import {FC} from 'react'
import { Link } from "react-router-dom"

export interface ILogin {
    name: string
}

const NotFound:FC = () => {
    return (
      <div>
        <p>Page Not Found</p>
      <Link className="btn-back" to="/">
        GO TO HOME
      </Link>
      </div>
    )
}

export default NotFound