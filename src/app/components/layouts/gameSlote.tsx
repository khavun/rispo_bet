import React from 'react';
import { Container } from '@mui/material';
import { WidgetAbout } from '../layouts/widgetAbout';

const GameSlote: React.FC = () => {
  const slotGameData = [
    { name: 'Microgaming', logo: 'https://cdn.rek8k8.cloud/SLOT%20%2B%20CASINO/MICROGAMING.png' },
    { name: 'Pragmatic Slot', logo: 'https://cdn.rek8k8.cloud/SLOT%20%2B%20CASINO/PRAGMATIC%20SLOT.png' },
    { name: 'IDN Slot', logo: 'https://cdn.rek8k8.cloud/SLOT%20%2B%20CASINO/IDN%20SLOT.png' },
    { name: 'Habanero', logo: 'https://cdn.rek8k8.cloud/SLOT%20%2B%20CASINO/HABANERO.png' },
    { name: 'No Limit City', logo: 'https://cdn.rek8k8.cloud/SLOT%20%2B%20CASINO/NO%20LIMIT%20CITY.png' },
    { name: 'PG Soft Slot', logo: 'https://cdn.rek8k8.cloud/SLOT%20%2B%20CASINO/PG%20SOFT%20SLOT.png' },
    { name: 'PS', logo: 'https://cdn.rek8k8.cloud/SLOT%20%2B%20CASINO/PS.png' },
  ];

  const gifUrl = 'https://cdn.linkadsku.xyz/ICON%20RP%20FOOTER/gif%20slot1.gif';

  return (
    <Container>
      <WidgetAbout slotGameData={slotGameData} gifUrl={gifUrl} />
    </Container>
  );
};

export default GameSlote;
