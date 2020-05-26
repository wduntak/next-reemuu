import Link from 'next/link'
import { Component } from 'react';
import { ease } from "../lib/easings";
import HamburgerMenu from "./hamburger-menu";


export default class Navigation extends Component {

    render() {
        return (
          <>
            <HamburgerMenu />
          </>
        );
    }
}