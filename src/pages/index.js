import React, { useState } from "react";
import { StaticImage } from 'gatsby-plugin-image'
import styled from "styled-components";
import personasData from "../data/personas.json";

const isMobile = typeof window !== "undefined" && window.innerWidth < 600;

const pageStyles = {
  color: "#232129",
  /*padding: isMobile ? 0 : 96,*/
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",


}

const TituloNombre = styled.div`
  font-weight: bold;
`;


// Accordion Container
const AccordionWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 12px;
  overflow: hidden;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;

const AccordionHeader = styled.div`
  padding: 16px;
  font-size: 1.2rem;
  font-weight: bold;
  background: #f7f7f7;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionContent = styled.div`
  max-height: ${({ open }) => (open ? "2000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${({ open }) => (open ? "16px" : "0 16px")};

/* Mobile fix: sin padding y altura correcta */
  @media (max-width: 600px) {
  padding: ${({ open }) => (open ? "0" : "0")};
  }  
`;

// Grid for 2 Columns x 5 Items
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`;

const GridItem = styled.div`
  background: #fafafa;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Line = styled.div`
  margin-bottom: 6px;
  font-size: 0.95rem;
`;

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };



const items1 = personasData.filter(item => item.section === 1);
const items2 = personasData.filter(item => item.section === 2);
const items3 = personasData.filter(item => item.section === 3);
const items4 = personasData.filter(item => item.section === 4);
const items5 = personasData.filter(item => item.section === 5);
const items6 = personasData.filter(item => item.section === 6);
const items7 = personasData.filter(item => item.section === 7);
const items8 = personasData.filter(item => item.section === 8);
const items9 = personasData.filter(item => item.section === 9);
const items10 = personasData.filter(item => item.section === 10);

  return (
    <AccordionWrapper>
      <AccordionItem>
        <AccordionHeader onClick={() => handleToggle(0)}>
          1era Sección
          <span>{openIndex === 0 ? "−" : "+"}</span>
        </AccordionHeader>

        <AccordionContent open={openIndex === 0}>
          <Grid>
            {items1.map((item) => (
            <GridItem key={item.id}>
            <TituloNombre>{item.title}</TituloNombre>

            {item.lines.map((line, i) => (
            <Line key={i}>{line}</Line>
            ))}
            </GridItem>
            ))}
          </Grid>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader onClick={() => handleToggle(1)}>
          2da Sección
          <span>{openIndex === 1 ? "−" : "+"}</span>
        </AccordionHeader>

        <AccordionContent open={openIndex === 1}>
          <Grid>
            {items2.map((item) => (
            <GridItem key={item.id}>
            <TituloNombre>{item.title}</TituloNombre>

            {item.lines.map((line, i) => (
            <Line key={i}>{line}</Line>
            ))}
            </GridItem>
            ))}
          </Grid>
        </AccordionContent>
      </AccordionItem>      


      <AccordionItem>
        <AccordionHeader onClick={() => handleToggle(2)}>
          3ra Sección
          <span>{openIndex === 2 ? "−" : "+"}</span>
        </AccordionHeader>

        <AccordionContent open={openIndex === 2}>
          <Grid>
            {items3.map((item) => (
            <GridItem key={item.id}>
            <TituloNombre>{item.title}</TituloNombre>

            {item.lines.map((line, i) => (
            <Line key={i}>{line}</Line>
            ))}
            </GridItem>
            ))}
          </Grid>
        </AccordionContent>
      </AccordionItem>      

      <AccordionItem>
        <AccordionHeader onClick={() => handleToggle(3)}>
          4ta Sección
          <span>{openIndex === 3 ? "−" : "+"}</span>
        </AccordionHeader>

        <AccordionContent open={openIndex === 3}>
          <Grid>
            {items4.map((item) => (
            <GridItem key={item.id}>
            <TituloNombre>{item.title}</TituloNombre>

            {item.lines.map((line, i) => (
            <Line key={i}>{line}</Line>
            ))}
            </GridItem>
            ))}
          </Grid>
        </AccordionContent>
      </AccordionItem>      

      <AccordionItem>
        <AccordionHeader onClick={() => handleToggle(4)}>
          5ta Sección
          <span>{openIndex === 4 ? "−" : "+"}</span>
        </AccordionHeader>

        <AccordionContent open={openIndex === 4}>
          <Grid>
            {items5.map((item) => (
            <GridItem key={item.id}>
            <TituloNombre>{item.title}</TituloNombre>

            {item.lines.map((line, i) => (
            <Line key={i}>{line}</Line>
            ))}
            </GridItem>
            ))}
          </Grid>
        </AccordionContent>
      </AccordionItem>      

      <AccordionItem>
        <AccordionHeader onClick={() => handleToggle(5)}>
          6ta Sección
          <span>{openIndex === 5 ? "−" : "+"}</span>
        </AccordionHeader>

        <AccordionContent open={openIndex === 5}>
          <Grid>
            {items6.map((item) => (
            <GridItem key={item.id}>
            <TituloNombre>{item.title}</TituloNombre>

            {item.lines.map((line, i) => (
            <Line key={i}>{line}</Line>
            ))}
            </GridItem>
            ))}
          </Grid>
        </AccordionContent>
      </AccordionItem>      


      <AccordionItem>
        <AccordionHeader onClick={() => handleToggle(6)}>
          7ma Sección
          <span>{openIndex === 6 ? "−" : "+"}</span>
        </AccordionHeader>

        <AccordionContent open={openIndex === 6}>
          <Grid>
            {items7.map((item) => (
            <GridItem key={item.id}>
            <TituloNombre>{item.title}</TituloNombre>

            {item.lines.map((line, i) => (
            <Line key={i}>{line}</Line>
            ))}
            </GridItem>
            ))}
          </Grid>
        </AccordionContent>
      </AccordionItem>      


      <AccordionItem>
        <AccordionHeader onClick={() => handleToggle(7)}>
          8va Sección
          <span>{openIndex === 7 ? "−" : "+"}</span>
        </AccordionHeader>

        <AccordionContent open={openIndex === 7}>
          <Grid>
            {items8.map((item) => (
            <GridItem key={item.id}>
            <TituloNombre>{item.title}</TituloNombre>

            {item.lines.map((line, i) => (
            <Line key={i}>{line}</Line>
            ))}
            </GridItem>
            ))}
          </Grid>
        </AccordionContent>
      </AccordionItem>      


      <AccordionItem>
        <AccordionHeader onClick={() => handleToggle(8)}>
          9na Sección
          <span>{openIndex === 8 ? "−" : "+"}</span>
        </AccordionHeader>

        <AccordionContent open={openIndex === 8}>
          <Grid>
            {items9.map((item) => (
            <GridItem key={item.id}>
            <TituloNombre>{item.title}</TituloNombre>

            {item.lines.map((line, i) => (
            <Line key={i}>{line}</Line>
            ))}
            </GridItem>
            ))}
          </Grid>
        </AccordionContent>
      </AccordionItem>      


      <AccordionItem>
        <AccordionHeader onClick={() => handleToggle(9)}>
          10ma Sección
          <span>{openIndex === 9 ? "−" : "+"}</span>
        </AccordionHeader>

        <AccordionContent open={openIndex === 9}>
          <Grid>
            {items10.map((item) => (
            <GridItem key={item.id}>
            <TituloNombre>{item.title}</TituloNombre>

            {item.lines.map((line, i) => (
            <Line key={i}>{line}</Line>
            ))}
            </GridItem>
            ))}
          </Grid>
        </AccordionContent>
      </AccordionItem>      


    </AccordionWrapper>
  );
};





const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Accordion/>
        <StaticImage
          src="https://cmlp51.s3.us-east-1.amazonaws.com/PlacaCMLP51.png"
          alt="Descripción de la imagen"
          placeholder="blurred"
        />
        
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Cmlp51.com</title>
