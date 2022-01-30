import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ContentfulCollection } from 'contentful';
import { ContentfulPage } from '../types';
import { fetchPages } from '../actions';
import Layout from './Layout';

type Props = {
  pages?: ContentfulCollection<ContentfulPage>;
  fetchPages?: Function;
};

type State = {
  pages: ContentfulCollection<ContentfulPage>;
};

function Home({ fetchPages, pages }: Props) {
  useEffect(() => {
    fetchPages && fetchPages();
  }, []);

  if (!pages?.items?.length) return null;

  return (
    <Layout className="h-screen flex flex-col justify-center items-center">
      {pages.items.map(({ sys, fields }) => (
        <Link to={`/page/${fields.slug}`} key={sys.id}>
          {fields.title}
        </Link>
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
