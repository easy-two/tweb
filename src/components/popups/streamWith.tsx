/*
 * https://github.com/morethanwords/tweb
 * Copyright (C) 2019-2021 Eduard Kuzmenko
 * https://github.com/morethanwords/tweb/blob/master/LICENSE
 */

import {render} from 'solid-js/web';
import PopupElement from '.';
import {_i18n} from '../../lib/langPack';

export default class PopupStartWith extends PopupElement {
  constructor(private peerId: PeerId) {
    super('popup-boosts', {
      closable: true,
      overlayClosable: true,
      body: true,
      scrollable: true,
      title: 'BoostsViaGifts.Title',
      floatingHeader: true,
      footer: true,
      withConfirm: true
    });

    this.construct();
  }

  private _construct() {
    const ret = (
      <>
        Hello
      </>
    )

    return ret;
  }

  private async construct() {
    const [giftCodeOptions, appConfig] = await Promise.all([
      this.managers.appPaymentsManager.getPremiumGiftCodeOptions(this.peerId),
      this.managers.apiManager.getAppConfig()
    ]);
    // this.premiumGiftCodeOptions = giftCodeOptions;
    // this.appConfig = appConfig;
    // this.subscribersLimit = this.channelsLimit = appConfig.giveaway_add_peers_max ?? 10;
    // this.countriesLimit = appConfig.giveaway_countries_max ?? 10;
    const div = document.createElement('div');
    this.scrollable.append(div);
    const dispose = render(() => this._construct(), div);
    this.addEventListener('closeAfterTimeout', dispose);
    this.show();
  }
}
