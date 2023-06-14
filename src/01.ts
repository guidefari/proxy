// #1 - Getter & Setter example
const mix = {
  title: "goosebumps #44",
  link: "example.gb44.mp3",
  
  set updatedTitle(title: string) {
      console.log('OPERATION 1')
      console.log('OPERATION 2')
      this.title = title
  },

  get titlePlusLink() {
    return `${this.title} - ${this.link}`
  }
};

mix.link = 'updated.mp3'
console.log(mix.link); // updated.mp3

console.log('mix title + link:', mix.titlePlusLink)
mix.updatedTitle = "new title"