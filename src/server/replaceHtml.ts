interface IReplaceHtml {
  url: string;
  template: string;
  render: Function;
}

export async function replaceHtml({ url, template, render }: IReplaceHtml) {
  return template.replace(`<!--ssr-outlet-->`, await render(url));
}
