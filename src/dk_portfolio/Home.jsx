import React, { useEffect } from 'react'
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import { Card, Grid, Image, Tab } from 'semantic-ui-react';
import dk_pro_img from '../img/dk_pro_img1.png'

function Home() {

    const panes = [
        {
            menuItem: 'React JS',
            render: () => <Tab.Pane attached={false}>React JS</Tab.Pane>,
        },
        {
            menuItem: 'Node JS',
            render: () => <Tab.Pane attached={false}>Node JS</Tab.Pane>,
        },
        {
            menuItem: 'Graph QL',
            render: () => <Tab.Pane attached={false}>Graph QL</Tab.Pane>,
        },
    ]

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('header-color') : header.classList.remove('header-color');
    };
    return (
        <>
            <header className="header-section d-none d-xl-block is-sticky">
                <div className='dk-portfolio-navbar'>
                    <Navbar
                        expand="md"
                        light
                        className="header-section-navbar"
                    >
                        <NavbarBrand href="/" style={{ fontSize: '30px', color: "#ff3939" }}>
                            ∂к
                        </NavbarBrand>
                        <Collapse navbar>
                            <Nav
                                className="me-auto"
                                navbar
                            >
                                <NavItem>
                                    <NavLink href="/components/" className='text-white'>
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap" className='text-white'>
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap" className='text-white'>
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </header>
            <div style={{ marginTop: "85px" }}>
                <div className='dk-basic-profile'>
                    <Grid className='dk-profile-info'>
                        <Grid.Row columns={2} className='dk-profile-info-cols'>
                            <Grid.Column className='profile-name'>
                                <div>I’m <span> Karthick</span><br />
                                    Full stack developer
                                </div>
                            </Grid.Column>
                            <Grid.Column className='profile-img'>
                                <Image src={dk_pro_img} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                <div className='dk-exp-stat'>
                    <Card className='dk-exp-stat-card'>
                        <Grid className='dk-exp-stat-card-grid'>
                            <Grid.Row className='dk-exp-stat-card-row'>
                                <Grid.Column width={10} className='dk-exp-stat-years'>
                                    1.4
                                </Grid.Column>
                                <Grid.Column width={6} className='dk-exp-stat-years-text'>
                                    Years experience
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card>
                </div>
                <div className='dk-skills'>
                    <div className='dk-skills-header'>Skills</div>
                    <div className='dk-skills-content'>
                        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                    </div>
                    <br/>
                </div>
            </div>
        </>
    );
}

export default Home