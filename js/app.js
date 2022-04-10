class LoopPage {
  constructor() {
    this.menuBtn = document.querySelector(`div.hamburger`);
    this.hamburgerIcon = document.querySelector(`div.hamburger>img`);
    this.nav = document.querySelector(`header>nav`);
    this.galleryImg = document.querySelectorAll(`div.gallery>div>img`);
  }

  onMenuBtnClick() {
    if (this.hamburgerIcon.src.includes(`hamburger`)) {
      this.nav.classList.add(`toggle`);
      this.hamburgerIcon.src = this.hamburgerIcon.src.replace(
        `hamburger`,
        `close`
      );
    } else {
      this.nav.classList.remove(`toggle`);
      this.hamburgerIcon.src = this.hamburgerIcon.src.replace(
        `close`,
        `hamburger`
      );
    }
  }

  resizeGalleryImg(e) {
    this.galleryImg.forEach((img) => {
      if (e.innerWidth > 450 && img.src.includes(`desktop`)) {
        console.log(`We are in Desktop mode`);
      } else if (innerWidth > 450 && !img.src.includes(`desktop`)) {
        img.src = img.src.replace(`mobile`, `desktop`);
      } else {
        img.src = img.src.replace(`desktop`, `mobile`);
      }
    });
  }
}

const thisPage = new LoopPage();

thisPage.menuBtn.addEventListener(`click`, () => {
  thisPage.onMenuBtnClick();
});

window.addEventListener(`DOMContentLoaded`, (e) => {
  thisPage.resizeGalleryImg(e);
});

window.addEventListener(`resize`, (e) => {
  thisPage.resizeGalleryImg(e);
});
