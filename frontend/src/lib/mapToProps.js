export function mapArticleToProps ({title, bodyRaw, color = null, customclass}) {
  let c = (color != null) ? color.hex : null;
  return {
    headline: title,
    introBlockContent: [],
    publishedAt: undefined,
    media: false,
    customclass: customclass,
    blockContent: bodyRaw,
    color: c,
  }
}
export function mapSliderToProps ({title, slides}) {
  return {
    headline: title,
    publishedAt: undefined,
    media: false,
    slides: slides,
  }
}
export function mapContactFormToProps ({title}) {
  return {
    headline: title,
  }
}
export function mapPriceTableToProps ({title}) {
  return {
    headline: title,
  }
}
export function mapSharedContactFormToProps ({title}) {
  return {
    headline: title,
  }
}
export function mapPersonsToProps ({title, contentRaw, customclass, addressTitle, addressRaw, members, nsContactForm}) {
  return {
    headline: title,
    publishedAt: undefined,
    media: false,
    blockContent: contentRaw,
    members: members,
    nsContactForm: nsContactForm,
    addressTitle:addressTitle,
    addressRaw: addressRaw,
    customclass: customclass,
  }
}
export function mapCustomersBlockToProps ({title, sections}){
  return{
    headline: title,
    sections: sections,
  }
}
export function mapTableSectionToProps ({title, description, customclass, myAwesomeTable}){
  return{
    headline: title,
    description: description,
    customclass: customclass,
    rows: myAwesomeTable.rows
  }
}
export function mapLeftImageArticleToProps ({title, bodyRaw, image = null}){
  let i = (image != null) ? image.asset.url : null;
  return{
    headline: title,
    blockContent: bodyRaw,
    imageSrc: i,
  }
}
export function mapRightImageArticleToProps ({title, bodyRaw, image = null}){
  let i = (image != null) ? image.asset.url : null;
  return{
    headline: title,
    blockContent: bodyRaw,
    imageSrc: i,    
  }
}
export function mapSinglePageHeaderToProps ({title, subtitle, url, buttontext, bodyRaw, image = null}){
  let i = (image != null) ? image.asset.url : null;
  return{
    headline: title,
    subtitle: subtitle,
    url: url,
    buttontext: buttontext,
    blockContent: bodyRaw,
    imageSrc: i,
  }
}
export function mapLetterDefinitionToProps ({title, bodyRaw, image = null}) {
  let i = (image != null) ? image.asset.url : null;
  return {
    headline: title,
    introBlockContent: [],
    publishedAt: undefined,
    media: false,
    blockContent: bodyRaw,
    imageSrc: i,
  }
}
export function mapDefinitionToProps ({title, bodyRaw, image = null}) {
  let i = (image != null) ? image.asset.url : null;
  return {
    headline: title,
    introBlockContent: [],
    publishedAt: undefined,
    media: false,
    blockContent: bodyRaw,
    imageSrc: i,
  }
}
export function mapPageHeaderToProps ({title, bodyRaw}) {
  return {
    headline: title,
    introBlockContent: [],
    publishedAt: undefined,
    media: false,
    blockContent: bodyRaw
  }
}
export function mapCenterArticleToProps ({title, bodyRaw, image = null}) {
  let i = (image != null) ? image.asset.url : null;
  return {
    headline: title,
    introBlockContent: [],
    publishedAt: undefined,
    media: true,
    blockContent: bodyRaw,
    imageSrc: i,
  }
}
export function mapCenterImageLayoutToProps ({title, bodyRaw, centerImage = null, leftFeatures = [], rightFeatures = []}) {
  let i = (centerImage != null) ? centerImage.asset.url : null;
  return {
    headline: title,
    introBlockContent: [],
    publishedAt: undefined,
    media: true,
    blockContent: bodyRaw,
    imageSrc: i,
    leftFeatures: (leftFeatures || []).map(feature => ({
      key: feature._id,
      title: feature.title,
      descriptionBlock: feature.descriptionRaw,
      illustration: feature.illustration
    })),
    rightFeatures: (rightFeatures || []).map(feature => ({
      key: feature._id,
      title: feature.title,
      descriptionBlock: feature.descriptionRaw,
      illustration: feature.illustration
    })),
  }
}

export function mapNavItemToProps ({_type, _key, title, internal, external, text, navItems = []}) {
  if (_type === 'navSection') {
    return {
      key: _key,
      title: title,
      items: (navItems || []).map(mapNavItemToProps)
    }
  }

  if (internal) {
    return {
      key: _key,
      internal: true,
      title: text,
      to: `/${internal.slug.current}/`
    }
  }

  return {
    key: _key,
    internal: false,
    title: text,
    to: external
  }
}

export function mapSharedNavigationToSiteNavProps ({navItems = []}) {
  return {
    menu: {
      items: (navItems || []).map(mapNavItemToProps)
    }
  }
}

export function mapSharedNavigationToSiteFooterProps ({navItems}) {
  return {
    items: (navItems || []).map(mapNavItemToProps)
  }
}

export function mapSharedFeatureCollectionToFeatureCollectionProps (data) {
  const { title, features = [] } = data
  return {
    headline: title,
    features: (features || []).map(feature => ({
      key: feature._id,
      title: feature.title,
      descriptionBlock: feature.descriptionRaw,
      illustration: feature.illustration
    })),
    _source: data
  }
}

export function mapSharedCasesCollectionProps (data) {
  const { title, bodyRaw, cases = [] } = data
  return {
    headline: title,
    blockContent: bodyRaw,
    cases: (cases || []).map(q => ({
      title: q.title,
      url: q.url,
      illustration: q.illustration
    })),
    _source: data
  }
}
export function mapSharedPlansCollectionProps (data) {
  const { title, plans = [] } = data
  return {
    headline: title,
    plans: (plans || []).map(q => ({
      title: q.title,
      url: q.url,
    })),
    _source: data
  }
}

export function mapSharedTableSectionToProps ({title, description, customclass, myAwesomeTable}){
  return{
    headline: title,
    description: description,
    customclass: customclass,
    rows: myAwesomeTable.rows
  }
}


export function mapSharedHeroToHeroProps ({ title, tagLineRaw, ctas = [] }) {
  return {
    headline: title,
    tagLineBlock: tagLineRaw,
    callToActions: (ctas || []).map(cta => ({
      _key: cta._key,
      link: cta.link,
      title: cta.title
    }))
  }
}

export function mapTestimonialCollectionToTestimonialCarouselProps ({
  testimonials = []
}) {
  return {
    headline: 'Testimonials',
    testimonials: (testimonials || []).map(testimonial => ({
      key: testimonial._key,
      type: 'twitter',
      name: testimonial.name,
      url: testimonial.twitter
    }))
  }
}

export function mapSharedCallToActionToCallToActionProps ({
  title,
  introRaw,
  buttons = []
}) {
  return {
    headline: title,
    introBlockContent: introRaw,
    callToActions: (buttons || []).map(button => ({
      key: button._key,
      title: button.title,
      to: `/${button.route.slug.current}/`
    }))
  }
}

export function mapSharedLatestUpdatedToLatestUpdatedProps ({title}) {
  return {
    headline: title
  }
}
