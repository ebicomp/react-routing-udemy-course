import React from "react"
import { Link } from "react-router-dom"
const ErrorPage = () => {
  return (
    <div>
      <p>
        An error occured, return to the <Link to="/">Main Page</Link>{" "}
      </p>
    </div>
  )
}

export default ErrorPage
