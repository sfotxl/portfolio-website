import React from 'react';

import { Card, Col, Row, Container } from 'reactstrap';

import SocialLinks from '../components/SocialLinks';
import Image from 'next/image';

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className='section-lg bg-gradient-info shadow-lg border-0'>
      <Container className=''>
        <div className='p-2'>
          <Row className=''>
            <Col className='order-lg-2' lg='4'>
              <img
                src={prof.avatar_url}
                style={{ width: '200px' }}
                alt=''
                className='rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4'
              />
            </Col>
            <Col lg='8' className='order-lg-1'>
              <h2 className='text-white'>Reach out to me!</h2>
              <p className='lead text-white mt-3'>
                Want to discuss a project or just want to say hi? My inbox is
                open to all. You can also find me on social media below.
              </p>
              <p className='text-white mt-3'>{prof.bio}</p>
              <div className='my-3 icon-shape bg-gradient-white shadow rounded text-info'>
                <i className='ni ni-pin-3 text-info mr-2' />
                {prof.location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
