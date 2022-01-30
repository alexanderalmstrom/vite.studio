import { Sys, Metadata } from 'contentful';

export type Page = {
  fields: PageFields;
  metadata: Metadata;
  sys: Sys;
};

export type PageFields = {
  title: string;
};
