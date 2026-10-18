import { render } from 'pele'

const escapeAttribute = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const openTag = (svg) => svg.slice(0, svg.indexOf('>') + 1)

const labelled = (svg, name) => {
  const attributes = openTag(svg)
  const role = / role="/.test(attributes)
    ? attributes.replace(/ role="[^"]*"/, ' role="img"')
    : attributes.replace('<svg', '<svg role="img"')

  const named = role.replace(
    '<svg',
    `<svg aria-label="${escapeAttribute(name)}"`,
  )

  return named + svg.slice(openTag(svg).length)
}

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

  return `<figure class="diagram">${labelled(result.svg, name)}</figure>`
}

export const pelePlugin = {
  name: 'pele-mermaid',
  code(node, ctx) {
    if (node.lang !== 'mermaid') return

    ctx.replaceNode(node, { rawHtml: diagram(node) })
  },
}
