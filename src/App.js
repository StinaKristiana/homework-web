import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col, Navbar, Nav, ButtonToolbar, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import picture from './marlboro.png'
import picture2 from './error.png'
import skull from './skull.png'
import moon from './moon.png'
import skulpt from './skulpt.png'
import book from './book.png'



let scrolled

window.onscroll = function() {
  scrolled = document.documentElement.scrollTop
  console.log(document.documentElement.scrollTop)
}

export default class App extends React.Component {
  state = { hasScrolled: false }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    if (scrolled > 180) {
      this.setState({ hasScrolled: true })
      console.log(this.state.hasScrolled)
    } else {
      this.setState({ hasScrolled: false })
      console.log('False' + scrolled)
    }
  }

  render() {
    return (
      
        <div className="App">
            <Row className={this.state.hasScrolled ? 'fade-out' : 'fade-in'}>
              <Col>
                <img
                  src="https://www.4montnait.com/wp-content/uploads/2019/02/logo-4-montnait-2.png"
                  alt="4montnait"
                />
              </Col>
            </Row>
          <Row className={this.state.hasScrolled ? 'fade-out' : 'fade-in'}>
            <Col className="header-heading">
              <h1>
                WELCOME TO OUR <span>BLOG</span>
              </h1>
              <p>
                – Introducing to our vision, ideas and basicly shit we think is
                worth speaking about
              </p>
            </Col>
          </Row>

          <Row className={this.state.hasScrolled ? 'fade-in' : 'fade-out'}>
            <Col className="header-2">
              <h1>DAILY BASICS</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut
              </p>
            </Col>
          </Row>
          <Row className={this.state.hasScrolled ? 'fade-in' : 'fade-out'}>
            <Col className="navigation">
              <Navbar>
                <Nav className="nav-bar">
                  <Nav.Link className="nav-item">MUSIC</Nav.Link>
                  <span>/</span>
                  <Nav.Link className="nav-item">ARTS</Nav.Link>
                  <span>/</span>

                  <Nav.Link className="nav-item">DESIGN</Nav.Link>
                  <span>/</span>

                  <Nav.Link className="nav-item">WORHT IT</Nav.Link>
                </Nav>
              </Navbar>
            </Col>
          </Row>
          <Row
            className={
              this.state.hasScrolled ? 'fade-in header-3' : 'fade-out header-3'
            }
          >
            <Col className="column-art">
              <h1>
                Lorem ipsum
                <br />
                dolor sit amet
              </h1>
              <p>
                consectetuer adipiscing elit,
                <br /> sed diam nonummy nibh euismod
                <br /> tincidunt ut laoreet dolore
                <br /> magna aliquam erat volutpat. Ut
                <br /> wisi enim ad minim.
              </p>

              <Button className="btn-read">Read more</Button>
            </Col>
            <Col>
              <img
                src="http://www.laurenhakmiller.com/wp-content/uploads/2019/01/9.jpg"
                alt="Book"
              />
            </Col>
          </Row>
          <Row>
            <Col className="header-4">
              <h1>
                Lorem ipsum <br />
                dolor sit amet
              </h1>
              <p>
                consectetuer adipiscing elit,
                <br /> sed diam nonummy nibh euismod
                <br /> tincidunt ut laoreet dolore
                <br /> magna aliquam erat volutpat. Ut
                <br /> wisi enim ad minim.
              </p>
              <Button className="btn-read1">Read more</Button>
              <img src="http://i.imgur.com/MnubQGQ.png" alt="Art" />
            </Col>
          </Row>
          <Row>
            <Col className="error-heading">
              <h1>
                Lorem ipsum <br />
                dolor sit amet
              </h1>
              <p>
                consectetuer adipiscing elit,
                <br /> sed diam nonummy nibh euismod
                <br /> tincidunt ut laoreet dolore
                <br /> magna aliquam erat volutpat. Ut
                <br /> wisi enim ad minim.
              </p>

              <Button className="btn-read">Read more</Button>
            </Col>

            <Col className="header-3">
              <img src="http://i.imgur.com/W3As0R6.png" alt="Error" />
            </Col>
          </Row>

          <Row>
            <Col className="lip-image">
              <img
                src="https://www.4montnait.com/wp-content/uploads/2019/02/lippen.jpg"
                alt="Lips"
              />
              <ButtonToolbar className="btn-rotate">
                <Button className="btn-load">LOAD</Button>
                <Button className="btn-more">MORE</Button>
              </ButtonToolbar>
            </Col>
          </Row>

          <Row className="black">
            <Col className="black-1" sm={6}>
              <ul>
                <li>
                  <a href="https://www.4montnait.com/">MARKETING</a>
                </li>
                <li>
                  <a href="https://www.4montnait.com/">CONCEPTION</a>
                </li>
                <li>
                  <a href="https://www.4montnait.com/">PRODUCTION</a>
                </li>
                <li>
                  <a href="https://www.4montnait.com/">ABOUT US</a>
                </li>
                <li>
                  <a href="https://www.4montnait.com/">CONTACT</a>
                </li>
              </ul>
            </Col>

            <Col className="black-2" sm={6}>
              <a href="https://www.4montnait.com/">
                {' '}
                <img
                  src="https://icon-library.net/images/facebook-icon-black-and-white/facebook-icon-black-and-white-8.jpg"
                  alt="facebook"
                />{' '}
              </a>

              <a href="https://www.4montnait.com/">
                <img
                  src="https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png"
                  alt="instagram"
                />
              </a>
            </Col>
            <Col className="black-3" sm={12}>
              <p>© 2019 4montnait</p>
            </Col>
          </Row>
          <Row>
            <Col className="header-2">
              <h1>DAILY BASICS</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="navigation">
              <Navbar>
                <Nav className="nav-bar">
                  <Nav.Link className="nav-item">MUSIC</Nav.Link>
                  <span>/</span>
                  <Nav.Link className="nav-item">ARTS</Nav.Link>
                  <span>/</span>

                  <Nav.Link className="nav-item">DESIGN</Nav.Link>
                  <span>/</span>

                  <Nav.Link className="nav-item">WORHT IT</Nav.Link>
                </Nav>
              </Navbar>
            </Col>
          </Row>

          <Row className="filter-row">
            <Col className="img-mix filter-book">
              <img
                src="http://www.laurenhakmiller.com/wp-content/uploads/2019/01/9.jpg"
                alt="Book"
              />
              <h1>
                Lorem ipsum
                <br /> dolor sit amet
              </h1>
            </Col>
            <Col className="img-mix filter-colorful">
              <img src={picture} alt="Colorful-Art" />
              <h1>
                Lorem ipsum
                <br /> dolor sit amet
              </h1>
            </Col>
          </Row>
          <Row className="filter-row">
            <Col className="img-mix 	filter-error">
              <img src={picture2} alt="Error-Art" />
              <h1>
                Lorem ipsum
                <br /> dolor sit amet
              </h1>
            </Col>
          </Row>

          <Row className="filter-row">
            <Col className="img-mix filter-skull">
              <img src={skull} alt="Skull-Art" />
              <h1>
                Lorem ipsum
                <br /> dolor sit amet
              </h1>
            </Col>
            <Col className="img-mix filter-moon">
              <img src={moon} alt="Moon-Art" />
              <h1>
                Lorem ipsum
                <br /> dolor sit amet
              </h1>
            </Col>
          </Row>
          <Row className="filter-row">
            <Col className="img-mix filter-skulpt">
              <img src={skulpt} alt="Skulpt-Art" />
              <h1>
                Lorem ipsum
                <br /> dolor sit amet
              </h1>
            </Col>
          </Row>

          <Row>
            <Col className="lip-image">
              <img
                src="https://www.4montnait.com/wp-content/uploads/2019/02/lippen.jpg"
                alt="Lips"
              />
              <ButtonToolbar className="btn-rotate">
                <Button className="btn-load">LOAD</Button>
                <Button className="btn-more">MORE</Button>
              </ButtonToolbar>
            </Col>
          </Row>

          <Row className="black">
            <Col className="black-1" sm={6}>
              <ul>
                <li>
                  <a href="https://www.4montnait.com/">MARKETING</a>
                </li>
                <li>
                  <a href="https://www.4montnait.com/">CONCEPTION</a>
                </li>
                <li>
                  <a href="https://www.4montnait.com/">PRODUCTION</a>
                </li>
                <li>
                  <a href="https://www.4montnait.com/">ABOUT US</a>
                </li>
                <li>
                  <a href="https://www.4montnait.com/">CONTACT</a>
                </li>
              </ul>
            </Col>

            <Col className="black-2" sm={6}>
              <a href="https://www.4montnait.com/">
                {' '}
                <img
                  src="https://icon-library.net/images/facebook-icon-black-and-white/facebook-icon-black-and-white-8.jpg"
                  alt="facebook"
                />{' '}
              </a>

              <a href="https://www.4montnait.com/">
                <img
                  src="https://i.pinimg.com/originals/63/9b/3d/639b3dafb544d6f061fcddd2d6686ddb.png"
                  alt="instagram"
                />
              </a>
            </Col>
            <Col className="black-3" sm={12}>
              <p>© 2019 4montnait</p>
            </Col>
          </Row>
          <Row className="carousel-row">
            <Col className="carousel">
              <Col lg={3} className="carousel-gutter">
                <ButtonToolbar className="btn">
                  <Button />
                </ButtonToolbar>
                <p>Previous</p>
              </Col>
              <Col className="carousel-gutter">
                <img src={book} alt="Book_art" className="img-carousel" />
              </Col>
              <Col className="carousel-gutter">
                <ButtonToolbar className="btn-2 btn">
                  <Button />
                </ButtonToolbar>
              </Col>
            </Col>
          </Row>
          <Row>
            <Col className="boldheader">
              <h1>
                Lorem ipsum
                <br /> dolor sit amet
              </h1>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio
                  <br />
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio
                  <br />
                </p>
                <div className="black-text">
                  <p>
                    <span>
                      consectetuer adipiscing elit, sed diam nonummy nibh
                      euismod tinciduntut ut laoreet
                    </span>
                  </p>
                  <br />
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio
                  <br />
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="last-p">
              <p>
                If you found this interesting, give others the
                <br /> opportunity to read it
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <ButtonToolbar>
                <Button className="btn-8">COPY LINK</Button>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row>
            <Col>
              <ButtonToolbar>
                <Button className="btn-9">
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=example.org"
                    target="_blank"
                  >
                    SHARE ON FB
                  </a>
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
          <Row>
            <Col className="navi">
              <Navbar>
                <Nav className="nav-bar">
                  <Nav.Link className="nav-item">DAILY BASICS</Nav.Link>
                  <span>/</span>
                  <Nav.Link className="nav-item">MUSIC</Nav.Link>
                  <span>/</span>
                  <Nav.Link className="nav-item">ARTS</Nav.Link>
                  <span>/</span>

                  <Nav.Link className="nav-item">DESIGN</Nav.Link>
                  <span>/</span>

                  <Nav.Link className="nav-item">WORHT IT</Nav.Link>
                </Nav>
              </Navbar>
            </Col>
          </Row>
          <Row>
            <Col className="footer">
              <p>© 2019 4montnait</p>
            </Col>
          </Row>
        </div>
     
    )
  }
}

