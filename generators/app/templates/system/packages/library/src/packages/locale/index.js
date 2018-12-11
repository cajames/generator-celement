import locale from 'element-ui/lib/locale'
import EnLang from './lang/en'

// Default Element's language to English. Element is Chinese by default
if (!locale.LibInitialised) {
    locale.use(EnLang)
    locale.LibInitialised = true
}

export default locale