import { useState } from 'react';
import { ExternalLink, FileText, BookOpen, Sparkles } from 'lucide-react';
import { Paper } from '../components/Paper';
import { publikasi_ilmiah } from '../data/site';
import { Modal } from '../components/Modal';
import { RibbonMedalDoodle } from '../components/Doodles';

export function Publication() {
  const [bacaAbstrak, setBacaAbstrak] = useState(false);

  return (
    <Paper id="publication" warna="#faf5eb" above="#58bceb" seed={133} className="paper-grid-section">
      <div className="publication-grid page-width">
        {/* Left Intro Column */}
        <div className="pub-intro">
          <span className="eyebrow">04. PUBLICATION ⟶</span>
          <div className="pub-heading-wrap relative">
            <h2>
              RESEARCH<br />
              &amp; PAPER
            </h2>
            <div className="absolute top-0 right-2" aria-hidden="true">
              <RibbonMedalDoodle width={32} height={44} color="#161615" />
            </div>
          </div>
          <div className="pub-badge-pill">
            <Sparkles size={14} className="text-[#e67e22]" />
            <span>SINTA 3 ACCREDITED</span>
          </div>
          <p className="pub-hand-note">
            ACADEMIC RESEARCH<br />
            MEETS REAL-WORLD CODE.
          </p>
        </div>

        {/* Right Feature Card */}
        <div className="pub-content">
          <div className="pub-feature-card">
            <span className="tape pub-tape" aria-hidden="true" />
            <div className="pub-card-grid">
              {/* Enlarged Journal Cover Polaroid Frame */}
              <div
                className="pub-cover-frame"
                onClick={() => setBacaAbstrak(true)}
                role="button"
                tabIndex={0}
                title="Click to view full publication details"
              >
                <span className="tape pub-polaroid-tape" aria-hidden="true" />
                <div className="pub-cover-img-wrap">
                  <img
                    src={publikasi_ilmiah.cover}
                    alt={publikasi_ilmiah.judul}
                    className="pub-cover-img"
                  />
                  <span className="pub-sinta-tag">SINTA 3</span>
                </div>
                <figcaption className="pub-cover-caption">
                  JIKSI • Vol. 14 No. 2 (2026)
                </figcaption>
              </div>

              {/* Research Meta & Info */}
              <div className="pub-info">
                <div className="pub-journal-meta">
                  <span className="pub-journal-name">{publikasi_ilmiah.jurnal}</span>
                  <span className="pub-journal-vol">{publikasi_ilmiah.volume} • {publikasi_ilmiah.issn}</span>
                </div>

                <h3 className="pub-title" onClick={() => setBacaAbstrak(true)}>
                  {publikasi_ilmiah.judul}
                </h3>

                <p className="pub-authors">
                  <strong>Penulis:</strong> {publikasi_ilmiah.authors}
                </p>

                <p className="pub-afiliasi">
                  {publikasi_ilmiah.afiliasi}
                </p>

                {/* Method Badges */}
                <div className="pub-methods">
                  {publikasi_ilmiah.metode.map((m) => (
                    <span key={m} className="pub-method-tag">{m}</span>
                  ))}
                </div>

                {/* Abstract Excerpt */}
                <p className="pub-abstract-snippet">
                  {publikasi_ilmiah.abstrak.slice(0, 220)}...{' '}
                  <button type="button" onClick={() => setBacaAbstrak(true)} className="pub-read-more">
                    Baca Abstrak Lengkap ⟶
                  </button>
                </p>

                {/* Action Links */}
                <div className="pub-actions">
                  <a
                    href={publikasi_ilmiah.link}
                    target="_blank"
                    rel="noreferrer"
                    className="button-solid !py-2.5 !px-4 !text-xs"
                  >
                    Buka DOI Paper <ExternalLink size={14} />
                  </a>
                  <a
                    href={publikasi_ilmiah.journalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="pub-outline-btn"
                  >
                    <BookOpen size={15} />
                    <span>Laman Jurnal</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setBacaAbstrak(true)}
                    className="pub-outline-btn"
                  >
                    <FileText size={15} />
                    <span>Detail &amp; Abstrak</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Publication Detail Modal */}
      {bacaAbstrak && (
        <Modal title={publikasi_ilmiah.judul} onClose={() => setBacaAbstrak(false)}>
          <div className="pub-modal-cover-wrap">
            <img
              src={publikasi_ilmiah.cover}
              alt={publikasi_ilmiah.judul}
              className="pub-modal-cover"
            />
          </div>
          <span className="eyebrow">{publikasi_ilmiah.badge}</span>
          <h2 className="!text-xl sm:!text-2xl">{publikasi_ilmiah.judul}</h2>
          
          <div className="pub-modal-meta-grid">
            <p><strong>Jurnal:</strong> {publikasi_ilmiah.jurnal} ({publikasi_ilmiah.volume})</p>
            <p><strong>Status:</strong> {publikasi_ilmiah.akreditasi}</p>
            <p><strong>DOI:</strong> <a href={publikasi_ilmiah.link} target="_blank" rel="noreferrer" className="underline">{publikasi_ilmiah.doi}</a></p>
            <p><strong>Penulis:</strong> {publikasi_ilmiah.authors}</p>
            <p><strong>Afiliasi:</strong> {publikasi_ilmiah.afiliasi}</p>
          </div>

          <div className="pub-modal-abstract">
            <h4 className="font-bold text-sm uppercase tracking-wide mb-2">Abstrak Penelitian</h4>
            <p className="text-xs sm:text-sm leading-relaxed text-ink/85">{publikasi_ilmiah.abstrak}</p>
          </div>

          <div className="pub-methods !mt-3">
            {publikasi_ilmiah.metode.map((m) => (
              <span key={m} className="pub-method-tag">{m}</span>
            ))}
          </div>

          <div className="modal-links !mt-5">
            <a
              href={publikasi_ilmiah.link}
              target="_blank"
              rel="noreferrer"
              className="button-solid !py-2.5 !px-4 !text-xs"
            >
              Kunjungi DOI Jurnal Resmi <ExternalLink size={14} />
            </a>
            <a
              href={publikasi_ilmiah.journalUrl}
              target="_blank"
              rel="noreferrer"
              className="button-icon-bordered !inline-flex !items-center !gap-2 !px-3 !py-2 !text-xs font-bold uppercase"
            >
              <BookOpen size={16} /> Laman JIKSI UNTAR
            </a>
          </div>
        </Modal>
      )}
    </Paper>
  );
}

export default Publication;
