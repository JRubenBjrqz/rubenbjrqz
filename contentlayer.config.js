import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
}

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `projects/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
            required: true,
        },
        image: {
            type: 'string',
            required: false,
        },
        cover: {
            type: 'string',
            required: true,
        },
        keywords: {
            type: 'string',
            required: false,
        },
        tags: {
            type: 'list',
            of: {
                type: 'string',
                required: true
            }
        },
    },
    computedFields
}))

export default makeSource({
    contentDirPath: 'content',
    documentTypes: [Project],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ['anchor'],
                        ariaLabel: 'Link to section'
                    },
                },
            ],
        ],
    }
})

// TODO: pnpm install shiki?