<template>
  <div class="about">
    <h1 class="mb-4">This is an about page</h1>
    <div class="mb-4">
      <p class="r4">You can use the SVG icons</p>
      <icon iconName="cloud" class="mr-1" />
      <icon iconName="info" class="mr-1" />
      <icon iconName="faq" class="mr-1" />
    </div>
    <p class="r4">You can use the Bootstrap Components</p>
    <div>
      <b-card
        class="mx-auto"
        title="Card Title"
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
      >
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text>

        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
  </div>
</template>
