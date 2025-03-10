import { useState } from 'react'
import Section from '../Section'
import { GalleryItem } from '../../pages/Home'
import { Item, Items, Action, Modal, ModalContent } from './styles'

import zelda from '../../assets/images/zelda.png'
import hogwarts from '../../assets/images/fundo_hogwarts.png'

import spiderman from '../../assets/images/spiderman.png'
import hogwarts from '../../assets/images/hogwarts.png'

import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import aranha from '../../assets/images/banner-homem-aranha.png'
import fecha from '../../assets/images/fechar.png'

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'image',
    url: aranha
  },

  {
    type: 'video',
    url: 'https://www.youtube.com/embed/qhlg9AhD-ig?si=8vvNnKu6osRGErhF'
  }
]

type Props = {
  defaultCover: string
  name: string
}
interface ModalState extends GalleryItem {
  inVisivel: boolean
}

const Gallery = ({ defaultCover, name }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    inVisivel: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }
  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }
  const closeModal = () => {
    setModal({
      inVisivel: false,
      type: 'image',
      url: ''
    })
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                closeModal()
              }}
            >
              <img
                src={getMediaCover(media)}
                alt={`midia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="clique para ampliar a midia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal className={modal.inVisivel ? 'visivel' : ''}>
        <ModalContent>
          <header>
            <h4>{name}</h4>
            <img
              src={fecha}
              alt="icone de fecha"
              onClick={() => {
                closeModal()
              }}
            />
          </header>
          {modal.type === 'image' ? (
            <img src={modal.url} />
          ) : (
            <iframe src={modal.url} />
          )}
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Gallery
