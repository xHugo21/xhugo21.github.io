import { render } from 'pele'

const diagram = (source) => {
  try {
    return `<figure class="diagram">${render(source).svg}</figure>`
  } catch (error) {
    throw new Error(
      `Mermaid diagram failed to render: ${error.message}\n\n${source}`,
    )
  }
}

export const pelePlugin = {
  name: 'pele-mermaid',
  code(node, ctx) {
    if (node.lang !== 'mermaid') return

    ctx.replaceNode(node, { rawHtml: diagram(node.value) })
  },
}
