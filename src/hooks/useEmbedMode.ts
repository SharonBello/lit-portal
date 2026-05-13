import { useMemo } from 'react'

interface EmbedMode {
  isEmbedded: boolean
}

export function useEmbedMode(): EmbedMode {
  return useMemo(() => {
    const params = new URLSearchParams(window.location.search)
    const embed = params.get('embed')
    return { isEmbedded: embed === 'true' || embed === '1' }
  }, [])
}
