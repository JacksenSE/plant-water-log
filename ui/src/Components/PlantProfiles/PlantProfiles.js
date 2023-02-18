import React from 'react';
import pothos from "./Pothos.jpg";
import monstera from "./Monstera.jpg";
import zzplant from "./ZZPlant.jpg";
import pilea from "./Pilea.jpg";
import anthurium from "./Anthurium.jpg";
import palm from "./Palm.jpg";


function whatever(){
  fetch('/api/v1/plants')
  .then((response) => response.json())
  .then((data) => console.log(data));
};
function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          backgroundColor='#333'
          borderRadius={4}
          color="#eee"
          minHeight={200}
          padding={12}
          width={300}
          style={{ marginRight: '16px' }}
        
        >
          <button onClick={whatever}>Whatever</button>
          <Box>
          
            <img src={pothos} style={{ width: '20%' }} />
          </Box>
          <Box>Pothos</Box>
          <Box>
            About me: Trailing vine with heart-shaped 
            leaves that tolerates low light and minimal watering.
          </Box>
          <Box></Box>
        </Box>

        <Box
          backgroundColor='#333'
          borderRadius={4}
          color="#eee"
          minHeight={200}
          padding={12}
          width={300}
          style={{ marginRight: '16px' }}
        >
          <Box>
            <img src={monstera} style={{ width: '20%' }} />
          </Box>
          <Box>Monstera</Box>
          <Box>
            About me: A low-growing 
            perennial vine that thrives indoors in bright areas</Box>
          <Box></Box>
        </Box>

        <Box
          backgroundColor='#333'
          borderRadius={4}
          color="#eee"
          minHeight={200}
          padding={12}
          width={300}
          style={{ marginRight: '16px' }}
        >
          <Box>
            <img src={pilea} style={{ width: '20%' }} />
          </Box>
          <Box>Pilea</Box>
          <Box>
            About me: Grow well in dry conditions, 
            can adapt to low light areas.
          </Box>
          <Box></Box>
        </Box>

        
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          backgroundColor='#333'
          borderRadius={4}
          color="#eee"
          minHeight={200}
          padding={12}
          width={300}
          style={{ marginRight: '16px' }}
        >
          <Box>
            <img src={anthurium} style={{ width: '20%' }} />
          </Box>
          <Box>Anthurium</Box>
          <Box>
            About me: Love bright indirect light and they have low water needs.
          </Box>
          <Box></Box>
        </Box>

        <Box
          backgroundColor='#333'
          borderRadius={4}
          color="#eee"
          minHeight={200}
          padding={12}
          width={300}
          style={{ marginRight: '16px' }}
        >
          <Box>
            <img src={palm} style={{ width: '20%' }} />
          </Box>
          <Box>Palm Tree</Box>
          <Box>
            About me: Thrive in humid and warm environments. 
          </Box>
          <Box></Box>
        </Box>

        <Box
          backgroundColor='#333'
          borderRadius={4}
          color="#eee"
          minHeight={200}
          padding={12}
          width={300}
          style={{ marginRight: '16px' }}
        >
          <Box>
            <img src={zzplant} style={{ width: '20%' }} />
          </Box>
          <Box>ZZPlant</Box>
          <Box>
            About me: Expect to water more often in 
            brighter light and less often in lower light.
          </Box>
          <Box></Box>
        </Box>
      </div>
    </div>
  )
}
