import React from "react"
import { Link } from 'gatsby'
import Header from '../components/header'

export default () => (
    <div style={{ color: `purple`, fontSize: `72px` }}>
        <Link to='/contact/'>Contact</Link>
        <Header headerText='What?' />
        <p>Yes he does.</p>
        <img src="https://placekitten.com/600/400" alt="" />
    </div>
)