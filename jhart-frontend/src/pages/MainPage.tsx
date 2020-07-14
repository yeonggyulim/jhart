import React from 'react';
import { Carousel } from 'react-bootstrap';
import main_banner_0 from '../images/main_banner_0.jpeg';
import { Header, Footer } from '../components';
import { HeaderContainer } from '../containers';

const MainPage = () => {
	return (
		<>
			<HeaderContainer />
			<div className="outer-layout main">
				<div className="inner-layout">
					<Carousel>
						<Carousel.Item>
							<img
								className="d-block w-100"
								// src="holder.js/800x400?text=First slide&bg=373940"
								src={main_banner_0}
								alt="First slide"
							/>
							{/* <Carousel.Caption>
              <h3>전흥공예 회사 사진</h3>
              <p></p>
            </Carousel.Caption> */}
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								// src="holder.js/800x400?text=Second slide&bg=282c34"
								src={main_banner_0}
								alt="Third slide"
							/>
							{/* <Carousel.Caption>
              <h3>전흥공예</h3>
              <p></p>
            </Carousel.Caption> */}
						</Carousel.Item>
						<Carousel.Item>
							<img
								className="d-block w-100"
								// src="holder.js/800x400?text=Third slide&bg=20232a"
								src={main_banner_0}
								alt="Third slide"
							/>
							{/* <Carousel.Caption>
              <h3>전흥공예</h3>
              <p></p>
            </Carousel.Caption> */}
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default MainPage;
