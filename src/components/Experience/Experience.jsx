import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Experience = () => {
  const { experience } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Experience" />
          {experience.map((experience) => {
            const { logo, company, position, info, projects, id } = experience;

            return (
              <Row key={id} className="justify-content-center">
                <Col lg={9} col-lg-offset={3} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text text-center">
                      <h3 className="project-wrapper__text-title">{company || 'Company Name'}</h3>
                      <div>
                        <p>
                          {position ||
                            'Software Developer'}
                        </p>
                        <p className="mb-4">{info || ''}</p>
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
