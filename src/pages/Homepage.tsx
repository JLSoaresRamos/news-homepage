import Header from "../components/Header";
import Highlight  from "../components/Highlight";
import News from "../components/News";
import Top from "../components/Top";

import articlesData  from "../data/articlesData";
import topArticlesData from "../data/topArticlesData";
import "./homepage.scss"

export default function Homepage() {
    return(
        <main className="main-wrapper">
            <Header />
            <Highlight />
            <News articles={articlesData}  />
            <Top articles={topArticlesData}/>
        </main>
    )
}