const container = require('markdown-it-container')
const md = require('markdown-it')();
const striptags = require('./strip-tags');

const demoContainerPlugin = [container, 'demo', {
    validate: function (params) {
        return params.trim().match(/^demo\s*(.*)$/);
    },

    render: function (tokens, idx) {
        const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
        if (tokens[idx].nesting === 1) {
            const description = (m && m.length > 1) ? m[1] : '';
            const originalContent = tokens[idx + 1].content;
            const content = `<body>${originalContent}</body>`
            const remaining = striptags.strip(content, ['script', 'style'])
            const html = striptags.fetch(remaining, 'body')
            const descriptionHTML = description ?
                md.render(description) :
                '';

            return `<demo-block class="demo-box">
                      <div class="source" slot="source">${html}</div>
                      ${descriptionHTML}
                      <div class="highlight" slot="highlight">`;
        }
        return '</div></demo-block>\n';
    }
}]

module.exports = demoContainerPlugin