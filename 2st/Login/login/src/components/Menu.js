import {
    Navbar,
    NavbarBrand,
    NavLink,
    Button,
} from 'reactstrap';


const Menu = ({menuItem, setMenuItem}) => {
    let colorUno = 'secondary'
    let colorDos = 'secondary'
    let colorTres = 'secondary'
    
    // eslint-disable-next-line default-case
    switch (menuItem) {
        case 'UNO':
            colorUno = 'primary'
            break;
        case 'DOS':
            colorDos = 'primary'
            break;
        case 'TRES':
            colorTres = 'primary'
            break;
    }
    return (
        <div>
            <Navbar>
                <NavbarBrand href="/">MYFPSCHOOL</NavbarBrand>
                <NavLink>
                    <Button onClick={() => setMenuItem("UNO")} color={colorUno} >UNO</Button>{" "}
                    <Button onClick={() => setMenuItem("DOS")} color={colorDos} >DOS</Button>{" "}
                    <Button onClick={() => setMenuItem("TRES")} color={colorTres} >TRES</Button>
                </NavLink>
            </Navbar>
        </div>
    );
}

export default Menu;