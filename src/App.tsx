import { MagicMotion } from 'react-magic-motion'
import { Form } from './components/Form'
import { Loader } from './components/Loader'
import { useDownload } from './hooks/useDownload'
import { FormatName } from './types'
import { useSeo } from './hooks/useSeo'
import { Link } from 'react-router-dom'

const App = () => {
  const { data, loading, error, handleDownload } = useDownload()

  useSeo({ titleProp: data?.title })

  return (
    <MagicMotion>
      <main>
        {data?.info && data.info.length > 0 && <iframe src={`${data?.url}`} title='video' />}
        <Form handleDownload={handleDownload} />
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
          {error && (
            <h2 className='error'>
              Ha ocurrido un error, por favor intente de nuevo más tarde.
              <span>{error}</span>
            </h2>
          )}
        </section>
      </main>
    </MagicMotion>
  )
}

export default App
