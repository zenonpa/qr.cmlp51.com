import React, { useState, useMemo, useRef, useEffect } from "react"
import personasData from "../data/personas.json"
import "../styles/placa.scss"

const LEMA_RELIGIOSO = `SEÑOR, AUN NO SOMOS, LO QUE QUEREMOS SER, NO SOMOS LO QUE DEBEMOS SER,
NI SOMOS, LO QUE VAMOS A SER, PERO GRACIAS SEÑOR, POR NO SER, LO QUE ANTES ERAMOS!`

const LEMA_FINAL = "POR LA GLORIA DE LOS LEONCIOPRADINOS DE AYER, HOY Y SIEMPRE"
const FECHA = "La Perla - Callao, 20 de Diciembre de 2025"

function splitIntoColumns(arr, cols = 3) {
  const out = Array.from({ length: cols }, () => [])
  arr.forEach((item, i) => out[i % cols].push(item))
  return out
}

function PlacaNombreItem({ item }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const hasFoto = item.foto && String(item.foto).trim() !== ""
  const hasLines = Array.isArray(item.lines) && item.lines.length > 0

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside, { passive: true })
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [open])

  return (
    <div
      ref={containerRef}
      className={`placa-nombre-item placa-nombre-item--hoverable ${open ? "popover-open" : ""}`}
      onClick={() => setOpen(!open)}
      onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
      role="button"
      tabIndex={0}
    >
      {item.title} {item.fallecido && (<img src="/cruz.png" alt="Fallecido" className="placa-icono-fallecido" />)}
      <div
        className="placa-nombre-item-popover"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Detalle"
      >
        <div className="placa-nombre-item-titulo">
          {item.title}
          {item.fallecido && (
            <img src="/cruz.png" alt="Fallecido" className="placa-icono-fallecido-detail" />
          )}
        </div>
        {hasFoto && (
          <img
            src={item.foto}
            alt={item.title}
            className="placa-nombre-item-img"
          />
        )}
        {hasLines &&
          item.lines.map((line, i) => (
            <div key={i} className="placa-nombre-item-line">
              {line.includes("http://") || line.includes("https://") ? (
                <a href={line} target="_blank" rel="noopener noreferrer">
                  Link de contacto
                </a>
              ) : (
                line
              )}
            </div>
          ))}
      </div>
    </div>
  )
}

export default function PlacaSection() {
  const [filter, setFilter] = useState("")

  const columns = useMemo(() => {
    const sorted = [...personasData].sort(
      (a, b) => Number(a.id) - Number(b.id)
    )
    const filtered = filter.trim()
      ? sorted.filter((p) =>
          p.title.toLowerCase().includes(filter.trim().toLowerCase())
        )
      : sorted
    return splitIntoColumns(filtered, 3)
  }, [filter])

  return (
    <section className="placa-section" aria-label="Placa Promoción LI">
      <div className="placa-page-wrap">


        <div className="placa-container">
          <div className="placa-header-logos">
            <img src="/cmlp.png" alt="Escudo CMLP" className="placa-escudo placa-escudo-img" />
            
            <div className="placa-header-center">
              <h1 className="placa-title">
                COLEGIO MILITAR &quot;LEONCIO PRADO&quot;
              </h1>
              <h2 className="placa-subtitle">
                PROMOCIÓN LI &quot;LA MEJOR&quot;
              </h2>
              <div className="placa-subtitulo">
                S.O. P.N.P. &quot;GIUSEPPE CARLOTTO SOTO&quot;
                <br />
                1995 - 1997
              </div>
            </div>
            <img src="/ejercito.png" alt="Ejército del Perú" className="placa-escudo placa-escudo-img" />
          </div>

          <div className="placa-lema-religioso">{LEMA_RELIGIOSO}</div>

          <div className="placa-filtro-wrap">
            <input
              type="search"
              className="placa-filtro"
              placeholder="Buscar persona..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              aria-label="Buscar persona en la lista"
            />
          </div>

          <div className="placa-nombres-grid">
            {columns.map((col, colIndex) => (
              <div key={colIndex} className="placa-columna">
                {col.map((item) => (
                  <PlacaNombreItem key={item.id} item={item} />
                ))}
              </div>
            ))}
          </div>

          <footer className="placa-footer">
            <div className="placa-lema-final">{LEMA_FINAL}</div>
            <div className="placa-fecha">{FECHA}</div>
          </footer>
        </div>
      </div>
    </section>
  )
}
