import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Mahmoud Mamdoh — Data Engineer & Data Platform Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'linear-gradient(145deg, #050508 0%, #0c1220 45%, #0a1628 100%)',
          fontFamily: 'system-ui, sans-serif',
          color: '#f4f4f5'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: '#22d3ee'
            }}
          />
          <span style={{ fontSize: 22, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#67e8f9' }}>
            Data Engineer · Cairo
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 900 }}>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            I don&apos;t just move data — I move meaning.
          </div>
          <div style={{ fontSize: 26, lineHeight: 1.45, color: '#a1a1aa' }}>
            Kafka → Spark / dbt → lakehouse & dashboards · Telecom · Ecommerce
          </div>
        </div>
        <div style={{ display: 'flex', gap: 48, fontSize: 22, color: '#d4d4d8' }}>
          <span>
            <strong style={{ color: '#fff', fontSize: 36 }}>25+</strong> pipelines
          </span>
          <span>
            <strong style={{ color: '#fff', fontSize: 36 }}>18</strong> dashboards
          </span>
          <span>
            <strong style={{ color: '#fff', fontSize: 36 }}>99.5%</strong> SLA focus
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
