import { ContentfulCollection } from 'contentful';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPages } from '../actions';
import { Page } from '../types';
import Layout from './Layout';

type Props = {
  pages?: ContentfulCollection<Page>;
  fetchPages?: Function;
};

type State = {
  pages: Array<Page>;
};

function Home({ fetchPages, pages }: Props) {
  useEffect(() => {
    fetchPages && fetchPages();
  }, []);

  if (!pages?.items?.length) return null;

  return (
    <Layout className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl">Pages</h1>
      {pages.items.map(({ sys, fields }) => (
        <div key={sys.id}>{fields.title}</div>
      ))}
    </Layout>
  );
}

function mapStateToProps(state: State) {
  return {
    ...state.pages,
  };
}

export default connect(mapStateToProps, { fetchPages })(Home);
