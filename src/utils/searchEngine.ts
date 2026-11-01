import { proyek, sertifikat, publikasi_ilmiah, profil } from '../data/site';
import { SKILLS_DATA, SKILL_CATEGORIES } from '../data/skills';

export type SearchCategory = 'all' | 'project' | 'skill' | 'research' | 'certificate' | 'bio';

export interface SearchItem {
  id: string;
  category: 'project' | 'skill' | 'research' | 'certificate' | 'bio';
  categoryLabel: string;
  title: string;
  subtitle?: string;
  body: string;
  tags: string[];
  linkId: string; // Section ID to scroll to (e.g. 'projects', 'publication')
  targetId?: string; // Optional element id to flash/highlight
  url?: string;
  metaBadge?: string;
  accentColor?: string;
}

export interface SearchResult {
  item: SearchItem;
  score: number;
  highlightedTitle: string;
  highlightedSnippet: string;
  matchedTags: string[];
}

/**
 * Escapes characters for safe regular expression generation
 */
function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Escapes HTML entities to prevent injection
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Builds the comprehensive search index from all portfolio content
 */
export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  // 1. Projects
  proyek.forEach((p) => {
    items.push({
      id: `project-${p.id}`,
      category: 'project',
      categoryLabel: 'Project Note',
      title: p.judul,
      subtitle: p.subjudul,
      body: p.deskripsi,
      tags: p.stack,
      linkId: 'projects',
      targetId: `project-${p.id}`,
      url: p.demo || p.github,
      metaBadge: 'PROJECT',
      accentColor: '#58bceb',
    });
  });

  // 2. Publication / Academic Research
  items.push({
    id: publikasi_ilmiah.id,
    category: 'research',
    categoryLabel: 'Research Note',
    title: publikasi_ilmiah.judul,
    subtitle: `${publikasi_ilmiah.jurnal} • ${publikasi_ilmiah.volume} (${publikasi_ilmiah.akreditasi})`,
    body: `${publikasi_ilmiah.abstrak} Authors: ${publikasi_ilmiah.authors}. Methods: ${publikasi_ilmiah.metode.join(', ')}. DOI: ${publikasi_ilmiah.doi}`,
    tags: ['Research', 'JIKSI', 'SINTA 3', 'EOQ', 'FEFO', 'SCRUM', 'Inventory Management'],
    linkId: 'publication',
    targetId: 'publication',
    url: publikasi_ilmiah.link,
    metaBadge: 'SINTA 3 JIKSI',
    accentColor: '#cff24d',
  });

  // 3. Certificates & Awards
  sertifikat.forEach((c) => {
    items.push({
      id: `cert-${c.id}`,
      category: 'certificate',
      categoryLabel: 'Certificate Note',
      title: c.judul,
      subtitle: c.keterangan,
      body: `${c.deskripsi} Credential: ${c.credentialId || 'Verified'}`,
      tags: [c.badge, c.credentialId || '', 'Certification', 'Credential'].filter(Boolean),
      linkId: 'certificates',
      targetId: `cert-${c.id}`,
      url: c.link,
      metaBadge: c.badge,
      accentColor: '#f2a0bd',
    });
  });

  // 4. Skills (36 skills with category & practical projects)
  const categoryMap = new Map(SKILL_CATEGORIES.map((c) => [c.id, c]));
  SKILLS_DATA.forEach((s) => {
    const cat = categoryMap.get(s.category);
    items.push({
      id: `skill-${s.id}`,
      category: 'skill',
      categoryLabel: 'Tech Skill Note',
      title: s.name,
      subtitle: cat ? `${cat.name} (${cat.shortName})` : 'Technology',
      body: `${s.description || ''} Applied in projects: ${s.project || 'General development'}. ${cat?.tagline || ''}`,
      tags: [cat?.shortName || '', s.name, ...(s.project ? s.project.split(', ') : [])].filter(Boolean),
      linkId: 'skills',
      targetId: `skill-${s.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      metaBadge: cat?.shortName?.toUpperCase() || 'SKILL',
      accentColor: cat?.color || '#58bceb',
    });
  });

  // 5. Bio & Background Notes
  items.push(
    {
      id: 'bio-intro',
      category: 'bio',
      categoryLabel: 'About Note',
      title: `${profil.nama} — Profile Overview`,
      subtitle: profil.tag.replace('\n', ' '),
      body: `${profil.ringkasan} ${profil.bio_utama} ${profil.bio_lanjutan}`,
      tags: ['Informatics', 'UNTAR', 'DPM UNTAR', 'Diskominfotik DKI Jakarta', 'Full-Stack', 'Cybersecurity'],
      linkId: 'about',
      targetId: 'about',
      metaBadge: 'PROFILE',
      accentColor: '#f9a826',
    },
    {
      id: 'bio-contact',
      category: 'bio',
      categoryLabel: 'Contact Note',
      title: 'Get In Touch & Social Links',
      subtitle: `Email: ${profil.email} • WhatsApp: ${profil.phone}`,
      body: `Connect with Akmal on GitHub (${profil.github}), LinkedIn (${profil.linkedin}), and Instagram (${profil.instagram}). Open for full-stack and security engineering collaborations.`,
      tags: ['Contact', 'Email', 'GitHub', 'LinkedIn', 'Collaboration'],
      linkId: 'contact',
      targetId: 'contact',
      metaBadge: 'CONNECT',
      accentColor: '#60a5fa',
    }
  );

  return items;
}

/**
 * Highlights all occurrences of query tokens in text using <mark>
 */
export function highlightText(text: string, tokens: string[]): string {
  if (!text || tokens.length === 0) return escapeHtml(text);

  const cleanTokens = tokens
    .map((t) => t.trim())
    .filter((t) => t.length > 0)
    .map(escapeRegExp);

  if (cleanTokens.length === 0) return escapeHtml(text);

  const pattern = new RegExp(`(${cleanTokens.join('|')})`, 'gi');
  const escaped = escapeHtml(text);

  // Safely mark matches after HTML escaping
  return escaped.replace(pattern, '<mark class="search-highlight">$1</mark>');
}

/**
 * Generates a focused excerpt around the first matched term,
 * similar to Google Keep's snippet preview.
 */
export function extractExcerpt(text: string, tokens: string[], maxLength = 130): string {
  if (!text) return '';
  const cleanTokens = tokens.map((t) => t.trim().toLowerCase()).filter(Boolean);
  const lowerText = text.toLowerCase();

  let matchIndex = -1;
  let matchedLength = 0;

  for (const token of cleanTokens) {
    const idx = lowerText.indexOf(token);
    if (idx !== -1 && (matchIndex === -1 || idx < matchIndex)) {
      matchIndex = idx;
      matchedLength = token.length;
    }
  }

  // If no match found in body, show beginning
  if (matchIndex === -1) {
    const snippet = text.slice(0, maxLength).trim();
    return escapeHtml(snippet) + (text.length > maxLength ? '...' : '');
  }

  // Calculate centered window around match
  const half = Math.floor((maxLength - matchedLength) / 2);
  let start = Math.max(0, matchIndex - half);
  let end = Math.min(text.length, matchIndex + matchedLength + half);

  // Align to word boundaries
  if (start > 0) {
    const spaceIdx = text.indexOf(' ', start);
    if (spaceIdx !== -1 && spaceIdx < matchIndex) {
      start = spaceIdx + 1;
    }
  }
  if (end < text.length) {
    const spaceIdx = text.lastIndexOf(' ', end);
    if (spaceIdx !== -1 && spaceIdx > matchIndex + matchedLength) {
      end = spaceIdx;
    }
  }

  let excerpt = text.slice(start, end).trim();
  if (start > 0) excerpt = '...' + excerpt;
  if (end < text.length) excerpt = excerpt + '...';

  return highlightText(excerpt, tokens);
}

/**
 * Core Google Keep-style multi-token search with field weighting
 */
export function searchNotes(
  items: SearchItem[],
  query: string,
  categoryFilter: SearchCategory = 'all'
): SearchResult[] {
  const trimmed = query.trim().toLowerCase();

  // Filter by category facet if active
  const scopedItems =
    categoryFilter === 'all'
      ? items
      : items.filter((item) => item.category === categoryFilter);

  // If query is empty, return curated default notes
  if (!trimmed) {
    return scopedItems.slice(0, 8).map((item) => ({
      item,
      score: 1,
      highlightedTitle: escapeHtml(item.title),
      highlightedSnippet: escapeHtml(
        item.subtitle ? `${item.subtitle} — ${item.body.slice(0, 100)}...` : item.body.slice(0, 110) + '...'
      ),
      matchedTags: [],
    }));
  }

  const tokens = trimmed.split(/\s+/).filter(Boolean);
  const results: SearchResult[] = [];

  for (const item of scopedItems) {
    const titleLower = item.title.toLowerCase();
    const subtitleLower = (item.subtitle || '').toLowerCase();
    const bodyLower = item.body.toLowerCase();

    let score = 0;
    let tokensMatchedCount = 0;
    const matchedTags: string[] = [];

    // Exact full query matches (highest bonus)
    if (titleLower === trimmed) {
      score += 200;
    } else if (titleLower.startsWith(trimmed)) {
      score += 140;
    } else if (titleLower.includes(trimmed)) {
      score += 100;
    }

    if (subtitleLower.includes(trimmed)) {
      score += 50;
    }

    if (bodyLower.includes(trimmed)) {
      score += 40;
    }

    // Per-token matching (Google Keep multi-term AND / OR logic with weighting)
    for (const token of tokens) {
      let tokenMatched = false;

      // 1. Title token match
      if (titleLower.includes(token)) {
        score += titleLower.startsWith(token) ? 60 : 40;
        tokenMatched = true;
      }

      // 2. Tag token match
      for (const tag of item.tags) {
        const tLower = tag.toLowerCase();
        if (tLower === token) {
          score += 50;
          tokenMatched = true;
          if (!matchedTags.includes(tag)) matchedTags.push(tag);
        } else if (tLower.includes(token)) {
          score += 30;
          tokenMatched = true;
          if (!matchedTags.includes(tag)) matchedTags.push(tag);
        }
      }

      // 3. Subtitle match
      if (subtitleLower.includes(token)) {
        score += 20;
        tokenMatched = true;
      }

      // 4. Body match
      if (bodyLower.includes(token)) {
        score += 15;
        tokenMatched = true;
      }

      if (tokenMatched) {
        tokensMatchedCount++;
      }
    }

    // Require at least one token to match
    if (tokensMatchedCount > 0) {
      // Bonus for matching all search tokens (Google Keep precision)
      if (tokensMatchedCount === tokens.length) {
        score += 80;
      }

      const highlightedTitle = highlightText(item.title, tokens);
      const highlightedSnippet = extractExcerpt(
        item.subtitle ? `${item.subtitle} • ${item.body}` : item.body,
        tokens
      );

      results.push({
        item,
        score,
        highlightedTitle,
        highlightedSnippet,
        matchedTags,
      });
    }
  }

  // Sort by score descending, then title alphabetically
  return results.sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title));
}
