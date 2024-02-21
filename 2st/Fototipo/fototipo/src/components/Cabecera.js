import { Navbar, NavbarBrand } from 'reactstrap';

const Cabecera = ({imagen}) => {

    return (
        <Navbar
            className="my-2"
            color="success"
            dark
        >
            <NavbarBrand href="/">
                <img
                    alt="Logo"
                    src={imagen}
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