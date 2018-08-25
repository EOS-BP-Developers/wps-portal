import DE from './de'
import EN from './en'
import ES from './es'
import FR from './fr'
import IT from './it'
import JP from './jp'
import KR from './kr'
import RU from './ru'
import ZH from './zh'

import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  'de': DE,
  'en': EN,
  'es': ES,
  'fr': FR,
  'it': IT,
  'jp': JP,
  'kr': KR,
  'ru': RU,
  'zh': ZH
})
