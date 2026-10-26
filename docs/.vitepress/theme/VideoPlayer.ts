import { defineComponent, h, onBeforeUnmount, onMounted, ref } from 'vue'
import '@videojs/html/video/player'
import '@videojs/html/video/neutral-skin'
import '@videojs/html/video/neutral-skin.css'

export default defineComponent({
  name: 'VideoPlayer',
  props: {
    src: { type: String, required: true },
    title: { type: String, default: '' },
    poster: { type: String, default: '' },
    loop: { type: Boolean, default: false },
  },
  setup(props) {
    const isLooping = ref(props.loop)
    let skinElement: HTMLElement | null = null
    let castButtonStyle: HTMLStyleElement | null = null

    onMounted(() => {
      const shadowRoot = skinElement?.shadowRoot
      if (!shadowRoot) return

      castButtonStyle = document.createElement('style')
      castButtonStyle.textContent = '.media-cast-button { display: none !important; }'
      shadowRoot.append(castButtonStyle)
    })

    onBeforeUnmount(() => castButtonStyle?.remove())

    return () =>
      h('figure', { class: 'learnder-video' }, [
        props.title
          ? h('figcaption', { class: 'learnder-video__title' }, props.title)
          : null,
        h('video-player', { class: 'learnder-video__player' }, [
          h('video-neutral-skin', {
            ref: (element: Element | null) => {
              skinElement = element as HTMLElement | null
            },
          }, [
            h('video', {
              class: 'learnder-video__media',
              playsinline: true,
              loop: isLooping.value,
              preload: 'metadata',
              poster: props.poster || undefined,
              'aria-label': props.title || undefined,
              src: props.src,
            }, [
              h('a', { href: props.src }, '打开或下载视频'),
            ]),
          ]),
        ]),
      ])
  },
})
