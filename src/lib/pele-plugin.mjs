import { render } from 'pele'

const escapeAttribute = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const named = (svg, name) =>
  svg.replace(
    '<svg',
    `<svg aria-label="${escapeAttribute(name)}"`,
  )

const diagram = (node) => {
  let result

  try {
    result = render(node.value)
  } catch (error) {
    throw new Error(
      `Mermaid diagram failed to render: ${error.message}\n\n${node.value}`,
    )
  }

  const name = node.meta?.trim() || `${result.type} diagram`

  return `<figure class="diagram">${named(result.svg, name)}</figure>`
}

export const pelePlugin = {
  name: 'pele-mermaid',
  code(node, ctx) {
    if (node.lang !== 'mermaid') return

    ctx.replaceNode(node, { rawHtml: diagram(node) })
  },
}
