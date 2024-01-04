import { MagicMotion } from 'react-magic-motion'
import { Form } from './components/Form'
import { Loader } from './components/Loader'
import { useDownload } from './hooks/useDownload'
import { FormatName } from './types'
import { useSeo } from './hooks/useSeo'
import { Link } from 'react-router-dom'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const App = () => {
  const { data, loading, error, handleDownload } = useDownload()

  useSeo({ titleProp: data?.title })

  const handleReload = () => {
    window.location.reload()
  }

  return (
    <MagicMotion>
      <main>
        {data?.info && data.info.length > 0 && (
          <LiteYouTubeEmbed
            id={data?.url}
            title='video'
            wrapperClass='iframe-container'
            playerClass='iframe-player'
            iframeClass='iframe'
          />
        )}
        <Form handleDownload={handleDownload} loading={loading} />
        <section className='section-info'>
          {loading ? <Loader /> : null}
          <ul>
            {!loading &&
              data?.info?.map((formatName: FormatName, index: number) => (
                <li key={index}>
                  <Link to={formatName.url} target='_blank' download>
                    {formatName.mimeType.split(';')[0] + ' '}
                    {formatName.hasVideo ? formatName.height + 'p ' : ''}
                  </Link>
                </li>
              ))}
          </ul>
          {!loading && error && (
            <h2 className='error'>
              Ha ocurrido un error, por favor intente de nuevo más tarde.
              <span>{error}</span>
              <button className='btn' onClick={handleReload}>Recargar</button>
            </h2>
          )}
        </section>
      </main>
    </MagicMotion>
  )
}

export default App
