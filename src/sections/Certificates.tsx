import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Paper } from '../components/Paper';
import { sertifikat } from '../data/site';
import type { Penghargaan } from '../data/site';
import { Modal } from '../components/Modal';
import { ScribbleLine, RibbonMedalDoodle } from '../components/Doodles';

export function Certificates() {
  const [lihat, set_lihat] = useState<Penghargaan | null>(null);

  return (
    <Paper id="certificates" warna="#cff24d" above="#faf5eb" seed={167}>
      <div className="cert-grid page-width relative">
        {/* Left Column: Heading, Ribbon Medal, Scribble, Note */}
        <div className="cert-heading">
          <span className="eyebrow">05. CERTIFICATES ⟶</span>
          <div className="cert-title-wrap relative">
            <h2>
              CERTI-<br />
              FICATES
            </h2>
            <div className="absolute top-1 right-2" aria-hidden="true">
              <RibbonMedalDoodle width={34} height={46} color="#161615" />
            </div>
          </div>
          <div className="cert-scribble-wrap" aria-hidden="true">
            <ScribbleLine width={100} height={14} color="#161615" />
            <p className="hand-small">
              VALIDATED SKILLS &amp;<br />
              PROFESSIONAL CERTIFICATIONS.
            </p>
          </div>
        </div>

        {/* Right Area: 2 Dedicated Official Certificate Cards */}
        <div className="cert-list cert-list-two relative">
          {sertifikat.map((item, index) => (
            <button
              className={`cert-card cert-card-${index}`}
              key={item.id}
              onClick={() => set_lihat(item)}
              aria-label={`View details: ${item.judul}`}
            >
              {/* Card Washi Tape at Top Edge */}
              <span className="tape cert-tape" aria-hidden="true" />

              {/* Dedicated Top Badge Strip (Does not overlap certificate content) */}
              <div className="cert-top-badge">
                <span className="cert-badge-tag">{item.badge}</span>
              </div>

              {/* Certificate Document Frame - 100% full view, uncropped */}
              <div className="cert-art">
                <img
                  src={item.berkas}
                  alt={item.judul}
                  className="cert-img"
                />
              </div>

              <span className="cert-caption">
                <span className="cert-caption-text">
                  <strong>{item.judul}</strong>
                  <small>{item.keterangan}</small>
                </span>
                <span className="cert-arrow-icon" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </span>
              </span>
            </button>
          ))}
          {/* KEEP GROWING ↗ hand annotation */}
          <div className="cert-keep-growing" aria-hidden="true">
            <span>VERIFIED ✦</span>
          </div>
        </div>
      </div>

      {/* Modal for Certificate Detail */}
      {lihat && (
        <Modal title={lihat.judul} onClose={() => set_lihat(null)}>
          <div className="cert-modal-cover-wrap">
            <img
              className="modal-image cert-modal-img"
              src={lihat.berkas}
              alt={lihat.judul}
            />
          </div>
          <span className="eyebrow">{lihat.badge}</span>
          <h2>{lihat.judul}</h2>
          <p>{lihat.deskripsi}</p>
          {lihat.credentialId && (
            <p className="cert-modal-meta mb-1">
              <strong>Credential / No:</strong> {lihat.credentialId}
            </p>
          )}
          <p className="cert-modal-meta">
            <strong>Publisher / Date:</strong> {lihat.keterangan}
          </p>
        </Modal>
      )}
    </Paper>
  );
}

export default Certificates;
