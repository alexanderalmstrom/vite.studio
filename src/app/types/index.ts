import { Sys, Metadata } from 'contentful';

export type ContentfulPage = {
  fields: ContentfulPageFields;
  metadata: Metadata;
  sys: Sys;
};

export type ContentfulPageFields = {
  title: string;
  slug: string;
};
