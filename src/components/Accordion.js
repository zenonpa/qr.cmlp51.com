import React, { useState } from "react"
import styled from "styled-components"
import personasData from "../data/personas.json"

const TituloNombre = styled.div`
  font-weight: bold;
`

const AccordionWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 12px;
  overflow: hidden;
`

const AccordionItem = styled.div`
  border-bottom: 1px solid #e5e5e5;
`

const AccordionHeader = styled.div`
  padding: 16px;
  font-size: 1.2rem;
  font-weight: bold;
  background: #f7f7f7;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AccordionContent = styled.div`
  max-height: ${({ open }) => (open ? "2000px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${({ open }) => (open ? "16px" : "0 16px")};
  @media (max-width: 600px) {
    padding: ${({ open }) => (open ? "0" : "0")};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
`

const GridItem = styled.div`
  background: #fafafa;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Line = styled.div`
  margin-bottom: 6px;
  font-size: 0.95rem;
`

function SectionBlock({ open, onToggle, index, label, items }) {
  return (
    <AccordionItem>
      <AccordionHeader onClick={() => onToggle(index)}>
        {label}
        <span>{open ? "−" : "+"}</span>
      </AccordionHeader>
      <AccordionContent open={open}>
        <Grid>
          {items.map((item) => (
            <GridItem key={item.id}>
              <TituloNombre>{item.title}</TituloNombre>
              <img
                src={item.foto}
                alt={item.title}
                style={{ width: "30%", borderRadius: "8px" }}
              />
              {item.lines.map((line, i) => (
                <Line key={i}>
                  {line.includes("http://") || line.includes("https://") ? (
                    <a href={line} target="_blank" rel="noopener noreferrer">
                      Link de contacto
                    </a>
                  ) : (
                    line
                  )}
                </Line>
              ))}
            </GridItem>
          ))}
        </Grid>
      </AccordionContent>
    </AccordionItem>
  )
}

const SECTIONS = [
  { key: 1, label: "1era Sección" },
  { key: 2, label: "2da Sección" },
  { key: 3, label: "3ra Sección" },
  { key: 4, label: "4ta Sección" },
  { key: 5, label: "5ta Sección" },
  { key: 6, label: "6ta Sección" },
  { key: 7, label: "7ma Sección" },
  { key: 8, label: "8va Sección" },
  { key: 9, label: "9na Sección" },
  { key: 10, label: "10ma Sección" },
]

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <AccordionWrapper>
      {SECTIONS.map(({ key, label }, i) => (
        <SectionBlock
          key={key}
          open={openIndex === i}
          onToggle={handleToggle}
          index={i}
          label={label}
          items={personasData.filter((item) => item.section === key)}
        />
      ))}
    </AccordionWrapper>
  )
}
