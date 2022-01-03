interface IReplaceHtml {
  url: string;
  template: string;
  render: Function;
}

export async function replaceHtml({ url, template, render }: IReplaceHtml) {
  const html = await render(url);

  return template.replace(`<!--ssr-outlet-->`, html);
}
