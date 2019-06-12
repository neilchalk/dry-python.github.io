import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['menuButton', 'closeButton', 'menuItems'];

  toggle() {
    this.menuButtonTarget.classList.toggle('hidden');
    this.closeButtonTarget.classList.toggle('hidden');
    this.menuItemsTarget.classList.toggle('hidden');
  }
}
