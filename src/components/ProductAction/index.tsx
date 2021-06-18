import React from 'react';

import { Container, Condition, Row, HeartIcon, DispatchTag, PriceCard,
  InstallmentsInfo, StockStatus, PriceRow, MethodCard, CheckIcon, Actions, Button, Benefits, ShieldIcon } from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>New</Condition>

      <Row>
        <h1>Unknown brand white t-shirt</h1>
        <HeartIcon />
      </Row>

      <DispatchTag>Sending normally</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>in 3x de R$11,67</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Available stock</StockStatus>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className="title">Free shipping</span>
          <span className="details">Lorem ipsum benefit</span>
          <a href="https://github.com/vinicxxl" className="more">
            See more options
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Buy now</Button>
        <Button>Add to Cart</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon>
            <p>
            Guaranteed purchase, receive the product you are waiting for or we will
            refund your money.
            </p>
          </ShieldIcon>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
