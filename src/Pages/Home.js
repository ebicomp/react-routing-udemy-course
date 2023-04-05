import React from "react"
import { Link, Outlet } from "react-router-dom"
import classes from "./Home.module.css"

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <ul className={classes.navbar}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className={classes.main}>
        <Outlet />
      </div>
    </div>
  )
}

export default Home
