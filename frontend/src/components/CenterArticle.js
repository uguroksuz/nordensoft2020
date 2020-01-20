import BlockContent from "@sanity/block-content-to-react"
import React from "react"
import styled from "styled-components"
import { fontScale, media, padding, width } from "./vars"

// const Headline = styled.h1`
//   box-sizing: border-box;
//   font-weight: 800;
//   font-size: ${fontScale.title3.size};
//   line-height: ${fontScale.title3.lineHeight};
//   text-align: center;
//   padding: 0 ${padding.m};
//   margin: 0 auto ${padding.m};
//   max-width: ${width.m};

//   @media (min-width: ${media.s.min}) {
//     font-size: ${fontScale.title2.size};
//     line-height: ${fontScale.title2.lineHeight};
//     padding: 0 ${padding.l};
//   }

//   @media (min-width: ${media.m.min}) {
//     font-size: ${fontScale.title1.size};
//     line-height: ${fontScale.title1.lineHeight};
//     padding: 0 ${padding.xl};
//   }
// `

const Intro = styled.div`
  font-size: ${fontScale.large.size};
  line-height: ${fontScale.large.lineHeight};
  text-align: center;
  max-width: ${width.s};
  margin: 0 auto ${padding.m};
  padding: 0 ${padding.m};

  @media (min-width: ${media.m.min}) {
    padding: 0 ${padding.xl};
    font-size: ${fontScale.title3.size};
    line-height: ${fontScale.title3.lineHeight};
  }
`

const PublishedAt = styled.div`
  font-size: ${fontScale.small.size};
  line-height: ${fontScale.small.lineHeight};
  text-align: center;
  margin: 0 0 ${padding.l};
  opacity: 0.7;

  @media (min-width: ${media.m.min}) {
    margin: 0 0 ${padding.xl};
  }
`

const MainImage = styled.figure`
  max-width: ${width.m};
  padding: 0;
  margin: 0 auto ${padding.l};

  div {
    position: relative;
    padding-bottom: calc(1 / 2 * 100%);
    overflow: hidden;
  }

  div > img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: ${media.m.min}) {
    margin-bottom: ${padding.xl};
  }
`
function MainMedia(media) {
  switch (media.type) {
    case "image":
      return (
        <MainImage>
          <div>
            <img src={media.src} alt={media.alt} />
          </div>
        </MainImage>
      )
    default:
      return null
  }
}

const CenterArticle = ({
  headline,
  imageSrc,
  introBlockContent,
  publishedAt,
  media,
  blockContent,
  color
}) => (
    <article className="image-block" style={{ background: color }}>
      <div className="container text-center pt-5">
        <h1 className="mb-5">{headline}</h1>
        {imageSrc != null ? <img alt={'nordensoft'} src={imageSrc} className="mb-3" /> : null}
        {introBlockContent && (
          <Intro>
            <BlockContent blocks={introBlockContent} />
          </Intro>
        )}
        {publishedAt && <PublishedAt>{publishedAt}</PublishedAt>}
        {media && <MainMedia {...media} />}
        <div>{blockContent && <BlockContent blocks={blockContent} />}</div>
        {publishedAt && <PublishedAt>{publishedAt}</PublishedAt>}
      </div>
    </article>
  )

export default CenterArticle
