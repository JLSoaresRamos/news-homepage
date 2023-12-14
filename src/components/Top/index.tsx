// top.tsx
import './top.scss';
import { IArticle } from '../News';

export interface ITopArticle extends IArticle {
  img: string;
}

interface ITopNews {
  articles: ITopArticle[];
}

export default function Top({ articles }: ITopNews) {
  return (
    <aside className="top">
      {articles?.length > 0 ? (
       <>
          {articles.map((article, index) => (
            <a href="#" key={index} className='articles' >
              <article className='article'>
                  <figure>
                      <img src={article.img} alt={article.title} />
                  </figure>
                  <section>
                      <p className='classification-number'>{index + 1}</p>
                      <h2 className='title'>{article.title}</h2>
                      <p className='description'>{article.description}</p>
                  </section>
              </article>
            </a>
          ))}
       </>
      )
      :
      <></>
      }
    </aside>
  );
}
