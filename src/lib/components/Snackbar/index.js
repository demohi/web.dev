/*
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview A Material snackbar for showing notifications.
 */

import {html} from 'lit-element';
import {BaseElement} from '../BaseElement';
import './_styles.scss';

const OPENING_ANIMATION_TIME = 150;
const CLOSING_ANIMATION_TIME = 75;

class Snackbar extends BaseElement {
  static get properties() {
    return {
      animatable: {type: Boolean, reflect: true},
      stacked: {type: Boolean, reflect: true},
      type: {type: String},
      action: {type: Object}, // action is a Function
    };
  }

  constructor() {
    super();
    this.action = null;
    this.type = null;
  }

  get open() {
    return this.hasAttribute('open');
  }

  set open(val) {
    let ms;
    if (val) {
      this.setAttribute('open', '');
      ms = OPENING_ANIMATION_TIME;
    } else {
      this.removeAttribute('open');
      ms = CLOSING_ANIMATION_TIME;
    }

    this.animatable = true;
    setTimeout(() => (this.animatable = false), ms);
  }


  render() {
    let template;
    switch (this.type) {
      default:
        break;
    }

    return html` <div class="web-snackbar__surface">${template}</div> `;
  }
}

customElements.define('web-snackbar', Snackbar);
