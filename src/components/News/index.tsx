// news.tsx
import './news.scss';

export interface IArticle {
  title: string;
  description: string;
}

export interface INews {
  articles: IArticle[];
}

export default function News({ articles }: INews): JSX.Element {
  return (
    <aside className="news">
      <h1>New</h1>
      {articles?.length > 0 ? (
        <ul className='articles'>
          {articles.map((article, index) => (
            <a key={index} href='#' className='article'>
              <article>
                <h2 className='title'>{article.title}</h2>
                <p className='description'>{article.description}</p>
              </article>
              {index < articles.length - 1 && <hr className='divider' />}
            </a>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </aside>
  );
}
