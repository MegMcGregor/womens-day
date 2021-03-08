export const card = (cardObject) => {
    return `
      <section class="womanCard">
        <header>
            <h2>${cardObject.inventor}</h2>
        </header>
        <li ${cardObject.invention}" />
        <li ${cardObject.moreDetails}" />
        <li ${cardObject.quote}" />
        <li ${cardObject.details}" />
      </section>
    `
}