import React from 'react';

import { Container, Title, LocationCard, LocationIcon, ReputationCard, ReputationThermomete,
ReputationRow, SupportIcon, ClockIcon, More } from './styles';

const SellerInfo: React.FC = () => {
  return (
    <Container>
     <Title>Seller information</Title>

     <LocationCard>
       <LocationIcon />

       <div>
         <p>Localization</p>
         <strong>Curitiba, Paraná</strong>
       </div>
     </LocationCard>

     <ReputationCard>
       <ReputationThermomete>
         <li />
         <li />
         <li />
         <li />
         <li className="active" />
       </ReputationThermomete>

       <ReputationRow>
         <div>
           <strong>561</strong>
           <span>Sales in the last 4 months</span>
         </div>

         <div>
           <strong><SupportIcon /></strong>
           <span>Provide a good service</span>
         </div>

         <div>
           <strong><ClockIcon /></strong>
           <span>Sales in the last 4 months</span>
         </div>
       </ReputationRow>
     </ReputationCard>

     <More href="#">See more seller data</More>
    </Container>
  );
};

export default SellerInfo;
