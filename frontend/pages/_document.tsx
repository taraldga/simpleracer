import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <div className="d-flex justify-content-between align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <Link href="/"><a className="text-dark"><h5 className="my-0 mr-md-auto font-weight-normal">SimpleRacer</h5></a></Link>
            <div className="d-flex justify-content-between align-items-center">
              <nav className="my-2 my-md-0 mr-md-3">
                <Link href="/races">
                  <a className="p-2 text-dark mx-4">Alle hendelser</a>
                </Link>
              </nav>
              <Link href="/races/new">
                <a className="btn btn-outline-primary">Ny hendelse</a>
              </Link>
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
