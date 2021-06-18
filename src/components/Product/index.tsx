import React from 'react';

import tshirtImage from '../../assets/tshirt.png'
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import { Container, Row, Panel, Column, Gallery, Section, Descripion } from './styles';


const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="https://github.com/vinicxxl">Share</a>
        <a href="https://github.com/vinicxxl">Sell one like</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Warranty</h4>

    <div>
      <span>
        <p className="title">Purchase guaranteed by Vinicius Cardoso</p>
        <p className="description">Receive your waiting product or we will refund your money</p>
      </span>
      <span>
        <p className="title">Seller guarantee</p>
        <p className="description">No Warranty</p>
      </span>
    </div>

    <a href="https://github.com/vinicxxl">Learn more about warranty</a>
  </Section>
)

const Info = () => (
  <Descripion>
    <h2>Description</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed  do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Enim ut sem viverra    aliquet eget
      sit amet. Adipiscing bibendum est ultricies integer. Euismod elementum nisi quis
      eleifend quam adipiscing vitae. Cursus in hac habitasse platea   dictumst.
      <br />
      <br />
      Included items: <br />
      -Item 1 <br />
      -Item 2 <br />
      -Item 3 <br />
      -Item 4 <br />
      -Item 5 <br />
      <br />
      Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. In tellus
      integer  feugiat scelerisque  varius  morbi  enim  nunc faucibus. Imperdie  nulla
      malesuada   pellentesque  elit  eget gravida cum. Mus mauris vitae  ultricies leo
      integer. Aliquam  semet   tortor  consequat id. Nibh cras  pulvinar mattis  nunc.
      Porttitor eget dolor  morbi non  arcu risus quis varius. Neque vita  tempus  quam
      pellentesque. Ultrices vitae auctor eu augue  ut lectus arcu bibendum. Feugiat in
      fermentum   posuere  urna   nec.  Est  pellentesque elit   ullamcorper  dignissim.
    </p>
  </Descripion>
)

export default Product;
