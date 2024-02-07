import { useState } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';

const Cabecera = () => {

    return (
        <Navbar
            className="my-2"
            color="success"
            dark
        >
            <NavbarBrand href="/">
                <img
                    alt="Logo"
                    src="/images/logo/demeter-logo-contorno-transp-green.png"
                    style={{
                        height: 40,
                        width: 40
                    }}
                />
            </NavbarBrand>
        </Navbar>
    )
};

export default Cabecera;