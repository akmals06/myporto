import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, FolderGit2, Wrench, BookOpen, Award, User, ArrowRight, CornerDownLeft } from 'lucide-react';
import { buildSearchIndex, searchNotes, type SearchCategory, type SearchResult } from '../utils/searchEngine';
import './SearchModal.css';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES: { id: SearchCategory; label: string; icon: React.ReactNode }[] = [
  { id: 'all', label: 'All Notes', icon: null },
  { id: 'project', label: 'Projects', icon: <FolderGit2 size={13} /> },
  { id: 'skill', label: 'Tech Stack', icon: <Wrench size={13} /> },
  { id: 'research', label: 'Research', icon: <BookOpen size={13} /> },
  { id: 'certificate', label: 'Certs', icon: <Award size={13} /> },
  { id: 'bio', label: 'Bio / Notes', icon: <User size={13} /> },
];

const POPULAR_SEARCHES = ['Warung Sembako', 'JIKSI', 'Next.js', 'SOC Analyst', 'Flutter', 'Prisma', 'EOQ'];

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<SearchCategory>('all');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Initialize search index once
  const searchIndex = useMemo(() => buildSearchIndex(), []);

  // Compute live search results based on query and category filter
  const results: SearchResult[] = useMemo(() => {
    return searchNotes(searchIndex, query, category);
  }, [searchIndex, query, category]);

  // Reset selected index when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [results]);

  // Focus input on open and lock body scroll
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [isOpen]);

  // Handle item navigation & selection
  const handleSelectResult = (result: SearchResult) => {
    onClose();

    const targetSection = document.getElementById(result.item.linkId);
    if (targetSection) {
      const yOffset = -76;
      const y = targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });

      // If target element exists, apply brief scrapbook pulse
      if (result.item.targetId) {
        setTimeout(() => {
          const el = document.getElementById(result.item.targetId!);
          if (el) {
            el.classList.add('search-target-pulse');
            setTimeout(() => el.classList.remove('search-target-pulse'), 2500);
          }
        }, 350);
      }
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev + 1) % results.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (results.length > 0 ? (prev - 1 + results.length) % results.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelectResult(results[selectedIndex]);
      }
    }
  };

  // Keep selected card in view during keyboard navigation
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector<HTMLElement>('.search-result-card.selected');
      if (activeEl) {
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="search-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Search Portfolio Notes"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="search-modal-container" onKeyDown={handleKeyDown}>
        {/* Masking Tape Accent */}
        <div className="search-washi-tape" aria-hidden="true" />

        {/* Search Header */}
        <div className="search-modal-header">
          <div className="search-input-wrapper">
            <Search className="search-input-icon" size={18} />
            <input
              ref={inputRef}
              type="text"
              className="search-input-field"
              placeholder="Search projects, skills, research papers, notes..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search query"
            />
            {query && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setQuery('')}
                aria-label="Clear search query"
              >
                <X size={16} />
              </button>
            )}
            <span className="search-esc-badge" aria-hidden="true">
              ESC
            </span>
          </div>

          {/* Category Chips (Google Keep Facet Filters) */}
          <div className="search-categories-bar" role="tablist" aria-label="Search Categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={category === cat.id}
                className={`search-category-chip ${category === cat.id ? 'active' : ''}`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Status Bar */}
        <div className="search-status-bar">
          <span>
            {query.trim()
              ? `Found ${results.length} note${results.length === 1 ? '' : 's'} matching "${query}"`
              : `Showing ${results.length} recommended notes`}
          </span>
          <span>Google Keep Multi-Token Match</span>
        </div>

        {/* Search Results List */}
        <div ref={listRef} className="search-results-list" role="listbox">
          {results.length > 0 ? (
            results.map((result, idx) => (
              <div
                key={result.item.id}
                role="option"
                aria-selected={selectedIndex === idx}
                className={`search-result-card ${selectedIndex === idx ? 'selected' : ''}`}
                onClick={() => handleSelectResult(result)}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className="search-card-top">
                  <span
                    className="search-card-badge"
                    style={{ backgroundColor: `${result.item.accentColor || '#58bceb'}33` }}
                  >
                    {result.item.metaBadge || result.item.categoryLabel}
                  </span>
                  <span className="search-card-meta">
                    Jump to #{result.item.linkId} <ArrowRight size={11} />
                  </span>
                </div>

                <h4
                  className="search-card-title"
                  dangerouslySetInnerHTML={{ __html: result.highlightedTitle }}
                />

                <p
                  className="search-card-snippet"
                  dangerouslySetInnerHTML={{ __html: result.highlightedSnippet }}
                />

                {result.item.tags && result.item.tags.length > 0 && (
                  <div className="search-card-tags">
                    {result.item.tags.slice(0, 5).map((tag) => {
                      const isMatched = result.matchedTags.includes(tag);
                      return (
                        <span
                          key={tag}
                          className={`search-tag-pill ${isMatched ? 'matched' : ''}`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="search-empty-state">
              <BookOpen className="search-empty-doodle" />
              <h4 className="search-empty-title">No Notes Found</h4>
              <p className="search-empty-text">
                No scrapbook notes matched "<strong>{query}</strong>" in{' '}
                {category === 'all' ? 'any category' : category}.
              </p>
              <div className="search-suggestions-chips">
                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)' }}>Try searching:</span>
                {POPULAR_SEARCHES.map((term) => (
                  <button
                    key={term}
                    type="button"
                    className="search-suggest-chip"
                    onClick={() => {
                      setQuery(term);
                      setCategory('all');
                      inputRef.current?.focus();
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Shortcuts */}
        <div className="search-modal-footer">
          <div className="search-shortcuts-guide">
            <div className="search-shortcut-item">
              <span className="search-kbd-key">↑</span>
              <span className="search-kbd-key">↓</span>
              <span>Navigate</span>
            </div>
            <div className="search-shortcut-item">
              <span className="search-kbd-key">
                <CornerDownLeft size={10} style={{ display: 'inline', verticalAlign: 'middle' }} /> ↵
              </span>
              <span>Jump to Section</span>
            </div>
            <div className="search-shortcut-item">
              <span className="search-kbd-key">esc</span>
              <span>Close</span>
            </div>
          </div>
          <div className="search-branding">
            <span>SCRAPBOOK NOTES SEARCH</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
