import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowLeft, ArrowRight, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Paper } from '../components/Paper';
import { proyek } from '../data/site';
import type { Proyek } from '../data/site';
import { Modal } from '../components/Modal';
import { PaperClip, StarDoodle, GlobeDoodle, CurvedArrow, LightbulbDoodle } from '../components/Doodles';

export function Projects() {
  const track = useRef<HTMLDivElement>(null);
  const [dipilih, set_dipilih] = useState<Proyek | null>(null);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!track.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    scrollLeftRef.current = track.current.scrollLeft;
    hasDraggedRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !track.current) return;
    const delta = e.clientX - startXRef.current;
    if (Math.abs(delta) > 8) {
      hasDraggedRef.current = true;
      track.current.scrollLeft = scrollLeftRef.current - delta;
    }
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
    setTimeout(() => {
      hasDraggedRef.current = false;
    }, 60);
  };

  const handleCardClick = (item: Proyek) => {
    if (hasDraggedRef.current) return;
    set_dipilih(item);
  };

  const geser = (arah: number) => {
    const el = track.current;
    if (el) {
      const scrollAmount = arah * 320;
      gsap.to(el, {
        scrollLeft: el.scrollLeft + scrollAmount,
        duration: 0.45,
        ease: 'power2.out',
      });
    }
  };

  return (
    <Paper id="projects" warna="#58bceb" above="#f4efe6" seed={102}>
      <div className="projects-grid page-width">
        {/* Left Column: Heading, Annotation, CTA */}
        <div className="projects-intro">
          <span className="eyebrow">03. PROJECTS ⟶</span>
          <div className="projects-heading-wrap relative">
            <h2>
              MY<br />
              PROJECTS
            </h2>
            <div className="absolute top-1 right-2" aria-hidden="true">
              <LightbulbDoodle width={32} height={42} color="#161615" />
            </div>
          </div>
          <div className="projects-hand-wrap" aria-hidden="true">
            <CurvedArrow width={44} height={24} className="rotate-45" color="#161615" />
            <p className="hand-small">
              TURNING IDEAS<br />
              INTO REAL PRODUCTS.
            </p>
          </div>
          <div className="projects-cta-wrap">
            <a
              href="https://github.com/akmals06"
              target="_blank"
              rel="noreferrer"
              className="button-solid"
            >
              VIEW ALL PROJECTS <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Right Area: Carousel */}
        <div className="project-area">
          {/* Carousel Arrows */}
          <div className="carousel-actions">
            <button
              type="button"
              aria-label="Previous projects"
              onClick={() => geser(-1)}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next projects"
              onClick={() => geser(1)}
            >
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Scrollable Track with Mouse Drag and Touch Swipe */}
          <div
            id="project-list"
            className="project-track"
            ref={track}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {proyek.map((item, i) => (
              <article
                className={`project-card project-card-${i}`}
                key={item.id}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${item.judul}`}
                onClick={() => handleCardClick(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    set_dipilih(item);
                  }
                }}
              >
                <div className="project-open">
                  {/* FEATURED Tape on Card 0 */}
                  {i === 0 && (
                    <span className="featured-tape" aria-hidden="true">
                      FEATURED
                    </span>
                  )}

                  {/* Badges for other cards */}
                  {item.id === 'ours' && (
                    <div className="project-ai-badge" aria-hidden="true">
                      <StarDoodle className="w-8 h-8" color="#f2a0bd" filled={true} />
                      <span>APP</span>
                    </div>
                  )}

                  {item.id === 'lumio' && (
                    <div className="project-ai-badge" aria-hidden="true">
                      <StarDoodle className="w-8 h-8" color="#cff24d" filled={true} />
                      <span>APP</span>
                    </div>
                  )}

                  {(item.id === 'saungriung' || item.id === 'uccd') && (
                    <div className="project-globe-badge" aria-hidden="true">
                      <GlobeDoodle className="w-6 h-6" color="#161615" />
                    </div>
                  )}

                  {/* Project Screenshot Frame */}
                  <div className="project-img-frame">
                    <img
                      src={item.gambar}
                      alt={item.judul}
                    />
                  </div>

                  {/* Handwritten Project Title */}
                  <span className="project-info">
                    <strong>{item.judul}</strong>
                  </span>

                  {/* Stack Badges */}
                  <span className="project-tags">
                    {item.stack.map((s) => (
                      <em key={s}>{s}</em>
                    ))}
                  </span>

                  {/* Code Badge on Card 1 */}
                  {i === 0 && (
                    <div className="project-code-badge" aria-hidden="true">
                      &lt;/&gt;
                    </div>
                  )}

                  {/* Corner View Arrow */}
                  <div className="project-corner-arrow">
                    <ArrowUpRight size={16} />
                  </div>

                  {/* Paperclip on Card 1 */}
                  {i === 0 && (
                    <div className="project-paperclip" aria-hidden="true">
                      <PaperClip className="w-6 h-10" color="#161615" />
                    </div>
                  )}
                </div>
              </article>
            ))}

            {/* Green Star Doodle on right side */}
            <div className="self-center flex-shrink-0 px-2" aria-hidden="true">
              <StarDoodle className="w-10 h-10" color="#cff24d" filled={true} />
            </div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {dipilih && (
        <Modal title={dipilih.judul} onClose={() => set_dipilih(null)}>
          <div className="modal-image-wrap">
            <img
              className="modal-image"
              src={dipilih.gambar}
              alt={dipilih.judul}
            />
          </div>
          <span className="eyebrow">PROJECT OVERVIEW</span>
          <h2>{dipilih.judul}</h2>
          <p>{dipilih.deskripsi}</p>
          <div className="modal-tags">
            {dipilih.stack.map((s) => (
              <span key={s} className="modal-tag">
                {s}
              </span>
            ))}
          </div>
          <div className="modal-links">
            {dipilih.github && (
              <a href={dipilih.github} target="_blank" rel="noreferrer">
                View on GitHub <ExternalLink size={16} />
              </a>
            )}
            {dipilih.demo && (
              <a href={dipilih.demo} target="_blank" rel="noreferrer">
                Live Demo <ExternalLink size={16} />
              </a>
            )}
            {dipilih.paper && (
              <a href={dipilih.paper} target="_blank" rel="noreferrer" className="button-solid !py-2 !px-3 !text-xs">
                JIKSI Research Paper (DOI) <ExternalLink size={14} />
              </a>
            )}
          </div>
        </Modal>
      )}
    </Paper>
  );
}

export default Projects;
