const demoContainer = require("./markdown/markdown-it.conf");
const fs = require("fs");

module.exports = {
    title: "<%= systemName %>",
    description: "Documentation for the <%= systemName %> Design System",
    base: "/",
    head: [
        [
            "meta",
            {
                name: "robots",
                content: "noindex"
            }
        ]
    ],
    markdown: {
        config: md => {
            md.use(...demoContainer);
        }
    },
    ga: null,
    chainWebpack: config => {
        const jsRule = config.module.rule("js");
        jsRule.use("babel-loader").tap(options => {
            options.sourceType = 'unambiguous'
            options.plugins = options.plugins || []
            options.plugins.push('@babel/plugin-syntax-dynamic-import')
            return options
        });
    },
    themeConfig: {
        // GitHub config
        repo: "<%= repoUrl %>",
        docsDir: "docs",
        editLinks: true,
        editLinkText: "Help us improve this page!",

        nav: [
            {
                text: "Home",
                link: "/"
            },
            // {
            //     text: "Guides",
            //     link: "/guide/"
            // },
            {
                text: "Components",
                link: "/components/"
            }
        ],
        sidebar: {
            // "/guide/": genGuideSidebar(),
            "/components/": genComponentSidebar()
        }
    }
};

function genGuideSidebar() {
    return [
        {
            title: "Guides",
            collapsable: false,
            children: [
                "",
            ]
        }
    ];
}

function genComponentSidebar() {
    const componentFolders = "./components/";
    const files = fs.readdirSync(componentFolders).map(
        file =>
            file
                .replace(".md", "")
                .replace("README", "")
                .replace(/icon$/, "icon/") // folders need to end with slash
    );
    return [
        {
            title: "Components",
            collapsable: false,
            children: files
        }
    ];
}
