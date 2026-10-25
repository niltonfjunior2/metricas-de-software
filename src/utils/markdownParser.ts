import { marked } from 'marked';
import DOMPurify from 'dompurify';

export interface AccordionSection {
  id: string;
  title: string;
  html: string;
}

export interface ParsedMarkdownModule {
  metadata: Record<string, string>;
  leadTextHtml?: string;
  sections: AccordionSection[];
}

export function parseMarkdownToAccordion(rawMarkdown: string): ParsedMarkdownModule {
  let content = rawMarkdown.trim();
  const metadata: Record<string, string> = {};

  // Parse YAML Frontmatter
  if (content.startsWith('---')) {
    const endFrontmatterIndex = content.indexOf('---', 3);
    if (endFrontmatterIndex !== -1) {
      const frontmatterRaw = content.slice(3, endFrontmatterIndex).trim();
      frontmatterRaw.split('\n').forEach((line) => {
        const colonIndex = line.indexOf(':');
        if (colonIndex !== -1) {
          const key = line.slice(0, colonIndex).trim();
          const value = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
          metadata[key] = value;
        }
      });
      content = content.slice(endFrontmatterIndex + 3).trim();
    }
  }

  // Split by H2 headers (## Header)
  const lines = content.split('\n');
  const sections: AccordionSection[] = [];
  let leadTextLines: string[] = [];
  let currentTitle = '';
  let currentContentLines: string[] = [];
  let sectionIndex = 1;

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentTitle) {
        const rawSectionHtml = marked.parse(currentContentLines.join('\n')) as string;
        sections.push({
          id: `sec-${sectionIndex}`,
          title: currentTitle,
          html: DOMPurify.sanitize(rawSectionHtml),
        });
        sectionIndex++;
        currentContentLines = [];
      } else {
        // Any text before the first ## is lead text
        leadTextLines = currentContentLines;
        currentContentLines = [];
      }
      currentTitle = line.replace('## ', '').trim();
    } else {
      currentContentLines.push(line);
    }
  }

  // Push the final section
  if (currentTitle) {
    const rawSectionHtml = marked.parse(currentContentLines.join('\n')) as string;
    sections.push({
      id: `sec-${sectionIndex}`,
      title: currentTitle,
      html: DOMPurify.sanitize(rawSectionHtml),
    });
  }

  let leadTextHtml: string | undefined;
  if (leadTextLines.length > 0) {
    const rawLeadHtml = marked.parse(leadTextLines.join('\n')) as string;
    leadTextHtml = DOMPurify.sanitize(rawLeadHtml);
  }

  return {
    metadata,
    leadTextHtml,
    sections,
  };
}
