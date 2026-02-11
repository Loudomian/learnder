import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import { Theme } from 'vitepress'
import DeltaForceData from '../../components/DeltaForceData.vue'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

export default {
  ...DefaultTheme,

  Layout,
  enhanceApp({ app }) {
    app.component('DeltaForceData', DeltaForceData)

    if (typeof document !== 'undefined') {
      const removeReducedMotionRules = () => {
        for (let i = 0; i < document.styleSheets.length; i++) {
          const sheet = document.styleSheets[i] as CSSStyleSheet
          try {
            if (!sheet.cssRules && !sheet.rules) {
              continue
            }
            const rules = sheet.cssRules || sheet.rules
            for (let j = rules.length - 1; j >= 0; j--) {
              const rule = rules[j]
              if (
                rule instanceof CSSMediaRule &&
                rule.media.mediaText.includes('prefers-reduced-motion: reduce')
              ) {
                for (let k = rule.cssRules.length - 1; k >= 0; k--) {
                  rule.deleteRule(k)
                }
                sheet.deleteRule(j)
              }
            }
          } catch (e: any) {
            if (
              e instanceof DOMException ||
              e?.name === 'SecurityError' ||
              e?.name === 'DOMException' ||
              (typeof e === 'string' && e.includes('Cannot access rules'))
            ) {
              continue
            }
            console.warn(`Unexpected error accessing stylesheet: ${e}`)
          }
        }
      }

      removeReducedMotionRules()

      const observer = new MutationObserver(() => {
        removeReducedMotionRules()
      })

      observer.observe(document.head, { childList: true, subtree: true })
    }
  },

  setup() {
    const route = useRoute()

    const initMediumZoom = () => {
      if (typeof window === 'undefined') return

      const zoom = (window as any).__mediumZoom
      if (!zoom) return

      zoom.detach()

      const images = document.querySelectorAll('.vp-doc img:not(.no-zoom)')
      if (images.length > 0) {
        zoom.attach(images)
      }
    }

    onMounted(async () => {
      if (typeof window !== 'undefined') {
        const mediumZoom = (await import('medium-zoom')).default
        const zoom = mediumZoom('.vp-doc img:not(.no-zoom)', {
          background: 'var(--vp-c-bg)',
        })
          ; (window as any).__mediumZoom = zoom
      }
    })

    watch(
      () => route.path,
      () => {
        nextTick(() => {
          setTimeout(() => initMediumZoom(), 300)
        })
      }
    )
  }
} as Theme