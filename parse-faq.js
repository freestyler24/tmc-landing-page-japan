import fs from 'fs';

const markdownContent = fs.readFileSync('My Resources/Japan 2026 Tour - Frequently Asked Questions.md', 'utf8');

const parseFAQs = (md) => {
    const lines = md.split('\n');
    let currentCategory = '';
    const faqs = [];
    let currentQuestion = '';
    let currentAnswer = [];

    for (const line of lines) {
        if (line.startsWith('## ') && !line.startsWith('## Table') && !line.startsWith('## Quick')) {
            currentCategory = line.replace('## ', '').trim();
        } else if (line.startsWith('### ')) {
            if (currentQuestion) {
                faqs.push({
                    category: currentCategory,
                    question: currentQuestion,
                    answer: currentAnswer.join('\n').trim()
                });
            }
            // Remove the "number. " prefix (e.g., "1. How does...")
            const qLine = line.replace('### ', '').trim();
            currentQuestion = qLine.replace(/^\d+\.\s*/, '');
            currentAnswer = [];
        } else if (currentQuestion && !line.startsWith('---') && line.trim() !== '' || currentAnswer.length > 0) {
            // keep collecting answer lines
            if (!line.startsWith('---')) {
                currentAnswer.push(line.trim());
            } else if (line.startsWith('---') && currentAnswer.length === 0) {
                // skip
            } else if (line.startsWith('---')) {
                // We reached the end of the answer
                faqs.push({
                    category: currentCategory,
                    question: currentQuestion,
                    answer: currentAnswer.join('\n').trim()
                });
                currentQuestion = '';
                currentAnswer = [];
            }
        }
    }
    if (currentQuestion) {
        faqs.push({
            category: currentCategory,
            question: currentQuestion,
            answer: currentAnswer.join('\n').trim()
        });
    }

    return faqs;
};

const processed = parseFAQs(markdownContent);
fs.writeFileSync('src/data-faq.json', JSON.stringify(processed, null, 2));
